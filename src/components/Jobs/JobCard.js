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

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    padding: 0;    
`

const Tittle = styled.h3`
    text-align: center;
    padding: 30px;
`

class JobCard extends React.Component {

    render() {
        
        return (
            <Card>
                <img src="https://picsum.photos/200/200" alt="imagem" />
                <Tittle>{this.props.title}</Tittle>
                <p> R${this.props.value},00  | Data: {this.props.dueDate}</p>
                <MuiThemeProvider theme={myTheme}>
                <Button onClick={() => this.props.detailsTeste(this.props.id)}
                 variant="contained" color= {this.props.taken ? "secondary" : "primary"} >
                    VER MAIS
                </Button>
                </MuiThemeProvider>
            </Card>
        )        
    }
}
export default JobCard

