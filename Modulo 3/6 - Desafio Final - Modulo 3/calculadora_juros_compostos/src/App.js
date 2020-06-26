import React from 'react';
import Principal from './Componentes/juros_compostos/Principal';

function App() {
  return (
    <div className="container" style={style.container}>
      <div className="card">
        <div className="card-header center" style={style.title}>
          <span>React - Juros Compostos</span>
        </div>
        <div className="card-body">
          <Principal />
        </div>
      </div>
    </div>
  );
}

export default App;

const style = {
  title: {
    fontSize: '1.75em',
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    marginTop: '25px',
  },
};
