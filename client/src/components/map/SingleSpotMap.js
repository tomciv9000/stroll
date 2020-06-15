import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMap, LoadScript, StreetViewPanorama, StreetViewService } from '@react-google-maps/api'

//const markerIcon = 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png'


const mapContainerStyle = {
  height: "400px",
  position: 'relative',
  width: "800px",
  
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

  

  componentDidMount(){
   //console.log("Did Mount Spot: ", this.props.spot)
  }

  componentWillUnmount(){
    console.log("Unmounted Spot: ", this.props.spot)
    this.setState({
        center: {lat:0,lng:0},
        panoStatus: false,
        position: null
        })
  }

  onLoad = (streetViewService) => {
    let spot = this.props.spot
    let center = {lat:spot.lat, lng:spot.lng}
    console.log("SVSonLoad spot: ", spot)
    streetViewService.getPanorama({
      location: center, 
      radius: 200
    }, (data, status) => {
        console.log(status)
       
        if (status === "OK") {
            console.log("Status was fucking cool")
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
    if (this.props.spot !== prevProps.spot) {
        let spot = this.props.spot
        console.log("componentDidUpdate Spot:", spot)
        //if (spot.lng)
        this.setState({
        center: {lat:spot.lat,lng:spot.lng}
        })
    
    }
  }

  
  callStreetView = () => {
     let spot = this.props.spot
     //console.log('CSV Spot: ', spot)
     if (Object.keys(spot).length !== 0 && this.state.panoStatus) {  
        console.log("callStreetView spot: ", spot) 
        
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
        <br></br>
       
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
      spot: state.places.spot,
      
    };
}

const mapDispatchToProps = dispatch => ({
    //getSpotFetch: spotID => dispatch(getSpotFetch(spotID)),
    //spotPostFetch: spotInfo => dispatch(spotPostFetch(spotInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleSpotMap)