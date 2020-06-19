const formatNumber = (value) => {
  return parseFloat(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export { formatNumber };
