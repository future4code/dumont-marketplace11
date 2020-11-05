import React from 'react';
import "./App.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/Home/HomePage';
import Jobs from './components/Jobs/Jobs';
import Registration from './components/Registration';

class App extends React.Component {

	state = {
		currentPage: "home"
	}

	//Funções de Navegação, todas vão ser chamadas no NavBar
	goToHomePage = () => {
		this.setState({ currentPage: "home"})
	}

	//Função para ser chamada no CategoryCard
	goToJobViewPage = () => {
		this.setState({ currentPage: "job-view"})
	}

	goToRegistrationPage = () => {
		this.setState({ currentPage: "registration"})
	}

	render(){
		let renderedPage = ""
		switch ( this.state.currentPage ){
			case "home" :
				renderedPage = <HomePage goToJobViewPage={this.goToJobViewPage}/>
				break;
			case "job-view" :
				renderedPage = <Jobs />
				break;	
			case "registration" :
				renderedPage = <Registration />
				break;
			default :
				renderedPage = <HomePage />			
		}

		return (
			<div>
				<NavBar
					currentPage={this.state.currentPage}
					goToHomePage={this.goToHomePage}
					goToJobViewPage={this.goToJobViewPage}
					goToRegistrationPage={this.goToRegistrationPage}
				/>
				{renderedPage}
				<Footer/>
			</div>
		)
	}
}

export default App
