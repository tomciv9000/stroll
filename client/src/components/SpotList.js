import React, { Component } from 'react'
import AllSpots from './AllSpots'
import { connect } from 'react-redux';
import { getPlaceFetch } from '../actions/placeActions';
import {PlaceDetails} from './PlaceDetails'
import { Link } from 'react-router-dom';
import TestMap from './TestMap'
//import NewPlacesForm from '../containers/NewPlacesForm'
//import GoogleMaps from './GoogleMaps'
//import Autofill from './Autofill'


class SpotList extends Component{
    
    call = () => {
        if (this.props.trip.trip.places){
          return this.props.trip.trip.places.map((tripItem) =>{
            return <AllLocations tripData={tripItem} />
          })
        }else {
          return (<h1>No Entries yet</h1>)
        }
      }
    
    render(){
      return (
        <div>
    
            <Header as='h1' textAlign='left'><h1 className="tripname">{this.props.trip.trip.name}</h1></Header>
            <Header as='h3' textAlign='left'><p className="texttrip">{this.props.trip.trip.description}</p><p className="texttrip">Transportation: {this.props.trip.trip.flights}</p></Header>
            <br></br>
            <ul>
             {this.call()}
           </ul>
        </div>
      )
    }
    
    }
    

export default SpotList