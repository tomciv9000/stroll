import { FETCH_PLACES, NEW_PLACE, GET_PLACE, NEW_SPOT, GET_SPOT, NEW_MEMORY, DELETE_MEMORY} from '../actions/types'

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
          place: action.payload
        }
  
        case GET_PLACE:
  
        return{
          ...state,
          [action.payload.id]: action.payload
        }
  
        case NEW_SPOT:
          return{
            ...state,
            place: action.payload
          }
  
          case GET_SPOT:
          return{
            ...state,
            [action.payload.id]: action.payload
          }
  
          case NEW_MEMORY:
            return{
              ...state,
              entry: action.payload
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


