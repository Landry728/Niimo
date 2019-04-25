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
    if (this.state.idea === true) {
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
        <button onClick={() => {
          if (this.state.idea === true) {
            this.setState({ idea: false });
          } else {
            this.setState({ idea: true });
          }
          this.switchFeed();
        }}></button>
        {/* <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'right', justifyContent: 'flex-end', margin: 10 }}>
          <DropdownButton style={{  marginRight: 30, radius: 10 }} size="lg" id="dropdown-custom-1" title="Filter"  >
            <Dropdown.Item eventKey="1">Hoover</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Downtown</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey-="3">Uptown</Dropdown.Item>
          </DropdownButton>
          <DropdownButton  style={{ fontColor:"white", backgroundColor: '#4B3572', marginRight: 60, borderRadius: 10 }} size="lg" id="dropdown-basic" title="Sort">
            <Dropdown.Item eventKey="1">Most Upvotes</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="2">Recent</Dropdown.Item>
          </DropdownButton>
        </Row> */}

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