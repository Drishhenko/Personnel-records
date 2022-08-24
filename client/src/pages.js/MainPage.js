import React from 'react'
import Dashboard from '../components/Dashboard'
import { Col, Container, Row } from 'react-bootstrap'
import TabsPanel from '../components/TabsPanel'

const MainPage = () => {
  return (
    <Container fluid>
        <Row>
            <Col className='mt-5'><Dashboard /></Col>
            <Col xs = {9}><TabsPanel/></Col>
        </Row>
    </Container>
  )
}

export default MainPage
