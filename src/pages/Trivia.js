import React, { Component } from 'react';
import styled from '@emotion/styled';
import 'normalize.css';
import PropTypes from 'prop-types';
import { getQuestion } from '../services/PokeService';
import Question from './Question';
import Score from './Score';

const Background = styled.div`
  background-image: url('http://localhost:3000/img/background.png');
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  z-index: 1;
`;

const Pokemon = styled.div`
    background-image: url('${props => props.sprite}');
    width: 800px;
    height: 600px;
    display: block;
    background-position: 80px 80px;
    background-size: 600px 600px;
    background-repeat: no-repeat;
    z-index: 2;
`;

Pokemon.propTypes = {
  sprite: PropTypes.string
};

class Trivia extends Component {
  state = {
    image: '',
    score: 0,
    options: []
  };

  componentDidMount() {
    const promise = getQuestion();
    promise.then(data =>
      this.setState({ image: data.image, options: data.options, id: data.id })
    );
  }

  render() {
    return (
      <Background>
        <Score amount={this.state.score} />
        <Pokemon sprite={this.state.image} />
        <Question options={this.state.options} id={this.state.id} />
      </Background>
    );
  }
}

export default Trivia;
