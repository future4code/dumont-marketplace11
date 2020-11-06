import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mechanic from "../../img/mechanic300.jpg";
import personal from "../../img/personal300.jpg";
import programmer from "../../img/programmer300.jpg";
import styled from "styled-components";

const Div = styled.div`
  padding-bottom: 2em;
`

class CarouselFeature extends React.Component {
  render() {
    return (
      <Div>
      <Container>
        <Row>
          <Col md= {12}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={mechanic} alt="First slide" />
              <Carousel.Caption>
                <h1>As melhores profissionais do mercado</h1>
                <p>
                  O jeito mais eficiente de contratar a melhor serviço do mercado.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={personal} alt="Third slide" />

              <Carousel.Caption>
                <h1>Segurança e velocidade no atendimento </h1>
                <p>Escolha o horário que desejar, combine tudo com a profissional escolhida.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={programmer}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h1>O melhor atendimento você encontra aqui!</h1>
                <p>
                  Nossas profissionais recebem treinamento gratuito especializado.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>
        </Row>
      </Container>
      </Div>
    );
  }
}

export default CarouselFeature;
