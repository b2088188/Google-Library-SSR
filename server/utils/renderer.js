import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../../client/Routes';
import { renderRoutes } from 'react-router-config';
import GlobalStyle from '../../client/design/GlobalStyle';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
//import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { dehydrate, Hydrate } from 'react-query/hydration';
import serialize from 'serialize-javascript';

function renderer(req, queryClient) {
	const dehydratedState = dehydrate(queryClient);
	const sheet = new ServerStyleSheet();
	const template = renderToString(
		<QueryClientProvider client={queryClient}>
			<Hydrate state={dehydratedState}>
				<Router location={req.path} context={{}}>
					<StyleSheetManager sheet={sheet.instance}>
						<>
							<GlobalStyle />
							<div>{renderRoutes(Routes)}</div>
						</>
					</StyleSheetManager>
				</Router>
			</Hydrate>
		</QueryClientProvider>
	);
	const styleTags = sheet.getStyleTags();
	sheet.seal();
	return `<html>
	<head>	
	<link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
	</head>
	${styleTags}
	<body>
		<div id = 'root'>${template}</div>
		<script>
		window.__REACT_QUERY_STATE__ = ${serialize(dehydratedState)};
		</script>	
		<script src = 'bundle.js'>
		</script>
	</body> 
	</html>`;
}

export default renderer;
