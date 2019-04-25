import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default class msger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msgs: [{
        name: 'bobby',
        playerId: '12t23954vm4'
      },
      {
        name: 'Landry',
        playerId: '209bhjk54j5'
      }
      ]
    }
  }
  render() {
    let playerId = 0
    return (
      <Row style={{marginLeft: 10}}>
        <Col xs={3}>
          {this.state.msgs.map((e, i) => {
            if (i % 2 === 0) {
              return (
                <Row style={{ backgroundColor: 'grey' }}>
                  {e.name}<br />
                  {e.playerId}
                </Row>
              )
            } else {
              return (
                <Row style={{ backgroundColor: 'white' }}>
                  {e.name}<br />
                  {e.playerId}
                </Row>

              )
            }
          })}
        </Col>
        <Col className="rounded" style={{ marginLeft: 15, height: 600, background: 'green'}}>
          <Row style={{height: '95%'}}>
            <Col>
              {this.state.msgs.map((e, i) => {


                //when setting up for instanced api change this if statement to check if the msg's userId is the same as the other person.
                if (i === playerId) {
                  return (
                    <Row style={{ backgroundColor: 'grey', margin: 10, marginLeft: 0, color: 'black' }}>
                      {e.name}<br />
                      {e.playerId}
                    </Row>
                  )
                } else {
                  return (
                    <Row style={{ backgroundColor: 'white', margin: 10, marginLeft: 0, color: 'black' }}>
                      {e.name}<br />
                      {e.playerId}
                    </Row>
                  )
                }
              })}
            </Col>
          </Row>
          <Row style={{marginLeft: -10}}>
            <Col>
              <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Row><Col xs={10} >
                  <Form.Control type="email" placeholder="Enter email" />
                  </Col>
                  <Col xs={1}>
                  <Button>send</Button>
                  </Col></Form.Row>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col>

        </Col>
      </Row>
    );
  };
}