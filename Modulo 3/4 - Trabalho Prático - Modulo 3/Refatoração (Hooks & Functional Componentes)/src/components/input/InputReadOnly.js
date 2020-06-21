import React from 'react';
import css from './input.module.css';

export default function InputReadOnly({ val, desc, attr }) {
  return (
    <div className={css.component}>
      <span className={css.description}>{desc}</span>
      <input style={attr} readOnly value={val} />
    </div>
  );
}
