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
  
const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
})