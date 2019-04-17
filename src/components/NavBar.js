import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return null
    }
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">niimo</Navbar.Brand>
        <Nav.Link style={{ color: 'white' }} href="/newidea">New Idea</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/newupdate">New Update</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/feed">News Feed</Nav.Link>
        <Nav.Link style={{ color: 'white' }} href="/map">Map</Nav.Link>
      </Navbar>
    )
  }
}

export default withRouter(NavBar);