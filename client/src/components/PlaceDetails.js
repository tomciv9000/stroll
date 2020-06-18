import React from 'react'
import { useSelector } from 'react-redux'
//import { connect } from 'react-redux'; 
import {AllSpots} from './AllSpots'



export const PlaceDetails = () => {
  let place = useSelector(state => state.places.place)

  
  const call = () => {
    
    if (place.spots){
      return place.spots.map((spotItem) =>{
        return <AllSpots key = {spotItem.id} spotData={spotItem} />
      })
    }else {
      return (<h1>No Spots Yet</h1>)
    }
  }

  const callPlaceName = () => {
    return <h1 className = "question-text white-text">{place.name}</h1>
  }

  return (
    <div>
        
          
            {callPlaceName()}
            {call()}
          
        
       
    </div>
  )
}

