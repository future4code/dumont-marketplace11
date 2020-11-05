import React from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import styled from 'styled-components';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const FormContainer = styled.form`
	padding: 20px;
	margin: auto;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 30vw;
`

class Registration extends React.Component {

	state = {
		inputTitle: "",
		inputDescription: "",
		inputValue: "",
		selectedPaymentMethod: "Débito",
		selectedDate: Date.now()
	}

	createJob = () => {
		const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs'
		const date = new Date(this.state.selectedDate)
		const body = {
			title: this.state.inputTitle,
			description: this.state.inputDescription,
			value: this.state.inputValue,
			paymentMethods: [this.state.selectedPaymentMethod],
			dueDate: date.toLocaleDateString()
		}

		axios.post( baseUrl, body )
		.then(() => {
			window.alert("emprego criado com sucesso!")
		}).catch(error => {
			console.log(error.message)
		})
	}

	onChangeInputTitle = (event) => {
		this.setState({ inputTitle: event.target.value })
	}

	onChangeInputDescription = (event) => {
		this.setState({ inputDescription: event.target.value })
	}

	onChangeInputValue = (event) => {
		this.setState({ inputValue: event.target.value })
	}

	handlePaymentMethods = (event) => {
		this.setState({ selectedPaymentMethod: event.target.value })
	}

	handleDateChange = (date) => {
	   this.setState({selectedDate: date })
	};

	render(){

		const paymentMethods = ["Débito", "Crédito", "Paypal", "Picpay"]

		return (
			<FormContainer noValidate>
				<TextField 
                    size="small" 
                    value={this.state.inputTitle}  
                    onChange={this.onChangeInputTitle}
                    // id="outlined-basic" 
                    label="Título" 
                    variant="outlined" 
                />
				<TextField 
					size="small" 
					value={this.state.inputDescription}  
                    onChange={this.onChangeInputDescription}
                    // id="outlined-basic" 
                    label="Descrição" 
                    variant="outlined" 
                />
				<TextField 
					size="small" 
					value={this.state.inputValue}  
                    onChange={this.onChangeInputValue}
                    // id="outlined-basic" 
                    label="Valor" 
                    variant="outlined" 
                />

				<FormControl variant="outlined" >
					<InputLabel id="demo-simple-select-outlined-label">Forma de Pagamento</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={this.state.selectedPaymentMethod}
						onChange={this.handlePaymentMethods}
						label="Forma de Pagamento"
					>
					{paymentMethods.map((paymentMethod, id) => (
						<MenuItem key={id} value={paymentMethod}>{paymentMethod}</MenuItem>
						))}	
					</Select>
				</FormControl>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						label="Prazo de entrega do serviço"
						value={this.state.selectedDate}
						onChange={this.handleDateChange}
					/>
				</MuiPickersUtilsProvider>
				<Button variant="contained" onClick={this.createJob} color="primary">
                    Cadastrar
                </Button>	
			</FormContainer>
		)
	}
}

export default Registration
