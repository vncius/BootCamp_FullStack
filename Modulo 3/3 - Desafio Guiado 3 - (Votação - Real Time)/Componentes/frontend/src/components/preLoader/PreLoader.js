import React from 'react';

export default function PreLoader({ children }) {
  return (
    <div className="container">
      <h5 style={styleTitle}>{children}</h5>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
}

const styleTitle = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '1.5rem',
};
