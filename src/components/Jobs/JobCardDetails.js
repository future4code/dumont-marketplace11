import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core'

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#8D6AD9"
        }
    }
})

const CardDiv = styled.div`
position: absolute;
width: 400px;
height: 310px;
display: flex;
flex-direction: column;
align-items: center; 
align-self: center;
background-color: #9F8FD9;
border-radius: 10px;
top: 125px;
`
const PageDiv = styled.div` 
position: fixed;
width: 100vw;
height: 100vh;
flex-direction: column;
align-items: center;
align-self: center;
top: 0;
left: 0;
background-color: transparent;
box-sizing: border-box;
display: flex;
flex-direction: column;
`
const Span = styled.span`
cursor: pointer;
font-weight: bold;
display: flex;
align-self: start;
margin-left: 5px;
`   

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"


class JobCardDetails extends React.Component {
    state = {
        details: {},
        taken: false
    }


    componentDidMount () {
        this.getCardDetails(this.props.idProps)
    }

    
    getCardDetails = (id) => {
        axios.get(`${urlBase}/${id}`)
        .then((response) => {
            this.setState({
                details: response.data})
            }) 
    }

    takeJob = (id) => {
        axios.put(`${urlBase}/${id}/take`)
        .then((response) => {
            this.setState({
              taken:response.data.taken})
        })
    }

    render () {
        return (
            <PageDiv>
              <CardDiv>
                    <Span onClick= {this.props.close}>X</Span>
                    <h3> Título: {this.state.details.title} </h3>
                    <hr />
                    <p> Descrição: {this.state.details.description} </p>
                    <p> Prazo:{this.state.details.dueDate} </p>
                    <p> Valor: R$ {this.state.details.value},00</p>
                    <p> Forma de pagamento: {this.state.details.paymentMethods} </p>
                    <MuiThemeProvider theme={myTheme}>
                        <Button onClick={() => {this.takeJob(this.state.details.id)
                        this.props.close()
                        }} variant="contained" color="primary"  >
                        CONTRATAR
                        </Button>
                    </MuiThemeProvider>
              </CardDiv>
            </PageDiv>
        )
    }
}

export default JobCardDetails 

            