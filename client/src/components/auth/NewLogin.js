import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {userLoginFetch} from '../../actions/actions';
import { useDispatch } from 'react-redux';

import "../../containers/login.css";

export default function Login() {
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
        console.log(loginObj) 
        dispatch(userLoginFetch(loginObj))
        setEmail("")
        setPassword("")
    }

  return (
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
  );
}