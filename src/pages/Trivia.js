import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import 'normalize.css';
import PropTypes from 'prop-types';
import { getQuestion } from '../services/PokeService';
import Question from './Question';

const Background = styled.div`
    background-image: url('http://localhost:3000/img/background.png');
    width: 100vw;
    height: 100vh;
    background-size:100% 100%;
    z-index: 1;
`

const Pokemon = styled.div`
    background-image: url('${props => props.sprite}');
    width: 800px;
    height: 600px;
    display: block;
    background-position: 80px 80px;
    background-size: 600px 600px;
    background-repeat: no-repeat;
    z-index: 2;
`

Pokemon.propTypes = {
    sprite: PropTypes.string
}


class Trivia extends Component {
    constructor() {
      super()
      this.state = {
         image: '',
         options: []
      }
    }

    componentDidMount() {
      const promise = getQuestion()
      promise.then(data => this.setState({image: data.image, options: data.options, id: data.id}))
    }

    render() {
        return (
            <Background>
                <Pokemon sprite={this.state.image} />
                <Question options={this.state.options} id={this.state.id} />
            </Background>
        );
    }
}

export default Trivia;
