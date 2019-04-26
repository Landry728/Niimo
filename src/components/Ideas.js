import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
// import ListGroup from 'react-bootstrap/ListGroup'
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
// import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
// import IdeaDescrip from './IdeaDescrip'
import building from '../images/abandon1.jpg'
// import Formpage from './FormPage'
import Feedcard from './FeedCard'

const db = firebase.database();
const storage = firebase.storage();
const ideaRef = db.ref("ideas");
const updateRef = db.ref("updates");
const imageRef = storage.ref('images');
const commentsRef = db.ref('comment');

export default class Ideas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: '',
      comment: '',
      update: '',
      title: '',
      idea: '',
      picURLs: [],
      mounted: false,
      thoughts: [],
      updates: [],
      key: 0
    };
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    if (fieldName === 'comment') {
      this.setState({
        comment: fieldVal
      })
    }
    if (fieldName === 'update') {
      this.setState({
        update: fieldVal
      })
    }
  }

  submitUpdate = (e) => {
    e.preventDefault();
    const { postId, update } = this.state;
    // Post Update
    let newUpdate = updateRef.push();
    newUpdate.set({
      id: postId,
      date: (new Date()).toDateString(),
      body: update
    })
  }

  submitComment = (e) => {
    e.preventDefault();
    const { postId, comment } = this.state;
    // Post Comment
    let newCommentRef = commentsRef.push();
    newCommentRef.set({
      id: postId,
      date: (new Date()).toDateString(),
      body: comment
    })
  }

  componentWillMount() {
    let thoughts = [];
    let updates = [];
    let picURLs = [];
    // Get idea, pics, comments, and updates
    ideaRef.orderByChild("id").on("child_added", snap => {
      if (snap.val().id == this.props.match.params.id) {
        let picIds = snap.val().picId;
        picIds.map((pic) => {
          imageRef.child(`${pic}`).getDownloadURL().then(url => {
            picURLs.push(url);
          })
        })
        commentsRef.on('value', snap => {
          snap.forEach(child => {
            thoughts.push(child.val());
          })
        })
        updateRef.on('value', snap => {
          snap.forEach(child => {
            updates.push(child.val());
          })
        })
        this.setState({
          postId: snap.val().id,
          title: snap.val().title,
          idea: snap.val().description,
          date: snap.val().date,
          picURLs: picURLs,
          thoughts: thoughts,
          updates: updates
        })
      }
    })
  }

  componentDidMount() {
    this.setState({ mounted: true })
  }

  render() {
    const { thoughts, updates, title, idea, date, picURLs } = this.state;
    console.log(picURLs);
    return (
      <div className="container">
        <Row>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '10vh' }}>
              <h1 style={{ color: 'rgba(39, 46, 60, 0.85)' }}>
                {title}
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: '100%', height: 'auto' }} src={building} alt="picture" />
            </div>
          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '20vw' }}>
              <h5>{idea}</h5>
              <Button style={{ margin: '6vh', backgroundColor: '#429ADF', color: 'rgb(39, 46, 60)' }}>Support this Idea</Button>
              <p>Created by: <br /> Landry Leopard</p>

              <p style={{ color: 'green', borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', marginTop: '4vh' }}>
                $5,000 pledged of $20,000 goal
              </p>
              <ProgressBar variant="success" style={{ backgroundColor: "#9FEDD7" }} now={25} />
            </div>
          </Col>
        </Row>
        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '4vh' }}>
          <Col>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Campaign">
                <div style={{ backgroundColor: 'white', width: '100%', padding: '5%', border: '1px #BBBDC0 solid' }}>
                  <h2>About</h2>
                </div>
              </Tab>
              <Tab eventKey="update" title="Updates">
                <div style={{ backgroundColor: 'white', width: '100%', padding: '5%', border: '1px #BBBDC0 solid' }}>
                  <InputGroup style={{ width: '50%', marginLeft: '25%', }} className="mb-3" >
                    <Form.Control
                      placeholder="Share an Update"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={this.handleChange}
                      name="update"
                    />
                    <InputGroup.Append>
                      <Button style={{ backgroundColor: '#429ADF', color: 'rgb(39, 46, 60)' }} type="submit" onClick={this.submitUpdate}>Share</Button>
                    </InputGroup.Append>
                  </InputGroup>

                  {updates.map((update, i) => {
                    return <CommentCard info={update} key={i} />
                  })}
                  <div style={{marginTop: '4vh', border: '1px #BBBDC0 solid', backgroundColor: '#f5f5f5', width: '50%', marginLeft: '25%'}}>
                    <h4>Project Launched</h4>
                    {date}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="comment" title="Comments">
                <div style={{ backgroundColor: 'white', width: '100%', padding: '5%', border: '1px #BBBDC0 solid' }}>
                  <InputGroup style={{ width: '50%', justifyContent: 'center', marginLeft: '25%', }} className="mb-3" >
                    <Form.Control
                      placeholder="Thoughts?"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={this.handleChange}
                      name="comment"
                    />
                    <InputGroup.Append>
                      <Button style={{ backgroundColor: '#429ADF', color: 'rgb(39, 46, 60)' }} type="submit" onClick={this.submitComment}>Share</Button>
                    </InputGroup.Append>
                  </InputGroup>

                  {thoughts.map((thought, i) => {
                    return <CommentCard info={thought} key={i} />
                  })}
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
    );
  }
}
