export const userPostFetch = user => {
  return dispatch => {
    let loginData = {"user": {"email": user.email, "password": user.password}} 
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginData)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data)
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          console.log(data)
          localStorage.setItem("token", data.token)
          dispatch(loginUser(data.user))
        }
      })
  }
}

export const userLoginFetch = user => {
  return dispatch => {
    let loginData = {"auth": {"email": user.email, "password": user.password}} 
    return fetch("http://localhost:3000/user_token", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginData)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data)
          // Here you should have logic to handle invalid creation of a user.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the user, i.e. invalid username
        } else {
          console.log(data)
          localStorage.setItem("token", data.jwt)
          return getUser(user.email)
        }
      })
      .then(returnedUser => {
        console.log(returnedUser)
        dispatch(loginUser(returnedUser))
      })
  }
}
  
const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

const getUser = email => {
  let loginData = {"user": {"email": email}}
  return fetch("http://localhost:3000/find_user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.token}`,
    },  
    body: JSON.stringify(loginData)
  })
    .then(response => response.json())
    .then(userJson => {return userJson})
    .catch(error => {
      return error;
    });
}


//export const authenticate = (credentials) => {
//  return dispatch => {
//    dispatch(authRequest())
//    return fetch(`${API_URL}/user_token`, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json"
//      },
//      body: JSON.stringify({auth: credentials})
//    })
//      .then(res => res.json())
//      .then((response) => {
//          const token = response.jwt;
//          localStorage.setItem('token', token);
//          return getUser(credentials)
//      })
//      .then((user) => {
//        console.log(user)
//          dispatch(authSuccess(user, localStorage.token))
//      })
//      .catch((errors) => {
//          dispatch(authFailure(errors))
//          localStorage.clear()
//      })
//  }
//}