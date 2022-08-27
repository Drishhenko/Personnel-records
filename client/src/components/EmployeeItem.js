import React from 'react'
import { Card } from 'react-bootstrap'

const EmployeeItem = ({name, surname}) => {
  return (
    <Card>{`${name} ${surname}`}</Card>
  )
}

export default EmployeeItem
