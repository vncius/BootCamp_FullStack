import React from 'react';
import Rendimento from '../Rendimento';

export default function Rendimentos({ redimentos }) {
  return (
    <div style={style.principal}>
      {redimentos.map((rendimento) => {
        return (
          <div style={style.elemento} key={rendimento.id}>
            <Rendimento rendimento={rendimento} />
          </div>
        );
      })}
    </div>
  );
}

const style = {
  principal: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elemento: {
    width: '180px',
    backgroundColor: 'ligth-gray',
    margin: '10px',
    padding: '5px',
    border: '1px solid gray',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};
