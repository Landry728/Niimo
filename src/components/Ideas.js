import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"
import FeedCard from './CommentCard'

const commentsRef = firebase.database().ref().child('comment');

export default class Ideas extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      thoughts: [],
      index: 0,
      direction: null
    };
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'thoughts') {
      this.setState({thoughts: fieldVal })
    }
return
  }

  submitThought = (e) => {
    e.preventDefault();
    let { thought } = this.state;
   
    let newCommentRef = commentsRef.push();
    newCommentRef.set({
      body: thought
    })
  }
  componentDidMount() {
    let thought = [];
    commentsRef.on('value', snap => {
      snap.forEach(child => {
        thought.push(child.val());
      })
      this.setState({thought});
    })
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    const { index, direction, thoughts} = this.state;
    return (
      <div style={{ alignItems: "center" }}>
        <h1 style={{ color: "white" }}>
          Title
        </h1>
        <br />
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              width={900}
              height={500}
              src={require("../images/Uptown.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> Stage 1 </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              src={require("../images/abandon6.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3> Stage 2 </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              src={require("../images/abandon4.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3> Stage 3 </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <Card bg="secondary" style={{ justifyContent: 'center', marginLeft: '25%', marginRight: '25%' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
          </Card.Body>
        </Card>
        <InputGroup style={{ width: '50%', justifyContent: 'center', marginTop: '1%', marginLeft: '25%', }} className="mb-3" onClick={this.submitComment}>
          <Form.Control
            placeholder="Share your thoughts here!"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Submit</Button>
          </InputGroup.Append>
        </InputGroup>
        <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
          {thoughts.map((info, i) => {
            return <FeedCard info={info} key={i} />
          })}
        </Row>
      </div>
    );
  }
}
