import React, { useEffect } from 'react';
import { useState } from 'react';
import InputEdit from '../input/InputEdit';
import InputReadOnly from '../input/InputReadOnly';
import { calculateSalaryFrom } from '../../helpers/salary/Salary';
import BarraPercentualCalculo from '../barraPercentualCalculo/BarraPercentualCalculo';
import { formatNumber } from '../../helpers/numberFormat/NumberFormat';
import { calculePercentual } from '../../helpers/utilitarios/Utilitarios';
import css from './formCalculo.module.css';

export default function FormCalculo() {
  const [salarioBruto, setSalarioBruto] = useState(0);
  const [baseINSS, setBaseINSS] = useState(0);
  const [descontoINSS, setDescontoINSS] = useState(0);
  const [baseIRPF, setBaseIRPF] = useState(0);
  const [descontoIRPF, setDescontoIRPF] = useState(0);
  const [salLiquido, setSalLiquido] = useState(0);
  const [p_INSS, setP_INSS] = useState(0);
  const [p_IRPF, setP_IRPF] = useState(0);
  const [p_SalarioLiquido, setP_SalarioLiquido] = useState(0);

  const handleCalcule = (salarioBruto) => {
    const dados = calculateSalaryFrom(parseFloat(salarioBruto).toFixed(2));

    const salarioFormatted = formatNumber(salarioBruto);

    setSalarioBruto(salarioBruto);
    setP_INSS(calculePercentual(salarioFormatted, dados.descontoINSS));
    setP_IRPF(calculePercentual(salarioFormatted, dados.descontoIRPF));
    setP_SalarioLiquido(
      calculePercentual(salarioFormatted, dados.salarioLiquido)
    );
    setBaseINSS(dados.baseINSS);
    setBaseIRPF(dados.baseIRPF);
    setDescontoIRPF(`${dados.descontoIRPF} (${p_IRPF})%`);
    setDescontoINSS(`${dados.descontoINSS} (${p_INSS})%`);
    setSalLiquido(`${salarioBruto} (${p_SalarioLiquido})%`);
  };

  useEffect(() => {
    handleCalcule(0);
  }, []);

  const { inss, irpf, salLiq } = atribbutesCSS;

  return (
    <div>
      <div>
        {/*prettier-ignore*/}
        <InputEdit val={salarioBruto} change={handleCalcule} desc="Salário Bruto"/>
      </div>
      <div className={css.divDescontos}>
        <InputReadOnly val={baseINSS} desc="Base INSS" />
        <InputReadOnly val={descontoINSS} attr={inss} desc="Desconto INSS" />
        <InputReadOnly val={baseIRPF} desc="Base IRPF" />
        <InputReadOnly val={descontoIRPF} attr={irpf} desc="Desconto IRPF" />
      </div>
      <div>
        <InputReadOnly val={salLiquido} attr={salLiq} desc="Salário Liquido" />
      </div>

      <BarraPercentualCalculo
        percentINSS={p_INSS}
        percentIRPF={p_IRPF}
        percentSalarioLiquido={p_SalarioLiquido}
      />
    </div>
  );
}

const atribbutesCSS = {
  inss: { color: 'Cyan' },
  irpf: { color: 'DarkViolet' },
  salLiq: { color: 'LawnGreen' },
};
