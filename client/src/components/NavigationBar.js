import React, { Component } from 'react';
import cropLogo from '../images/crop_logo.png'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

class NavigationBar extends Component {

  handleClick = event => {
    event.preventDefault()
    // Remove the token from localStorage
    localStorage.removeItem("token")
    // Remove the user object from the Redux store
    this.props.logoutUser()
  }

  callUser = () => {
    if (this.props.current_user){
    return (<p>User: {this.props.current_user.email}</p>)
    }else {
      return (<p>Guest</p>)
    }
  }

  render() {
    const userLinks = (
   
    //<p>Welcome, {this.props.current_user.email}</p>
      
      
      <Nav className="mr-auto">
        
        <Nav.Link href = "/" onClick={this.handleClick}>Log Out</Nav.Link>
        
      </Nav>
    );

    const guestLinks = (
      <Nav className="mr-auto">
        <Nav.Link href="/signup">Sign Up</Nav.Link>
        <Nav.Link href="/login">Log in</Nav.Link>
      </Nav>
    );

    return (
        //<nav className="navbar navbar-default">
        <Navbar expand="lg">
          
          <Navbar.Brand href="/">
            <img
              alt=""
              src={cropLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Stroll
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {this.props.auth ? userLinks : guestLinks}
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.user.isAuthenticated,
    current_user: state.user.currentUser
  };
}

const mapDispatchToProps = dispatch => ({
    //getProfileFetch: () => dispatch(getProfileFetch()),
    logoutUser: () => dispatch(logoutUser())
  })

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);