import React, { useState, useEffect } from 'react';
import Input from './Input';
import { formatNumber, valideSeInputVazio } from '../../Utilidades/Utilidades';
import Rendimentos from './Rendimentos';
import InputMaskedMoney from './InputMaskedMoney';

export default function Principal() {
  const [valInicial, setValInicial] = useState(0.0);
  const [txJuros, setTxJuros] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [rendimentoMensal, setRendimentoMensal] = useState([]);

  useEffect(() => {
    var resultado = calculeRendimento(valInicial, txJuros, periodo);
    setRendimentoMensal(resultado);
  }, [valInicial, txJuros, periodo]);

  const calculeRendimento = (valInicial, txJuros, periodo) => {
    var valorTotalAcumulado = valInicial;
    var lucroAcumulado = 0;
    var percentualAcumulado = 0;
    var newRendimento = [];
    txJuros = txJuros === '' ? 0 : txJuros;

    for (let i = 0; i < periodo; i++) {
      var lucroLiquido = valorTotalAcumulado * (txJuros / 100);
      lucroAcumulado += parseFloat(lucroLiquido);
      percentualAcumulado += parseFloat(txJuros);

      var totalBruto =
        parseFloat(valorTotalAcumulado) + parseFloat(lucroLiquido);

      newRendimento.push({
        id: i + 1,
        totalAcumulado: formatNumber(totalBruto.toFixed(2)),
        lucroAcumulado: formatNumber(lucroAcumulado.toFixed(2)),
        percentualAcumulado: percentualAcumulado.toFixed(2),
        saldoNegativo: percentualAcumulado < 0,
      });

      valorTotalAcumulado = totalBruto;
    }
    return newRendimento;
  };

  const handleUpdateInput = (idInput, value) => {
    // eslint-disable-next-line default-case
    switch (idInput) {
      case 'montante':
        setValInicial(valideSeInputVazio(value) ? 0 : value);
        break;
      case 'juros':
        setTxJuros(valideSeInputVazio(value) ? '' : value);
        break;
      case 'periodo':
        setPeriodo(value);
        break;
    }
  };

  return (
    <div>
      <div className="form-group justify-content-between" style={style.inputs}>
        {/*prettier-ignore*/}
        <InputMaskedMoney desc="Montante Inicial"  id="montante" changeInput={handleUpdateInput} val={valInicial} />
        {/*prettier-ignore*/}
        <Input type="number" desc="Taxa de juros mensal" id="juros" changeInput={handleUpdateInput} val={txJuros} step='.01' max={999.99}/>
        {/*prettier-ignore*/}
        <Input type="number" desc="Período (meses)" id="periodo" changeInput={handleUpdateInput}val={periodo} />
        {/*prettier-ignore*/}
      </div>
      <div>
        {rendimentoMensal.length > 0 && (
          <Rendimentos redimentos={rendimentoMensal} />
        )}
      </div>
    </div>
  );
}

const style = {
  inputs: {
    display: 'flex',
    flexDirection: 'row',
  },
};
