import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar'
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"
import CommentCard from './CommentCard'
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import IdeaDescrip from './IdeaDescrip'
import building from '../images/abandon1.jpg'
import Formpage from './FormPage'

const db = firebase.database();
const storage = firebase.storage();
const ideaRef = db.ref("ideas");
const updateRef = db.ref("updates");
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
      picURLs: [],
      mounted: false
    };
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'thoughts') {
      this.setState({ thoughts: fieldVal })
    }
  }

  submitUpdate = (e) => {
    
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
    let picURLs = [];
    // Get comments
    commentsRef.on('value', snap => {
      snap.forEach(child => {
        thought.push(child.val());
      })
      this.setState({ thought });
    })

    // Get idea and pics
    ideaRef.orderByChild("id").on("child_added", snap => {
      if (snap.val().id === this.props.match.params.id) {
        let picIds = snap.val().picId;
        picIds.map((pic) => {
          imageRef.child(`${pic}`).getDownloadURL().then(url => {
            picURLs.push(url);
          })
        })
        this.setState({
          title: snap.val().title,
          idea: snap.val().description,
          picURLs: picURLs
        })
      }
    })
    this.setState({mounted: true})
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }
  render() {
    const { index, direction, thought, title, idea, picURLs } = this.state;
    return (
      <div style={{ alignItems: "center", margin: 30 }}>
        <h1 style={{ color: "white" }}>
          {title}
        </h1>
        <h5>
          {idea}
        </h5>
          <ListGroup variant="flush" style={{ Color: "#5680E9" }}>
            <ListGroup.Item style={{ backgroundColor: "#5680E9" }}>16 Supporters</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#5680E9" }}>List price</ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: "#5680E9" }}>Area of the city</ListGroup.Item>
          </ListGroup>
          <br />
          <p style={{ color: 'green', borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', }}>
            $5,000 pledged of $20,000 goal
        </p>
        <ProgressBar variant="success" style={{ backgroundColor: "#9FEDD7", marginRight: "30%", marginLeft: "30%" }} now={25} />
        <br />
      </div>
      //   <Carousel
      //     activeIndex={index}
      //     direction={direction}
      //     onSelect={this.handleSelect}
      //     fade={true}
      //   >
      //     {picURLs.map((url, i) => {
      //       return (
      //         <Carousel.Item key={i}>
      //           <img
      //             width={900}
      //             height={500}
      //             src={url}
      //             alt="First slide"
      //           />
      //         </Carousel.Item>
      //       )
      //     })}
      //   </Carousel>
      //   <hr />
      // <Nav variant="tabs" >
      //   <Nav.Item >
      //     <Nav.Link style={{ color:"white" }} onSelect >Description</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item >
      //     <Nav.Link style={{ color: "white" }} >Comments</Nav.Link>
      //   </Nav.Item>
      //   <Nav.Item >
      //     <Nav.Link style={{ color: "white" }} >Updates</Nav.Link>
      //   </Nav.Item>
      // </Nav>

      //   <hr />
      //   <br />

      //   <br />
      //   <Card bg="secondary" style={{ justifyContent: 'center', marginLeft: '8%', marginRight: '8%' }}>
      //     <Card.Header>Description</Card.Header>
      //     <Card.Body>
      //       <Card.Text>
      //         {idea}
      //       </Card.Text>
      //     </Card.Body>
      //   </Card>

      // <InputGroup style={{ width: '50%', justifyContent: 'center', marginTop: '1%', marginLeft: '25%', }} className="mb-3" onClick={this.submitComment}>
      //   <Form.Control
      //     placeholder="Share your thoughts here!"
      //     aria-label="Recipient's username"
      //     aria-describedby="basic-addon2"
      //   />
      //   <InputGroup.Append>
      //     <Button variant="outline-secondary">Submit</Button>
      //   </InputGroup.Append>
      // </InputGroup>
      //   <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
      //     {thought.map((info, i) => {
      //       return <CommentCard info={info} key={i} />
      //     })}
      //   </Row>
      //   <h3>
      //     Project Timeline
      //   </h3>
      // </div>
    );
  }
}
