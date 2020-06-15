import { FETCH_PLACES, NEW_PLACE, GET_PLACE, NEW_SPOT, GET_SPOT, NEW_MEMORY, DELETE_MEMORY, CLEAR_PLACE} from '../actions/types'

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
  
          case NEW_MEMORY:
            return{
              ...state,
              memory: action.payload
            }
          case DELETE_MEMORY:
            console.log(state.first)
            return{
              ...state,
  
            }
  
      default:
        return state;
  
    }
  }


