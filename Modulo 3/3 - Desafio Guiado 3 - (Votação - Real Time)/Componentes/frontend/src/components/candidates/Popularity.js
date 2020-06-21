import React from 'react';

const STARS = {
  empty: '☆',
  full: '★',
};

export default function Popularity({ value }) {
  const fullStarts = STARS.full.repeat(value);
  const emptyStars = STARS.empty.repeat(10 - value);

  return (
    <div style={{ fontSize: '1.5rem', color: '#f39c12' }}>
      {fullStarts}
      {emptyStars}
    </div>
  );
}
