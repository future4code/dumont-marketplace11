import React from 'react';
import axios from 'axios';

const urlBase = "https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs"

class Filter extends React.Component {
    state = {
        sortTitleBy: "A-Z",
        sortPriceBy: "",
        sortDateBy: "",
        minValue: 0,
        maxValue: Infinity,
    }

    filterByText = (arrayOfObjects, text) => {
        const filteredArray = arrayOfObjects.filter((object) => {
            if (object.title.includes(text)) {
                return true
            } else {
                return object.description.includes(text)
            }
        })
        return filteredArray
    }

    filterByValue = (arrayOfObjects) => {
        let filteredByMin
        let filteredByBoth

        if (this.state.minValue) {
            filteredByMin = arrayOfObjects.filter((object) => {
                return object.value > this.state.minValue
            })
        } else { filteredByMin = arrayOfObjects }

        if (this.state.maxValue !== Infinity) {
            filteredByBoth = filteredByMin.filter((object) => {
                return object.value < this.state.maxValue
            })
        } else { filteredByBoth = filteredByMin }

        return filteredByBoth
    }

    sortTitleAlphabetically = (arrayOfObjects) => {
        if (!this.state.sortTitleBy) { return arrayOfObjects }
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
        if (!this.state.sortPriceBy) { return arrayOfObjects }
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
        if (!this.state.sortDateBy) { return arrayOfObjects }
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

    combineAllFilters = (arrayOfObjects, text) => {
        const filteredArray = this.filterByValue(
            this.filterByText(arrayOfObjects, text)
        )

        const sortedAndFilteredArray = this.sortTitleAlphabetically(this.sortByPrice(this.sortByDueDate(filteredArray)))
        return sortedAndFilteredArray
    }

    render() {
        if (this.props.allCards !== []) { console.log(this.combineAllFilters(this.props.allCards, "")) }
        console.log(this.props.allCards)
        return (
            <div>

            </div>
        )
    }
}

export default Filter