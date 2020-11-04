import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

const NavHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Logo = styled.img`
    align-self: flex-start;
    width: 15vw;
`

class NavBar extends React.Component {

    state = {
        inputSearchValue: "",
        currentPage: "home" //vai receber o state do App
    }

    onChangeInputSearch = (event) => {
        this.setState({ inputSearchValue: event.target.value })
    }

	render(){

		return (
			<NavHeader>
                <Logo src={logo} alt={"logo da FutureNinja"}/>
                <a><Button color="primary">Quem somos?</Button></a>
                <a><Button color="primary">Como funciona?</Button></a>
                
                <TextField 
                    size="small" 
                    value={this.state.inputSearchValue}  
                    onChange={this.onChangeInputSearch}
                    id="outlined-basic" 
                    label="Buscar" 
                    variant="outlined" 
                />

                {this.state.currentPage !== "home" ? <Button variant="contained">Voltar</Button> : null }
                <Button variant="contained" color="primary">Oferecer</Button>
            </NavHeader>
		)
	}
}

export default NavBar
