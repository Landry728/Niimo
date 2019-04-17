import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import '../App.css'

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }
  
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <div style={{alignItems: "center"}}>
        <h1 style={{color: "white"}}>
          Title
        </h1>
        <br />
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img
              width={900}
              height={500}
              src={require("../images/Uptown.jpg")}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3> Stage 1 </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              src={require("../images/abandon6.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3> Stage 2 </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={900}
              height={500}
              src={require("../images/abandon4.jpg")}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3> Stage 3 </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br />
        <Card bg="secondary" style={{ justifyContent: 'center', marginLeft: '8%', marginRight: '8%' }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
