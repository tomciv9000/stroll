import React from 'react'
import { connect } from 'react-redux';
import { createPlace } from '../actions/tripAction'
//import PropTypes from 'prop-types';


class PlaceForm extends Component {
  
  state = {
    name: "",
    description: ""
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
      description: ""
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

const mapDispatchToProps = dispatch => ({
  placePostFetch: placeInfo => dispatch(placePostFetch(placeInfo))
})

export default connect(null, mapDispatchToProps)(PlaceForm);