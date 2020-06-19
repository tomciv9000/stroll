import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';
import { getPlaceFetch } from '../actions/placeActions';
import { PlaceDetails } from './PlaceDetails'
import { Link } from 'react-router-dom';
import TestMap from './map/TestMap'

import '../index.css';




class PlaceShow extends Component{


  componentDidMount(){ 
    const {id} =  this.props.match.params;
      this.props.getPlaceFetch(id);  
  }

  componentDidUpdate(prevProps){
    if (this.props.spot !== prevProps.spot){
      
      this.props.getPlaceFetch(this.props.place.id)
  
    }
  }

  //THIS IS UPDATED REGULARLY, THIS IS THE SWEET SPOT
    callPlaceDetails = () => {
      console.log(this.props.place.spots)
      if (this.props.place.spots){
        return (<PlaceDetails/>)
      }else {
        return (<h5 className = "white-text">
        Think of a spot that holds a specific memory for you.
        </h5>)
      }
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
          <p><Link className = "yellow-link" to='/private'>Back To All Your Places</Link></p>
          <Container>
            <Row xs={2}> 
              <Col sm={5}>
                {this.callPlaceDetails()}
              </Col>
              <Col sm={7}>
                {this.passPlaceInfo()}
              </Col>
            </Row>
            
          </Container>

            
         
        
        
        
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