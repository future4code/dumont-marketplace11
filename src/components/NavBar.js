import React from "react";
import logo from "../img/logo.png";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import lupa from "../img/lupa.svg";

const NavHeader = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  background-color: rgb(184, 163, 224);
`;
const Section = styled.div`
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
// const MyButton = styled(Button)({
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     typography: {
//         fontWeight: 700,
//     }
//   });

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
      <Button variant="contained" onClick={this.props.goToHomePage}>
        Home
      </Button>
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
    );
  }
}

export default NavBar;
