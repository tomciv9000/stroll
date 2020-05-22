import React, {Component} from 'react';
import { connect } from 'react-redux';
import { placePostFetch } from '../actions/placeActions'
//import PropTypes from 'prop-types';


class PlaceForm extends Component {
  
  state = {
    name: "",
    description: "",
    user_id: this.props.user_id
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.placePostFetch(this.state)
    this.setState({
      name: "",
      description: "",
      user_id: ""
    })
  }

  render () {
    return(
      <div>
        <h2>Add Place - Where are the dots on your map?</h2>
        <form onSubmit={this.handleSubmit}>

        <label>Name of this Place</label>
        <input
          name='name'
          placeholder='Ex. Swanton, OH'
          value={this.state.name}
          onChange={this.handleChange}
          /><br/>

        <label>Description</label>
        <input
          name='description'
          placeholder='Ex. Where I grew up'
          value={this.state.description}
          onChange={this.handleChange}
          /><br/>
        <input type='submit'/>
      </form>
      </div>

    )

  }
}
//TripForm.propTypes = {
//  createTrip: PropTypes.func.isRequired
//
//}

const mapStateToProps = state => {
  return {
    user_id: state.currentUser.id
  };
}

const mapDispatchToProps = dispatch => ({
  placePostFetch: placeInfo => dispatch(placePostFetch(placeInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceForm);