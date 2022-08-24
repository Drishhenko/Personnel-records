import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import DepartmentItem from './DepartmentItem'
import EmployeeItem from './EmployeeItem'

const TabsPanel = () => {
  return (
    <Tabs>
        <Tab eventKey="Departments" title="Departments">
            <DepartmentItem/>
            <DepartmentItem/>
            <DepartmentItem/>
        </Tab>
        <Tab eventKey="Employees" title="Employees">
            <EmployeeItem/>
            <EmployeeItem/>
            <EmployeeItem/>
        </Tab>
    </Tabs>
  )
}

export default TabsPanel
