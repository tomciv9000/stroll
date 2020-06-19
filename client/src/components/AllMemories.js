import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
//import { deleteEntry } from '../actions/tripAction';
//import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card'

class AllMemories extends Component {

  onDeleteClick = () => {
    //const id =  this.props.tripData.entryID;
    console.log("Delete Button Clicked")
    //this.props.deleteEntry(id)
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




export default connect(null, null)(AllMemories)