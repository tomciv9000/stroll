import React, { Component} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import './App.css';

import PrivatePage from './components/Private'
import {connect} from 'react-redux';
import { useDispatch, useSelector } from 'react-redux'
import {getProfileFetch, logoutUser} from './actions/actions';
import Signup from './components/Signup';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import requireAuth from './components/requireAuth';

//i think it's possible to recreate the react tutotrial protexted routes
// using the thoughtbot hook converstion to try and make something happen


export default class App extends Component {
  render() {
    return(
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/private' component={requireAuth(PrivatePage)} />
              <Route render={() => <h3>No Match</h3>} />
            </Switch>
          </div>
        </BrowserRouter>)
  }
}

  