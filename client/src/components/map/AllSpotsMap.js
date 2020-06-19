import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api'
//import dot from '../../images/tiny_icon.png'
let mapstyles = require('./mapstyles.json')

//let markerIcon = dot

const mapContainerStyle = {
  height: "400px",
  position: 'relative',
  width: "100%",
  
}

const mapOptions = {
  disableDefaultUI: true,
  styles: mapstyles
}


const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15
}


  

const libraries = ["places"]

class AllSpotsMap extends Component {
  constructor (props) {
    super(props)
   // this.autocomplete = null
    this.onLoad = this.onLoad.bind(this)
    //this.onPlaceChanged = this.onPlaceChanged.bind(this)
    
    //evaluate which states aren't used
    this.state = {
      position: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedSpot: {},
      //place: this.props.place,
      spotData: {},
      center: {lat:38,lng:-45},
      fetch: false
      }
  }

  onlick = (props, marker, e) => {
    console.log(props,marker)
    this.setState({
      selectedSpot: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  
  createKey = (location) => {
    return location.lat + location.lng
  };
//instead of this bullshit callPlace method, i think I can utilize component did update and component did mount

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
        
        

        return <MarkerClusterer options={options}>
                {clusterer => locations.map(location => (
                <Marker clickable = {false}  key={this.createKey(location)} position={location} clusterer={clusterer} />
        ))
      }
    </MarkerClusterer>






        //let spotsArray = newArray.map((m)=> {
        //    return (
        //    <Marker
        //        clickable = {false}
        //        key = {m.id}
        //        onclick = { this.onMarkerClick }
        //        position = {{lat:m.lat, lng:m.lng}} 
        //        icon = {markerIcon} 
        //        animation = {2}>
        //            
        //            </Marker>)
        //})
       // return spotsArray
    } else {
        return (<h1>No information yet</h1>)
    }
  }

   onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }




  render() {
    return (
        <div>
        
        <LoadScript
          googleMapsApiKey={(process.env.REACT_APP_GOOGLE_API_KEY)}
          libraries={libraries} 
        >
      
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={this.state.center}
            zoom={2}
            options={mapOptions}
          >
            {this.callPlace()}

            
          </GoogleMap>
        </LoadScript>
       
       
        </div>
      )
    }
}

//const mapStateToProps = state => {
//    return {
//      places: state.places.places
//     
//    };
//}


export default AllSpotsMap