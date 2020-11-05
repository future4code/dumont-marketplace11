import React from 'react';
import logo from '../img/logo.png';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';

const NavHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    align-self: flex-start;
    width: 8vw;
`

class NavBar extends React.Component {

    state = {
        inputSearchValue: "",
    }

    onChangeInputSearch = (event) => {
        this.setState({ inputSearchValue: event.target.value })
    }

    scrollToAbout = () => {
        window.scrollTo(0, 700)
    }

    scrollToHow = () => {
        window.scrollTo(0, 800)
    }

	render(){

		return (
			<NavHeader>
                <Logo src={logo} alt={"logo da FutureNinja"}/>
                <Button onClick={this.scrollToAbout} color="primary">Quem somos?</Button>
                <Button onClick={this.scrollToHow} color="primary">Como funciona?</Button>
                
                <TextField 
                    size="small" 
                    value={this.state.inputSearchValue}  
                    onChange={this.onChangeInputSearch}
                    id="outlined-basic" 
                    label="Buscar" 
                    variant="outlined" 
                />

                {this.props.currentPage !== "home" ? 
                <Button variant="contained" onClick={this.props.goToHomePage}>
                    Home
                </Button> : null }
                <Button variant="contained" onClick={this.props.goToRegistrationPage} color="primary">
                    Oferecer
                    </Button>
            </NavHeader>
		)
	}
}

export default NavBar
