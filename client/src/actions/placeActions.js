//import { FETCH_PLACES, NEW_PLACE, GET_PLACE, NEW_SPOT, GET_SPOT, NEW_MEMORY, DELETE_MEMORY} from '../actions/types'
import { NEW_PLACE } from '../actions/types'

const BASE_URL = "http://localhost:3000"

export const placePostFetch = place => {
  return dispatch => {
    let placeData = {"place": {"name": place.name, "description": place.description, "user_id": place.user_id}} 
    return fetch(`${BASE_URL}/places`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.token}`,
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
          dispatch(createPlace(data.place))
        }
      })
  }
}

const createPlace = placeObj => ({
  type: NEW_PLACE,
  payload: placeObj
})
