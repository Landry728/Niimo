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
      idea: true
    }
  }

  componentDidMount() {
    this.setState({idea: true})
    let ideas = [];
    ideaRef.once('value', snap => {
      snap.forEach(child => {
        ideas.push(child.val());
      })
      this.setState({ shown: ideas });
    });
    // updateRef.once('value', snap => {
    //   snap.forEach(child => {
    //     updates.push(child.val());
    //   })
    //   this.setState({updates});
    // });
  }
  switchFeed() {
    let ideas = [];
    if (this.state.idea === false) {
      ideaRef.once('value', snap => {
        snap.forEach(child => {
          ideas.push(child.val());
        })
        this.setState({ shown: ideas });
      });
    }
    else {
      updateRef.once('value', snap => {
        snap.forEach(child => {
          ideas.push(child.val());
        })
        this.setState({ shown: ideas });
      });
    }
  }
  render() {
    const { shown } = this.state;
    return (
      <>
        <div className="container">
          {this.props.idea === true && <h3>Ideas</h3>}
          {this.props.idea === false && <h3>Updates</h3>}
          <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>
            {shown.map((info, i) => {
              return <FeedCard info={info} key={i} />
            })}
          </Row>
          <hr />
        </div>
      </>
    )
  }
}