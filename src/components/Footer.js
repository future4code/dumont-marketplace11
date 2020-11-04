import React from "react";
import styled from 'styled-components';

const DivFooter = styled.div`
	text-align: center;
	background-color: #404040;
	padding: 50px 0;
`
const Img = styled.img`
	width: 4%;
`
const SocialMedias = styled.a`
	margin: 20px;
`

class Footer extends React.Component {
  render() {
    return (
      <DivFooter>
          <section>
              <SocialMedias href="https://www.instagram.com/" target="_blank">
                <Img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384015.svg" alt="Logotipo instagram" />
              </SocialMedias>
              <SocialMedias href="https://www.whatsapp.com/?lang=pt_br" target="_blank">
                <Img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384007.svg" alt="Logotipo Whatsapp" />
              </SocialMedias>
              <SocialMedias href="https://facebook.com/" target="_blank">
                <Img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384005.svg" alt="Logotipo Facebook" />
              </SocialMedias>
              <SocialMedias href="https://twitter.com/login?lang=pt" target="_blank">
                <Img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384017.svg" alt="Logotipo Twitter" />
              </SocialMedias>
              <SocialMedias href="https://www.linkedin.com/" target="_blank">
                <Img src="https://www.flaticon.com/svg/static/icons/svg/1384/1384014.svg" alt="Logotipo Linkedin" />
              </SocialMedias>
          </section>
        <section>
          <p>Atendimento: atendimento@futureninjas.com </p>
          <p>Sugestões: sugestoes@futureninjas.com</p>
        </section>
        <section>
          <a href="https://github.com/" target="_blank">
            <small>
              <b>Copyright © 2020</b>
            </small>
          </a>
        </section>
      </DivFooter>
    );
  }
}

export default Footer;
