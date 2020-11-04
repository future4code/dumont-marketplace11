import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../img/logo420H.jpg";
import Image from "../../img/doctor.jpg";


class CarouselFeature extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center m-0">
          <Col md="5">
            <div>
              <img src={logo} />
              <p></p>
            </div>
          </Col>
          <Col md="5">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-flex m-0 p-0"
                  src={Image}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-flex" src={Image} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-flex" src={Image} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CarouselFeature;
