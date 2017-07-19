import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'
import {Icon} from 'react-fa'

class HomeHeader extends React.Component {
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div className="clear-fix">
				<h1>Home Header </h1>
				<div className="float-left">New York City
				<Icon className="fa fa-angle-down" />
				</div>
				<div className="float-right">
				   <Icon className="fa fa-user-circle-o" />
				</div>
				<div>

					<Icon className="fa fa-search"/>
					<input/>
				</div>
				

			</div>
			)
	}
}

export default HomeHeader