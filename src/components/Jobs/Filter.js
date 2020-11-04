import React from 'react';
import axios from 'axios';

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"

class Filter extends React.Component {
    state = {
        allCards: [],
        sortTitleBy: "Z-A",
        sortPriceBy: "priciest",
        sortDateBy: "newest",
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

        switch (this.state.sortTitleBy) {
            case "A-Z":
                return sortedArray
            case "Z-A":
                return sortedArray.reverse()
        }
    }

    sortByPrice = (arrayOfObjects) => {
        const sortedArray = arrayOfObjects.sort((a, b) => {
            return a.value - b.value
        })

        switch (this.state.sortPriceBy) {
            case "cheapest":
                return sortedArray
            case "priciest":
                return sortedArray.reverse()
        }
    }

    sortByDueDate = (arrayOfObjects) => {
        const sortedArray = arrayOfObjects.sort((a, b) => {
            const dateArrayA = a.dueDate.split("-")
            const dateArrayB = b.dueDate.split("-")

            if (dateArrayA[0] != dateArrayB[0]) {
                return Number(dateArrayA[0]) - Number(dateArrayB[0])
            } else if (dateArrayA[1] !== dateArrayB[1]) {
                return Number(dateArrayA[1]) - Number(dateArrayB[1])
            } else {
                return Number(dateArrayA[2]) - Number(dateArrayB[2])
            }
        })

        switch (this.state.sortDateBy) {
            case "newest":
                return sortedArray
            case "oldest":
                return sortedArray.reverse()
        }
    }

    render() {
        console.log(this.sortByDueDate(this.state.allCards))
        return (
            <div>

            </div>
        )
    }
}

export default Filter