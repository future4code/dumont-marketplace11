import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../img/logo420H.jpg";
import mechanic from "../../img/mechanic.jpg";
import personal from "../../img/personal.jpg";
import programmer from "../../img/programmer.jpg";

class CarouselFeature extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md="5">
            <div>
              <p>O talento certo, no momento certo.</p>
            </div>
          </Col>
          <Col md="5">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block"
                  src={mechanic}
                  alt="First slide"
                />
                
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={personal} alt="Third slide" />
                
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={programmer} alt="Third slide" />
                
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CarouselFeature;
