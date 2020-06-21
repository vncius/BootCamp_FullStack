import React, { Component } from 'react';

export default function Toggle({ enabled, description, onToggle }) {
  const handleChange = (event) => {
    onToggle(event.target.checked);
  };

  return (
    <div className="switch">
      <label>
        {description}
        <input checked={enabled} type="checkbox" onChange={handleChange} />
        <span className="lever"></span>
      </label>
    </div>
  );
}
