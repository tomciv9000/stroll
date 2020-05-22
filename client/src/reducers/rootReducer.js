import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import placesReducer from './placesReducer';


const rootReducer = combineReducers({

      places: placesReducer,  
      user: usersReducer
});

export default rootReducer;
