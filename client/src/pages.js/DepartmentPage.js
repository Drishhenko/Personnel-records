import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOneDepartment } from '../http/departmentAPI '
import { Card, Col, Row, ListGroup, Spinner } from 'react-bootstrap'

const DepartmentPage = () => {
  const [department, setDepartment] = useState(null)

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    getOneDepartment(id).then((data) => setDepartment(data))
  }, [])

  const headOfDepartment =
    department &&
    department.stuff.find(
      (employee) => employee.position === 'Head of department'
    )

  return department ? (
    <Card>
      <Card.Body>
        <Card.Title>{department.title}</Card.Title>
        <Row>
          <Col>
            <Card.Subtitle>{department.description}</Card.Subtitle>
          </Col>
          <Col>
            <ListGroup>
              {headOfDepartment && (
                <ListGroup.Item
                  variant="primary"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate('/employee/' + headOfDepartment.id)}
                >
                  {`Head of department: ${headOfDepartment.name} ${headOfDepartment.surname}`}
                </ListGroup.Item>
              )}
              {department.stuff.length &&
                department.stuff.map((employee) => (
                  <ListGroup.Item
                    key={employee.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate('/employee/' + employee.id)}
                  >
                    {`${employee.name} ${employee.surname} `}
                  </ListGroup.Item>
                ))}
            </ListGroup>
          </Col>
        </Row>
        <Card.Text>
          {`Created At: ${new Date(
            Date.parse(department.createdAt)
          ).toLocaleString()}`}
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Spinner animation="border" />
  )
}

export default DepartmentPage
