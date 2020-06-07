import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/actions';

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
    <div>
    <p>Welcome, {this.props.current_user.email}</p>
      <ul>
        <li><a href="/" onClick={this.handleClick}>Logout</a></li>
      </ul>
      </div>
    );

    const guestLinks = (
        <ul>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
    );

    return (
        //<nav className="navbar navbar-default">
          <div>
            <div>
              <Link to="/">Stroll</Link>
            </div>
            <div>
              {this.props.auth ? userLinks : guestLinks}
            </div>
          </div>
       // </nav>
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