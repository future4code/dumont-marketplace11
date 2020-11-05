import React from 'react'
import "./App.css";
import { AppContainer } from './components/AppContainer'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CarouselFeature from './components/Home/CarouselFeature'
import JobCardDetails from "./components/Jobs/JobCardDetails"

class App extends React.Component {

	state = {}

	render(){
		return (
			<div>
				<NavBar/>
				<AppContainer />
				<JobCardDetails />
				<CarouselFeature />
				<Footer/>
			</div>
		)
	}
}

export default App
