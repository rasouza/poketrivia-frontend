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
    height: 700px;
    display: block;
    background-position: 80px 60px;
    background-size: 600px 600px;
    background-repeat: no-repeat;
    z-index: 2;

    @keyframes reveal {
        from { filter: brightness(0%); }
        to { filter: brightness(100%); }
    }

    &.reveal {
        animation-name: reveal;
        animation-duration: 2s;
    }

    &.not-reveal {
        filter: brightness(0%);
    }
`;

Pokemon.propTypes = {
  sprite: PropTypes.string
};

class Trivia extends Component {
  constructor() {
    super();
    this.state = {
      image: '',
      options: [],
      reveal: false,
      score: 0
    };
  }

  fillQuestion() {
    const promise = getQuestion();
    promise.then(data =>
      this.setState({
        image: data.image,
        options: data.options,
        id: data.id,
        reveal: false
      })
    );
  }

  componentDidMount() {
    this.fillQuestion();
  }

  handleReveal(interval) {
    this.setState({ reveal: true });
    setTimeout(() => {
      this.fillQuestion();
    }, interval);
  }

  render() {
    let style = 'not-reveal';
    if (this.state.reveal) {
      style = 'reveal';
    }
    return (
      <Background>
        <Score amount={this.state.score} />
        <Pokemon sprite={this.state.image} className={style} />
        <Question
          options={this.state.options}
          id={this.state.id}
          reveal={() => this.handleReveal()}
        />
      </Background>
    );
  }
}

export default Trivia;
