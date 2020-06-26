import React, { Fragment } from 'react';

export default function Rendimento(props) {
  const {
    id,
    totalAcumulado,
    lucroAcumulado,
    percentualAcumulado,
    saldoNegativo,
  } = props.rendimento;
  return (
    <Fragment>
      <div>
        <span style={{ fontWeight: 'bold', margin: '10px' }}>{id}</span>
      </div>
      <div style={style.flexCollumn}>
        <span style={{ color: saldoNegativo ? 'red' : 'green' }}>
          {totalAcumulado}
        </span>
        <span style={{ color: saldoNegativo ? 'red' : 'green' }}>
          {saldoNegativo ? lucroAcumulado : `+ ${lucroAcumulado}`}
        </span>
        <span style={{ color: saldoNegativo ? 'red' : 'blue' }}>
          {percentualAcumulado} %
        </span>
      </div>
    </Fragment>
  );
}

const style = {
  flexCollumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};
