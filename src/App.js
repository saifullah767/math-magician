import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QuotesPage from './pages/QuotesPage';
import './App.css';

/* eslint linebreak-style: ["error", "windows"] */
// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/math-magicians" element={<HomePage />} />
          <Route path="/math-magicians/calculator" element={<CalculatorPage />} />
          <Route path="/math-magicians/quotes" element={<QuotesPage />} />
        </Routes>
      </div>
      
    );
  }
}
