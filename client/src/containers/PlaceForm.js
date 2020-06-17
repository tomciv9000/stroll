import React, {Component} from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import { placePostFetch, getPlacesFetch } from '../actions/placeActions'
import { LoadScript, Autocomplete } from '@react-google-maps/api'
//import PropTypes from 'prop-types';
import '../index.css';

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
      //description: "",
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
        <LoadScript
          googleMapsApiKey={(process.env.REACT_APP_GOOGLE_API_KEY)}
          libraries={libraries} 
        >
            
          
              <Autocomplete
        onLoad={this.onLoad}
        onPlaceChanged={this.onPlaceChanged}
      >
          
        
        
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label className="white-text">Add new location:</Form.Label>
            <Form.Control 
              ref = {this.googleField}
              placeholder="City, town, or area" />
           </Form.Group>
        </Form>
      
        
        
        
      </Autocomplete>
      
          
        </LoadScript>
        

        
        
        
      
        <Button onClick={this.handleSubmit}> 
                Add Place
        </Button>
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