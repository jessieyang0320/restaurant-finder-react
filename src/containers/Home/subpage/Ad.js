import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeAd from '../../../components/HomeAd/HomeAd';
import { getAdData } from '../../../fetch/home/home';

class Ad extends React.Component {
	constructor(props, context){
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [{
        title: '50% off',
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
        link: 'http://www.imooc.com/wap/index'
    },
    {
        title: 'Travel',
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
        link: 'http://www.imooc.com/wap/index'
    },
    {
        title: 'Taxi',
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
        link: 'http://www.imooc.com/wap/index'
    },
    {
        title: 'Piano',
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
        link: 'http://www.imooc.com/wap/index'
    },
    {
        title: 'Movie',
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
        link: 'http://www.imooc.com/wap/index'
    },
    {
        title: 'Travel',
        img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016191639092-2000037796.png',
        link: 'http://www.imooc.com/wap/index'
    }]
        }
	}

	// componentDidMount(){
	// 	const result = getAdData()
	// 	result.then(res => {
	// 	       return res.json()
	// 	   }).then(json =>{
	// 	   	const data=json
	// 	   	if(data.length){
	// 	   		this.setState({
	// 	   			data:data
	// 	   		})
	// 	   	}
	// 	   })
		   // .catch(ex => {
		   // 	if(__DEV__){
		   // 		console.error("cannot get ads info", ex.message)
		   // 	}
		   // })
		// }
	

	render(){
		return(

			// <div>
			// {
			// 	this.state.data.length
			// 	? <HomeAd data={this.state.data}/>
			// 	: <div> lodading </div>
			// }
			<HomeAd data={this.state.data}/>
			
			)
	}

}

export default Ad
