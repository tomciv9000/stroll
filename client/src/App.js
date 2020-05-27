import React, { Component} from 'react';
import {
  BrowserRouter,
  Switch
} from "react-router-dom";
import './App.css';

import PrivatePage from './components/Private'
import {connect} from 'react-redux';
import {getProfileFetch} from './actions/actions';
import Signup from './components/Signup';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import { LandingPage } from './components/Landing';
import AuthRoute from './components/AuthRoute';
import PlaceShow from './components/PlaceShow'



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
              
              <AuthRoute path="/places/:id" type="private" component = {PlaceShow}>
                
              </AuthRoute>
              
              <AuthRoute path='/' type = "guest">
                <LandingPage />
              </AuthRoute>
            
            </Switch>
          </div>
        </BrowserRouter>)
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(null, mapDispatchToProps)(App);

  