import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
//THIS IS WHERE I LEFT OFF
import { memoryDeleteFetch } from '../actions/placeActions';
//import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card'

class AllMemories extends Component {

  onDeleteClick = () => {
    const id =  this.props.memoryData.id;
    console.log("Delete Button Clicked, ID: ", id)
    this.props.memoryDeleteFetch(id)
  }

  render(){

    return(
      
      <Col>
        <Card bg="warning" >
          <Card.Body>
            
            
            
                {this.props.memoryData.description}
            
          
            
          </Card.Body>
          <Card.Link onClick={this.onDeleteClick}>Delete Memory</Card.Link>
        </Card>
        </Col>
       
        


          )
        }

}

const mapDispatchToProps = dispatch => ({
  memoryDeleteFetch: memoryID => dispatch(memoryDeleteFetch(memoryID))
})


export default connect(null, mapDispatchToProps)(AllMemories)