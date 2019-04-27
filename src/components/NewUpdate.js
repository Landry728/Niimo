import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"

const updateRef = firebase.database().ref('ideas');
const numImgRef = firebase.database().ref('numImgs/-Lcbxoi4WrlcOpcT6aFH/numOfImgs');
const imageRef = firebase.storage().ref('images');

export default class NewUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      selectedImages: [],
    }
  }

  fileSelectedHandler = (e) => {
    // Select multiple images
    let selectedImages = [];
    for(let i = 0; i < e.target.files.length; i++) {
      selectedImages.push(e.target.files[i]);
    }
    this.setState({selectedImages});
  }

  handleChange = (e) => {
    // Sort thru form input and setState for right field
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'title') {
      this.setState({ title: fieldVal });
    } else if (fieldName === 'idea') {
      this.setState({ update: fieldVal });
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
    let { title, description, selectedImages } = this.state;
    numImgRef.once('value', snap => {
      // Upload Images
      let numImg = snap.val() + 1;
      let imgIds = [];
      selectedImages.map((img, i) => {
        let newNum = numImg + i;
        imgIds.push(newNum);
        numImgRef.set(newNum);
        let newImageRef = imageRef.child(newNum.toString())
        newImageRef.put(img).then(snapshot => {
          console.log('Uploaded a blob or file!');
        });
      })
      // Save Post
      let newIdeaRef = updateRef.push();
      newIdeaRef.set({
        id: numImg,
        title: title,
        description: description,
        picId: imgIds,
        ideaId: this.props.Id,
        isIdea: false
      })
    });
  }

  render() {
    return (
      <Form>
        <Container style={{ padding: '2%', marginTop: '5%', width: '45%', backgroundColor: 'white', borderStyle: 'solid', borderWidth: '1px', borderColor: '#BBBDC0', borderRadius: 15,}}>
          <Form.Group controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="Enter Title" onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" type="text" name="description" onChange={this.handleChange} />
          </Form.Group>
          <Row style={{display: 'flex'}}>
            {/* Image Upload Code */}
            <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <p>Got any photo(s)?</p>
              <Button style={{ backgroundColor: '#B3C6F5', marginRight: '2vw' }} as="input" type="file" multiple variant="outline-secondary" onChange={this.fileSelectedHandler} />
            </Col>
            <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
              <Button style={{ backgroundColor: '#272E3C', marginTop: '4vh', padding: '1vh', }} size= 'lg' variant="secondary" type="submit" onClick={this.submitIdea}>
                Submit 
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    )
  }
}
