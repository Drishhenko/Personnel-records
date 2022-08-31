import React, { useState } from 'react'
import { Button, Modal, Form, Alert } from 'react-bootstrap'

const ModalEmployee = ({
  show,
  handleClose,
  handleAdd,
  departments,
  error,
}) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [departmentId, setDepartmentId] = useState('')

  const [position, setPosition] = useState('Simple employee')

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new employee</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Surname"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label> Choose department</Form.Label>
            <Form.Control
              as="select"
              defaultValue={departmentId}
              onChange={(e) => setDepartmentId(e.target.value)}
            >
              <option value="">Not choosen</option>
              {departments &&
                departments.map((department) => (
                  <option value={department.id} key={department.id}>
                    {department.title}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label> Choose position</Form.Label>
            <Form.Control
              as="select"
              defaultValue={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="Simple employee">Simple employee</option>
              <option value="Head of department">Head of department</option>
            </Form.Control>
          </Form.Group>
        </Form>
        {error && error.map(err => <Alert variant="danger">{err.msg}</Alert>)}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          disabled={!name || !surname || !departmentId}
          variant="primary"
          onClick={() => handleAdd({ name, surname, position, departmentId })}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEmployee
