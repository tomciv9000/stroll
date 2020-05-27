import React, {Component} from 'react';
import { connect } from 'react-redux';
import { placePostFetch, getPlacesFetch } from '../actions/placeActions'
import { GoogleMap, LoadScript, Autocomplete } from '@react-google-maps/api'
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
      user_id: this.props.user_id,
      placeData: {}
    }
}
  

  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //handleSubmit = (event) => {
  //  event.preventDefault()
  //  console.log(this.state)
  //  this.props.placePostFetch(this.state)
  //  this.setState({
  //    name: "",
  //    description: ""
  //  })
  //}

  handleSubmit = (e) => {
  
    console.log(this.state)
    console.log(this.googleField.current.value)
    this.googleField.current.value = ""
    this.setState({
          name: "",
          description: ""
        })
  }


  onLoad (autocomplete) {
    console.log('autocomplete: ', autocomplete)
    

    this.autocomplete = autocomplete
  }

  onPlaceChanged () {
    if (this.autocomplete !== null) {
      const place = this.autocomplete.getPlace()
      if (!place.geometry) return;
      if (place.geometry.viewport){
          console.log("location", `${place.geometry.location.lat()} ${place.geometry.location.lng()}`)

          const placeData = {
            location: place.name,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            user_id: this.props.user_id
          }
          this.setState({  name: place.name, placeData: placeData })
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

  //render () {
  //  return(
  //    <div>
  //      <h2>Enter a place that means something to you.</h2>
  //      <form onSubmit={this.handleSubmit}>
//
  //      <label>Name of this Place</label>
  //      <input
  //        name='name'
  //        placeholder='Ex. Swanton, OH'
  //        value={this.state.name}
  //        onChange={this.handleChange}
  //        /><br/>
//
  //      <label>Description</label>
  //      <input
  //        name='description'
  //        placeholder='Ex. Where I grew up'
  //        value={this.state.description}
  //        onChange={this.handleChange}
  //        /><br/>
  //      <input type='submit'/>
  //    </form>
  //    </div>
//
  //  )
//
  //}
//}
//TripForm.propTypes = {
//  createTrip: PropTypes.func.isRequired
//
//}

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