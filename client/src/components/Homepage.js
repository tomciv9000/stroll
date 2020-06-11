import React, { Component } from 'react';
import PlaceForm from '../containers/PlaceForm'
import { connect } from 'react-redux';
import { getPlacesFetch } from '../actions/placeActions';
import PlaceContainer from '../containers/PlaceContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';

class Homepage extends Component {
 
  componentDidMount = () => {
    this.props.getPlacesFetch()
  }


  callPlaceContainer = () => {
    if (this.props.places){
      return (<PlaceContainer places={this.props.places} />)
    }else {
      return (<h1>No Places Registered Yet</h1>)
    }
  }
  
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <p class="display-3">S  t  r  o  l  l</p>
          
        </Row>
        <Row className="justify-content-md-center">
          
        </Row>
        
        <Row className="justify-content-md-center">
          <Col >{this.callPlaceContainer()}</Col>
          
          <Col ><PlaceForm /></Col>
          
        </Row>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return {
    places: state.places.places,
    place: state.places.place
  };
}


const mapDispatchToProps = dispatch => ({
  getPlacesFetch: () => dispatch(getPlacesFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
