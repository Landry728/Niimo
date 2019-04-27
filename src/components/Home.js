import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../App.css";
import railAfter from "../images/railAfter.jpg";
import railb4 from "../images/railb4.jpg";
import ReactCompareImage from "react-compare-image";

export default class Home extends Component {
  render() {
    const { buttonBackground } = this.props.stylingColors;
    return (
      <>
      <div style={{
    
      }}>
        <br />
        <br />
        <br />
        <div
          style={{
            width: "100%",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{}}>
            <ReactCompareImage
              hover="true"
              sliderLineColor="black"
              handleSize="0"
              sliderLineWidth="0"
              sliderPositionPercentage="0"
              leftImageCss={{
                marginTop: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                width: "1000px",
                borderRadius: 20,
                bottom: 90
              }}
              rightImageCss={{
                marginTop: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "500px",
                width: "1000px",
                borderRadius: 20,
                bottom: 90
              }}
              leftImage={railAfter}
              rightImage={railb4}
            />
          </div>
        </div>
        <br />
        <div
          style={{
            width: "100%"
          }}
        >
          <div
            style={{
              fontSize: 50,
              width: "60%",
              marginTop: "10%",
              marginLeft: "20%",
              marginRight: "20%",
              marginBottom: "7%",
              color: "white"
            }}
          />
          <p
            className="linkFont"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: 70,
              width: "60%",
              letterSpacing: 1,
              marginTop: 100,
              marginBottom: "-6px"
            }}
          >
            Niimo
          </p>
          <p
            className="linkFont"
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: 20,
              width: "60%",
              marginBottom: 30,
              marginTop: -30
            }}
          >
            Don't Stop Searching
          </p>
          <p
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: 15,
              marginBottom: 50
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <Row>
          <Col
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Link
              to="/feed"
              style={{
                marginRight: 20
              }}
            >
              <Button
                style={{
                  backgroundColor: '#429ADF',
                  color: 'rgb(39, 46, 60)'
                }}
                variant="secondary"
                size="lg"
              >
                Find an Idea
              </Button>
            </Link>
            <Link to="/map">
              <Button
                style={{
                  backgroundColor: '#429ADF',
                  color: 'rgb(39, 46, 60)'
                }}
                size="lg"
              >
                Find a Location
              </Button>
            </Link>
          </Col>
        </Row>
        </div>
      </>
    );
  }
}
