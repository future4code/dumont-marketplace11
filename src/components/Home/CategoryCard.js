import React from 'react';
import styled from 'styled-components';

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
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995390.svg"/>
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995394.svg"/>
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995401.svg"/>
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995392.svg"/>
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995407.svg"/>
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995417.svg"/>
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995385.svg"/>
               <Img onClick={this.props.goToJobViewPage} src="https://www.flaticon.com/svg/static/icons/svg/1995/1995413.svg"/>
            </DivDetails>
        )
    }
}

export default JobCardDetails