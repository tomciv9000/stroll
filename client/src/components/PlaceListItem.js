import React from 'react'
import { Link } from 'react-router-dom';

const PlaceListItem = (props) => {
   
    let placeDetails = props.placeData.attributes
    return (
    <li>
      <h4>
        <Link to={`/places/${placeDetails.id}`}>
          {placeDetails.name}</Link>
      </h4>
    </li>
       
  )
}

export default PlaceListItem