import React, {Component} from 'react';
import { connect } from 'react-redux';
import { memoryPostFetch } from '../actions/placeActions'
//import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../index.css';

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
        [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newMemory = {
      description: this.state.description,
      people: this.state.people,
      dates: this.state.dates,
      photos: this.state.photos,
      spot_id: this.props.spot_id,
      user_id: this.props.user_id
    }
    console.log('newMemory Object:', newMemory)
    this.props.memoryPostFetch(newMemory)
    this.setState({
      description: '',
      people: '',
      dates: '',
      photos: ''
    })
    

  }

  render () {
    return(
      <div>
        <h3 className="white-text">Add A New Memory</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="description">
                <Form.Label className="white-text">What do you remember?</Form.Label>
                <Form.Control 
                  autoFocus
                  as="textarea" 
                  rows="3" 
                  onChange={this.handleChange} 
                  value={this.state.description} />
            </Form.Group>
          

            <Button variant="outline-warning" type="submit">Submit</Button>
        </Form>
        <br></br>
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