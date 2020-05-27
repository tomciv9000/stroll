import React, { Component } from 'react';
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api'
import { connect } from 'react-redux'
import { getSpotFetch, spotPostFetch } from '../actions/placeActions';

const mapContainerStyle = {
    height: "400px",
    width: "800px"
  }
  
  const center = {
    lat: 41.390628,
    lng: -81.878976
  }

  const libraries = ["places"]

class Autofill extends Component {
    constructor (props) {
        super(props)
        this.autocomplete = null
        this.onLoad = this.onLoad.bind(this)
        this.onPlaceChanged = this.onPlaceChanged.bind(this)
        this.state = {
            position: null,
            showingInfoWindow: false,
            activeMarker: {},
            selectedSpot: {},
            //I might need to pass place_id in as a prop when it's called
           // place_id: this.props.place_id,
            spotData: {},
            center: {lat:0,lng:0},
            fetch: false
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.spotData)
        //this.props.createPlace(this.state.placeData)
      }


      onLoad (autocomplete) {
        console.log('autocomplete: ', autocomplete)
        
    
        this.autocomplete = autocomplete
      }
    
      onPlaceChanged () {
        if (this.autocomplete !== null) {
          const spot = this.autocomplete.getPlace()
          if (!spot.geometry) return;
          if (spot.geometry.viewport){
              console.log("location", `${spot.geometry.location.lat()} ${spot.geometry.location.lng()}`)

              const spotData = {
                location: spot.name,
                lat: spot.geometry.location.lat(),
                lng: spot.geometry.location.lng(),
                place_id: this.state.place_id
              }
              this.setState({ position: spot.geometry.location, spotData: spotData })
          }
        } else {
          console.log('Autocomplete is not loaded yet!')
        }
      }

    render() {
        return (
            
            <LoadScript
              googleMapsApiKey={(process.env.REACT_APP_GOOGLE_API_KEY)}
              libraries={libraries} 
            >
                <button onClick={this.handleSubmit}> 
                Save Spot
            </button>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={2.5}
              >
                  <Autocomplete
            onLoad={this.onLoad}
            onPlaceChanged={this.onPlaceChanged}
          >
              

            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
            
            
          </Autocomplete>
          
              </GoogleMap>
            </LoadScript>
          )
        }
}

const mapStateToProps = state => {
    return {
      user_id: state.user.currentUser.id,
      place_id: state.places.place.id
    };
}

const mapDispatchToProps = dispatch => ({
    getSpotFetch: spotID => dispatch(getSpotFetch(spotID)),
    spotPostFetch: spotInfo => dispatch(spotPostFetch(spotInfo))
})



export default connect(mapStateToProps, mapDispatchToProps)(AutoFill)

//REIMAINGE THE INTERFACE, MAYBE YOU DONT NEED A MAP AT FIRST, JUST THE AUTOCOMPLETE SEARCH BAR AND YOU CAN GET THE INITIAL DATA FOR THE SECOND MAP FROM THAT
