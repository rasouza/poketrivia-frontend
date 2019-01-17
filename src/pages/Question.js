import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import 'normalize.css';
import PropTypes from 'prop-types';
import { getAnswer } from '../services/PokeService';

const Container = styled.div`
	width:500px;
	display:block;
	float:right;
	z-index:2;
	text-align: center;
	margin-right: 150px;
	top:-350px;
	position: relative;
	cursor: pointer;
	font-size: 2em;
`

const Option = styled.div`
	width: 100%;
	opacity: 0.7;
	color: white;
	border-width: 2px;
	border-style: solid;
	border-color: black;
	border-radius: 0.3em;
	margin-top: 20px;
	margin-bottom: 20px;
	background-color: black;
	background-opacity:0.4;
	text-transform: capitalize;

	&:hover {
		opacity: 1;
	}
`

const CorrectOption = styled(Option)`
	background-color: green;
`

const WrongOption = styled(Option)`
	background-color: red;
`

Option.defaultProps = {
	correct: false
}

class Question extends Component {
	state = {
		guess: null,
		answer: 'not yet'
	}

	handleSubmit = (id) => {
		getAnswer(this.props.id, id)
			.then(
				data => {
					console.log(data)
					if (data.answer == true) {
						this.setState({guess: id, answer: 'correct'})
					} else {
						this.setState({guess: id, answer: 'wrong'})
					}
				}
			)
	}

	render() {
		const { options: optionsList } = this.props
		const options = optionsList.map(option => {
				if (this.state.guess == option.id && this.state.answer == 'wrong') {
					return (<WrongOption>{option.name}</WrongOption>)
				}
				else if (this.state.guess == option.id && this.state.answer == 'correct') {
					return (<CorrectOption>{option.name}</CorrectOption>)
				}
				else if (this.state.answer == 'not yet'){
					return (<Option onClick={() => { this.handleSubmit(option.id) }}>{option.name}</Option>)
				}
				else {
					return (<Option>{option.name}</Option>)
				}
			})
		
		return (
			<Container>
				{options}
			</Container>
		)
	}
}

export default Question;