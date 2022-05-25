import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

/* eslint linebreak-style: ["error", "windows"] */
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.PureComponent {  render() {
  return (
    <Calculator />
  );
}
}

export default App;
