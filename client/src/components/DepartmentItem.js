import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Button, Row, Badge } from 'react-bootstrap'

const DepartmentItem = ({ department, handleDelete, employees }) => {
  const navigate = useNavigate()

  const onDeleteClick = (e) => {
    e.stopPropagation()
    handleDelete(department.id)
  }
  const headOfDepartment =
    department &&
    department.stuff.find(
      (employee) => employee.position === 'Head of department'
    )

  return (
    <Card
      className="mb-2"
      style={{ cursor: 'pointer' }}
      onClick={() => navigate('/department/' + department.id)}
    >
      <Row>
        <Col>
          <Card.Body>
            <Card.Title>{department.title}</Card.Title>
            {headOfDepartment && (
              <Card.Subtitle className="mb-2 text-muted">
                {`Head of department: ${headOfDepartment.name} ${headOfDepartment.surname}`}
              </Card.Subtitle>
            )}
            <Card.Text>
              {`Created At: ${new Date(
                Date.parse(department.createdAt)
              ).toLocaleString()}`}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col
          xs={4}
          className="d-flex justify-content-center align-items-center"
        >
          <Badge bg="primary" pill>
            {employees.length} employees
          </Badge>
        </Col>
        <Col
          xs={2}
          className="d-flex justify-content-center align-items-center"
        >
          <Button variant="danger" onClick={onDeleteClick}>
            Delete
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

export default DepartmentItem
