import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../../client/Routes';
import { renderRoutes } from 'react-router-config';
import GlobalStyle from '../../client/design/GlobalStyle';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
//import { Provider } from 'react-redux';
//import serialize from 'serialize-javascript';

function renderer(req) {
	const sheet = new ServerStyleSheet();
	const template = renderToString(
		<Router location={req.path} context={{}}>
			<StyleSheetManager sheet={sheet.instance}>
				<>
					<GlobalStyle />
					<div>{renderRoutes(Routes)}</div>
				</>
			</StyleSheetManager>
		</Router>
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
		<script src = 'bundle.js'>
		</script>
		<script src="https://unpkg.com/styled-components/dist/styled-components.min.js"></script>
	</body> 
	</html>`;
}

export default renderer;
