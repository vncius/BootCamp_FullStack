const formatter = Intl.NumberFormat('pt-BR');

function formatNumber(value) {
  return formatter.format(value);
}

function formatPercentage(value) {
  return value.toFixed(2).replace('.', ',');
}

export { formatNumber, formatPercentage };
