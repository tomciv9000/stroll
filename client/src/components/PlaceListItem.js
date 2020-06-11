import React from 'react'
import { Link } from 'react-router-dom';

const PlaceListItem = (props) => {
   
    let placeDetails = props.placeData.attributes
    return (
    <li>
      <h5>
        <Link to={`/places/${placeDetails.id}`}>
          {placeDetails.name}</Link>
      </h5>
    </li>
       
  )
}

export default PlaceListItem