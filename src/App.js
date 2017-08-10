import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LocalStore from './util/localStore';
import { CITYNAME } from './config/localStoreKey';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActionsFromOtherFile from './actions/userinfo.js';
// import Home from './containers/Home/index.js'



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
      // var that = this
      // setTimeout(function(){ 
      //   that.setState({
      //     initDone:true
      //   })},1000)
// ES6 arrow function

      // get city info from localstorerage 
      let cityName = LocalStore.getItem(CITYNAME)
      if(cityName ==null){
        cityName = 'NYC' // a city by default
      }

      // store city info in Redux
      this.props.userInfoActions.update({
        cityName: cityName
      })

      setTimeout(()=>{
        this.setState({
          initDone:true
        })
      },1000)




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
  

// Redux

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }

}
export default connect(
  mapStateToProps,
  mapDispatchToProps

  )(App)
















