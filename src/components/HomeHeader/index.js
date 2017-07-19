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
			<div id="home-header" className="clear-fix">
				
				<div className="home-header-left float-left"> 
					<span>{this.props.cityName}</span>
				   <Icon className="fa fa-angle-down" />
				</div>

				<div className="home-header-right float-right">
				   <Icon className="fa fa-user-circle-o" />
				</div>

				<div className="home-header-middle">
					<div className="search-container">
						<Icon className="fa fa-search"/>
						<input type="text" placeholder="type something"/>
				    </div>
				</div>
				

			</div>
			)
	}
}

export default HomeHeader