import React, { Component } from 'react';
import FormCalculo from './components/form/FormCalculo';
import BarraPercentualCalculo from './components/barraPercentualCalculo/BarraPercentualCalculo';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>React - Salário</h2>
        <FormCalculo />
      </div>
    );
  }
}
