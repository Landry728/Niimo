import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";
import "../App.css";
import railAfter from "../images/railAfter.jpg";
import railb4 from "../images/railb4.jpg";
import ReactCompareImage from "react-compare-image";

export default class Home extends Component {
  // constructor(props){
  //   super(props);
  // }
  // state = {
  //   img:
  //     "https://upload.wikimedia.org/wikipedia/commons/7/78/Birmingham_Alabama_1915.jpg"
  // };
  render() {
    const { buttonBackground } = this.props.stylingColors;
    return (
      <>
        <div
          style={{
            width: "100%",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
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
                marginTop: 250,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "700px",
                width: "1200px",
                borderRadius: 20,
                bottom: 90
              }}
              rightImageCss={{
                marginTop: 250,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "700px",
                width: "1200px",
                borderRadius: 20,
                bottom: 90
              }}
              leftImage={railAfter}
              rightImage={railb4}
            />{" "}
          </div>{" "}
          {/* <img
                            style={{ marginTop: 350 }}
                            src={this.state.img}
                            onMouseEnter={() => {
                              this.setState({
                                img:
                                  "https://i1.wp.com/altoday.com/wp-content/uploads/2015/10/Birmingham-Alabama.jpg?fit=1920%2C1271"
                              });
                            }}
                            onMouseOut={() => {
                              this.setState({
                                img:
                                  "https://upload.wikimedia.org/wikipedia/commons/7/78/Birmingham_Alabama_1915.jpg"
                              });
                            }} */}{" "}
          {/* <img alt="logo" src={Logo} style={{ marginTop: '15%', height: 300 }} className='rounded-circle' /> */}{" "}
        </div>{" "}
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
          />{" "}
          <p
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: 50,
              width: "60%",
              marginTop: 300
            }}
          >
            {" "}
            niimo{" "}
          </p>{" "}
          <p
            style={{
              marginRight: "auto",
              marginLeft: "auto",
              fontSize: 50,
              width: "60%",
              marginBottom: 50
            }}
          >
            {" "}
            Don 't Stop Searching.{" "}
          </p>{" "}
        </div>{" "}
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
                  backgroundColor: buttonBackground
                }}
                variant="secondary"
                size="lg"
              >
                Find an Idea{" "}
              </Button>{" "}
            </Link>{" "}
            <Link to="/map">
              <Button
                style={{
                  backgroundColor: buttonBackground
                }}
                size="lg"
              >
                Find a Location{" "}
              </Button>{" "}
            </Link>{" "}
          </Col>{" "}
        </Row>{" "}
      </>
    );
  }
}
