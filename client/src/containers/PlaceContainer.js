import React from 'react'
import PlaceListItem from '../components/PlaceListItem'


const PlaceContainer = (props) => {
    return (
    <div>
        <h5>Your Maps</h5>
        <ul>
            {props.places.map((placeItem) =>{
                return <PlaceListItem key ={placeItem.id} placeData={placeItem} />
            })}
        </ul>
    </div>
  )
}

export default PlaceContainer

