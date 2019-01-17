import React, { Component } from 'react';
import styled from '@emotion/styled';
import 'normalize.css';
import PropTypes from 'prop-types';

class Score extends Component {
  render() {
    return <span>{this.props.amount}</span>;
  }
}

Score.propTypes = {
  amount: PropTypes.number
};

export default Score;
