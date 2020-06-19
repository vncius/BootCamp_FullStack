import React, { Component } from 'react';
import InputForm from '../input/InputForm';
import css from './formCalculo.module.css';
import { calculateSalaryFrom } from '../../helpers/salary/Salary';
import BarraPercentualCalculo from '../barraPercentualCalculo/BarraPercentualCalculo';
import { formatNumber } from '../../helpers/numberFormat/NumberFormat';

export default class FormCalculo extends Component {
  constructor() {
    super();

    this.state = {
      salarioBruto: 0,
      baseINSS: 0,
      descontoINSS: 0,
      baseIRPF: 0,
      descontoIRPF: 0,
      salarioLiquido: 0,
      p_INSS: 0,
      p_IRPF: 0,
      p_SalarioLiquido: '0',
    };
  }

  handleSalarioBruto = (salarioBruto) => {
    const dados = calculateSalaryFrom(parseFloat(salarioBruto).toFixed(2));
    const { descontoINSS, descontoIRPF, salarioLiquido } = dados;
    const salarioFormatted = formatNumber(salarioBruto);

    dados.salarioBruto = salarioBruto;
    dados.p_INSS = this.calcPercent(salarioFormatted, descontoINSS);
    dados.p_IRPF = this.calcPercent(salarioFormatted, descontoIRPF);
    dados.p_SalarioLiquido = this.calcPercent(salarioFormatted, salarioLiquido);
    dados.descontoIRPF += ` (${dados.p_IRPF})%`;
    dados.descontoINSS += ` (${dados.p_INSS})%`;
    dados.salarioLiquido += ` (${dados.p_SalarioLiquido})%`;

    this.setState(dados);
  };

  calcPercent = (valorTotal, valorLiquido) => {
    valorTotal = this.formatReaisInDouble(valorTotal);
    valorLiquido = this.formatReaisInDouble(valorLiquido);
    console.log(valorTotal + ' - ' + valorLiquido);
    let resultado = (parseFloat(valorLiquido) / parseFloat(valorTotal)) * 100;

    return resultado > 0 ? resultado.toFixed(2) : 0;
  };

  formatReaisInDouble = (value) => {
    return parseFloat(
      value
        .toString()
        .replace('R$', '')
        .replace('.', '')
        .replace(',', '.')
        .trim()
    );
  };

  componentDidMount = () => {
    this.handleSalarioBruto(0);
  };

  render() {
    const { inss, irpf, salLiq } = atribbutesCSS;

    const {
      salarioBruto,
      baseINSS,
      descontoINSS,
      baseIRPF,
      descontoIRPF,
      salarioLiquido,
      p_INSS,
      p_IRPF,
      p_SalarioLiquido,
    } = this.state;

    return (
      <div>
        <div>
          <InputForm
            id="1"
            value={salarioBruto}
            disable={false}
            isAttr={false}
            type="number"
            changeSalarioBruto={this.handleSalarioBruto}
            description="Salário Bruto"
          />
        </div>
        <div className={css.divDescontos}>
          <InputForm
            id="2"
            value={baseINSS}
            disable={true}
            isAttr={false}
            description="Base INSS"
          />
          <InputForm
            id="3"
            value={descontoINSS}
            disable={true}
            attr={inss}
            isAttr={true}
            description="Desconto INSS"
          />
          <InputForm
            id="4"
            value={baseIRPF}
            disable={true}
            isAttr={false}
            description="Base IRPF"
          />
          <InputForm
            id="5"
            value={descontoIRPF}
            disable={true}
            attr={irpf}
            isAttr={true}
            description="Desconto IRPF"
          />
        </div>
        <div>
          <InputForm
            id="6"
            value={salarioLiquido}
            disable={true}
            isAttr={true}
            attr={salLiq}
            description="Salário Liquido"
          />
        </div>

        <BarraPercentualCalculo
          percentINSS={p_INSS}
          percentIRPF={p_IRPF}
          percentSalarioLiquido={p_SalarioLiquido}
        />
      </div>
    );
  }
}

const atribbutesCSS = {
  inss: { color: 'Cyan' },
  irpf: { color: 'DarkViolet' },
  salLiq: { color: 'LawnGreen' },
};
