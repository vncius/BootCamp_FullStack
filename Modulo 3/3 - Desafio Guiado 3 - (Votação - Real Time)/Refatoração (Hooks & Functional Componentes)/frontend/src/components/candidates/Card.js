import React from 'react';

export default function Card({ children }) {
  return (
    <div style={style} className="card horizontal">
      {children}
    </div>
  );
}

const style = {
  padding: '15px',
};
