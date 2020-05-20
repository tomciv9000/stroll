const initialState = {
  isAuthenticated: false,
  currentUser: {}
};

export default function reducer(state = initialState, action) {
switch (action.type) {
  case 'LOGIN_USER':
    return {...state, 
      isAuthenticated: !!(Object.keys(action.payload).length),
      currentUser: action.payload
    }
  case 'LOGOUT_USER':
    return {...state, 
      isAuthenticated: false,
      currentUser: {} }
  default:
    return state;
}
}