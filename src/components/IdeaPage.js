import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'

export default class IdeaPage extends Component {
  render() {

  return (
    <div>
    <Row style={{ marginTop: '0.5%', width: '100%', height: 300, display: 'flex', alignpics: 'center', justifyContent: 'center',}}>
    <Col sm="5">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
    <Card.Title className="text-light">Downtown Farmer's Market</Card.Title>
       <Card.Img className="text-light" light
        top
        width="100%"
        src="https://d3el53au0d7w62.cloudfront.net/wp-content/uploads/2016/12/06/c01_jd_07dec_vacant.jpg"
        alt="Card image cap"
      />
      <Card.Body className="text-light" light>
        <Card.Text>
        This building is located at 123 Main Street downtown. It's extremely spacious and still holds great
        contemporary architecture. I'm thinking this building would serve well as a new farmer's market for Birmingham.
        There's not many grocery stores downtown with Ideasgrown fresh fruits and vegetables.
        </Card.Text>
        {/* <CardLink href="#">Learn More</CardLink> */}
      </Card.Body>
    </Card>
    <InputGroup size="lg" style={{ marginTop: '1%' }}>
        <InputGroup.Append>
          <Button color="secondary">Submit</Button>
        </InputGroup.Append>
      </InputGroup>
    </Col>
    {/* REMOVE THIS ROW LATER */}
    </Row> 
    {/* REMOVE THIS ROW LATER */}
    </div>
    );
};
}