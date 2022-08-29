import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'
import home from '../icon-home.svg'

const NavBar = () => {
  const auth = false

  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="/">
        <img
              alt=""
              src={home}
              width="70"
              height="70"
            //   className="d-inline-block align-top"
            />
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          {auth ? (
            <Navbar.Text>
              Signed in as: <a href="#login">Admin</a>
            </Navbar.Text>
          ) : (
            <Button disabled >Sign in as Admin</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
