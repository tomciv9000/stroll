import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getPlaceFetch } from '../actions/placeActions';
import PlaceList from './PlaceList'
import { Link } from 'react-router-dom';
import TestMap from './TestMap'
//import NewPlacesForm from '../containers/NewPlacesForm'
//import GoogleMaps from './GoogleMaps'
//import Autofill from './Autofill'



//Get to a place where you can delete placedetails.js

class PlaceShow extends Component{
    
    state = {
        id: ""
    }

    componentDidMount(){
        const {id} =  this.props.match.params;
        this.props.getPlaceFetch(id);
        
        this.setState({
          id: id
        })
    }

    //componentWillReceiveProps(nextProps) {
    //    if(nextProps.place) {
    //      this.props.trip.places.push(nextProps.place)
    //     }
    //  }
//
    callPlace = () => {
      
      if (this.props.place){
        return (<PlaceList place = {this.props.place} />)
      }else {
        return (<h1>No info yet </h1>)
      }
    }
//
    passPlaceInfo = () => {
      if (this.props.place.id){
        return (<TestMap place = {this.props.place} id={this.props.place.id} />)
      }else {
        return (<h1>No info yet </h1>)
      }
    }
//
    //onDeleteClick = () => {
    //  const {id} =  this.props.match.params;
    //  this.props.deleteTrip(id, () =>{
    //    this.props.history.push('/homepage')
    //  })
    //}

    render(){
      return(
        <div >
            <p><Link to='/private'>Back To All Your Places</Link></p><br></br>
         
        {this.callPlace()}
        {this.passPlaceInfo()}
        
        </div>

      )
    }
}

const mapStateToProps = (state) => {
    return {
      place: state.places.place,
      spot: state.places.place.spot
    };
}

const mapDispatchToProps = dispatch => ({
    getPlaceFetch: placeID => dispatch(getPlaceFetch(placeID))
  })

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow)