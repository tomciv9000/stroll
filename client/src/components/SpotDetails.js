import React from 'react'
import { useSelector } from 'react-redux'
//import { connect } from 'react-redux'; 
import AllMemories from './AllMemories'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'


export const SpotDetails = () => {
  
  const spot = useSelector(state => state.places.spot)
  
  
  const call = () => {
    
    if (spot.memories && spot.memories.length > 0){
      
      return spot.memories.map((memoryItem) =>{
        return <AllMemories key = {memoryItem.id} memoryData={memoryItem} />
      })
    }else {
      
      return (<h5>No Memories Yet</h5>)

    }
  }

  return (
    <div>
        <Row>
        <CardDeck>
          {call()}
        </CardDeck>
        </Row>
        
        
         
       
    </div>
  )
}

