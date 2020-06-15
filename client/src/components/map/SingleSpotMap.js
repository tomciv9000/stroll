import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, StreetViewPanorama } from '@react-google-maps/api'

const markerIcon = 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'


const mapContainerStyle = {
  height: "400px",
  position: 'relative',
  width: "800px",
  
}

const mapOptions = {
    //disableDefaultUI: true
}


  

const libraries = ["places"]

class SingleSpotMap extends Component {
  constructor (props) {
    super(props)

    this.state = {
      position: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedSpot: {},
      //place: this.props.place,
      spotData: {},
      center: {lat:0,lng:0},
      fetch: false
      }
  }

  onMarkerClick = (props, marker, e) => {
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

  componentDidMount(){
    //console.log(this.props.places)
    
  }

  componentDidUpdate(prevProps) {
    if (this.props.spot !== prevProps.spot) {
        let spot = this.props.spot
        console.log(spot)
        //if (spot.lng)
        this.setState({
        center: {lat:spot.lat,lng:spot.lng}
        })
    }
  }



  callPlace = () => {
    let spot = this.props.spot
    //If the spot object is not empty, place the marker
    if (Object.keys(spot).length !== 0) {
        console.log("Spot registered: ", this.props.spot)
        
        
            return (
            <Marker
                onclick = { this.onMarkerClick }
                position = {{lat: spot.lat, lng: spot.lng}} 
                
                icon = {markerIcon} 
                animation = {2}>
                    
                    </Marker>)
    } else {
  return (<h1>This spot isn't available for some reason...</h1>)
    }
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
            zoom={7}
          >
            <StreetViewPanorama
                position={this.state.center}
                visible={true}
            />
          </GoogleMap>
        </LoadScript>
        <br></br>
       
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


export default SingleSpotMap