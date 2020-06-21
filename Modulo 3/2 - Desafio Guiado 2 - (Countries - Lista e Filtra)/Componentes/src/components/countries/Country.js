import React, { Component } from 'react';
import css from './countries.module.css';

export default class Country extends Component {
  render() {
    const { country } = this.props;

    return (
      <div className={`${css.country} ${css.border}`}>
        <img
          className={`${css.img}`}
          src={country.flag}
          alt={country.name}
        ></img>
        <span>{country.name}</span>
      </div>
    );
  }
}
