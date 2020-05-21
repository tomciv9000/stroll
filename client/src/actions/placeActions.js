const BASE_URL = "http://localhost:3000"

export const placePostFetch = place => {
  return dispatch => {
    let placeData = {"place": {"name": place.email, "description": place.description}} 
    return fetch(`${BASE_URL}/places`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(placeData)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          console.log(data)
          // Here you should have logic to handle invalid creation of a place.
          // This assumes your Rails API will return a JSON object with a key of
          // 'message' if there is an error with creating the place, i.e. invalid placename
        } else {
          console.log(data)
          localStorage.setItem("token", data.token)
          dispatch(loginplace(data.place))
        }
      })
  }
}
