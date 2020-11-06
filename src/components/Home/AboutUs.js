import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    color: #8662d0;
    height: 23em;
`

const H1 = styled.h1`
    font-family: nove, sans-serif;
    text-align: end;
    padding: 50px;
`
const P = styled.p`
    margin: 0 60px;
    font-weight: bold;
    font-family: acumin-pro, sans-serif;
`

class AboutUs extends React.Component {
    state = {}
    render(){
        return (
                <Div>
                    <H1>Quem somos?</H1>
                    <P>Olá , seja bem vindo a Future Ninjas, nós somos uma plataforma de serviços oferecidos apenas por mulheres. Temos o objetivo de diminuir o  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel molestie erat.
                                Nam luctus ac tellus ut vestibulum. Phasellus lectus libero, congue ac malesuada vitae, pulvinar at velit.</P>
                </Div>
           
        )
    }
}
export default AboutUs

