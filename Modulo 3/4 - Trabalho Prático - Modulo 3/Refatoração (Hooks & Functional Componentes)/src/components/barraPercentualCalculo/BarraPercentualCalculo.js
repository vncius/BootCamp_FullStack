import React from 'react';
import css from './BarraPercentualCalculo.module.css';

export default function BarraPercentualCalculo({
  percentINSS,
  percentIRPF,
  percentSalarioLiquido,
}) {
  const { inss, irpf, salLiq } = gereCSS(
    percentINSS,
    percentIRPF,
    percentSalarioLiquido
  );

  return (
    <div className={css.componente}>
      <div style={inss}></div>
      <div style={irpf}></div>
      <div style={salLiq}></div>
    </div>
  );
}

const gereCSS = (inssPerc, irpfPerc, salLiqPerc) => {
  return {
    inss: {
      backgroundColor: 'Cyan',
      width: `${inssPerc}%`,
      borderRadius: '10px 0px 0px 10px',
    },
    irpf: {
      backgroundColor: 'DarkViolet',
      width: `${irpfPerc}%`,
    },
    salLiq: {
      backgroundColor: 'LawnGreen',
      width: inssPerc > 0 || irpfPerc > 0 ? `${salLiqPerc}%` : '100%',
      borderRadius: '0px 10px 10px 0px',
    },
  };
};
