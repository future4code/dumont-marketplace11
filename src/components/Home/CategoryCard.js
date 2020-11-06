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
    width: 5%;
    &:hover {
        cursor: pointer;
    }
`
const DivDetails = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 60px;
`

class JobCardDetails extends React.Component {
    render(){
        return(
            <DivDetails>
               <Img onClick={this.props.goToJobViewPage} src={domesticService}/>
               <Img onClick={this.props.goToJobViewPage} src={wellBeing}/>
               <Img onClick={this.props.goToJobViewPage} src={programming}/>
               <Img onClick={this.props.goToJobViewPage} src={mechanic}/>
               <Img onClick={this.props.goToJobViewPage} src={refurbishing}/>
               <Img onClick={this.props.goToJobViewPage} src={gardening}/>
               <Img onClick={this.props.goToJobViewPage} src={tech}/>
               <Img onClick={this.props.goToJobViewPage} src={teaching}/>
            </DivDetails>
        )
    }
}

export default JobCardDetails