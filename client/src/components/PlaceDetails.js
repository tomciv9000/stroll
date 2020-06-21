import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {AllSpots} from './AllSpots'
import { Link } from 'react-router-dom';
import { placeDeleteFetch } from '../actions/placeActions';

export const PlaceDetails = () => {
  
  const dispatch = useDispatch()
  let place = useSelector(state => state.places.place)

  const onDeleteClick = () => {
    const id =  place.id;
    dispatch(placeDeleteFetch(id, () =>{
      this.props.history.push('/private')
    })
  )}

  const call = () => {
    if (!!place.spots.length){
      return place.spots.map((spotItem) =>{
        return <AllSpots key = {spotItem.id} spotData={spotItem} />
      })
    }else {
      return (
      <div>
        <br/>
        <h5 className = "white-text">Add a spot that holds a memory.</h5>
      </div>
      )
    }
  }

  const callPlaceName = () => {
    return (
      <div>
        <h1 className = "question-text white-text">{place.name}</h1>
        <Link  to = "#" className="yellow-link" onClick={onDeleteClick}>
          <small>[Delete {place.name}]</small>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {callPlaceName()}
      {call()}
    </div>
  )
}

