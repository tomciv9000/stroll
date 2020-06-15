import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const markerIcon = 'http://maps.google.com/mapfiles/kml/shapes/placemark_circle_highlight.png'


const mapContainerStyle = {
  height: "45vh",
  position: 'relative',
  width: "100%",
  
}

const mapOptions = {
    disableDefaultUI: true
}


  

const libraries = ["places"]

class AllSpotsMap extends Component {
  constructor (props) {
    super(props)
   // this.autocomplete = null
   // this.onLoad = this.onLoad.bind(this)
    //this.onPlaceChanged = this.onPlaceChanged.bind(this)
    
    this.state = {
      position: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedSpot: {},
      //place: this.props.place,
      spotData: {},
      center: {lat:15,lng:0},
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
    //console.log("Map should update")
    //if (this.props.place !== prevProps.place) {
    //  console.log("Oh hey, it's a new place!")
    //  this.calculateCenter()
    //}
  }

//instead of this bullshit callPlace method, i think I can utilize component did update and component did mount

  callPlace = () => {
    if (this.props.places) {
        let spotsObjArray = this.props.places.map((place)=> {return place.attributes.spots})
        console.log('Why loading so much?', spotsObjArray)
        let newArray = [].concat(...spotsObjArray)
        let spotsArray = newArray.map((m)=> {
            return (
            <Marker
                key = {m.id}
                onclick = { this.onMarkerClick }
                position = {{lat:m.lat, lng:m.lng}} 
                icon = {markerIcon} 
                animation = {2}>
                    
                    </Marker>)
        })
        return spotsArray
    } else {
        return (<h1>No information yet</h1>)
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
            zoom={1.2}
            options={mapOptions}
          >
            {this.callPlace()}
            
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


export default AllSpotsMap