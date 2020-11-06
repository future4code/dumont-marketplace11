import React from 'react'
import styled from 'styled-components'
import slogan from '../../img/slogan2.png';


const Div = styled.div`
    display: flex;
    padding: 2em;
    background-color: #9f8fd9;
    height: 25em;
    color: #311355;
`

const H1 = styled.h1`
    font-family: nove, sans-serif;
    text-align: end;
    padding: 15px 50px;
`
const P = styled.p`
    margin: 0 60px;
    font-weight: bold;
    text-align: justify;
    font-family: acumin-pro, sans-serif;
`

class AboutUs extends React.Component {
    state = {}
    render(){
        return (
                <Div>
                    <div>
                        <img src={slogan}/>
                    </div>
                    <div>
                    <H1>Quem somos?</H1>
                    <P>Olá , seja bem vinda a Future Ninjas, somos uma startup de iniciativa de impacto social que foca em disponibilizar serviços oferecidos apenas por mulheres. Temos o objetivo de reduzir o gap de gênero em diversos setores trabalhistas, assim, apresentamos em nossa plataforma apenas profissionais mulheres cis e trans. Nosso time de profissionais recebe um treinamento exclusivo com o intuito de melhorar nossos atendimentos e assim consquistar cada vez mais cliente fiéis. Aqui em nossa StartUp nós também proporcionamos um espaço de acolhimento, auxílio financeiro para curso profissionais e advogados trabalhistas. Nós entendemos que o futuro é para todos, e para alcançar o sussesso de forma justa e igual, só sendo um ninja!  </P>
                    </div>
                </Div>
           
        )
    }
}
export default AboutUs

