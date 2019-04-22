import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import firebase from '../config/Firebase'
import "firebase/database"
import "firebase/storage"

const db = firebase.database();
const storage = firebase.storage();
const ideaRef = db.ref("ideas");
const imageRef = storage.ref('images');

export default class Ideas extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null,
      title: '',
      idea: '',
      picURL: ''
    };
  }

  componentDidMount() {
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
    const { index, direction, title, idea, picURL } = this.state;
    return (
      <div style={{alignItems: "center"}}>
        <h1 style={{color: "white"}}>
          {title}
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
      </div>
    );
  }
}
