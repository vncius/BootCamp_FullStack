import React from 'react';

export default function Input({ id, desc, type, changeInput, step, val }) {
  const handleChange = (event) => {
    changeInput(id, event.target.value);
  };

  return (
    <div style={{ width: '32%' }}>
      <label htmlFor={id}>{desc}</label>
      {/*prettier-ignore*/}
      <input type={type} className="form-control" id={id} onChange={handleChange} step={step} value={val}/>
    </div>
  );
}
