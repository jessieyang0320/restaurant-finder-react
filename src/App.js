import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './App.css';
// import Home from './containers/Home/index.js'
// import { connect } from 'react-redux'
// import LocalStore from './util/localStore.js'
// import { CITYNAME } from './config/localStoreKey.js'
// import { bindActionCreators } from 'redux'
// import * as userInfoActionsFromOtherFile from './actions/userinfo.js'

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
// note "this" scope problem, in the setTimeout function, this is window not 
// the object 

    componentDidMount(){
      var that = this
      console.log(that)
      setTimeout(function(){ 
        that.setState({
          initDone:true
        })},1000)

    }

  render() {
    return (
      <div >

          {
            this.state.initDone
            ? this.props.children
            : <div>Loading...</div>
          }
       

      </div>
    );
  }
}
  
  export default App