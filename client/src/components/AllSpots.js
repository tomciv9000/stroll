import React from 'react';
import { Link } from 'react-router-dom';

export const AllSpots = (props) => {
    //const spot = useSelector(state => state.places.spot)
    let spotData = props.spotData
    
    

        return (
            <div>
                <ul>
                    <li>
                    <h3><Link to={`/spots/${spotData.id}`}>{spotData.location}</Link></h3>
                    </li>
                </ul>
            </div>
        )
}