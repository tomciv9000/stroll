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
      
      <Col sm={3}>
        <Card bg="warning" >
          <Card.Body>
            <Card.Title>Memory Title?</Card.Title>
            
            <Card.Text>
                {this.props.memoryData.description}
            </Card.Text>
            <Card.Text>
                People: {this.props.memoryData.people}
            </Card.Text>
            <Card.Text>
                Dates{this.props.memoryData.dates}
            </Card.Text>
            <Card.Link onClick={this.onDeleteClick}>Delete Memory</Card.Link>
          </Card.Body>
        </Card>
        </Col>
       
        


          )
        }

}




export default connect(null, null)(AllMemories)