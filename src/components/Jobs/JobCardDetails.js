import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Modal from 'react-bootstrap/Modal'


const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#8D6AD9"
        },
        secundary: {
            main: "#CFCFCF"
        }
    }
})

const SpacedButton = styled.div`
    margin-right: 1em;
`

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"


class JobCardDetails extends React.Component {
    state = {
        details: {},
        taken: false
    }


    componentDidMount() {
        this.getCardDetails(this.props.idProps)
    }


    getCardDetails = (id) => {
        axios.get(`${urlBase}/${id}`)
            .then((response) => { this.setState({ details: response.data }) })
    }

    takeJob = (id) => {
        axios.put(`${urlBase}/${id}/take`)
            .then((response) => {
                this.props.fetchAllCards()
                this.setState({
                    taken: response.data.taken
                })
            })
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.details.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{this.state.details.description}</p>
                    <p>Prazo:  {this.state.details.dueDate}</p>
                    <p>Valor:  R$ {this.state.details.value},00</p>
                    <p>Forma de pagamento: {this.state.details.paymentMethods}</p>
                </Modal.Body>

                <Modal.Footer>
                    <MuiThemeProvider theme={myTheme}>
                        <SpacedButton>
                            <Button variant="contained" color="secundary" onClick={this.props.close}>
                                Fechar
                                </Button>
                        </SpacedButton>

                        <Button onClick={() => {
                            this.takeJob(this.state.details.id)
                            this.props.close()                            
                        }} variant="contained" color="primary"  >
                            CONTRATAR
                        </Button>
                    </MuiThemeProvider>
                </Modal.Footer>

            </Modal>
        )
    }
}

export default JobCardDetails

