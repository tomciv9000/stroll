import React from 'react'
import PlaceListItem from '../components/PlaceListItem'


const PlaceContainer = (props) => {
    return (
    <div>
        <h3>Where you've been</h3>
        <ul>
            {props.places.map((placeItem) =>{
                return <PlaceListItem key ={placeItem.id} placeData={placeItem} />
            })}
        </ul>
    </div>
  )
}

export default PlaceContainer

