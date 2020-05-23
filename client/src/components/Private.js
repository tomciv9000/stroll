import React, { Component } from 'react';
import PlaceForm from '../containers/PlaceForm'
import { connect } from 'react-redux';
import { getPlacesFetch } from '../actions/placeActions';
import PlaceContainer from '../containers/PlaceContainer'

class PrivatePage extends Component {
 
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
      <div>
        <h1>STROLL</h1>
        <br />
        <br />
        <PlaceForm />
        {this.callPlaceContainer()}
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

export default connect(mapStateToProps, mapDispatchToProps)(PrivatePage);
