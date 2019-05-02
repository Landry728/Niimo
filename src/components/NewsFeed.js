import React, { Component } from "react"
import Row from 'react-bootstrap/Row'
import FeedCard from './FeedCard'
import firebase from '../config/Firebase'
import "firebase/database"

const ideaRef = firebase.database().ref().child('ideas');
const updateRef = firebase.database().ref().child('updates');

export default class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: [],
      idea: false,
      prevLoad: true
    }
  }

  setShown() {
    
    let ideas = [];
    if (this.state.idea === false) {
      ideaRef.once('value', snap => {
        snap.forEach(child => {
          ideas.push(child.val());
        })
        this.setState({ shown: ideas });
        this.setState({prevLoad: false})
      });
    }
    else {
      updateRef.once('value', snap => {
        snap.forEach(child => {
          ideas.push(child.val());
        })
        console.log(ideas)
        this.setState({ shown: ideas });
        this.setState({prevLoad: true})
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
    if(this.state.prevLoad !== this.state.idea){
      this.setShown();
    }
    console.log(this.state.idea)
    // var { shown } = this.state;
    // console.log(shown)
    return (
      <>
        <div style={{padding: '5%'}}>
          {this.props.idea === true && <h1>Ideas</h1>}
          {this.props.idea === false && <h1>Updates</h1>}
          <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
            {this.state.shown.map((info, i) => {
              console.log(this.state.shown);
              return <FeedCard info={info} key={i} />
            })}
          </Row>
          <hr />
        </div>
      </>
    )
  }
}