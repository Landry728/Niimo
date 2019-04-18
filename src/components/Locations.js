import React, { Component } from 'react'
import Map from './MapContainer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class Locations extends Component {
  render() {
    const style = {
      'marginLeft': 'auto',
      'marginRight': 'auto',
      'marginTop': '10vh'
    }
    return (
      <>
        <Form>
        <Container style={{ padding: '2%', marginTop: '5%', width: '45%', backgroundColor: 'rgb(53, 58, 63)', borderWidth: '5px', borderColor: 'white', borderStyle: 'solid', borderRadius: 25 }}>
          <Form.Group controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter Title" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>What's Your Idea?</Form.Label>
            <Form.Control as="textarea" rows="3" type="text" name="idea" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" type="text" name="address" onChange={this.handleChange} />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" name="state" onChange={this.handleChange}>
                <option>Choose...</option>
                <option>Alabama</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="number" name="zip" onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>
          <Row style={{display: 'flex'}}>
            {/* Image Upload Code */}
            <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p>Got any photo(s)?</p>
              <Button style={{ marginRight: '2vw' }} as="input" type="file" variant="outline-secondary" onChange={this.fileSelectedHandler} />
            </Col>
            <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <Button style={{ marginTop: '2vh', padding: '1vh' }} variant="primary" type="submit" onClick={this.submitIdea}>
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
        <div style={style}>
          <Button />
          <Button />
        </div>
        <Map />
      </>
    )
  }
}
