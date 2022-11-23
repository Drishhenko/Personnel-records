import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { getEmployees } from '../http/employeeAPI'
import { getDepartments } from '../http/departmentAPI'
import { ListGroup } from 'react-bootstrap'

const Dashboard = () => {
  const navigate = useNavigate()
  const [departments, setDepartments] = useState(null)
  const [employees, setEmployees] = useState(null)

  const fetchEmployees = () => {
    const sort = 'last5'
    getEmployees(sort).then((data) => {
      setEmployees(data)
    })
  }
  const fetchDepartments = () => {
    const sort = 'top5'
    getDepartments(sort).then((data) => {
      setDepartments(data)
    })
  }

  useEffect(() => {
    if (!employees) {
      fetchEmployees()
    }
    if (!departments) {
      fetchDepartments()
    }
  })


  return (
    <div>
      <ListGroup className="mt-3">
        <ListGroup.Item variant="primary">Top 5 departments</ListGroup.Item>
        {departments &&
          departments
            // .sort((a, b) => b.stuff.length - a.stuff.length)
            .map((department) => (
              <ListGroup.Item
                key={department.id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/department/' + department.id)}
              >
                {department.title} <br />
                Employees: {department.stuff.length}
              </ListGroup.Item>
            ))
            .slice(0, 5)}
      </ListGroup>
      <ListGroup className="mt-2">
        <ListGroup.Item variant="primary">
          {' '}
          5 last added employees
        </ListGroup.Item>
        {employees &&
          employees
            // .sort((a, b) =>  new Date(b.createdAt) - new Date(a.createdAt))
            .map((employee) => (
              <ListGroup.Item
                key={employee.id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/employee/' + employee.id)}
              >
                {`${employee.name} ${employee.surname}`}{' '}
              </ListGroup.Item>
            ))
            .slice(0, 5)}
      </ListGroup>
    </div>
  )
}

export default Dashboard
