import React, {Component} from 'react'
import {BrowserRouter, Switch, Route, Redirect, Router} from 'react-router-dom'
import login from "../pages/login";
import home from "../pages/home";


export default class RouteConfig extends Component {
  render () {

    return (
      <BrowserRouter  onEnter={function() {
            console.log("BrowserRouter")
          }()}>
        <Switch>          
          <Route path="/login" component= {login} onEnter={function() {
            console.log("/login")
          }()}/>
          <Route path="/home" component= {home}/>
          <Redirect exact from='/' to='/login'/>
        </Switch>
      </BrowserRouter>
    )
  }
}
{/*
const routeConfig = [
  { path: '/',
    component: login,
    indexRoute: { component: login },
    childRoutes: [
    ],
    onEnter: function (nextState, replaceState) {
      console.log(11111)
    }
  }
]
export default class RouteConfig extends Component {
  render () {
    return (
      <Router routes={routeConfig} />
    )
  }
}
*/}