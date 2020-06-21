import React, { useState, useEffect } from 'react';
import PreLoader from './components/preLoader/PreLoader';
import Header from './components/header/Header';
import Candidates from './components/candidates/Candidates';

export default function App() {
  const [candidates, setCandidates] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const previous = candidates.map(({ id, votes, percentage }) => {
            return { id, votes, percentage };
          });

          setCandidates(json.candidates);
          setPrevious(previous);
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [previous, candidates]);

  // constructor() {
  //   super();

  //   this.state = {
  //     candidates: [],
  //     previous: [],
  //   };

  //   this.interval = null;
  // }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     fetch('http://localhost:8080/votes')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((json) => {
  //         const previous = this.state.candidates.map(
  //           ({ id, votes, percentage }) => {
  //             return { id, votes, percentage };
  //           }
  //         );

  //         this.setState({
  //           candidates: json.candidates,
  //           previous,
  //         });
  //       });
  //   }, 1000);
  // }

  if (candidates.length === 0) {
    return <PreLoader>Carregando...</PreLoader>;
  }
  return (
    <div className="container">
      {/* COM CHILDREN É PASSADO SOMENTE UM PARAMETRO */}
      <Header>Votação</Header>
      <Candidates previous={previous} attr={candidates} />
    </div>
  );
}
