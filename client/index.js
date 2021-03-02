import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
//import reducers from './reducers';
//import axios from 'axios';

// Bring the prefetch query cache from the server
const dehydratedState = window.__REACT_QUERY_STATE__;
const queryClient = new QueryClient();

// The code is executed on browser side,
// There's already content rendered from the server inside the div,
// We're not replacing existing HTML, we just set up all event handlers and some necessary code.
// So we need to use hydrate rather than render.
ReactDOM.hydrate(
	<QueryClientProvider client={queryClient}>
		<Hydrate state={dehydratedState}>
			<Router>
				<div>{renderRoutes(Routes)}</div>
			</Router>
		</Hydrate>
	</QueryClientProvider>,
	document.querySelector('#root')
);
