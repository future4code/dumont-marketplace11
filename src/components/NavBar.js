import React from 'react';
import logo from '../img/logo.svg';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

const NavHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:rgb(184, 163, 224);
`

const Logo = styled.img`
    align-self: flex-start;
    width: 10%;
`

class NavBar extends React.Component {

    scrollToAbout = () => {
        window.scrollTo(0, 700)
    }

    scrollToHow = () => {
        window.scrollTo(0, 800)
    }

	render(){

        const inputSearch = ( 
            <TextField 
                size="small" 
                value={this.props.inputSearchValue}  
                onChange={this.props.onChangeInputSearch}
                id="outlined-basic" 
                label="Buscar" 
                variant="outlined" 
            /> 
        )

        const homeButton = ( 
            <Button variant="contained" onClick={this.props.goToHomePage}>
                Home
            </Button>
        )

		return (
			<NavHeader>
                <Logo src={logo} alt={"logo da FutureNinja"}/>
                <Button onClick={this.scrollToAbout} color="primary">Quem somos?</Button>
                <Button onClick={this.scrollToHow} color="primary">Como funciona?</Button>
                {this.props.currentPage !== "registration" ? inputSearch : null }
                {this.props.currentPage !== "home" ? homeButton : null }
                <Button variant="contained" onClick={this.props.goToRegistrationPage} color="primary">
                    Oferecer
                </Button>
            </NavHeader>
		)
	}
}

export default NavBar
