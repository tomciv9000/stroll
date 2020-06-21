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
      spot_id: this.props.spot_id,
      user_id: this.props.user_id
    }
    
    this.props.memoryPostFetch(newMemory)
    this.setState({
      description: ''
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
        <br/>
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
})

export default connect(mapStateToProps, mapDispatchToProps)(MemoryForm);