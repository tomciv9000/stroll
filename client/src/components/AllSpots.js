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
                    style={{textDecoration : 'none'}}
                    className='button two place'>
                    {spotData.location}</Link>
                </li>
            </ul>
        </div>
    )
}