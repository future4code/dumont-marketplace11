import React, { Component } from 'react'
import JobsGridCard from './JobsGridCard'


const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"


export default class Jobs extends Component {
    state = {
        allCards: []
    }


    fetchAllCards = () => {
        axios.get(urlBase)
        .then((res) => {
            this.setState({allCards: res.data.jobs})
        })
    }



  render() {
    return (
    <JobsGridCard
    allCards = {this.state.allCards}
    /> 
              
    )
  }
}
