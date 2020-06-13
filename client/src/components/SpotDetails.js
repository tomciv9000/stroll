import React from 'react'
import { useSelector } from 'react-redux'
//import { connect } from 'react-redux'; 
import AllMemories from './AllMemories'


export const SpotDetails = () => {
  
  const spot = useSelector(state => state.places.spot)
  console.log("Spot: ", spot )
  
  const call = () => {
    console.log('SpotDetails call function executed')
    if (spot.memories && spot.memories.length > 0){
      console.log("Memories detected")
      return spot.memories.map((memoryItem) =>{
        return <AllMemories key = {memoryItem.id} memoryData={memoryItem} />
      })
    }else {
      console.log("No Memories Yet")
      return (<h1>No Memories Yet</h1>)

    }
  }

  return (
    <div>
        <h1>{spot.location}</h1>  
        
        <ul>
         {call()}
       </ul>
    </div>
  )
}

