import React from 'react'
import { Card } from 'react-bootstrap'

const DepartmentItem = ({ department }) => {
  const { title, createdAt } = department
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Created At: {new Date(createdAt).toString()}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default DepartmentItem
