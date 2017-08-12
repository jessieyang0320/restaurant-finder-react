import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './HomeAd.css';

class HomeAd extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

	render(){
		return(

			<div id="homd-ad">
				<h2>Super Discount</h2>
				<div>
					{this.props.data.map((item,index)=>{
						return <div key={index} className="ad-item float-left">
							<a href="" target="_blank">
								<img src={item.img} alt={item.title}/>
							</a>

						</div>
					})
					}
				</div>
			</div>

			)
	}
}

export default HomeAd