import React from 'react'
import { useSelector } from 'react-redux'
//import { connect } from 'react-redux'; 
import {AllSpots} from './AllSpots'


export const SpotDetails = () => {
  const spot = useSelector(state => state.places.spot)

  
  const call = () => {
    
    if (spot.memories){
      return place.spots.map((spotItem) =>{
        return <AllSpots key = {spotItem.id} spotData={spotItem} />
      })
    }else {
      return (<h1>No Memories Yet</h1>)
    }
  }

  return (
    <div>
        <h1>{place.name}</h1>  
        
        <ul>
         {call()}
       </ul>
    </div>
  )
}

