import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import firebase from '../config/Firebase'
import "firebase/storage"
import '../App.css'


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
      this.setState({ picURL: url });
    })
  }

  render() {
    const { title, description, id, isIdea } = this.state.info;
    let href;
    isIdea ? href = `/idea/${id}` : href = `/update/${id}`;
    return (
      <Col sm="4">
          <Card bg="" className="feedCard" style={{ padding: '2%', borderColor: 'transparent'}}>
            <Card.Img className="text-light"
              width="100%"
              src={this.state.picURL}
              alt="picture"
            />
            <Card.Body className="text-dark">
              <Card.Title>{title}</Card.Title>
              <Card.Text className="text-truncate">{description}</Card.Text>
              <Card.Link style={{ onHover: 'bold', color: '#4B3572' }} href={href}>Read More</Card.Link>
            </Card.Body>
          </Card>
      </Col>
    )
  }
}