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
<<<<<<< HEAD
=======
       
>>>>>>> ad746fd420af548d58cdc0c7a8d7e92bd12e85e3
        this.setState({
            seeInfo: true,
            idCard: id
        })
    }

    closeCard = () => {
        this.setState({ seeInfo: false })
    }

    render() {

        const renderSeeDet = this.state.seeInfo ? <JobCardDetails idProps={this.state.idCard} close={this.closeCard} fetchAllCards={this.props.fetchAllCards} /> : null

        const renderedJobs = this.props.allCards.map((item) => {
<<<<<<< HEAD
            return (<JobCard key={item.id} id={item.id} title={item.title}
                value={item.value} dueDate={item.dueDate} detailsTeste={this.seeDetails}  />)
=======
            return (<JobCard key={item.id} id={item.id} title={item.title} 
                value={item.value} dueDate={item.dueDate}  detailsTeste={this.seeDetails} taken={item.taken}/>)
>>>>>>> ad746fd420af548d58cdc0c7a8d7e92bd12e85e3
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