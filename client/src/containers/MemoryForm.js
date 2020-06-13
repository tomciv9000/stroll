import React, {Component} from 'react';
import { connect } from 'react-redux';
import { memoryPostFetch } from '../actions/placeActions'
//import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class MemoryForm extends Component {
  state={
    description: '',
    people: '',
    dates: '',
    photos: '',
    //spot_id: '',
    //user_id: ''
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newMemory = {
      description: this.state.description,
      people: this.state.people,
      dates: this.state.dates,
      photos: this.state.photos,
      spot_id: this.props.spot_id
    }
    console.log('newMemory Object:', newMemory)
    //this.props.memoryPostFetch(newMemory)
    this.setState({
      description: '',
      place_id: '',
      restaurants: '',
      hotels: '',
      tours: '',
      photos: ''
    })
    

  }

  render () {
    return(
      <div>
        <h3>Add A New Memory</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="memory.Description">
                <Form.Label>Memory Description:</Form.Label>
                <Form.Control as="textarea" rows="3" onChange={this.handleChange} value={this.state.description} />
            </Form.Group>
            <Form.Group controlId="memory.People">
                <Form.Label>People:</Form.Label>
                <Form.Control type="text" onChange={this.handleChange} value={this.state.people}/>
            </Form.Group>
            <Form.Group controlId="memory.Dates">
                <Form.Label>Dates:</Form.Label>
                <Form.Control type="text" onChange={this.handleChange} value={this.state.dates}/>
            </Form.Group>
            <Form.Group controlId="memory.Photo">
                <Form.Label>Photo Image URL:</Form.Label>
                <Form.Control type="text" onChange={this.handleChange} value={this.state.photos}/>
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
    </div>


    )

  }
}
const mapStateToProps = state => {
    return {
      user_id: state.user.currentUser.id,
      spot_id: state.places.spot.id
    };
}

const mapDispatchToProps = dispatch => ({
    memoryPostFetch: memoryInfo => dispatch(memoryPostFetch(memoryInfo)),
    //getPlacesFetch: () => dispatch(getPlacesFetch())
})



export default connect(mapStateToProps, mapDispatchToProps)(MemoryForm);