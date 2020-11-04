import React from 'react'
import JobCard from './JobCard'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1em;
`

class JobsGridCard extends React.Component {

	render(){
        const renderedJobs = this.props.allCards.map((item) => {
            return (<JobCard key={item.id} title={item.title} 
                value={item.value} dueDate={item.dueDate}/>)
        })

		return (
			<Container>
                {renderedJobs}
            </Container>
		)
	}
}

export default JobsGridCard