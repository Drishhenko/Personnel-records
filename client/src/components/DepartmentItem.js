import React from 'react'
import { Card, Col, Button, Row, Badge } from 'react-bootstrap'

const DepartmentItem = ({ department, handleDelete, employees }) => {
  return (
    <Card className="mb-2">
      <Row>
        <Col >
          <Card.Body>
            <Card.Title>{department.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Глава отдела
            </Card.Subtitle>
            <Card.Text>
              Created At:
              {new Date(Date.parse(department.createdAt)).toLocaleString()}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col xs={4} className="d-flex justify-content-center align-items-center">
          <Badge bg="primary"  pill>
            {employees.length} employees
          </Badge>
        </Col>
        <Col xs={2} className="d-flex justify-content-center align-items-center">
          <Button variant="danger" onClick={() => handleDelete(department.id)}>
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default DepartmentItem
