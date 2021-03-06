import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
    }
  }
  render() {
    const { title, date } = this.state.info;
    const { index } = this.props;
    if (index % 2 === 0) {
      return (
        <Card style={{ border: '1px #BBBDC0 solid', margin: 10, backgroundColor: '#f5f5f5', color: 'rgba(39, 46, 60, 0.85)', width: '50%' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{date}</Card.Text>
          </Card.Body>
        </Card>
      )
    } else {
      return (
        <Card style={{ border: '1px #BBBDC0 solid', margin: 10, backgroundColor: '#f5f5f5', color: 'rgba(39, 46, 60, 0.85)', width: '50%', marginLeft: '50%' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{date}</Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }
}