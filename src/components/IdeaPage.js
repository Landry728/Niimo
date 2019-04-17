import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../App.css'

export default class IdeaPage extends Component {
  render() {
    return (
        <Row style={{ marginTop: '0.5%', width: '100%', height: 300, display: 'flex', justifyContent: 'center', }}>
          <Col sm="5">
            <Card bg="dark" text="white" style={{ border: '3px white solid', }}>
              <Card.Title style={{ marginTop: 10, textDecoration: 'underline', }} className="text-light">Downtown Farmer's Market</Card.Title>
              <Card.Img className="text-light" 
                width="100%"
                src="https://d3el53au0d7w62.cloudfront.net/wp-content/uploads/2016/12/06/c01_jd_07dec_vacant.jpg"
                alt="Card image cap"
              />
              <Card.Body className="text-light">
                <Card.Text>
                  This building is located at 123 Main Street downtown. It's extremely spacious and still holds great
                  contemporary architecture. I'm thinking this building would serve well as a new farmer's market for Birmingham.
                  There's not many grocery stores downtown with Ideasgrown fresh fruits and vegetables.
                  </Card.Text>
              </Card.Body>
            </Card>
            <InputGroup style={{ marginTop: 10 }} className="mb-3">
              <Form.Control
                placeholder="Share your thoughts here!"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">Submit</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
    );
  }
}