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

  callPlaceDetails = () => {
    if (this.props.place.spots){
      return (<PlaceDetails/>)
    } else if (this.props.place.status) {
      this.props.history.push('/homepage')
    }
    else {
      return (<h5 className = "white-text">Something went wrong...</h5>)
    }
  }

  passPlaceInfo = () => {
    if (this.props.place.id){
      return (<TestMap place={this.props.place} id={this.props.place.id} />)
    }
  }

  render(){
    return(
      <div>
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