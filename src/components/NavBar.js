import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import { TextField, Button } from "@material-ui/core";
import lupa from "../img/lupa.svg";
import home from "../img/casa.svg";
import homeHover from "../img/home.svg";

const myTheme = createMuiTheme({
  palette: {
      primary: {
          main: "#8D6AD9"
      }
  },
})

const NavHeader = styled.header`
  display: flex;
  padding-right: 20px;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(184, 163, 224);
  
`;
const Section = styled.div`
  padding-left: 50px;
  width: 30vw;
  display: flex;
`;

const Logo = styled.img`
  width: 15%;
  padding: 0 10px;
`;
const Lupa = styled.img`
  width: 13%;
  padding-left: 10px;
`;

const Home = styled.img`
 width: 3%;
 cursor: pointer;
 &:hover{
  
 }
`

class NavBar extends React.Component {
  scrollToAbout = () => {
    window.scrollTo(0, 700);
  };

  scrollToHow = () => {
    window.scrollTo(0, 1200);
  };

  render() {
    const inputSearch = (
      <Section>
        <TextField
          size="small"
          value={this.props.inputSearchValue}
          onChange={this.props.onChangeInputSearch}
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
        />
        <Lupa src={lupa} />
      </Section>
    );

    const homeButton = (
      <Home src={home} onClick={this.props.goToHomePage}/>
    );

    const buttonsHome = (
      <div>
        <Button onClick={this.scrollToAbout} color="primary">
          Quem somos?
        </Button>
        <Button onClick={this.scrollToHow} color="primary">
          Como funciona?
        </Button>
      </div>
    );

    return (
      <MuiThemeProvider theme={myTheme}>
      <NavHeader>
        <Logo src={logo} alt={"logo da FutureNinja"} />
        {this.props.currentPage !== "home" ? homeButton : buttonsHome}
        {this.props.currentPage !== "registration" ? inputSearch : null}
        <Button
          variant="contained"
          onClick={
            this.props.currentPage !== "registration"
              ? this.props.goToRegistrationPage
              : this.props.goToJobViewPage
          }
          color="primary"
        >
          {this.props.currentPage !== "registration"
            ? "Quero ser ninja!"
            : "Ver serviços disponíveis"}
        </Button>
      </NavHeader>
      </MuiThemeProvider>

    );
  }
}

export default NavBar;
