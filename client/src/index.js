import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import usersReducer from './reducers/usersReducer';
import placesReducer from './reducers/placesReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
  places: placesReducer,
  user: usersReducer
})

const store = createStore(
  rootReducer, 
  compose( 
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.getElementById('root')
);
