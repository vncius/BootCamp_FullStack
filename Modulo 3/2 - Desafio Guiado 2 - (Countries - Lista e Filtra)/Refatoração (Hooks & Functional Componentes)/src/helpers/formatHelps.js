const formatter = Intl.NumberFormat('pt-BR');

const formatNumber = (value) => {
  return formatter.format(value);
};

export { formatNumber };
