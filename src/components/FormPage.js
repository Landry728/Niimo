import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import firebase from '../config/Firebase'
import "firebase/database"

const locations = firebase.database().ref('locations');

export default class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      lat: '',
      lon: ''
    }
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'name') {
      this.setState({ name: fieldVal });
    } else if (fieldName === 'address') {
      this.setState({ address: fieldVal });
    } else if (fieldName === 'city') {
      this.setState({ city: fieldVal });
    } else if (fieldName === 'state') {
      this.setState({ state: fieldVal })
    } else if (fieldName === 'zip') {
      this.setState({ zip: fieldVal });
    } else if (fieldName === 'lat') {
      this.setState({ lat: fieldVal});
    } else if (fieldName === 'lon') {
      this.setState({ lon: fieldVal });
    } else {
      return
    }
  }

  submit = (e) => {
    e.preventDefault();
    let { name, address, city, state, zip, lat, lon } = this.state;
    let newLocation = locations.push();
    newLocation.set({
      name: name,
      address: address,
      city: city,
      state: state,
      zip: zip,
      lat: lat,
      lon: lon
    });
  }

  render() {
    return (
      <Form>
        <Container style={{ padding: '2%', marginTop: '5%', width: '45%', backgroundColor: '#5680E9', borderWidth: '5px', borderColor: '#C1C8E4', borderStyle: 'solid', borderRadius: 25 }}>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control rows="1" type="text" name="name" onChange={this.handleChange} />
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
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Lat</Form.Label>
              <Form.Control type="text" name="lat" onChange={this.handleChange} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Lon</Form.Label>
              <Form.Control type="text" name="lon" onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          {/* Submit your Update */}
          <Button style={{ backgroundColor: '#4B3572', marginLeft: 10 }} variant="primary" type="submit" onClick={this.submit}>
            Submit
          </Button>
        </Container>
      </Form>
    )
  }
}
