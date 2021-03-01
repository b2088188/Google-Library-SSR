import express from 'express';
import renderer from './utils/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
	const content = renderer(req);
	res.status(200).send(content);
});

export default app;
