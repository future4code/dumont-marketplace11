import React from 'react';
import styled from 'styled-components';
import domesticService from '../../img/categories/domestic-service.svg';
import wellBeing from '../../img/categories/well-being.svg';
import programming from '../../img/categories/programming.svg';
import mechanic from '../../img/categories/mechanic.svg';
import tech from '../../img/categories/tech.svg';
import gardening from '../../img/categories/gardening.svg';
import teaching from '../../img/categories/teaching.svg';
import refurbishing from '../../img/categories/refurbishing.svg';

const Img = styled.img`
    width: 50%;
`
const DivDetails = styled.div`
    display: flex;
    justify-content: space-between;
    @media (min-device-width: 320px) and (max-device-width: 420px) {
        display: none;
  }

`

const Div = styled.div`
    text-align: center;
    padding: 15px 10px 0px 10px;
    cursor: pointer;
    &:hover {
        background-color: #CFCFCF;
    }
`

const Title = styled.p`
    font-size: 0.7rem;
    text-align: center;
`

class JobCardDetails extends React.Component {
    render(){
        return(
            <DivDetails>
                <Div>
                    <Img onClick={this.props.goToJobViewPage} src={domesticService}/>
                    <Title>SERVIÇOS DOMÉSTICOS</Title>
                </Div>
               <Div>
                    <Img onClick={this.props.goToJobViewPage} src={wellBeing}/>
                    <Title>SAÚDE E BEM-ESTAR</Title>
               </Div>
               <Div>
                    <Img onClick={this.props.goToJobViewPage} src={programming}/>
                    <Title>TECNOLOGIA E DESIGN</Title>
               </Div>
               <Div>
                    <Img onClick={this.props.goToJobViewPage} src={mechanic}/>
                    <Title>MECÂNICA </Title>
               </Div>
               <Div>
                    <Img onClick={this.props.goToJobViewPage} src={refurbishing}/>
                    <Title>CONSERTOS E REFORMAS</Title>
               </Div>
               <Div>
                    <Img onClick={this.props.goToJobViewPage} src={gardening}/>
                    <Title>JARDINAGEM</Title>
               </Div>
               <Div>
                    <Img onClick={this.props.goToJobViewPage} src={tech}/>
                    <Title>ASSISTÊNCIA TÉCNICA</Title>
               </Div>
               <Div>
                    <Img onClick={this.props.goToJobViewPage} src={teaching}/>
                    <Title>AULAS</Title>
               </Div>
               
               
            </DivDetails>
        )
    }
}

export default JobCardDetails