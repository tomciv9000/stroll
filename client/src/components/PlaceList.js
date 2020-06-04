import React, { Component } from 'react'
import {AllSpots} from './AllSpots'


class PlaceList extends Component {

  call = () => {
      console.log(this.props.place.spots)
    if (this.props.place.spots){
      return this.props.place.spots.map((spotItem) =>{
        return <AllSpots key = {spotItem.id}spotData={spotItem} />
      })
    }else {
      return (<h1>No Spots Yet</h1>)
    }
  }

render(){
  return (
    <div>
        <h1>{this.props.place.name}</h1>
        <p>{this.props.place.description}</p>    
        <br></br>
        <ul>
         {this.call()}
       </ul>
    </div>
  )
}

}


export default PlaceList
