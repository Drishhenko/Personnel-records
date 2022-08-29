import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Dashboard from '../components/Dashboard'
import TabsPanel from '../components/TabsPanel'
import { getEmployees } from '../http/employeeAPI'
import { getDepartments } from '../http/departmentAPI '

const MainPage = () => {
  const [employees, setEmployees] = useState(null)
  const [departments, setDepartments] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchEmployees = () => {
    setIsLoading(true)
    getEmployees().then((data) => {
      setEmployees(data)
      setIsLoading(false)
    })
  }
  const fetchDepartments = () => {
    setIsLoading(true)

    getDepartments().then((data) => {
      setDepartments(data)
      setIsLoading(false)
    })
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
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <Row>
          <Col>
            <Dashboard employees={employees} departments={departments} />
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
      )}
    </Container>
  )
}

export default MainPage
