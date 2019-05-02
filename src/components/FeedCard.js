import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import firebase from '../config/Firebase'
import "firebase/storage"
import '../App.css'
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
library.add(faThumbsUp)


const imageRef = firebase.storage().ref('images')

export default class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
      picURL: '',
      likes: props.info.likes,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }
  updateLikes() {

    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }
  componentWillMount() {
    const { picId } = this.state.info;
    if (typeof picId === 'number') {
      imageRef.child(`${picId}`).getDownloadURL().then(url => {
        this.setState({ picURL: url });
      })
    }
    if (typeof picId === 'object') {
      imageRef.child(`${picId[0]}`).getDownloadURL().then(url => {
        this.setState({ picURL: url });
      })
    }
  }

  render() {
    const { title, description, id, isIdea } = this.state.info;
    let href;
    isIdea ? href = `/idea/${id}` : href = `/update/${id}`;
    return (
      <Col sm="4">
        <Card style={{ padding: '2%', backgroundColor: 'white', borderWidth: '1px', borderColor: '#BBBDC0', borderStyle: 'solid', borderRadius: 15, margin: 10 }}>
          <Card.Img className="text-light"
            width="100%"
            src={this.state.picURL}
            alt="picture"
          />
          <Card.Body className="text-dark">
            <Card.Title className="titleFont">{title}</Card.Title>
            <hr />
            <Card.Text>{description}</Card.Text>
            <Row style={{ justifyContent: 'center' }}>

              <Card.Link className="linkFont" style={{ onHover: 'bold', color: '#4B3572', marginRight: "8vh" }} href={href}>Read More</Card.Link>
              <button onClick={this.updateLikes} style={{ onHover: 'bold', color: 'blue' }}> <FontAwesomeIcon icon={faThumbsUp} />
                {this.state.likes}

              </button>

              <div>
                <FontAwesomeIcon icon="stroopwafel" />
              </div>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}