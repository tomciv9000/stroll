import React               from 'react';
import { Route, Redirect } from 'react-router-dom'
import App                 from '../App';
import Navigation          from '../components/Navigation';
import RegistrationsNew    from '../components/RegistrationsNew';
import SessionsNew         from '../components/SessionsNew';
import Places               from '../components/Places';
import Actions             from '../actions/sessions';

export default function configRoutes() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" component={App} />
      <Route path="/sign_up" component={RegistrationsNew} />
      <Route path="/sign_in" component={SessionsNew} />
      <AuthenticatedRoute path="/places" component={Places} />
    </div>
  );
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('token') ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/sign_in',
        state: { from: props.location }
      }}/>
    )
  )}/>
)