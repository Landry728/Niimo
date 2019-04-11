import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NavBar extends Component {
  render() {
    if (this.props.location.pathname === '/') {
      return null
    }
    return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">niimo</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
    )
  }
}

export default withRouter(NavBar)