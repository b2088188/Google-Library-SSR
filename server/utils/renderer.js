import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../../client/Routes';
import { renderRoutes } from 'react-router-config';
//import { Provider } from 'react-redux';
//import serialize from 'serialize-javascript';

function renderer(req) {
	const template = renderToString(
		<Router location={req.path} context={{}}>
			<div>{renderRoutes(Routes)}</div>
		</Router>
	);

	return `<html>
	<head>	
	</head>
	<body>
		<div id = 'root'>${template}</div>
		<script src = 'bundle.js'>
		</script>
	</body> 
	</html>`;
}

export default renderer;
