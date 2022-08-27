import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'

const EmployeeItem = ({ employee, department, handleDelete }) => {


  return (
    <Card className='mb-2'>
      <Row>
        <Col xs={10}>
          <Card.Body>
            <Card.Title>{`${employee.name} ${employee.surname}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {department.title}
            </Card.Subtitle>
            <Card.Text>
              Created At:{' '}
              {new Date(Date.parse(employee.createdAt)).toLocaleString()}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <Button variant="danger" onClick={() => handleDelete(employee.id)}>
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default EmployeeItem
