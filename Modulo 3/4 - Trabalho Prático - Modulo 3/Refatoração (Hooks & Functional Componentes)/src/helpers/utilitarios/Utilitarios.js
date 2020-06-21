const calculePercentual = (valorTotal, valorLiquido) => {
  valorTotal = formateReaisEmDouble(valorTotal);
  valorLiquido = formateReaisEmDouble(valorLiquido);
  let resultado = (parseFloat(valorLiquido) / parseFloat(valorTotal)) * 100;

  return resultado > 0 ? resultado.toFixed(2) : 0;
};

const formateReaisEmDouble = (value) => {
  return parseFloat(
    value.toString().replace('R$', '').replace('.', '').replace(',', '.').trim()
  );
};

export { calculePercentual };
