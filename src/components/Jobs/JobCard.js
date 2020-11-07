import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import Card from 'react-bootstrap/Card'

const myTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#8D6AD9"
        }
    }
})

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;   
`

class JobCard extends React.Component {

    render() {

        return (
            <Container>
                <Card className="text-center" style={{ width: '16rem'}}>
                <Card.Img variant="top" src="https://picsum.photos/200/200" />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    R${this.props.value},00  | Data: {this.props.dueDate}
                    </Card.Text>
                    <MuiThemeProvider theme={myTheme}>
                        <Button onClick={() => this.props.detailsTeste(this.props.id)}
                            variant="contained" color="primary">
                            {this.props.taken === false ? "VER MAIS" : "CONTRATADO"}
                        </Button>
                    </MuiThemeProvider>
                </Card.Body>
            </Card>
            </Container>
            
        )
    }
}
export default JobCard



