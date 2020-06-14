import React, { Component } from 'react'
import MemoryForm from '../containers/MemoryForm'
import { connect } from 'react-redux';
import { getSpotFetch } from '../actions/placeActions';
import { SpotDetails } from './SpotDetails'
import { Link } from 'react-router-dom';
import TestMap from './map/TestMap'




class SpotShow extends Component{

    componentDidMount(){ 
      const {id} =  this.props.match.params;
      this.props.getSpotFetch(id);   
    }

    componentDidUpdate(prevProps){
      if (this.props.memory !== prevProps.memory){
        console.log("A Memory was entered")
        this.props.getSpotFetch(this.props.spot.id)
        //this.props.spots.push(this.props.spot)
      }
    }

  //THIS IS UPDATED REGULARLY, THIS IS THE SWEET SPOT
    callSpotDetails = () => {
      
      return (<SpotDetails />)
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

    linkBack = () => {
        if(this.props.place){
          return (<Link to={`/places/${this.props.place.id}`}>Back to Place Page</Link>)
        }else {
          return(<h1>loading...</h1>)
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
            {this.linkBack()}
            <br></br>
        
        {this.callSpotDetails()}
        <div>
          <MemoryForm />
        </div>
        {this.passPlaceInfo()}
        
        </div>

      )
    }
}

const mapStateToProps = (state) => {
    return {
      place: state.places.place,
      spot: state.places.spot,
      memory: state.places.memory
    };
}

const mapDispatchToProps = dispatch => ({
    getSpotFetch: spotID => dispatch(getSpotFetch(spotID))
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow)