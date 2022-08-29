import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ListGroup } from 'react-bootstrap'

const Dashboard = ({ employees, departments }) => {
  const navigate = useNavigate()

  return (
    <div>
      <ListGroup className="mt-3">
        <ListGroup.Item variant="primary">Top 5 departments</ListGroup.Item>
        {departments &&
          departments
            .sort((a, b) => b.stuff.length - a.stuff.length)
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
            .sort((a, b) => a.createdAt - b.createdAt)
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
