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
      selectedImage: '',
      numImgs: 0
    }
  }

  fileSelectedHandler = (e) => {
    this.setState({selectedImage: e.target.files[0]});
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
    let { title, idea, address, city, state, zip, selectedImage, numImgs } = this.state;
    numImgRef.on('value', snap => {
      let numImg = snap.val() + 1;
      console.log(numImg)
      this.setState({numImgs: numImg});
      // console.log(`num of imgs: ${newNum}`)
      // let newImageRef = imageRef.child(newNum.toString())
      // newImageRef.put(selectedImage).then(snapshot => {
      //   console.log('Uploaded a blob or file!');
      // });
      // let newIdeaRef = ideaRef.push();
      // newIdeaRef.set({
      //   title: title,
      //   idea: idea,
      //   address: address,
      //   city: city,
      //   state: state,
      //   zip: zip,
      //   picId: newNum
      // })
    });
  }

  render() {
    return (
      <Form>
        <h1>{this.state.numImgs}</h1>
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
    )
  }
}
