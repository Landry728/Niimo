import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.jpg'

export default class Home extends Component {
  render() {
    return (
      <>
        <div style={{ width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <img src={Logo} style={{ marginTop: '15%', height: 300 }} className='rounded-circle' />
        </div>
        <br />
        <div style={{ width: '100%' }}>
          <div style={{ width: '60%', marginTop: '10%', marginLeft: "20%", marginRight: "20%", marginBottom: '7%', color: 'white'}}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aptent senectus, nam iaculis sociis curabitur congue interdum conubia.
          </div>
        </div>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/feed" style={{ marginRight: 20 }}><Button size="lg">Find an Idea</Button></Link>
            <Link to="/map" ><Button size="lg">Find a Location</Button></Link>
          </Col>
        </Row>
      </>
    )
  }
}