import { FETCH_PLACES, NEW_PLACE, GET_PLACE, DELETE_PLACE, NEW_SPOT, GET_SPOT, DELETE_SPOT, NEW_MEMORY, DELETE_MEMORY, CLEAR_PLACE, CLEAR_SPOT} from '../actions/types'

const initialState = {
    places: [],
    place: {},
    spot:{},
    location:{},
    memory:{}
}

export default function(state = initialState, action){
  switch(action.type){
    case FETCH_PLACES:
      return{
        ...state,
        places: action.payload
      }
    
    case NEW_PLACE:
      return {
        ...state,
        places: state.places.concat(action.payload),
        place: action.payload
      }

    case GET_PLACE:
      return{
        ...state,
        place: action.payload
      }
      
    case CLEAR_PLACE:

      return{
        ...state,
        place: {}
      }

    case NEW_SPOT:
      return{
        ...state,
        spot: action.payload
      }

    case GET_SPOT:
      return{
        ...state,
        spot: action.payload
      }

    case CLEAR_SPOT:
      return{
        ...state,
        spot: {}
      }
  
    case NEW_MEMORY:
      return{
        ...state,
        memory: action.payload
      }

    case DELETE_MEMORY:
      return{
        ...state,
        memory: {}
      }

    case DELETE_SPOT:
      return{
        ...state,
        spot: {}
      }

    case DELETE_PLACE:
      return{
        ...state,
          place: {status: "removed"}
      }
  
    default:
      return state;
  
  }
}


