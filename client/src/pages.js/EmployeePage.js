import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOneEmployee } from '../http/employeeAPI'
import Beth from '../icon-beth-smith.svg'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import { getOneDepartment } from '../http/departmentAPI'

const EmployeePage = () => {
  const [employee, setEmployee] = useState(null)

  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    getOneEmployee(id).then((employee) => {
      getOneDepartment(employee.departmentId).then((department) =>
        setEmployee({ ...employee, departmentName: department.title })
      )
    })
  }, [id])

  return employee ? (
    <Card>
      <Row>
        <Col>
          <Card.Img variant="top" src={Beth} width="200px" height="200px" />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{`${employee.name} ${employee.surname}`}</Card.Title>
            <Card.Subtitle
              style={{ cursor: 'pointer' }}
              onClick={() => navigate('/department/' + employee.departmentId)}
            >
              {employee.departmentName}
            </Card.Subtitle>
            <Card.Text>{`Created At: ${new Date(
              Date.parse(employee.createdAt)
            ).toLocaleString()}`}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  ) : (
    <Spinner animation="border" />
  )
}

export default EmployeePage
