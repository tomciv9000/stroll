import React from 'react';
import { Link } from 'react-router-dom';

export const AllSpots = (props) => {
    //const spot = useSelector(state => state.places.spot)
    let spotData = props.spotData
    
    

        return (
            <div>
                <br/>
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