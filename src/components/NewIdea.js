import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import * as firebase from 'firebase'

export default class NewIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      idea: '',
      address: '',
      city: '',
      state: 'Alabama',
      zip: ''
    }
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'title') {
      this.setState({title: fieldVal});
    } else if (fieldName === 'idea') {
      this.setState({idea: fieldVal});
    } else if (fieldName === 'address') {
      this.setState({address: fieldVal});
    } else if (fieldName === 'city') {
      this.setState({city: fieldVal});
    } else if (fieldName === 'zip') {
      this.setState({zip: fieldVal});
    } else {
      return
    }
  }

  submitIdea = () => {
    fetch('https://us-central1-niimo-1554735151740.cloudfunctions.net/helloWorld',{
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
  }
    )
    .then(res => console.log(res));
  }

  render() {
    return (
      <Form>
        <Container style={{ padding: '2%', marginTop: '5%', width: '45%', backgroundColor: 'rgb(53, 58, 63)', borderWidth: '5px', borderColor: 'white', borderStyle: 'solid', borderRadius: 25 }}>
          <Form.Group controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter Title" onChange={this.handleChange.bind(this)} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>What's Your Idea?</Form.Label>
            <Form.Control as="textarea" rows="3" type="text" name="idea" onChange={this.handleChange.bind(this)} />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" type="text" name="address" onChange={this.handleChange.bind(this)} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" name="city" onChange={this.handleChange.bind(this)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option>Alabama</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="number" name="zip" onChange={this.handleChange.bind(this)} />
            </Form.Group>
          </Form.Row>

          {/* Image Upload Code */}
          <p>Got any photo(s)?</p>
            <Button as="input" type="file" marginTop='10' variant="outline-secondary" />

          <Button variant="primary" type="button" onClick={this.submitIdea.bind(this)}>
            Submit
          </Button>
        </Container>
      </Form>

    )
  }
}
