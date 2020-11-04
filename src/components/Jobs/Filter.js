import React from 'react';
import axios from 'axios';

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"

class Filter extends React.Component {
    state = {
        allCards: [],
        sortTitle: "Z-A",
    }

    componentDidMount() {
        this.fetchAllCards()
    }

    fetchAllCards = () => {
        axios.get(urlBase)
            .then((response) => {
                this.setState({ allCards: response.data.jobs })
            }).catch((error) => {
                console.log(error.message)
            })
    }

    sortTitleAlphabetically = (arrayOfObjects) => {
        const sortedArray = arrayOfObjects.sort((a, b) => {
            const comparison = (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1
            return comparison
        })
        switch (this.state.sortTitle) {
            case "A-Z":
                return sortedArray
            case "Z-A":
                return sortedArray.reverse()
        }
    }

    render() {
        console.log(this.sortTitleAlphabetically(this.state.allCards))
        return (
            <div>

            </div>
        )
    }
}

export default Filter