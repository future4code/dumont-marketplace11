import React from 'react';
import axios from 'axios';
import { TextField, Button, LinearProgress } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'
import styled from 'styled-components';
import 'date-fns';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';

const myTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#8D6AD9"
		}
	},
})

const FormContainer = styled.form`
	padding: 20px;
	margin: auto;
	margin-bottom: 3em;
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 30vw;
	@media (min-device-width: 320px) and (max-device-width: 420px) { 
		width: 70%;
	}
`
const H1 = styled.h1`
	margin: 1.5em 0 0.5em 0;
    font-family: nove, sans-serif;
	color: #8662d0;
    text-align: center; 
`

class Registration extends React.Component {

	state = {
		inputName: "",
		inputTitle: "",
		inputDescription: "",
		inputValue: "",
		selectedPaymentMethod: "Débito",
		selectedDate: Date.now(),
		inProgress: false
	}

	createJob = () => {
		const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/futureNinjasOne/jobs'
		const date = new Date(this.state.selectedDate)
		const body = {
			title: this.state.inputTitle,
			description: this.state.inputDescription,
			value: this.state.inputValue,
			paymentMethods: [this.state.selectedPaymentMethod],
			dueDate: date.toLocaleDateString(),
			taken: false
		}

		if (this.verifyFields(this.state.inputName, body.title, body.description, body.value)) {
			this.setState({ inProgress: true })
			axios.post(baseUrl, body)
				.then(() => {
					window.alert(`Obrigada, ${this.state.inputName}, seu serviço foi cadastrado com sucesso <3`)
					this.setState({
						inputName: "",
						inputTitle: "",
						inputDescription: "",
						inputValue: "",
						inProgress: false
					})
				}).catch(error => {
					console.log(error.message)
				})
		}
	}

	verifyFields = (name, title, description, value) => {
		if (name !== "") {
			if (title !== "") {
				if (description !== "") {
					if (value !== "") {
						return true
					} else {
						window.alert("Por favor, informe o valor do serviço")
					}
				} else {
					window.alert("Por favor, informe uma descrição do seu serviço")
				}
			} else {
				window.alert("Por favor, informe o título do serviço")
			}
		} else {
			window.alert("Por favor, informe seu nome")
		}
	}

	onChangeInputName = (event) => {
		this.setState({ inputName: event.target.value })
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
		this.setState({ selectedDate: date })
	};

	render() {
		const paymentMethods = ["Débito", "Crédito", "Paypal", "Picpay"]
		const paymentMethodsList = paymentMethods.map((paymentMethod, id) => (
			<MenuItem key={id} value={paymentMethod}>{paymentMethod}</MenuItem>
		))

		return (
			<MuiThemeProvider theme={myTheme}>
				<H1>Seja um ninja!</H1>

				<FormContainer noValidate>

					<TextField
						size="small"
						value={this.state.inputName}
						onChange={this.onChangeInputName}
						label="Nome"
						variant="outlined"
					/>
					<TextField
						size="small"
						value={this.state.inputTitle}
						onChange={this.onChangeInputTitle}
						label="Título"
						variant="outlined"
					/>
					<TextField
						size="small"
						value={this.state.inputDescription}
						onChange={this.onChangeInputDescription}
						label="Descrição"
						variant="outlined"
					/>
					<TextField
						size="small"
						value={this.state.inputValue}
						onChange={this.onChangeInputValue}
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
							{paymentMethodsList}
						</Select>
					</FormControl>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							disableToolbar
							variant="inline"
							format="dd/MM/yyyy"
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
					{this.state.inProgress ? <LinearProgress /> : null}
				</FormContainer>

			</MuiThemeProvider>
		)
	}
}

export default Registration
