import React from 'react'
import { useSelector } from 'react-redux'
//import { connect } from 'react-redux'; 
import {AllMemories} from './AllMemories'


export const SpotDetails = () => {
  const spot = useSelector(state => state.places.spot)

  
  const call = () => {
    
    if (spot.memories){
      return spot.memories.map((memoryItem) =>{
        return <AllMemories key = {memoryItem.id} memoryData={memoryItem} />
      })
    }else {
      return (<h1>No Memories Yet</h1>)
    }
  }

  return (
    <div>
        <h1>{spot.name}</h1>  
        
        <ul>
         {call()}
       </ul>
    </div>
  )
}

