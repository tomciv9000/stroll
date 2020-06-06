import React, { Component } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api'
import { connect } from 'react-redux'
import { getSpotFetch, spotPostFetch } from '../actions/placeActions';

const mapContainerStyle = {
  height: "50vh",
  width: "100%"
}


  

const libraries = ["places"]

class TestMap extends Component {
  constructor (props) {
    super(props)
    this.autocomplete = null
    this.onLoad = this.onLoad.bind(this)
    this.onPlaceChanged = this.onPlaceChanged.bind(this)
    this.googleField = React.createRef()
    this.state = {
      //position: null,
      //showingInfoWindow: false,
      //activeMarker: {},
      //selectedSpot: {},
      //place: {},
      spotData: {},
      //center: {lat:0,lng:0},
      //fetch: false
      }
  }

  componentDidMount(){
    //console.log('Component State: ',this.state)
    //this.calculateCenter()
  }

  //componentDidUpdate(prevProps) {
  //  console.log(this.props)
  //  // Typical usage (don't forget to compare props):
  //  if (this.props.place_id !== prevProps.place_id) {
  //    console.log(prevProps)
  //    this.calculateCenter()
  //    ;
  //  }
  //}

  calculateCenter = () => {
    let place = this.props.place
    let center = {lat: place.lat,lng: place.lng}
    //console.log('Center Coordinates: ', center)
    return center
    //const spots = this.props.places.place.spots
    //if(this.props.trip.trip.places){
    //  return(this.setState({center:{
    //    lat: places.reduce((total, place) => {
    //      return total+place.lat
    //    }, 0)/places.length ,
    //    lng: places.reduce((total, place) => {
    //      return total+place.lng
    //    }, 0)/places.length
    //  }}))
    //}else{
    //  return(<h1>no info yet</h1>)
    //}

  }
    
  handleSubmit = (e) => {
    e.preventDefault()
    
    this.props.spotPostFetch(this.state.spotData)
    this.googleField.current.value = ""
    this.setState({
      spotData: {}
    })
  }


  onLoad (autocomplete) {
    
    //console.log('autocomplete: ', autocomplete)
    this.autocomplete = autocomplete
  }
    
  onPlaceChanged () {
    if (this.autocomplete !== null) {
      const spot = this.autocomplete.getPlace()
      if (!spot.geometry) return;
      if (spot.geometry.viewport){
        
          const spotData = {
            location: spot.name,
            lat: spot.geometry.location.lat(),
            lng: spot.geometry.location.lng(),
            place_id: this.props.place_id
          }
          this.setState({ position: spot.geometry.location, spotData: spotData })
      }
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

  callPlace = () => {
    if (this.props.place.spots) {
      return (this.props.place.spots.map((spot) => {
        return <Marker 
          key = {spot.id}
          //onClick = { console.log("Marker Clicked")}
          position = {{lat:spot.lat, lng:spot.lng}}
          animation = {2} />
      }))
    } else {
      return (<h1>No info yet</h1>)
    }
  }

  render() {
    return (
        <div>
        
        <LoadScript
          googleMapsApiKey={(process.env.REACT_APP_GOOGLE_API_KEY)}
          libraries={libraries} 
        >
          <Autocomplete
        onLoad={this.onLoad}
        onPlaceChanged={this.onPlaceChanged}
      >
          
        <input
          type="text"
          ref={this.googleField}
          name="spot"
          placeholder="Enter a spot"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "relative",
            left: "0%",
            marginLeft: "0px"
          }}
        />
        
        
      </Autocomplete>
      <br></br>
      <button onClick={this.handleSubmit}> 
          Save This Spot
        </button>
        <br></br>
        <br></br>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={this.calculateCenter()}
            zoom={10}
          >
            {this.callPlace()}
          </GoogleMap>
        </LoadScript>
        <br></br>
       
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
      place: state.places.place,
      user_id: state.user.currentUser.id,
      place_id: state.places.place.id
    };
}

const mapDispatchToProps = dispatch => ({
    getSpotFetch: spotID => dispatch(getSpotFetch(spotID)),
    spotPostFetch: spotInfo => dispatch(spotPostFetch(spotInfo))
})



export default connect(mapStateToProps, mapDispatchToProps)(TestMap)