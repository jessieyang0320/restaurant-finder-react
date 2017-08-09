import React from 'react';
import { hashHistory } from 'react-router';
import {render} from 'react-dom'; 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import RouteMap from './router/routeMap';
import {Provider} from 'react-redux';

const store = configureStore()



render (
	<Provider store={store}>
		<RouteMap history={hashHistory}/>
	</Provider>, document.getElementById('root')

	)
