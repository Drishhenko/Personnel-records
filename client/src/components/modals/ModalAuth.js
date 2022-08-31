import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

const ModalAuth = ({ handleClose, show, handleAuth }) => {
    
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Log in as Admin</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              placeholder="login"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
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
          onClick={() => handleAuth({ login, password })}
        >
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAuth
