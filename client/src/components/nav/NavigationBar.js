import React, { Component } from 'react';
import cropLogo from '../../images/logo_white_transparent_crop.png'
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/userActions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap"

class NavigationBar extends Component {

  handleClick = event => {
    event.preventDefault()
    localStorage.removeItem("token")
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
      <Nav className="mr-auto">
        <LinkContainer to="/">
        <Nav.Link onClick={this.handleClick}>Log Out</Nav.Link>
        </LinkContainer>
      </Nav>
    )

    const guestLinks = (
      <Nav className="mr-auto">
        <LinkContainer to="/signup">
          <Nav.Link>Sign Up</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login">
          <Nav.Link>Log in</Nav.Link>
        </LinkContainer>
      </Nav>
    )

    return (
      <Navbar  bg= "dark" variant="dark" expand="lg">
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
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);