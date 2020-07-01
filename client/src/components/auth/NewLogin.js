import React, { useState } from "react";
import { useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {userLoginFetch} from '../../actions/userActions';
import { useDispatch } from 'react-redux';

import "../../containers/login.css";

export default function Login() {
  let errors = useSelector(state => state.user.errors)
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = event => {
    event.preventDefault()
    let loginObj = {
        email: email,
        password: password
    }
     
    dispatch(userLoginFetch(loginObj))
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <div className="alert-header">
        { errors && <Alert variant="warning">Unable to log in with those credentials, try again.</Alert> }
      </div>

      <div className="Login">
        <h3 className="white-text" id="account-login">Account Login</h3>
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
    </div>
  );
}