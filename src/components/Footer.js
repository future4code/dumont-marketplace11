import React from "react";
import styled from "styled-components";
import instragram from "../img/instagram.svg";
import logo from "../img/logo.png";

const DivFooter = styled.div`
  background-color: #55545c;
  height: 28em;
  padding: 0 10em;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 1em;
    height: 48em;
  }

`;
const DivImg = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0 20px 0;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    padding: 0;
  }
`;

const DivText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0 10px 0;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    flex-direction: column;
    text-align: center;
    font-size: 20px;
  }
`;

const Img = styled.img`
  width: 50%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 70%;
  }
`;

const ImgLogo = styled.img`
  width: 30%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 80%;
  }
`;

const SectionMedias = styled.section`
  display: flex;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    padding: 2em 0 0 2em;
  }
`;

const SectionLogo = styled.section`
  display: flex;
  justify-content: flex-end;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    justify-content: center;
  }
`;

const P = styled.p`
 font-weight: bold;
`
const Copyright = styled.p`
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
`
const A = styled.a`
  text-decoration: none;
  color: #222222;
  &:hover{
    text-decoration: none;
    color: #8662d0;
  }
`

class Footer extends React.Component {
  render() {
    return (
      <DivFooter>
        <DivImg>
          <SectionMedias>
            <a href="https://www.instagram.com/" target="_blank">
              <Img src={instragram} alt="Logotipo instagram" />
            </a>
            <a href="https://facebook.com/" target="_blank">
              <Img
                src="https://www.flaticon.com/svg/static/icons/svg/179/179319.svg"
                alt="Logotipo Facebook"
              />
            </a>
            <a href="https://twitter.com/login?lang=pt" target="_blank">
              <Img
                src="https://www.flaticon.com/svg/static/icons/svg/179/179342.svg"
                alt="Logotipo Twitter"
              />
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <Img
                src="https://www.flaticon.com/svg/static/icons/svg/179/179330.svg"
                alt="Logotipo Linkedin"
              />
            </a>
          </SectionMedias>
          <SectionLogo>
            <ImgLogo src={logo} />
          </SectionLogo>
        </DivImg>

        <DivText>
          <section>
            <P>Atendimento: </P>
            <p>atendimento@futureninjas.com </p>
            
            <P>Sugestões: </P>
            <p>sugestoes@futureninjas.com</p>
          </section>

          <section>
            <P>Desenvolvedores Ninjas:</P>
              <p>
                <A href="https://github.com/nyhvignoli" target="_blank">Aline Vignoli</A><br /> <A href="https://github.com/b-bianca" target="_blank">Bianca Mendes</A><br /> <A href="https://github.com/B-Mugnol" target="_blank">Bruno Mugnol</A>
              <br /> <A href="https://github.com/DiaMont30" target="_blank">Diana Monteiro</A> <br /> <A href="https://github.com/nizolnier" target="_blank">Nicole Zolnier</A>
              </p>
          </section>
        </DivText>
        <Copyright>Copyright © Squad11 2020</Copyright>
      </DivFooter>
    );
  }
}

export default Footer;
