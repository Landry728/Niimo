import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"
import FeedCard from './CommentCard'

const db = firebase.database();
const storage = firebase.storage();
const ideaRef = db.ref("ideas");
const imageRef = storage.ref('images');
const commentsRef = firebase.database().ref().child('comment');

export default class Ideas extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      thought: [],
      index: 0,
      direction: null,
      title: '',
      idea: '',
      picURL: ''
    };
  }
  
  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'thoughts') {
      this.setState({ thoughts: fieldVal })
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
      this.setState({ thought });
    })
    ideaRef.orderByChild("id").on("child_added", snap => {
      if(snap.val().id == this.props.match.params.id) {
        imageRef.child(`${snap.val().id}`).getDownloadURL().then(url => {
          this.setState({
            title: snap.val().title,
            idea: snap.val().description,
            picURL: url
          })
        })
      }
    })
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    const { index, direction, thought, title, idea, picURL } = this.state;
    return (
      <div style={{ alignItems: "center" }}>
        <h1 style={{ color: "white" }}>
          Modern Hookah Lounge
        </h1>
        <h5>
          MEMORABLE NIGHTS LASTING IMPRESSIONS PARTY/LAUGH/LIVE
        </h5>
        <ListGroup variant="flush" style={{Color:"#5680E9"}}>
          <ListGroup.Item style={{backgroundColor:"#5680E9"}}>16 Supporters</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:"#5680E9"}}>List price</ListGroup.Item>
          <ListGroup.Item style={{backgroundColor:"#5680E9"}}>Area of the city</ListGroup.Item>
        </ListGroup>
        <br />
        <p style={{ color: 'green', borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', }}>
          $5,000 pledged of $20,000 goal
        </p>
        <ProgressBar variant="success" style={{ backgroundColor: "#9FEDD7", marginRight: "30%", marginLeft: "30%" }} now={20} />
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
              src={picURL}
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
        <Card bg="secondary" style={{ justifyContent: 'center', marginLeft: '8%', marginRight: '8%' }}>
          <Card.Header>Description</Card.Header>
          <Card.Body>
            <Card.Text>
              {idea}
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
          {thought.map((info, i) => {
            return <FeedCard info={info} key={i} />
          })}
        </Row>
      </div>
    );
  }
}
