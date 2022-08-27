import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const ModalDepartments = ({ show, handleClose, handleAdd }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new department </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => handleAdd({ title, description })}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDepartments
