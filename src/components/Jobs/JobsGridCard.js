import React from 'react'
import JobCard from './JobCard'
import JobCardDetails from './JobCardDetails'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1em;
    margin: 3em 0;
    align-items: center;
`

class JobsGridCard extends React.Component {
    state = {
        seeInfo: false,
        idCard: "",
    }

    seeDetails = (id) => {
       
        this.setState({
            seeInfo: true,
            idCard: id
        })
    }

    closeCard = () => {
        this.setState({ seeInfo: false })
    }

    render() {

        const renderSeeDet = this.state.seeInfo ? <JobCardDetails idProps={this.state.idCard} close={this.closeCard} /> : null

        const renderedJobs = this.props.allCards.map((item) => {
            return (<JobCard key={item.id} id={item.id} title={item.title} 
                value={item.value} dueDate={item.dueDate}  detailsTeste={this.seeDetails} taken={item.taken}/>)
        })

        return (

            <Container>
                {renderedJobs}
                {renderSeeDet}
            </Container>






        )
    }
}

export default JobsGridCard