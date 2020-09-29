const BASE_URL = 'http://localhost:3000'

export const userPostFetch = user => {
  return dispatch => {
    const loginData = { user: { email: user.email, password: user.password } }
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data)
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
  const loginData = { auth: { email: user.email, password: user.password } }
  return fetch(`${BASE_URL}/user_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      localStorage.setItem('token', data.jwt)
      return getUser(user.email)
    })
    .catch(error => {
      console.log(error)
    })
}

export const userLoginFetch = user => {
  return dispatch => {
    const loginData = { auth: { email: user.email, password: user.password } }
    fetch(`${BASE_URL}/user_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        } else {
          throw Error(response.statusText)
        }
      })
      .then(data => {
        console.log(data)
        localStorage.setItem('token', data.jwt)
        return getUser(user.email)
      })
      .catch(error => {
        console.log('Error Catch :', error.message)
        dispatch(loginFail(error.message))
        return undefined
      })
      .then(returnedData => {
        if (returnedData) {
          console.log('User Object :', returnedData)
          dispatch(loginUser(returnedData.user.data.attributes))
        }
      })
  }
}

const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

const loginFail = failObj => ({
  type: 'LOGIN_FAIL',
  payload: failObj
})

const getUser = email => {
  const loginData = { user: { email: email } }
  return fetch(`${BASE_URL}/find_user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    },
    body: JSON.stringify(loginData)
  })
    .then(response => response.json())
    .then(userJson => { return userJson })
    .catch(error => {
      return error
    })
}

export const getProfileFetch = () => {
  return dispatch => {
    const token = localStorage.token
    if (token) {
      return fetch(`${BASE_URL}/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.user.data) {
            dispatch(loginUser(data.user.data.attributes))
          } else {
            console.log(data)
            localStorage.removeItem('token')
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
