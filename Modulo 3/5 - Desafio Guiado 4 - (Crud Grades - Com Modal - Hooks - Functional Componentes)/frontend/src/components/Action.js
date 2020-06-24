import React from 'react';

export default function Action({ type, id, onActionClick }) {
  const handleIconClick = () => {
    onActionClick(id, type);
  };

  return (
    <i className="material-icons" onClick={handleIconClick} style={style}>
      {type}
    </i>
  );
}

const style = {
  cursor: 'pointer',
};
