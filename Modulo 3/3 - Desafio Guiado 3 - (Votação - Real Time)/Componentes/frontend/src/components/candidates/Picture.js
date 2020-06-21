import React from 'react';

export default function Picture({ src, description, title }) {
  return <img style={style} alt={description} title={title} src={src}></img>;
}

const style = {
  width: '80px',
  borderRadius: '50%',
  marginRight: '10px',
};
