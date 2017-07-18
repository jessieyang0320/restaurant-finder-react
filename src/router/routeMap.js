import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../App'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'


class RouterMap extends React.Component {
	render(){
		return(
			<Router history={this.props.history}>
				




			</Router>
		)
	}
}

export default RouterMap