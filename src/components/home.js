import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.jpg'

export default class Home extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: '7%', width: '100%', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <img src={Logo} style={{ height: 300 }} className='rounded-circle' />
        </div>
        <br />
        <div style={{ width: '100%' }}>
          <div style={{ width: '60%', marginLeft: "20%", marginRight: "20%" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aptent senectus, nam iaculis sociis curabitur congue interdum conubia.
                    </div>
        </div>
        <br /><br /><br /><br /><br /><br />
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/map" style={{ marginRight: 20 }}><Button size="lg">Find an Idea for You</Button></Link>
            <Link to="/map" ><Button src="localhost:3000/map" size="lg">Maps are the future</Button></Link>
          </Col>
        </Row>



      </>
    )
  }
}