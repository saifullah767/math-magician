/* eslint linebreak-style: [2, "windows"] */
import React, { Component } from 'react';
import Calculator from './components/Calculator';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}
