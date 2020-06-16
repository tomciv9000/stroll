import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {userPostFetch} from '../../actions/actions';
import { useDispatch } from 'react-redux';

import "../../containers/login.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()

  //need to add validations (unique username, password req.)
  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = event => {
      event.preventDefault()
      let newUserObj = {
          email: email,
          password: password
      }
      console.log(newUserObj) 
      dispatch(userPostFetch(newUserObj))
      setEmail("")
      setPassword("")
  }
  
  return (
    <div className="Login">
      <h3 className="white-text" id="account-login">Create Account</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" size="large">
          <Form.Label className="white-text">Email</Form.Label>
          <Form.Control
            autoFocus
            
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password" size="large">
          <Form.Label className="white-text">Password</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </Form.Group>
        <Button block size="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}