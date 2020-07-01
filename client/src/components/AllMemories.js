import React, { Component } from 'react'
import { connect } from 'react-redux';
import { memoryDeleteFetch } from '../actions/placeActions';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

class AllMemories extends Component {

  onDeleteClick = () => {
    const id =  this.props.memoryData.id;
    this.props.memoryDeleteFetch(id)
  }

  render(){
    return(
      <Card className = "memory-card" bg="warning" style={{ minWidth: '18rem' }}>
        <Card.Body>
          {this.props.memoryData.description}
        </Card.Body>
          
        <Link to="#" onClick={this.onDeleteClick}><small>Delete</small></Link>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  memoryDeleteFetch: memoryID => dispatch(memoryDeleteFetch(memoryID))
})


export default connect(null, mapDispatchToProps)(AllMemories)