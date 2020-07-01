import { FETCH_PLACES, NEW_PLACE, GET_PLACE, NEW_SPOT, GET_SPOT, NEW_MEMORY, CLEAR_PLACE, CLEAR_SPOT, DELETE_MEMORY, DELETE_SPOT, DELETE_PLACE } from '../actions/types'

const BASE_URL = "http://localhost:3000"

export const placePostFetch = place => {
  return dispatch => {
    let placeData = {"place": {"name": place.name, "description": place.description, "lat": place.lat, "lng": place.lng, "user_id": place.user_id}} 
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
      } else {
        console.log(data.place.data)
        dispatch(createPlace(data.place.data))
      }
    })
  }
}

export const getPlacesFetch = () => {
  return dispatch => {
    const token = localStorage.token;
    if (token) {
      return fetch(`${BASE_URL}/places`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        if (data.place.data) {
          dispatch(fetchPlaces(data.place.data))
        } else {
          console.log(data.place.data.attributes)
          dispatch(fetchPlaces(data.place.data.attributes))
        }
      })
    }
  }
}

export const getPlaceFetch = (id) => {
  return dispatch => {
  const token = localStorage.token;
    if (token) {
      return fetch(`${BASE_URL}/places/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
  .then(res => res.json())
  .then(data => {
    dispatch(getPlace(data.place.data.attributes))  
  })
}}}

export const spotPostFetch = spot => {
  return dispatch => {
    let spotData = {"spot": {"location": spot.location, "lat": spot.lat, "lng": spot.lng, "place_id": spot.place_id}} 
    return fetch(`${BASE_URL}/spots`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(spotData)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message) {
        console.log(data)
      } else {         
        dispatch(createSpot(data.spot.data.attributes))
      }
    })
  }
}

export const getSpotFetch = (id) => {
  return dispatch => {
  const token = localStorage.token;
    if (token) {
      return fetch(`${BASE_URL}/spots/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    dispatch(getSpot(data.spot.data.attributes))  
  })
}
}}

export const memoryPostFetch = memory => {
  return dispatch => {
    let memoryData = {"memory": {"description": memory.description, "spot_id": memory.spot_id, "user_id": memory.user_id}} 
    return fetch(`${BASE_URL}/memories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${localStorage.token}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(memoryData)
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.message) {
        console.log(data)
      } else {
        console.log('Returned Memory Obj:', data)
        dispatch(createMemory(data.memory.data.attributes))
      }
    })
  }
}

export const memoryDeleteFetch = (id) =>{
  return dispatch => {
    const token = localStorage.token;
    if (token) {
     return fetch(`${BASE_URL}/memories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  .then(() => {
    console.log('removed')
    dispatch(deleteMemory(id))
  })
  .catch(error => {
    console.log(error)
  })
}}}


export const spotDeleteFetch = (id) =>{
  return dispatch => {
    const token = localStorage.token;
    if (token) {
     return fetch(`${BASE_URL}/spots/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  .then(() => {
    console.log('removed')
    dispatch(deleteSpot(id))
  })
  .catch(error => {
    console.log(error)
  })
}}}

export const placeDeleteFetch = (id) =>{
  return dispatch => {
    const token = localStorage.token;
    if (token) {
     return fetch(`${BASE_URL}/places/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
  .then(() => {
    console.log('removed')
    dispatch(deletePlace(id))
  })
  .catch(error => {
    console.log(error)
  })
}}}

export const clearSpotState = () => {
  return dispatch => {
    console.log('State - Spot Clear')
    dispatch(clearSpot())
  }
}

export const clearPlaceState = () => {
  return dispatch => {
    
    dispatch(clearPlace())
  }
}

const clearPlace = () => ({
  type: CLEAR_PLACE
})

const clearSpot = () => ({
  type: CLEAR_SPOT
})

const createPlace = placeObj => ({
  type: NEW_PLACE,
  payload: placeObj
})

const fetchPlaces = placesObj => ({
  type: FETCH_PLACES,
  payload: placesObj
})

const getPlace = placeObj => ({
  type: GET_PLACE,
  payload: placeObj
})

const createSpot = spotObj => ({
  type: NEW_SPOT,
  payload: spotObj
})

const getSpot = spotObj => ({
  type: GET_SPOT,
  payload: spotObj
})

const createMemory = memoryObj => ({
  type: NEW_MEMORY,
  payload: memoryObj
})

const deleteMemory = id => ({
  type: DELETE_MEMORY,
  payload: id
})

const deleteSpot = id => ({
  type: DELETE_SPOT,
  payload: id
})

const deletePlace = id => ({
  type: DELETE_PLACE,
  payload: id
})