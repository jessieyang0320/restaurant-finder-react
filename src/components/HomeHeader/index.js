import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.css'

class HomeHeader extends React.Component {
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return(
			<div className="clear-fix">
				<h1>Home Header </h1>
				<div className="float-left">New York City</div>
				<div className="float-right">
				   <i className="icon-user"></i>
				</div>
				<div>
					<i className="icon-search"></i>
					<input/>
				</div>
				

			</div>
			)
	}
}

export default HomeHeader