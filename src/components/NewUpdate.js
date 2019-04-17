import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"

const updateRef = firebase.database().ref('updates');
const numImgRef = firebase.database().ref('numImgs/-Lcbxoi4WrlcOpcT6aFH/numOfImgs');
const imageRef = firebase.storage().ref('images');

export default class NewUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idea: '',
      title: '',
      description: '',
      selectedImage: ''
    }
  }

  fileSelectedHandler = (e) => {
    this.setState({ selectedImage: e.target.files[0] });
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'title') {
      this.setState({ title: fieldVal });
    } else if (fieldName === 'idea') {
      this.setState({ idea: fieldVal });
    } else if (fieldName === 'description') {
      this.setState({ description: fieldVal });
    } else {
      return
    }
  }

  submitUpdate = (e) => {
    e.preventDefault();
    let { title, idea, description, selectedImage } = this.state;
    numImgRef.once('value', snap => {
      let numImg = snap.val() + 1;
      numImgRef.set(numImg);
      let newImageRef = imageRef.child(numImg.toString())
      newImageRef.put(selectedImage).then(snapshot => {
        console.log('Uploaded a blob or file!');
      });
      let newUpdateRef = updateRef.push();
      newUpdateRef.set({
        id: numImg,
        title: title,
        idea: idea,
        description: description,
        picId: numImg
      })
    });
  }

  render() {
    return (
      <Form>
        <Container style={{ padding: '2%', marginTop: '5%', width: '45%', backgroundColor: 'rgb(53, 58, 63)', borderWidth: '5px', borderColor: 'white', borderStyle: 'solid', borderRadius: 25 }}>
          <Form.Group controlId="formGridTitle">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Which idea of yours are we talking about?</Form.Label>
              <Form.Control as="select" name="idea" onChange={this.handleChange}>
                <option>Choose...</option>
                <option>Dance Club</option>
                <option>Farmers Market</option>
                <option>Innovation Hub</option>
              </Form.Control>
            </Form.Group>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Title</Form.Label>
            <Form.Control as="textarea" rows="1" type="text" name="title" onChange={this.handleChange} />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" type="text" name="description" onChange={this.handleChange} />
          </Form.Group>

          {/* Image Upload Code */}
          <p>Got any photo(s)?</p>
          <Button as="input" type="file" variant="outline-secondary" onChange={this.fileSelectedHandler} />

          {/* Submit your Update */}
          <Button style={{ marginLeft: 10 }} variant="primary" type="submit" onClick={this.submitUpdate}>
            Submit
            </Button>
        </Container>
      </Form>
    )
  }
}