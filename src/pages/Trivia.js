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
    background-position: 120px 100px;
    background-size: 800px 800px;
    background-repeat: no-repeat;
`

Pokemon.propTypes = {
    sprite: PropTypes.string
}

const pokeId = 1 + Math.random() * (151 - 1)


class Trivia extends Component {
    render() {
        const response = getPokemonById(pokeId)
        return (
            <Background>
                <Pokemon sprite={response.image} />
            </Background>
        );
    }
}

export default Trivia;
