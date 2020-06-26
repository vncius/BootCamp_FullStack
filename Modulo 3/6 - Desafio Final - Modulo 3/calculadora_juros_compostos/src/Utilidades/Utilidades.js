const formatNumber = (value) => {
  return parseFloat(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

const currencyFormatterMoneyBRL = (value) => {
  if (!Number(value)) return '';

  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100);

  return `${amount}`;
};

const valideSeInputVazio = (value) => {
  if (value === undefined || value === '' || value === 0) {
    return true;
  } else {
    return (
      value.replace(',', '.').replace('.', '').replace('R$', '').trim()
        .length <= 0
    );
  }
};

export { formatNumber, valideSeInputVazio, currencyFormatterMoneyBRL };
