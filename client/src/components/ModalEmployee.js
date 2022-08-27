import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const ModalEmployee = ({ show, handleClose, handleAdd }) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
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
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => handleAdd({ name, surname, position })}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEmployee
