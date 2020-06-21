import React from 'react';
import css from './input.module.css';

export default function InputEdit({ val, desc, change }) {
  const changeInput = (event) => {
    change(event.target.value);
  };

  return (
    <div className={css.component}>
      <span className={css.description}>{desc}</span>
      <input min="0" value={val} type="number" onChange={changeInput} />
    </div>
  );
}
