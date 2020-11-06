import React from 'react'
import styled from 'styled-components'
import choices from '../../img/choices.svg'
import pick from '../../img/pick.svg'
import theOne from '../../img/theOne.svg'

const Div = styled.div`
    height: 25em;
    color: #8662d0;
`

const ContainerElements = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 20px;

`

const ImgP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
`;

const ImgTheOne = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px 30px 20px;
`

const P = styled.p`
    font-family: acumin-pro, sans-serif;
    font-weight: bold;
    text-align: justify;
    padding: 20px 50px 0 50px;
`

const H1 = styled.h1`
    font-family: nove, sans-serif;
    padding: 40px;
`
const Img = styled.img`
    width: 20%;
`
const ImgPick = styled.img`
    width: 30%;
    margin: 0 20px;
`

class HowItWorks extends React.Component {
    render() {
        return (
            <Div id={this.props.how}>
                <H1 >Como funciona?</H1>
                <ContainerElements>
                    <ImgP>
                        <ImgPick src={pick} />
                        <P>Faça seu pedido. Diga o que você precisa. É rápido e gratuito!</P>
                    </ImgP>
                    <ImgP>
                        <Img src={choices} />
                        <P>Receba até quatro orçamentos. Profissionais avaliados entram em contato com você em instantes!</P>
                    </ImgP>
                    <ImgTheOne>
                        <Img src={theOne} />
                        <P>Escolha a melhor opção para você! Negocie valores e horários diretamente com o profissional escolhido! </P>
                    </ImgTheOne>
                </ContainerElements>
            </Div>

        )
    }
}
export default HowItWorks