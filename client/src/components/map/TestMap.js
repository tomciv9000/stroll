import React, { Component } from 'react';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api'
import { connect } from 'react-redux'
import { getSpotFetch, spotPostFetch } from '../../actions/placeActions';
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'

let mapstyles = require('./mapstyles.json')

const mapContainerStyle = {
  height: "400px",
  position: 'relative',
  width: "100%"
}

const mapOptions = {
  disableDefaultUI: true,
  styles: mapstyles
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
      spotData: {},
      center: {lat:0,lng:0},
      }
  }

  componentDidMount(){
    this.calculateCenter()
  }

  componentDidUpdate(prevProps) {
    if (this.props.place !== prevProps.place) {
      this.calculateCenter()
    }
  }

  calculateCenter = () => {
    let place = this.props.place
    console.log(place)
    if(place.spots === undefined || place.spots.length === 0){
      console.log("No spots entered")
      return(this.setState({
        center:{lat: place.lat, lng: place.lng}
      }))
    } else {
      console.log("tried to calculate")
      return(this.setState({center:{
        lat: place.spots.reduce((total, spot) => {
          return total+spot.lat
        }, 0)/place.spots.length ,
        lng: place.spots.reduce((total, spot) => {
          return total+spot.lng
        }, 0)/place.spots.length
      }}))
    }
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
      console.log('Error: Autocomplete is not loaded yet!')
    }
  }

  callPlace = () => {
    if (this.props.place.spots) {
      return (this.props.place.spots.map((spot) => {
        return <Marker 
          key = {spot.id}
          clickable = {false}
          position = {{lat:spot.lat, lng:spot.lng}}
          animation = {2} />
      }))
    } else {
      return (<h1>No info yet</h1>)
    }
  }

  checkEmpty = () => {
    let isEmpty = false
    if (!this.state.spotData.location || !this.state.spotData.location.length < 0){
      isEmpty=true
    } else {
      isEmpty=false
    }
    return isEmpty
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
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                ref={this.googleField}
                name="spot"
                placeholder="Enter a location or address"
              />
            <InputGroup.Append>
              <Button variant="outline-warning" onClick={this.handleSubmit} disabled = {this.checkEmpty()}>Save Spot</Button>
            </InputGroup.Append>
            </InputGroup> 

          </Autocomplete>
  
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={this.state.center}
            zoom={10}
            options={mapOptions}
          >
            {this.callPlace()}
          </GoogleMap>
        </LoadScript>
      </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(TestMap)