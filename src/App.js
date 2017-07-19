import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './App.css';
import Home from './containers/Home/index.js'
import { connect } from 'react-redux'
import LocalStore from './util/localStore.js'
import { CITYNAME } from './config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from './actions/userinfo.js'

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
  render() {
    return (
      <div >
   
          {
          	this.state.initDone
          	? this.props.children
          	: <div>loading</div>
          }
       

      </div>
    );
  }
  ComponentDidMount(){
  	let cityName = LocalStore.getItem(CITYNAME)
  	if(cityName ==null) {
  		cityName = 'NYC'
  	}

  	this.setState({
  		initDone: true
  	})
  }
  
}

function mapStateToProps(state){
	return {
		userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
	}

}
function mapDispatchToProps(dispatch){
	return{

	}


}
export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App)

