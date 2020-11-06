import React from 'react';

class Filter extends React.Component {
    state = {
        sortTitleBy: "",
        sortPriceBy: "",
        sortDateBy: "",
        minValue: "",
        maxValue: "",
    }

    componentDidMount = () => {
        this.updateCardsArray()
        console.log(this.props.allCards)
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.allCards === []) {
            this.updateCardsArray()
        }
    }

    updateCardsArray = () => {
        const fullyFilteredArray = this.combineAllFilters(this.props.allCards, this.props.searchedJob)
        console.log(fullyFilteredArray)
        this.props.fetchFilteredArray(fullyFilteredArray)
    }

    filterByText = (arrayOfObjects, text) => {
        const filteredArray = arrayOfObjects.filter((object) => {
            if (object.title.toLowerCase().includes(text.toLowerCase())) {
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
                return object.value >= this.state.minValue
            })
        } else { filteredByMin = arrayOfObjects }

        if (this.state.maxValue && Number(this.state.maxValue)) {
            filteredByBoth = filteredByMin.filter((object) => {
                return Number(object.value) <= this.state.maxValue
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
            const dateArrayA = a.dueDate.split("/")
            const dateArrayB = b.dueDate.split("/")

            if (dateArrayA[2] != dateArrayB[2]) {
                return Number(dateArrayA[2]) - Number(dateArrayB[2])
            } else if (dateArrayA[1] !== dateArrayB[1]) {
                return Number(dateArrayA[1]) - Number(dateArrayB[1])
            } else {
                return Number(dateArrayA[0]) - Number(dateArrayB[0])
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

    onChangeMinInput = (event) => {
        this.setState({ minValue: event.target.value }, () => {
            this.updateCardsArray()
        })
    }
    onChangeMaxInput = (event) => {
        this.setState({ maxValue: event.target.value }, () => {
            this.updateCardsArray()
        })
    }
    onChangeSortByTitle = (event) => {
        this.setState({
            sortTitleBy: event.target.value,
            sortPriceBy: "",
            sortDateBy: ""
        }, () => {
            this.updateCardsArray()
        })
    }
    onChangeSortByPrice = (event) => {
        this.setState({
            sortTitleBy: "",
            sortPriceBy: event.target.value,
            sortDateBy: ""
        }, () => {
            this.updateCardsArray()
        })
    }
    onChangeSortByDate = (event) => {
        this.setState({
            sortTitleBy: "",
            sortPriceBy: "",
            sortDateBy: event.target.value
        }, () => {
            this.updateCardsArray()
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input placeholder="Valor mínimo" type="number" min="0"
                        value={this.state.minValue} onChange={this.onChangeMinInput}
                    />
                    <input placeholder="Valor máximo" type="number" min="0"
                        value={this.state.maxValue} onChange={this.onChangeMaxInput}
                    />
                    <select value={this.state.sortTitleBy} onChange={this.onChangeSortByTitle}>
                        <option value="" disabled>Alfabeticamente</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                    <select value={this.state.sortPriceBy} onChange={this.onChangeSortByPrice}>
                        <option value="" disabled>Por preço</option>
                        <option value="cheapest">Crescente</option>
                        <option value="priciest">Decrescente</option>
                    </select>
                    <select value={this.state.sortDateBy} onChange={this.onChangeSortByDate}>
                        <option value="" disabled>Por data limite</option>
                        <option value="newest">Mais próxima</option>
                        <option value="oldest">Mais longe</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Filter