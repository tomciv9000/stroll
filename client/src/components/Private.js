import React, { Component } from 'react';
import PlaceForm from '../containers/PlaceForm'
import { connect } from 'react-redux';
import { getPlacesFetch } from '../actions/placeActions';


class PrivatePage extends Component {
 
  componentDidMount = () => {
    this.props.getPlacesFetch()
  }
  
  render() {
    return (
      <div>
        <h1>Private User Landing Page</h1>
        <br />
        <br />
        <PlaceForm />
        </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
}


const mapDispatchToProps = dispatch => ({
  getPlacesFetch: () => dispatch(getPlacesFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivatePage);
