import React from 'react';

export default function Header({ children }) {
  return <h2 style={styleTitle}>{children}</h2>;
}

const styleTitle = {
  textAlign: 'center',
  width: '100%',
  padding: '10px',
};
