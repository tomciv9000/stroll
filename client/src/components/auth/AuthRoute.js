import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = props => {
  const { isAuthenticated, type } = props;
  
  if (type === "guest" && isAuthenticated) return <Redirect to="/private" />;
  else if (type === "private" && !isAuthenticated) return <Redirect to="/" />;

  return <Route {...props} />;
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
}

export default connect(mapStateToProps)(AuthRoute);