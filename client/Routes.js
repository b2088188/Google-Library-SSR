import App from './App';
import Home from './pages/Home';
import SearchResults from './pages/search/SearchResults';
import BookInfo from './pages/book/BookInfo';

const Routes = [
	{
		...App,
		routes: [
			{
				...Home,
				path: '/',
				exact: true
			},
			{
				...SearchResults,
				path: '/results'
			},
			{
				...BookInfo,
				path: '/book/:bookId'
			}
		]
	}
];

export default Routes;
