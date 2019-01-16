import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import 'normalize.css';
import PropTypes from 'prop-types';
import getPokemonById from '../services/PokeService';

const Background = styled.div`
    background-image: url('http://localhost:3000/img/background.png');
    width: 100vw;
    height: 100vh;
    background-size:100% 100%;
`

const Pokemon = styled.div`
    background-image: url('${props => props.sprite}');
    width: 800px;
    height: 800px;
    display: block;
    background-position: 80px 80px;
    background-size: 600px 600px;
    background-repeat: no-repeat;
`

Pokemon.propTypes = {
    sprite: PropTypes.string
}

const pokeId = Math.floor(1 + Math.random() * (151 - 1))

class Trivia extends Component {

    constructor() {
      super()
      this.state = {
         image: ''
      }
    }

    componentDidMount() {
      const promise = getPokemonById(pokeId)
      promise.then(data => this.setState({image: data.image}))
    }

    render() {
        console.log(this.state);
        return (
            <Background>
                <Pokemon sprite={this.state.image} />
            </Background>
        );
    }
}

export default Trivia;
