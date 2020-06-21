import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, LoadScript, StreetViewPanorama, StreetViewService } from '@react-google-maps/api'

const mapContainerStyle = {
  height: "400px",
  position: 'relative',
  width: "100%",
}

const mapOptions = {
  streetViewControl: false
}

const libraries = ["places"]

class SingleSpotMap extends Component {
  constructor (props) {
    super(props)
    this.onLoad = this.onLoad.bind(this)

    this.state = {
        position: null,
        center: {lat:0,lng:0},
        panoStatus: false
    }
  }

  componentWillUnmount(){
    this.setState({
        center: {lat:0,lng:0},
        panoStatus: false,
        position: null})
  }

  onLoad = (streetViewService) => {
    let spot = this.props.spot
    let center = {lat:spot.lat, lng:spot.lng}
    console.log("SVSonLoad spot: ", spot)
    streetViewService.getPanorama({
      location: center, 
      radius: 200
    }, (data, status) => {
        if (status === "OK") {
          this.setState({
            panoStatus: true,
            center: {
            lat: data.location.latLng.lat(),
            lng: data.location.latLng.lng()}
          })
        } else {
          console.log ("Couldn't find that place")
          this.setState({
            panoStatus: false,
            center: {
            lat: spot.lat,
            lng: spot.lng}
          })
        }
      }  
    )
  };

  componentDidUpdate(prevProps) {
    if (this.props.spot.id !== prevProps.spot.id) {
      let spot = this.props.spot
      this.setState({
        center: {lat:spot.lat,lng:spot.lng}
      })
    }
  }

  
  callStreetView = () => {
    let spot = this.props.spot
     
    if (Object.keys(spot).length !== 0 && this.state.panoStatus) {
      return (
        <StreetViewPanorama
          position={this.state.center}
          visible={true}
        />
      )
    } else {
       console.log("Spot is null")
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
            zoom={19}
            mapOptions={mapOptions}
          >
            <StreetViewService
              onLoad={this.onLoad}
            />
            {this.callStreetView()}
          </GoogleMap>
        </LoadScript>
        <br/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    spot: state.places.spot, 
  };
}



export default connect(mapStateToProps, null)(SingleSpotMap)