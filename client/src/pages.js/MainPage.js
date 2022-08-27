import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import { getEmployees } from '../http/employeeAPI'
import { getDepartments } from '../http/departmentAPI '
import { Col, Container, Row } from 'react-bootstrap'
import TabsPanel from '../components/TabsPanel'

const MainPage = () => {
  const [employees, setEmployees] = useState(null)
  const [departments, setDepartments] = useState(null)

  const fetchEmployees = () => {
    getEmployees().then((data) => setEmployees(data))
  }
  const fetchDepartments = () => {
    getDepartments().then((data) => setDepartments(data))
  }

  useEffect(() => {
    if (!employees) {
      fetchEmployees()
    }
    if (!departments) {
      fetchDepartments()
    }
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col className="mt-5">
          <Dashboard />
        </Col>
        <Col xs={9}>
          <TabsPanel
            fetchEmployees={fetchEmployees}
            fetchDepartments={fetchDepartments}
            employees={employees}
            departments={departments}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MainPage
