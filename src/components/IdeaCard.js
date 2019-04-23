import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
// import firebase from '../config/Firebase'
// import "firebase/storage"

// const imageRef = firebase.storage().ref().child('images/1.jpg');

export default function IdeaCard(props) {
  // console.log(imageRef);
  // imageRef.getDownloadURL().then(url => console.log(url));
  const { title, idea } = props.idea;
  // console.log(props.idea)
  return (
    <Col sm="3">
      <Card bg="dark" text="white" style={{ border: '3px white solid', margin: 10 }}>
        {/* <Card.Img className="text-light"
        width="100%"
        src=""
        alt=""
      /> */}
        <Card.Body className="text-light">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{idea}</Card.Text>
          <Card.Link href="/idea"></Card.Link>
        </Card.Body>
      </Card>
    </Col>
  )
}