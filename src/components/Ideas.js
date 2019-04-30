import React from "react";
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
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import building from '../images/abandon1.jpg'
import blueprint from '../images/blueprint.jpg'
import reno from '../images/reno.jpg'

// FireBase constants
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

  // Update/Comment text handler
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

  // Post Update
  submitUpdate = (e) => {
    e.preventDefault();
    const { postId, update } = this.state;
    let newUpdate = updateRef.push();
    newUpdate.set({
      id: postId,
      date: (new Date()).toDateString(),
      title: update
    })
  }

  // Post Comment
  submitComment = (e) => {
    e.preventDefault();
    const { postId, comment } = this.state;
    let newCommentRef = commentsRef.push();
    newCommentRef.set({
      id: postId,
      date: (new Date()).toDateString(),
      title: comment
    })
  }

  // Get idea, pics, comments, and updates
  componentWillMount() {
    let thoughts = [];
    let updates = [];
    let picURLs = [];
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
            thoughts.unshift(child.val());
          })
        })
        updateRef.on('value', snap => {
          snap.forEach(child => {
            updates.unshift(child.val());
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
    const { thoughts, updates, title, idea } = this.state;
    return (
      <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <Row>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '5vh' }}>
              <h1 style={{ color: 'rgba(39, 46, 60, 0.85)' }}>
                {title}
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ width: '100%', height: 'auto' }} src={building} alt="farmer's market" />
            </div>
          </Col>
          <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '20vw' }}>
              <h5>{idea}</h5>
              <br />
              <h5>Created by: <br /> Landry Leopard</h5>
              <br />
              <h5>50 <br /> Supporters</h5>
              <p style={{ color: 'green', borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', marginTop: '4vh' }}>
                $10,000 pledged of $20,000 goal
              </p>
              <ProgressBar variant="success" style={{ backgroundColor: "#9FEDD7" }} now={50} />
              <Button style={{ margin: '6vh', backgroundColor: '#429ADF', color: 'rgb(39, 46, 60)' }}>Support this Idea</Button>
            </div>
          </Col>
        </Row>
        <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '4vh' }}>
          <Col>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Campaign">
                <div style={{ backgroundColor: 'white', width: '100%', padding: '5%', border: '1px #BBBDC0 solid' }}>
                  <div className="container" style={{ textAlign: 'left', margin: '4%' }}>
                    <h3>About</h3>
                    <br />
                    <h6>
                      My name is Landry Leopard. I am an entrepreneur based out of Birmingham, Alabama. Downtown Birmingham
                      has always been thought of an area that is lacking in fresh fruits and vegetables as well as grocery stores,
                      it is no secret. This project is designed to bring affordable fresh food to the inner-city while also 
                      transforming otherwise unused property into something that benefits everyone. 
                    </h6>
                    <br />
                    <h3>Why?</h3>
                    <br />
                    <h6>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, suscipit quisquam! Labore magnam 
                      eligendi reprehenderit non, quidem rem dolores adipisci. Lorem ipsum dolor, sit amet consectetur 
                      adipisicing elit. Eaque minima, totam corrupti libero aperiam error dicta in repellat fugit incidunt!
                    </h6>
                    <br />
                    <h3>How?</h3>
                    <br />
                    <h6>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex dolore esse voluptatem sit? Dignissimos, 
                      soluta? Quis, recusandae quia? Laborum, blanditiis quod, vitae perspiciatis velit nisi sit cum, sed 
                      odio nam quos? Error odio facere voluptatem iusto doloremque doloribus beatae sapiente!
                    </h6>
                    <br />
                    <h3>Additional Pictures</h3>
                  </div>
                  <h5>Potential Market Layout</h5>
                  <img style={{ width: '50%', marginBottom: '2%' }} src={blueprint} alt="farmer's market blueprint" />
                  <hr />
                  <h5 style={{marginTop: '2%'}}>Renovations Underway</h5>
                  <img style={{ width: '50%', marginBottom: '2%' }} src={reno} alt="farmer's market blueprint" />
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
                    return <CommentCard info={update} index={i} key={i} />
                  })}

                  <div style={{ marginTop: '4vh', padding: '5%', border: '1px #BBBDC0 solid', color: 'white', backgroundColor: '#272E3C', width: '50%', marginLeft: '25%' }}>
                    <h4>Project Launched</h4>
                    March 22 2019
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
                    return <CommentCard info={thought} index={i} key={i} />
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
