import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Dashboard = () => {
  return (
    <div>
      <ListGroup>
        Top - 5 departments
        <ListGroupItem style={{cursor:'pointer'}}>1</ListGroupItem>
        <ListGroupItem>2</ListGroupItem>
        <ListGroupItem>3</ListGroupItem>
        <ListGroupItem>4</ListGroupItem>
        <ListGroupItem>5</ListGroupItem>
      </ListGroup>
      <ListGroup >
        5 last added employees
        <ListGroupItem>1</ListGroupItem>
        <ListGroupItem>2</ListGroupItem>
        <ListGroupItem>3</ListGroupItem>
        <ListGroupItem>4</ListGroupItem>
        <ListGroupItem>5</ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default Dashboard
