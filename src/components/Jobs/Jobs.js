import React, { Component } from 'react'
import JobsGridCard from './JobsGridCard'
import axios from 'axios'
import Filter from './Filter'

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"


class Jobs extends React.Component {
  state = {
    allCards: [],
    filteredCards: [],
    seeInfo: false,
    cardDet: ""
  }

  componentDidMount() {
    this.fetchAllCards()
  }

  fetchAllCards = () => {
    axios.get(urlBase)
      .then((res) => {
        this.setState({ allCards: res.data.jobs })
      }).catch((err) => {
        console.log(err.message)
      })
  }


  render() {
    return (
      <div>
        <Filter allCards={this.state.allCards} searchedJob={this.props.searchedJob} />
        <JobsGridCard
          allCards={this.state.allCards}
        />
      </div>

    )
  }
}

export default Jobs;