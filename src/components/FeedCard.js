import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import firebase from '../config/Firebase'
import "firebase/storage"

export default class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
      picURL: ''
    }
  }

  componentWillMount() {
    const { picId } = this.state.info;
    const imageRef = firebase.storage().ref().child(`images/${picId}`);
    imageRef.getDownloadURL().then(url => {
      this.setState({picURL: url});
    })
  }

  render() {
    const { title, description, id, isIdea } = this.state.info;
    let href;
    isIdea ? href = `/idea/${id}` : href = `/update/${id}`;
    return (
      <Col sm="3">
        <Card bg="dark" text="white" style={{ border: '3px white solid', margin: 10 }}>
          <Card.Img className="text-light"
            width="100%"
            src={this.state.picURL}
            alt="picture"
          />
          <Card.Body className="text-light">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Link href={href}>Read More</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
