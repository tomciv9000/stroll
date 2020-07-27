import React from 'react'
import { Link } from 'react-router-dom';

import '../index.css';

const PlaceListItem = (props) => {
  let placeDetails = props.placeData.attributes

  
    

  return (
    <li className='places-list'>
      <Link 
        to={`/places/${placeDetails.id}`} 
        className="big yellow-link">
          {placeDetails.name}
      </Link>
      
    </li>
  )
}

export default PlaceListItem