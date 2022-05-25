import React, { Component } from 'react';

/* eslint linebreak-style: ["error", "windows"] */
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div>
        <input type="text" className="calinput" />
        <div className="buttons">
          <div className="flex">
            <button type="button"> AC </button>
            <button type="button"> +/- </button>
            <button type="button">%</button>
            <button type="button" className="yellow">
              ÷
            </button>
          </div>
          <div className="flex">
            <button type="button" className="seven">
              7
            </button>
            <button type="button" className="eight">
              8
            </button>
            <button type="button" className="nine">
              9
            </button>
            <button type="button" className="yellow multiply">
              x
            </button>
          </div>
          <div className="flex">
            <button type="button" className="seven">
              4
            </button>
            <button type="button" className="eight">
              5
            </button>
            <button type="button" className="nine">
              6
            </button>
            <button type="button" className="yellow minus">
              -
            </button>
          </div>
          <div className="flex">
            <button type="button" className="seven">
              1
            </button>
            <button type="button" className="eight">
              2
            </button>
            <button type="button" className="nine">
              3
            </button>
            <button type="button" className="yellow multiply">
              +
            </button>
          </div>
          <div className="flex">
            <button type="button" className="zero">
              0
            </button>
            <button type="button" className="dot">
              .
            </button>
            <button type="button" className="yellow equal">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
