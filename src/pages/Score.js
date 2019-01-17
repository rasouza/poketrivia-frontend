import React, { Component } from 'react';
import styled from '@emotion/styled';
import 'normalize.css';
import PropTypes from 'prop-types';

const Number = styled.span`
  font-size: 4em;
  float: right;
  position: relative;
  top: 50px;
  right: 350px;
`;

class Score extends Component {
  render() {
    return <Number>{this.props.amount}</Number>;
  }
}

Score.propTypes = {
  amount: PropTypes.number
};

export default Score;
