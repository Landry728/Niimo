import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"

const ideaRef = firebase.database().ref('ideas');
const numImgRef = firebase.database().ref('numImgs/-Lcbxoi4WrlcOpcT6aFH/numOfImgs');
const imageRef = firebase.storage().ref('images');

export default class NewIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      idea: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      selectedImages: [],
      imgNum: ''
    }
  }

  fileSelectedHandler = (e) => {
    let selectedImages = [];
    for(let i = 0; i < e.target.files.length; i++) {
      selectedImages.push(e.target.files[i]);
    }
    this.setState({selectedImages});
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'title') {
      this.setState({ title: fieldVal });
    } else if (fieldName === 'idea') {
      this.setState({ idea: fieldVal });
    } else if (fieldName === 'address') {
      this.setState({ address: fieldVal });
    } else if (fieldName === 'city') {
      this.setState({ city: fieldVal });
    } else if (fieldName === 'state') {
      this.setState({ state: fieldVal })
    } else if (fieldName === 'zip') {
      this.setState({ zip: fieldVal });
    } else {
      return
    }
  }

  submitIdea = (e) => {
    e.preventDefault();
    let { title, idea, address, city, state, zip, selectedImages } = this.state;
  //   numImgRef.once('value', snap => {
  //     let numImg = snap.val() + 1;
  //     numImgRef.set(numImg);
  //     let newImageRef = imageRef.child(numImg.toString())
  //     newImageRef.put(selectedImage).then(snapshot => {
  //       console.log('Uploaded a blob or file!');
  //     });
  //     let newIdeaRef = ideaRef.push();
  //     newIdeaRef.set({
  //       id: numImg,
  //       title: title,
  //       description: idea,
  //       address: address,
  //       city: city,
  //       state: state,
  //       zip: zip,
  //       picId: numImg,
  //       isIdea: true
  //     })
  //   });
  }

  render() {
    return (
      <Form>
        <Container style={{ padding: '2%', marginTop: '5%', width: '45%', backgroundColor: '#5680E9', borderWidth: '5px', borderColor: '#C1C8E4', borderStyle: 'solid', borderRadius: 25 }}>
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
              <Button style={{ backgroundColor: '#B3C6F5', marginRight: '2vw' }} as="input" type="file" multiple variant="outline-secondary" onChange={this.fileSelectedHandler} />
            </Col>
            <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <Button style={{ backgroundColor: '#4B3572', marginTop: '4vh', padding: '1vh', }} size= 'lg' variant="secondary" type="submit" onClick={this.submitIdea}>
                Submit 
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    )
  }
}
