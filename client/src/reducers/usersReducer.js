const initialState = {
  isAuthenticated: false,
  currentUser: {},
  errors:''
};

export default function usersReducer(state = initialState, action) {
switch (action.type) {
  case 'LOGIN_USER':
    return {...state, 
      isAuthenticated: !!(Object.keys(action.payload).length),
      currentUser: action.payload,
      errors: ''

    }
  case 'LOGOUT_USER':
    return {...state, 
      isAuthenticated: false,
      currentUser: {},
      errors: '' }
  case 'LOGIN_FAIL':
    return {...state, 
      isAuthenticated: false,
      currentUser: {},
      errors: action.payload
      
    }
  default:
    return state;
}
}