import React, { useState } from 'react'
import { Button, Tab, Tabs, Form } from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import DepartmentItem from './DepartmentItem'
import ModalEmployee from './ModalEmployee'
import EmployeeItem from './EmployeeItem'
import { createEmployee, deleteEmployee } from '../http/employeeAPI'
import ModalDepartment from './ModalDepartment'
import { createDepartment, deleteDepartment } from '../http/departmentAPI '

const TabsPanel = ({
  fetchEmployees,
  fetchDepartments,
  employees,
  departments,
}) => {
  const [activeModal, setActiveModal] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const handleClose = () => setActiveModal('')

  const handleAddEmployee = ({ name, surname, position, departmentId }) => {
    createEmployee({ name, surname, position, departmentId }).then((data) => {
      handleClose()
      fetchEmployees()
      fetchDepartments()
    })
  }

  const handleAddDepartment = ({ title, description }) => {
    createDepartment({ title, description }).then((data) => {
      handleClose()
      fetchDepartments()
    })
  }

  const handleDeleteEmployee = (id) => {
    deleteEmployee(id).then((data) => {
      handleClose()
      fetchEmployees()
    })
  }

  const handleDeleteDepartment = (id) => {
    deleteDepartment(id).then((data) => {
      handleClose()
      fetchDepartments()
    })
  }

  return (
    <Tabs fill className="mt-3">
      <Tab eventKey="Departments" title="Departments">
        <div className="d-flex justify-content-end">
          <Button
            className="my-3"
            variant="success"
            onClick={() => setActiveModal('department')}
          >
            Add new
          </Button>
        </div>
        <ModalDepartment
          show={activeModal === 'department'}
          handleClose={handleClose}
          handleAdd={handleAddDepartment}
        />
        {departments &&
          departments.map((department) => (
            <DepartmentItem
              employees={employees.filter(
                (item) => item.departmentId === department.id
              )}
              department={department}
              handleDelete={handleDeleteDepartment}
              key={department.id}
            />
          ))}
      </Tab>
      <Tab eventKey="Employees" title="Employees">
        <Form className="d-flex my-3">
          <Form.Control
            value={searchValue}
            type="search"
            placeholder="Search by name"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <Button
            className="text-nowrap"
            variant="success"
            disabled={!departments || !departments.length}
            onClick={() => setActiveModal('employee')}
          >
            Add new
          </Button>
        </Form>
        <ModalEmployee
          departments={departments}
          show={activeModal === 'employee'}
          handleClose={handleClose}
          handleAdd={handleAddEmployee}
        />
        {employees &&
          departments &&
          employees
            .filter(
              (item) =>
                item.name.includes(searchValue) ||
                item.surname.includes(searchValue)
            )
            .map((employee) => (
              <EmployeeItem
                key={employee.id}
                employee={employee}
                handleDelete={handleDeleteEmployee}
                department={departments.find(
                  (department) => department.id === employee.departmentId
                )}
              />
            ))}
      </Tab>
    </Tabs>
  )
}

export default TabsPanel
