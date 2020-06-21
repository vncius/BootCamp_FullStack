import React, { Component } from 'react';
import { formatNumber } from '../../helpers/formatHelps';
import css from './header.module.css';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newText = event.target.value;
    this.props.onChangeFilter(newText);
  };

  render() {
    const { countryCount, filter, populationCount } = this.props;

    return (
      <div className={css.flexRow}>
        <input
          placeholder="Filtro"
          type="text"
          value={filter}
          onChange={this.handleInputChange}
        />
        <span className={css.country}>
          | paises: <strong>{countryCount}</strong>
        </span>
        <span className={css.population}>
          | População: <strong>{formatNumber(populationCount)}</strong>
        </span>
      </div>
    );
  }
}
