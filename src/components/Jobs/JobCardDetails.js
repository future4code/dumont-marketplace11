import axios from 'axios'
import React from 'react'
import styled from 'styled-components'


const CardDiv = styled.div`
position: absolute;
width: 500px;
height: 500px;
display: flex;
flex-direction: column;
align-items: center; 
align-self: center;
background-color: purple;
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
const Button = styled.button`


`   


const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"


class JobCardDetails extends React.Component {
    state = {
        details: {}
    }



    componentDidMount () {
        
        this.getCardDetails(this.props.idProps)
        
    }

    

    getCardDetails = async (id) => {
        
        
        const response = await axios.get(`${urlBase}/${id}`)
        
           this.setState({details: response.data})
           
    }

    render () {

        return (
            <PageDiv>
              <CardDiv>
                    <Button onClick= {this.props.close}>X</Button>
                    <h3> Título: {this.state.details.title} </h3>
                    <p> Descrição: {this.state.details.description} </p>
                    <p> Prazo:{this.state.details.dueDate} </p>
                    <p> Valor: R$ {this.state.details.value},00</p>
                    <p> Forma de pagamento: {this.state.details.paymentMethods} </p>
              </CardDiv>
            </PageDiv>
        )
    }
}

export default JobCardDetails 