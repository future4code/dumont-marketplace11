import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mechanic from "../../img/mechanic.jpg";
import personal from "../../img/personal.jpg";
import programmer from "../../img/programmer.jpg";
import styled from "styled-components";

const Div = styled.div`
  padding: 4em 2em;
  background-color:rgb(184, 163, 224, 0.5);
`

const Title = styled.h1`
  @media (min-device-width: 320px) and (max-device-width: 420px) { 
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
   }
`

const Subtitle = styled.p`
  @media (min-device-width: 320px) and (max-device-width: 420px) { 
    display: none;
   }
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
                <Title>As melhores profissionais do mercado</Title>
                <Subtitle>
                  O jeito mais eficiente de contratar a melhor serviço do mercado.
                </Subtitle>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={personal} alt="Third slide" />

              <Carousel.Caption>
                <Title>Segurança e velocidade no atendimento </Title>
                <Subtitle>Escolha o horário que desejar, combine tudo com a profissional escolhida.</Subtitle>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={programmer}
                alt="Third slide"
              />

              <Carousel.Caption>
                <Title>O melhor atendimento você encontra aqui!</Title>
                <Subtitle>
                  Nossas profissionais recebem treinamento gratuito especializado.
                </Subtitle>
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
