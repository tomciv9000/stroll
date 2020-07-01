import React, { Component } from 'react';
import PlaceForm from './PlaceForm'
import { connect } from 'react-redux';
import { getPlacesFetch, clearPlaceState } from '../actions/placeActions';
import PlaceContainer from './PlaceContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllSpotsMap from './map/AllSpotsMap'
import '../index.css';

class Homepage extends Component {
 
  componentDidMount = () => {
    this.props.getPlacesFetch()
    this.props.clearPlaceState()
  }

  callPlaceContainer = () => {
    if (!!this.props.places.length){
      return (<PlaceContainer places={this.props.places} />)
    } else {
      return (<h5 className = "white-text">Think of a place that's important to you.</h5>)
    }
  }

  passToMap = () => {
    if (this.props.places){
      return(
        <AllSpotsMap places={this.props.places} />
      )
    } else {
      return (<h1>No Places Registered Yet</h1>)
    }
  }
  
  render() {
    return (
      <div>
        <Container >

          <Row xs = {1} md= {2} lg={2} >
            <Col lg xl={6} className = "question">
              <h1 className = "question-text white-text">
                Where have you been?
              </h1>
            </Col>

            <Col lg xl={6} className="answer">
                <PlaceForm />
            </Col>
          </Row>

          <Row>
            <Col  xs={3}className="places-list">
              {this.callPlaceContainer()}
            </Col>

            <Col   className="map-box">
              {this.passToMap()}
            </Col>
          </Row>

        </Container>
      </div>
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
  getPlacesFetch: () => dispatch(getPlacesFetch()),
  clearPlaceState: () => dispatch(clearPlaceState())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
