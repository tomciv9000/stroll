import React, { Component } from 'react';
import PlaceForm from '../containers/PlaceForm'
import { connect } from 'react-redux';
import { getPlacesFetch } from '../actions/placeActions';
import PlaceContainer from '../containers/PlaceContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AllSpotsMap from './map/AllSpotsMap'
import '../index.css';

class Homepage extends Component {
 
  componentDidMount = () => {
    this.props.getPlacesFetch()
  }


  callPlaceContainer = () => {
    if (this.props.places){
      return (<PlaceContainer places={this.props.places} />)
    } else {
      return (<h1>No Places Registered Yet</h1>)
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
      <Container>
        <Row className="justify-content-md-center">
          <p className="display-4"><b>
            Map the moments of your life
            </b>
          </p>
          
        </Row>
      
        
        <Row className="justify-content-md-center">
          <Col >
            <PlaceForm />
          </Col>
          
          <Col >
            {this.callPlaceContainer()}
          </Col>

          <Col xs={6}>
          {this.passToMap()}
          </Col>
          
        </Row>
        <Row>
          
        </Row>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container>
        
          
        
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
  getPlacesFetch: () => dispatch(getPlacesFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
