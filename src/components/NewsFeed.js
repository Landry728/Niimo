import React, { Component } from "react"
import Row from 'react-bootstrap/Row'
import FeedCard from './FeedCard'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import firebase from '../config/Firebase'
import "firebase/database"

const ideaRef = firebase.database().ref().child('ideas');
const updateRef = firebase.database().ref().child('updates');

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: []
    }
  }

  componentDidMount() {
    let ideas = [];
    if (this.props.idea == true){
    ideaRef.once('value', snap => {
      snap.forEach(child => {
        ideas.push(child.val());
      })
      this.setState({shown: ideas});
    });
    }
    else{
      updateRef.once('value', snap => {
        snap.forEach(child => {
          ideas.push(child.val());
        })
        this.setState({shown: ideas});
      });
    }
    // updateRef.once('value', snap => {
    //   snap.forEach(child => {
    //     updates.push(child.val());
    //   })
    //   this.setState({updates});
    // });
  }

  render() {
    const {shown} = this.state;
    return (
      <>
        <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'right', justifyContent: 'flex-end', margin: 10 }}>
          <DropdownButton style={{  marginRight: 30, radius: 10 }} size="lg" variant="primary" id="dropdown-basic-button" title="Filter"  >
            <Dropdown.Item href="#/action-1">Hoover</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">Downtown</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Uptown</Dropdown.Item>
          </DropdownButton>
          <DropdownButton style={{ marginRight: 60 }} size="lg" variant="primary" id="dropdown-basic-button" title="Sort">
            <Dropdown.Item href="#/action-1">Most Upvotes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-2">Recent</Dropdown.Item>
          </DropdownButton>
        </Row>

        <div className="container">
          {this.props.idea==true && <h3>Ideas</h3>}
          {this.props.idea==false && <h3>Updates</h3>}
        <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
          {shown.map((info, i) => {
            return <FeedCard info={info} key={i} />
          })}
        </Row>
        <hr />
        </div>
        {/* <div className="container">
          Updates
        <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
          {updates.map((info, i) => {
            return <FeedCard info={info} key={i} />
          })}
        </Row>
        </div> */}
      </>  
    )
  }
}