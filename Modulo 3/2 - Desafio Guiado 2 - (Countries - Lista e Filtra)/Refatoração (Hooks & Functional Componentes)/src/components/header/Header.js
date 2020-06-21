import React, { Component } from 'react';
import { formatNumber } from '../../helpers/formatHelps';
import css from './header.module.css';

export default function Header({
  countryCount,
  filter,
  populationCount,
  onChangeFilter,
}) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  return (
    <div className={css.flexRow}>
      <input
        placeholder="Filtro"
        type="text"
        value={filter}
        onChange={handleInputChange}
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
