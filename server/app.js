import express from 'express';
import renderer from './utils/renderer';
import { matchRoutes } from 'react-router-config';
import Routes from '../client/Routes';
import { QueryClient } from 'react-query';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	const queryClient = new QueryClient();
	const promises = matchRoutes(Routes, req.path)
		.map(({ route }) => {
			// If the component has loadData function, call it and return the promise
			return route.loadData ? route.loadData(queryClient) : null;
		})
		.map((promise) => {
			if (promise)
				return new Promise((resolve, reject) => {
					promise.then(resolve).catch(resolve);
				});
		});

	Promise.all(promises).then(() => {
		const content = renderer(req, queryClient);
		res.status(200).send(content);
	});
});

export default app;
