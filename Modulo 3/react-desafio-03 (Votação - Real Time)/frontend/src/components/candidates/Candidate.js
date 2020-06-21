import React from 'react';
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Votes from './Votes.js';
import Percentage from './Percentage';
import Popularity from './Popularity';

export default function Candidate({ attr, position, previous }) {
  const { id, name, votes, percentage, popularity } = attr;
  const previousVotes = !!previous ? previous.votes : 0;
  const previousPercentage = !!previous ? previous.percentage : 0;

  return (
    <div style={style.row}>
      <Position>{position}</Position>
      <Picture src={`${id}.jpg`} description={name} title={name}></Picture>
      <Info>
        <Name>{name}</Name>
        <Votes previous={previousVotes} value={votes}></Votes>
        <Percentage
          previous={previousPercentage}
          value={percentage}
        ></Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}

const style = {
  row: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-star',
  },
};
