import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../App.css'

class NavBar extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return null
    }
    return (
      <Navbar  className="Navv" style={{zIndex: 10}}>
        <Navbar.Brand style={{ color: 'white' }} href="/">Niimo</Navbar.Brand>
        <Nav>
        <Nav.Link style={{ color: 'white' }} href="/newidea">Create</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/feed">Explore</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/map">Locate</Nav.Link>
        </Nav>
        <div style={{marginLeft: '79%', marginRight: '3%'}}class="col-auto">
        <Nav>
        <Nav.Link className="justify-content-end" style={{ color: 'white',  }} href="/signin">Sign in</Nav.Link>
        </Nav>
        </div>
        </Navbar>

    )
  }
}

export default withRouter(NavBar);