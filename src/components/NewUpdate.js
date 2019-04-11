import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

export default class NewUpdate extends Component {
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
      console.log(this.state)
    }
  
    render() {
      return (
        <Form>
          <Container style={{ padding: '2%', marginTop: '5%', width: '45%', backgroundColor: 'rgb(53, 58, 63)', borderWidth: '5px', borderColor: 'white', borderStyle: 'solid', borderRadius: 25 }}>
            <Form.Group controlId="formGridTitle">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Which idea of yours are we talking about?</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>Dance Club</option>
                  <option>Farmers Market</option>
                  <option>Innovation Hub</option>
                </Form.Control>
              </Form.Group>
            </Form.Group>
  
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Title</Form.Label>
              <Form.Control as="textarea" rows="1" type="text" name="idea" onChange={this.handleChange.bind(this)} />
            </Form.Group>
  
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" type="text" name="Description" onChange={this.handleChange.bind(this)} />
            </Form.Group>

            {/* Image Upload Code */}
            <p>Got any photo(s)?</p>
            <Button as="input" type="file" marginTop='10' variant="outline-secondary" />

            {/* Submit your Update code */}
            <Button style={{ marginLeft:10 }} variant="primary" type="submit" onClick={this.submitIdea.bind(this)}>
            Submit
            </Button>
          </Container>
        </Form>
  
      )
    }
  }
  