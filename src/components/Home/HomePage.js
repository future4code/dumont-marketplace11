import React from 'react';
import CarouselFeature from './CarouselFeature';
import CategoryCard from './CategoryCard';

class HomePage extends React.Component {

	render(){

		return (
			<div>
                <CategoryCard />
				<CarouselFeature />
            </div>
		)
	}
}

export default HomePage
