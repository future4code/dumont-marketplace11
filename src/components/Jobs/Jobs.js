import React, { Component } from 'react'
import JobsGridCard from './JobsGridCard'
import axios from 'axios'
import Filter from './Filter'
import styled from 'styled-components'

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 10vh;
`

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

  fetchFilteredArray = (array) => {
    this.setState({ filteredCards: array })
  }

  render() {
    const pickArrayToRender =() => {
      if (!this.props.searchedJob) {
        return <JobsGridCard allCards={this.state.allCards} />
      } else if (!this.state.filteredCards.length) {
        return (
          <NotFoundContainer>
            <p>Serviço não encontrado!</p>
          </NotFoundContainer>
        )
      } else {
        return <JobsGridCard allCards={this.state.filteredCards} />
      }
    }
    return (
      <div>
        <Filter
          allCards={this.state.allCards}
          searchedJob={this.props.searchedJob}
          fetchFilteredArray={this.fetchFilteredArray}
        />
        {pickArrayToRender()}
      </div>
    )
  }
}

export default Jobs;