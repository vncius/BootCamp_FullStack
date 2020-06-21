import React from 'react';
import FlipMove from 'react-flip-move';
import Card from './Card';
import Candidate from './Candidate';

export default function Candidates({ attr, previous }) {
  return (
    <div>
      <FlipMove>
        {attr.map((candidate, index) => {
          const { id } = candidate;
          const previousVoteObject = previous.find((item) => (item.id = id));
          return (
            <div key={id}>
              <Card>
                <Candidate
                  previous={previousVoteObject}
                  attr={candidate}
                  position={index + 1}
                />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
