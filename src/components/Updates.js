import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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

                            </p>
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
    };
}
