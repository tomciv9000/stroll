import React from 'react'
import { Link } from 'react-router-dom';

const PlaceListItem = (props) => {
   
    let placeDetails = props.placeData.attributes
    return (
        <h3><Link to={`/places/${placeDetails.id}`}>{placeDetails.name}</Link></h3>
       
  )
}

export default PlaceListItem