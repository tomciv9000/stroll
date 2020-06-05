import React, {Component} from 'react';
import { connect } from 'react-redux';
import { placePostFetch, getPlacesFetch } from '../actions/placeActions'
import { LoadScript, Autocomplete } from '@react-google-maps/api'
//import PropTypes from 'prop-types';

const libraries = ["places"]

class PlaceForm extends Component {
  constructor (props) {
    super(props)
    this.autocomplete = null
    this.onLoad = this.onLoad.bind(this)
    this.onPlaceChanged = this.onPlaceChanged.bind(this)
    this.googleField = React.createRef()
    this.state = {
      name: "",
      description: "",
      lat: 0,
      lng: 0,
      user_id: this.props.user_id
    }
}
  

  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (e) => {
  
    console.log(this.state)
    this.props.placePostFetch(this.state)
    this.googleField.current.value = ""
    this.setState({
          name: "",
          description: "",
          lat: 0,
          lng: 0
        })
  }


  onLoad (autocomplete) {
    //console.log('autocomplete: ', autocomplete)
    

    this.autocomplete = autocomplete
  }

  onPlaceChanged () {
    if (this.autocomplete !== null) {
      const place = this.autocomplete.getPlace()
      if (!place.geometry) return;
      if (place.geometry.viewport){
          console.log("location", `${place.geometry.location.lat()} ${place.geometry.location.lng()}`)

          this.setState({  name: place.name, lat: place.geometry.location.lat(), lng: place.geometry.location.lng(), })
      }
    } else {
      console.log('Autocomplete is not loaded yet!')
    }
  }

render() {
    return (
        <div>
          <h2>Where have you been?</h2>
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
          name="city"
          placeholder="Enter city or town"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `12px 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            
          }}
        />
        
        
        
      </Autocomplete>
      
          
        </LoadScript>
        

        
        
        <br/>
        <input
          name='description'
          placeholder='Enter a brief description'
          value={this.state.description}
          onChange={this.handleChange}
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `12px 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            
          }}
          /><br/>
        
      
        <button onClick={this.handleSubmit}> 
                Add Place
        </button>
        </div>
      )
    }
}


const mapStateToProps = state => {
  return {
    user_id: state.user.currentUser.id
  };
}

const mapDispatchToProps = dispatch => ({
  placePostFetch: placeInfo => dispatch(placePostFetch(placeInfo)),
  getPlacesFetch: () => dispatch(getPlacesFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceForm);