import React from 'react';
import { Link } from 'react-router-dom';

export const AllSpots = (props) => {
    let spotData = props.spotData
    
    return (
        <div>
            <ul>
                <li>
                <Link 
                    to={`/spots/${spotData.id}`}
                    className="big yellow-link">
                    <h3>{spotData.location}</h3>
                </Link>
                </li>
            </ul>
        </div>
    )
}