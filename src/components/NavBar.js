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
      <Navbar style={{backgroundColor: '#5680E9'}} variant="dark">
        <Navbar.Brand style={{ color: 'white' }} href="/">niimo</Navbar.Brand>
        <Nav.Link style={{ color: 'white' }} href="/newidea">New Idea</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/newupdate">New Update</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/feed">News Feed</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/map">Map</Nav.Link>
      </Navbar>
    )
  }
}

export default withRouter(NavBar);