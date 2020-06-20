import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { connect } from 'react-redux'; 
import AllMemories from './AllMemories'
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import { spotDeleteFetch } from '../actions/placeActions';


export const SpotDetails = () => {
  //const dispatch = useDispatch()

  const spot = useSelector(state => state.places.spot)
  //const place = useSelector(state => state.places.place)
  
  //const onDeleteClick = () => {
  //  const id =  spot.id;
  //  dispatch(spotDeleteFetch(id, () =>{
  //    this.props.history.push(`/places/${place.id}`)
  //  })
  //)}
  


  
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

