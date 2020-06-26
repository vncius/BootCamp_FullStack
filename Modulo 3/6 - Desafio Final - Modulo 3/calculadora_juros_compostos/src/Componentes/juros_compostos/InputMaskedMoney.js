import React from 'react';
import NumberFormat from 'react-number-format';
import {
  valideSeInputVazio,
  currencyFormatterMoneyBRL,
} from '../../Utilidades/Utilidades';

export default function InputMaskedMoney({ val, changeInput, id, desc }) {
  const handleUpdateNumber = ({ formattedValue, value }) => {
    var valorFloat = 0;
    if (!valideSeInputVazio(formattedValue)) {
      valorFloat = formattedValue
        .replace('R$', '')
        .replace('.', '')
        .replace(',', '.');
    }

    changeInput(id, valorFloat);
  };

  return (
    <div style={{ width: '32%' }}>
      <label htmlFor={id}>{desc}</label>
      <NumberFormat
        id={id}
        value={val}
        format={currencyFormatterMoneyBRL}
        thousandSeparator={true}
        prefix={'R$'}
        className="form-control"
        onValueChange={(values) => {
          handleUpdateNumber(values);
        }}
      />
    </div>
  );
}
