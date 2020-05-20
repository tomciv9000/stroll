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
import { LandingPage } from './components/Landing';
import AuthRoute from './components/AuthRoute'
//i think it's possible to recreate the react tutotrial protexted routes
// using the thoughtbot hook converstion to try and make something happen


class App extends Component {
  
  componentDidMount = () => {
    this.props.getProfileFetch()
  }
  
  render() {
    return(
        <BrowserRouter>
          <div>
            <NavigationBar/>
            <Switch>
              <AuthRoute path="/login" type="guest">
                <Login />
              </AuthRoute>
              <AuthRoute path="/signup" type="guest">
                <Signup />
              </AuthRoute>
              <AuthRoute path="/private" type="private">
                <PrivatePage />
              </AuthRoute>
              <Route path='/' render={LandingPage} />
            </Switch>
          </div>
        </BrowserRouter>)
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);

  