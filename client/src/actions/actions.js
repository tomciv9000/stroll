const BASE_URL = "http://localhost:3000"

export const userPostFetch = user => {
  return dispatch => {
    let loginData = {"user": {"email": user.email, "password": user.password}} 
    return fetch(`${BASE_URL}/users`, {
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
          return loginNewUser(user)
        }
      })
      .then(returnedUser => {
        console.log(returnedUser)
        dispatch(loginUser(returnedUser.user.data.attributes))
      })
  }
}


const loginNewUser = user => {
  let loginData = {"auth": {"email": user.email, "password": user.password}} 
  return fetch(`${BASE_URL}/user_token`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(loginData)
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      localStorage.setItem("token", data.jwt)
      return getUser(user.email)
    })
    .catch(error => {
      console.log(error)
    })
}

export const userLoginFetch = user => {
  return dispatch => {
    let loginData = {"auth": {"email": user.email, "password": user.password}} 
    return fetch(`${BASE_URL}/user_token`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginData)
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        localStorage.setItem("token", data.jwt)
        return getUser(user.email)
      })
      .catch(error => {
        console.log(error)
      })
      .then(returnedUser => {
        console.log(returnedUser)
        dispatch(loginUser(returnedUser.user.data.attributes))
      })
  }
}
  
const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})

 

const getUser = email => {
  let loginData = {"user": {"email": email}}
  return fetch(`${BASE_URL}/find_user`, {
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

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch(`${BASE_URL}/profile`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          
          if (data.user.data) {
            // An error will occur if the token is invalid.
            // If this happens, you may want to remove the invalid token
            dispatch(loginUser(data.user.data.attributes))
          } else {
            console.log(data)
            localStorage.removeItem("token")
            dispatch(logoutUser())
          }
        })
    }
  }
}

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const noAuth = () => ({
  type: 'NOAUTH_USER'
})
