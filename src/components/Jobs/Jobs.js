import React, { Component } from 'react'
import JobsGridCard from './JobsGridCard'
import axios from 'axios'

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"


class Jobs extends React.Component {
    state = {
        allCards: [],
        seeInfo: false,
        cardDet: ""
    }

    componentDidMount() {
      this.fetchAllCards()
    }

    fetchAllCards = () => {
        axios.get(urlBase)
        .then((res) => {
            this.setState({allCards: res.data.jobs})
        }).catch((err) =>{
          console.log(err.message)
        })
    }


   render() {
        return (
      <div>
         <JobsGridCard
          allCards = {this.state.allCards}
          />
      </div>

    )
  }
}

export default Jobs;