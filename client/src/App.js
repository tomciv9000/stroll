import React, { Component} from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
//import './App.css';
import BackgroundImage from './images/wall_background.jpg'
import Homepage from './components/Homepage'
import {connect} from 'react-redux';
import {getProfileFetch} from './actions/actions';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import NavigationBar from './components/NavigationBar';
import { LandingPage } from './components/Landing';
import AuthRoute from './components/auth/AuthRoute';
import PlaceShow from './components/PlaceShow'



const sectionStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover'
}

class App extends Component {
  
  componentDidMount = () => {
    this.props.getProfileFetch()
  }
  
  render() {
    return(
        <BrowserRouter>
          <div style={sectionStyle}>
            
            <NavigationBar/>
            <Switch>
              
              <AuthRoute path="/login" type="guest">
                <Login />
              </AuthRoute>
              
              <AuthRoute path="/signup" type="guest">
                <Signup />
              </AuthRoute>
              
              <AuthRoute path="/private" type="private">
                <Homepage />
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

  