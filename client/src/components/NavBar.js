import React, { useState } from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import home from '../icon-home.svg'
import { signIn } from '../http/authAPI'
import ModalAuth from './modals/ModalAuth'

const NavBar = ({ token, setToken }) => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const handleAuth = ({ login, password }) => {
    signIn(login, password)
      .then((data) => {
        console.log(localStorage.getItem('token'))
        setToken(localStorage.getItem('token'))
        handleClose()
      })
      .catch((err) => console.log(err))
  }

  const logOut = () => {
    localStorage.removeItem('token')
    setToken('')
  }

  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="/">
          <img alt="" src={home} width="70" height="70" />
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          {token ? (
            <>
              <Navbar.Text>Signed in as: Admin</Navbar.Text>
              <Button 
              onClick={logOut}
              >Log out</Button>
            </>
          ) : (
            <Button onClick={handleShow}>Sign in as Admin</Button>
          )}
        </Navbar.Collapse>
      </Container>
      <ModalAuth
        handleClose={handleClose}
        show={show}
        handleAuth={handleAuth}
      />
    </Navbar>
  )
}

export default NavBar
