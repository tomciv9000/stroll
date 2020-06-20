import React, { Component } from 'react'
import MemoryForm from '../containers/MemoryForm'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { getSpotFetch, clearSpotState } from '../actions/placeActions';
import { SpotDetails } from './SpotDetails'
import { Link } from 'react-router-dom';
import SingleSpotMap from './map/SingleSpotMap'

import '../index.css';


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

    componentWillUnmount(){
      console.log("Unmounted Spot:Show ", this.props.spot)
      this.props.clearSpotState()
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
      if (this.props.spot.id){
        let spot = this.props.spot
        return (
          <div><h1 className = "question-text white-text">{spot.location}
          
          </h1>
           <Link  className="yellow-link" onClick={this.onDeleteClick}><small>Delete This Spot</small></Link>
        <SingleSpotMap location={this.props.spot}/></div>
          )
        //return (<TestMap place={this.props.place} id={this.props.place.id} />)
      }else {
        return (<h1>No info yet </h1>)
      }
    }

    linkBack = () => {
        if(this.props.place){
          return (
          <div>
            <p><Link className = "yellow-link" to={`/places/${this.props.place.id}`}>Back to Place Page</Link></p>
         
          </div>)
        }else {
          return(<p className = "white-text">loading...</p>)
        }
    }

    onDeleteClick = () => {
      const {id} =  this.props.match.params;
      this.props.deleteTrip(id, () =>{
        this.props.history.push('/homepage')
      })
    }

    render(){
      return(
        <div >
          {this.linkBack()}
        <Container className = "spot-show">
          <Row>
            <Col>{this.passPlaceInfo()}</Col>
           
            
            
          </Row>
          <Row>
          <Col><MemoryForm /></Col>  
          
            
          </Row>
          
           {this.callSpotDetails()}
          
          
        </Container>
        
        
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
    getSpotFetch: spotID => dispatch(getSpotFetch(spotID)),
    clearSpotState: () => dispatch(clearSpotState())
})

export default connect(mapStateToProps, mapDispatchToProps)(SpotShow)