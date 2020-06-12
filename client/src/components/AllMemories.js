import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux';
//import { deleteEntry } from '../actions/tripAction';
//import { Link } from 'react-router-dom';
//import { Button, Card, Image } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'

class AllMemories extends Component {

  onDeleteClick = () => {
    //const id =  this.props.tripData.entryID;
    console.log("Delete Button Clicked")
    //this.props.deleteEntry(id)
  }

  render(){

    return(
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Memory Title?</Card.Title>
            
            <Card.Text>
                {this.props.memoryData.description}
            </Card.Text>
            <Card.Text>
                {this.props.memoryData.people}
            </Card.Text>
            <Card.Text>
                {this.props.memoryData.dates}
            </Card.Text>
            <Card.Link href="#">Delete Memory</Card.Link>
          </Card.Body>
        </Card>


            <Card>
              <Card.Content>
                <Image floated='center' size='large' src={this.props.tripData.photos} />
                  <Card.Description textAlign="left"><p className="cardtext">{this.props.tripData.description}</p></Card.Description>
                  <br></br>
                  <Card.Description textAlign="left"><p className="cardtext">hotels: {this.props.tripData.hotels}</p></Card.Description>
                  <br></br>
                  <Card.Description textAlign="left"><p className="cardtext">restaurants: {this.props.tripData.restaurants}</p></Card.Description>
                  <br></br>
                  <Card.Description textAlign="left"><p className="cardtext">tours: {this.props.tripData.tours}</p></Card.Description>
                  <br></br>
                <Button onClick={this.onDeleteClick} >Delete this entry</Button>
              </Card.Content>
            </Card>

          )
        }

}




export default connect(null, null)(AllMemories)