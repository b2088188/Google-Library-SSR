import App from './App';
import Home from './pages/Home';

const Routes = [
	{
		...App,
		routes: [
			{
				...Home,
				path: '/',
				exact: true
			}
		]
	}
];

export default Routes;
