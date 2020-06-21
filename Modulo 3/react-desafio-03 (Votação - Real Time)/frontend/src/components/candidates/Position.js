import React from 'react';

export default function Position({ children }) {
  return <div style={style}>{children}</div>;
}

const style = {
  fontSize: '1.5rem',
  marginRight: '10px',
  fontWeight: 'bold',
};
