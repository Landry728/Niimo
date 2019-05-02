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
import blueprint from '../images/blueprint.jpg'
import reno from '../images/reno.jpg'
import empty from '../images/emptyDepot.jpg'
import building from '../images/thisgonebedepot.jpg'

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
                <hr />
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
            <div style={{ width: '33vw' }}>
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
                      My name is Landry Leopard. I am an entrepreneur based out of Birmingham, Alabama. Birmingham itself has always
                      been thought of an area that is lacking in the Information Technology field. Although it also has always been
                      thought of an area that supports it's local businesses tremendously. With the support of Birmingham and it's people,
                      we can change the field of Technology here, and I have a fully laid out plan for it.
                    </h6>
                    <br />
                    <h3>Why?</h3>
                    <br />
                    <h6>
                      It's almost self explanatory. Technology has done nothing but grow and expand in amazing transformations over the past
                      decades. Birmingham has been trying it's best to have that same kind of growth and expansion. If we could bring the
                      amazing companies here, and even help create and boom them there, Birmingham will be built to have a bright future in 
                      all aspects. 
                    </h6>
                    <br />
                    <h3>How?</h3>
                    <br />
                    <h6>
                      By involving people such as yourself. The people of Birmingham have always been extremely supportive of the local
                      businesses around them. Alabama and the Southeast in it's entirety is full of locally owned companies that citizens love to support
                      and watch grow. With this building, we can provide incubation, guidance, and the tools that these
                      companies will need to become the next Tech Giant. This building can bring in all kinds of revenue and create countless jobs
                      for Alabama. When I say revenue, I mean the market size can not only double, but bring in 5 billion dollars every 5 years, for
                      a very long prosperous time. Come support me, watch Alabama grow, and become a part of something that we will cherish for years 
                      to come.
                    </h6>
                    <br />
                    <h3>Additional Pictures</h3>
                  </div>
                  <h5>Potential Layout</h5>
                  <img style={{ width: '50%', marginBottom: '2%' }} src={blueprint} alt="farmer's market blueprint" />
                  <hr />
                  <h5 style={{marginTop: '2%'}}>Renovations Underway</h5>
                  <img style={{ width: '50%', marginBottom: '2%' }} src={reno} alt="farmer's market blueprint" />
                  <hr />
                  <img style={{ width: '50%', marginBottom: '-4%' }} src={empty} alt="emptydepot" />
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
