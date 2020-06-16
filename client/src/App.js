import React, { Component} from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import BackgroundImage from './images/background-city-blur.jpg'
import Homepage from './components/Homepage'
import {connect} from 'react-redux';
import {getProfileFetch} from './actions/actions';
import Signup from './components/auth/Signup';
import NewLogin from './components/auth/NewLogin';
import NavigationBar from './components/NavigationBar';
import { LandingPage } from './components/Landing';
import AuthRoute from './components/auth/AuthRoute';
import PlaceShow from './components/PlaceShow'
import SpotShow from './components/SpotShow'





const sectionStyle = {
width: '100vw',
height: '100vh',
backgroundRepeat: 'no-repeat',
backgroundPosition: 'center',
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
          <div className="background" style={sectionStyle}>
            
            <NavigationBar/>
            <Switch>
              
              <AuthRoute path="/login" type="guest">
                <NewLogin />
              </AuthRoute>
              
              <AuthRoute path="/signup" type="guest">
                <Signup />
              </AuthRoute>
              
              <AuthRoute path="/private" type="private">
                <Homepage />
              </AuthRoute>
              
              <AuthRoute path="/places/:id" type="private" component = {PlaceShow}>
                
              </AuthRoute>

              <AuthRoute path="/spots/:id" type="private" component = {SpotShow}>
                
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

  