import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, Row, Col } from 'react-bootstrap'

const EmployeeItem = ({ employee, department, handleDelete, token }) => {
  const navigate = useNavigate()

  const onDeleteClick = (e) => {
    e.stopPropagation()
    handleDelete(department.id)
  }
  return (
    <Card
      className="mb-2"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/employee/' + employee.id)}
    >
      <Row>
        <Col xs={10}>
          <Card.Body>
            <Card.Title>{`${employee.name} ${employee.surname}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {department.title}
            </Card.Subtitle>
            <Card.Text>
              {`Created At: ${new Date(
                Date.parse(employee.createdAt)
              ).toLocaleString()}`}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          {token && (
            <Button variant="outline-danger" onClick={onDeleteClick}>
              Delete
            </Button>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default EmployeeItem
