import React from 'react'
import { useSelector } from 'react-redux'
//import { connect } from 'react-redux'; 
import AllMemories from './AllMemories'
import CardDeck from 'react-bootstrap/CardDeck'


export const SpotDetails = () => {
  
  const spot = useSelector(state => state.places.spot)
  
  
  const call = () => {
    
    if (spot.memories && spot.memories.length > 0){
      
      return spot.memories.map((memoryItem) =>{
        return <AllMemories key = {memoryItem.id} memoryData={memoryItem} />
      })
    }else {
      
      return (<h1>No Memories Yet</h1>)

    }
  }

  return (
    <div>
          
        <CardDeck>
          {call()}
        </CardDeck>
        
         
       
    </div>
  )
}

