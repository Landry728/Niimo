import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class NavBar extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return null
    }
    return (
        <Navbar bg="dark" variant="dark">
        
          <Navbar.Brand href="/">niimo</Navbar.Brand>
          <Nav.Link>New Idea</Nav.Link>
          <Nav.Link>Update Your Idea</Nav.Link>
          
     </Navbar>
    )
  }
}

export default withRouter(NavBar)