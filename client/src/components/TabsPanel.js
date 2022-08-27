import React, { useState } from 'react'
import { Button, Tab, Tabs } from 'react-bootstrap'
import DepartmentItem from './DepartmentItem'
import ModalEmployee from './ModalEmployee'
import EmployeeItem from './EmployeeItem'
import { createEmployee } from '../http/employeeAPI'
import ModalDepartment from './ModalDepartment'
import { createDepartment } from '../http/departmentAPI '

const TabsPanel = ({
  fetchEmployees,
  fetchDepartments,
  employees,
  departments,
}) => {
  const [activeModal, setActiveModal] = useState('')
  const handleClose = () => setActiveModal('')

  const handleAddEmployee = ({ name, surname, position }) => {
    createEmployee({ name, surname, position }).then((data) => {
      handleClose()
      fetchEmployees()
    })
  }

  const handleAddDepartment = ({ title, description }) => {
    createDepartment({ title, description }).then((data) => {
      handleClose()
      fetchDepartments()
    })
  }

  console.log({ employees, departments })
  return (
    <Tabs>
      <Tab eventKey="Departments" title="Departments">
        <Button variant="success" onClick={() => setActiveModal('department')}>
          +
        </Button>
        <ModalDepartment
          show={activeModal === 'department'}
          handleClose={handleClose}
          handleAdd={handleAddDepartment}
        />
        {departments &&
          departments.map((department) => <DepartmentItem department={department}  key={department.id} />)}
      </Tab>
      <Tab eventKey="Employees" title="Employees">
        <Button variant="success" onClick={() => setActiveModal('employee')}>
          +
        </Button>
        <ModalEmployee
          show={activeModal === 'employee'}
          handleClose={handleClose}
          handleAdd={handleAddEmployee}
        />
        {employees && employees.map(({name, surname, id}) => <EmployeeItem name={name} surname={surname} key={id} />)}
      </Tab>
    </Tabs>
  )
}

export default TabsPanel
