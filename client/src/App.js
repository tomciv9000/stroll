import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import './App.css';
import desktopImage from './images/Wide_NYC_background.jpg'
import mobileImage from './images/narrow_NYC_background.jpg'
import Homepage from './components/Homepage'
import { useDispatch } from 'react-redux'

import {getProfileFetch} from './actions/actions';

import Signup from './components/auth/Signup';
import NewLogin from './components/auth/NewLogin';
import NavigationBar from './components/NavigationBar';
import { LandingPage } from './components/Landing';
import AuthRoute from './components/auth/AuthRoute';
import PlaceShow from './components/PlaceShow'
import SpotShow from './components/SpotShow'


const App = () => {

    const dispatch = useDispatch();
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;


    useEffect(() => {
        dispatch(getProfileFetch());
    });

  
    return(
        <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <BrowserRouter>


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

            </BrowserRouter>
        </div> 
        );
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
};


export default App

  