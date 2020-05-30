import React from 'react';
import { useSelector } from 'react-redux'

export const PlaceDetails = () => {
    const place = useSelector(state => state.places.place)
    
    

        return (
            <div>
               <h1>{place.name}</h1> 
               <p>{place.description}</p>
            </div>
        )
}

