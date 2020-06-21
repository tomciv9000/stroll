import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api'

let mapstyles = require('./mapstyles.json')

const mapContainerStyle = {
  height: "400px",
  position: 'relative',
  width: "100%",
}

const mapOptions = {
  disableDefaultUI: true,
  styles: mapstyles
}

const libraries = ["places"]

class AllSpotsMap extends Component {
  constructor (props) {
    super(props)

    this.state = {
      spotData: {},
      center: {lat:38,lng:-45},
      }
  }

  createKey = (location) => {
    return location.lat + location.lng
  };

  callPlace = () => {
    if (this.props.places.length > 0) {
      let spotsObjArray = this.props.places.map((place)=> {return place.attributes.spots})
      console.log('spotsObjArray: ', spotsObjArray)
      let newArray = [].concat(...spotsObjArray)
      let locations = newArray.map((spot)=> {return {
        lat: spot.lat,
        lng: spot.lng,
      } });
      const options = {
        imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'
      };
      return (
        <MarkerClusterer options={options}>
          {clusterer => locations.map(location => (
            <Marker 
              clickable = {false}  
              key={this.createKey(location)} 
              position={location} 
              clusterer={clusterer} 
            />
          ))}
        </MarkerClusterer>
      )
    } else {
      return (console.log("No marker data detected."))
    }
  }

  render() {
    return (
      <div>
        <LoadScript
          googleMapsApiKey={(process.env.REACT_APP_GOOGLE_API_KEY)}
          libraries={libraries}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={this.state.center}
            zoom={2}
            options={mapOptions}>
            {this.callPlace()}
          </GoogleMap>
        </LoadScript>       
      </div>
    )
  }
}

export default AllSpotsMap