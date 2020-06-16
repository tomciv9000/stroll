import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLoginFetch} from '../../actions/actions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLoginFetch(this.state)
    this.setState({
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <div className = "Login">
      <h1>Login to an Existing Account</h1>
      <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" onChange={this.handleChange} value={this.state.email} />
            </Form.Group>
            <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" onChange={this.handleChange} value={this.state.password}/>
            </Form.Group>
      </Form>
      <Button type="submit">Submit</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);