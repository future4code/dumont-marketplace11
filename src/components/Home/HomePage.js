import React from 'react';
import AboutUs from './AboutUs';
import CarouselFeature from './CarouselFeature';
import CategoryCard from './CategoryCard';
import HowItWorks from './HowItWorks';

class HomePage extends React.Component {

	render(){

		return (
			<div>
                <CategoryCard goToJobViewPage={this.props.goToJobViewPage}/>
				<CarouselFeature />
				<AboutUs />
				<HowItWorks />
            </div>
		)
	}
}

export default HomePage
