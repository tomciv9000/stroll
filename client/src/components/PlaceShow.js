import React, { Component } from 'react'

import { connect } from 'react-redux';
import { getPlaceFetch } from '../actions/placeActions';
import { PlaceDetails } from './PlaceDetails'
import { Link } from 'react-router-dom';
import TestMap from './map/TestMap'




class PlaceShow extends Component{


    componentDidMount(){ 
      const {id} =  this.props.match.params;
        this.props.getPlaceFetch(id);
        
    }

  componentDidUpdate(prevProps){
    if (this.props.spot !== prevProps.spot){
      console.log("A Spot was entered")
      this.props.getPlaceFetch(this.props.place.id)
  
    }
  }

  //THIS IS UPDATED REGULARLY, THIS IS THE SWEET SPOT
    callPlaceDetails = () => {
      return (<PlaceDetails />)
      //if (this.props.place){
      //  return (<PlaceDetails place = {this.props.place}/>)
      //}else {
      //  return (<h1>No info yet </h1>)
      //}
    }
//
    passPlaceInfo = () => {
      if (this.props.place.id){
        //return (<TestMap  />)
        return (<TestMap place={this.props.place} id={this.props.place.id} />)
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
         
        {this.callPlaceDetails()}
        {this.passPlaceInfo()}
        
        </div>

      )
    }
}

const mapStateToProps = (state) => {
    return {
      place: state.places.place,
      spot: state.places.spot
    };
}

const mapDispatchToProps = dispatch => ({
    getPlaceFetch: placeID => dispatch(getPlaceFetch(placeID))
  })

export default connect(mapStateToProps, mapDispatchToProps)(PlaceShow)