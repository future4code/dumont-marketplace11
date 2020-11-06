import { MenuItem, Select, TextField, Box } from '@material-ui/core';
import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class Filter extends React.Component {
    state = {
        sortTitleBy: "",
        sortPriceBy: "",
        sortDateBy: "",
        minValue: "",
        maxValue: "",
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.allCards === [] || prevProps.searchedJob !== this.props.searchedJob) {
            this.updateCardsArray(this.props.searchedJob)
        }
    }

    updateCardsArray = (text) => {
        const fullyFilteredArray = this.combineAllFilters(this.props.allCards, text)
        this.props.fetchFilteredArray(fullyFilteredArray)
    }

    filterByText = (arrayOfObjects, text) => {
        const filteredArray = arrayOfObjects.filter((object) => {
            return object.title.toLowerCase().includes(text.toLowerCase())
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
            this.updateCardsArray(this.props.searchedJob)
        })
    }
    onChangeMaxInput = (event) => {
        this.setState({ maxValue: event.target.value }, () => {
            this.updateCardsArray(this.props.searchedJob)
        })
    }
    onChangeSortByTitle = (event) => {
        this.setState({
            sortTitleBy: event.target.value,
            sortPriceBy: "",
            sortDateBy: ""
        }, () => {
            this.updateCardsArray(this.props.searchedJob)
        })
    }
    onChangeSortByPrice = (event) => {
        this.setState({
            sortTitleBy: "",
            sortPriceBy: event.target.value,
            sortDateBy: ""
        }, () => {
            this.updateCardsArray(this.props.searchedJob)
        })
    }
    onChangeSortByDate = (event) => {
        this.setState({
            sortTitleBy: "",
            sortPriceBy: "",
            sortDateBy: event.target.value
        }, () => {
            this.updateCardsArray(this.props.searchedJob)
        })
    }

    render() {
        return (
            <Box>
                <FormControl variant="outlined">
                    <TextField 
                    size="small" 
                    value={this.state.minValue}  
                    type="number" 
                    min="0"
                    onChange={this.onChangeMinInput} 
                    label="Valor mínimo" 
                    variant="outlined" 
                    />
                    <TextField 
                    size="small" 
                    value={this.state.maxValue}  
                    type="number" 
                    min="0"
                    onChange={this.onChangeMaxInput} 
                    label="Valor máximo" 
                    variant="outlined" 
                    />
                    <InputLabel id="ordenar">Ordenar</InputLabel>
                    <Select 
                        id="ordenar"
                        value={this.state.sortTitleBy} 
                        onChange={this.onChangeSortByTitle}
                    >   
                        <MenuItem value="" disabled>Alfabeticamente</MenuItem>
                        <MenuItem value="A-Z">A-Z</MenuItem>
                        <MenuItem value="Z-A">Z-A</MenuItem>
                    </Select>
                    <Select value={this.state.sortPriceBy} onChange={this.onChangeSortByPrice}>
                        <MenuItem value="" disabled>Por preço</MenuItem>
                        <MenuItem value="cheapest">Crescente</MenuItem>
                        <MenuItem value="priciest">Decrescente</MenuItem>
                    </Select>
                    <Select value={this.state.sortDateBy} onChange={this.onChangeSortByDate}>
                        <MenuItem value="" disabled>Por data limite</MenuItem>
                        <MenuItem value="newest">Mais próxima</MenuItem>
                        <MenuItem value="oldest">Mais longe</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        )
    }
}

export default Filter