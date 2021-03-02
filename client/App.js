import React from 'react';
import Header from './components/Header';
import GlobalStyle from './design/GlobalStyle';
import { renderRoutes } from 'react-router-config';
//import { fetchCurrentUser } from './actions';

// The route contains collection of components that we need to render
const App = ({ route }) => {
	return (
		<>
			<GlobalStyle />
			<div className='container'>
				<Header />
				{renderRoutes(route.routes)}
			</div>
		</>
	);
};

export default {
	component: App
};
