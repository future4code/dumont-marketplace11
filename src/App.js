import React from 'react'
import { AppContainer } from './components/AppContainer'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends React.Component {

	state = {}

	render(){
		return (
			<div>
				<NavBar/>
				<AppContainer />
				<Footer/>
			</div>
		)
	}
}

export default App
