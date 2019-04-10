import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  Col,
  Row,
  InputGroup, InputGroupText, InputGroupAddon, Input,
  Button
} from 'reactstrap';


export default class IdeaPage extends Component {
  render() {

  return (
    <div>
    <Row style={{ marginTop: '0.5%', width: '100%', height: 300, display: 'flex', alignpics: 'center', justifyContent: 'center',}}>
    <Col sm="5">
    <Card color="dark" dark style = {{ border: '3px white solid'}}>
    <CardTitle className="text-light">Downtown Farmer's Market</CardTitle>
       <CardImg className="text-light" light
        top
        width="100%"
        src="https://d3el53au0d7w62.cloudfront.net/wp-content/uploads/2016/12/06/c01_jd_07dec_vacant.jpg"
        alt="Card image cap"
      />
      <CardBody className="text-light" light>
        <CardText>
        This building is located at 123 Main Street downtown. It's extremely spacious and still holds great
        contemporary architecture. I'm thinking this building would serve well as a new farmer's market for Birmingham.
        There's not many grocery stores downtown with Ideasgrown fresh fruits and vegetables.
        </CardText>
        <CardLink href="#">Learn More</CardLink>
      </CardBody>
    </Card>
    <InputGroup size="lg" style={{ marginTop: '1%' }}>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="secondary">Submit</Button>
        </InputGroupAddon>
      </InputGroup>
    </Col>
    {/* REMOVE THIS ROW LATER */}
    </Row> 
    {/* REMOVE THIS ROW LATER */}
    </div>
    );
};
}