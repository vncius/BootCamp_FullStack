import modelAccount from '../models/modelAccount.js';

const deposite = async (dados) => {
  var { agencia, conta, valorDep } = dados;

  if (valorDep < 0) {
    throw new Error('Valor do depósito não poder ser menor que 0');
  }

  const retorno = await atualizeConta(agencia, conta, {
    $inc: { balance: valorDep },
  });

  if (!retorno) {
    throw new Error('Conta não encontrada para depósito');
  }

  return retorno;
};

const saque = async (dados) => {
  var { agencia, conta, valorSaque } = dados;

  if (valorSaque < 0) {
    throw new Error('Valor do saque não poder ser menor que 0');
  }

  const contaAtual = await busqueConta(agencia, conta);

  if (!contaAtual) {
    throw new Error('Conta não encontrada para saque');
  }

  if (contaAtual.balance - valorSaque < 0) {
    throw new Error('Saldo insuficiente para realizar esta operação');
  }
  valorSaque += 1;
  const retorno = await atualizeConta(agencia, conta, {
    $inc: { balance: -valorSaque },
  });

  return { saldoAtual: retorno.balance };
};

const saldo = async ({ agencia, conta }) => {
  const contaAtual = await busqueConta(agencia, conta);

  if (!contaAtual) {
    throw new Error('Conta não encontrada para saque');
  }

  return contaAtual;
};

const deleteAccount = async ({ agencia, conta }) => {
  const contaAtual = await modelAccount.findOneAndDelete({ agencia, conta });

  if (!contaAtual) {
    throw new Error('Conta não encontrada para saque');
  }

  return { totalContasAtivas: await modelAccount.count({ agencia }) };
};

const transferencia = async ({ contaOrigem, contaDestino, valor }) => {
  var valorComTaxaTransferencia = valor;

  const contaOrig = await busqueContaPorNumero(contaOrigem);
  const contaDest = await busqueContaPorNumero(contaDestino);

  if (!contaOrig || !contaDest) {
    throw new Error(
      `Conta ${!contaOrig ? 'origem' : 'destino'} não encontrada para saque`
    );
  }

  if (contaOrig.agencia !== contaDest.agencia) {
    valorComTaxaTransferencia += 8;
  }

  if (contaOrig.balance - valorComTaxaTransferencia < 0) {
    throw new Error('Conta origem não possui saldo suficiente.');
  }

  const retorno = await atualizeConta(contaOrig.agencia, contaOrig.conta, {
    $inc: { balance: -valorComTaxaTransferencia },
  });

  await atualizeConta(contaDest.agencia, contaDest.conta, {
    $inc: { balance: valor },
  });

  return { saldoContaOrigem: retorno.balance };
};

const consulteMediaBalance = async ({ agencia }) => {
  agencia = parseInt(agencia);
  const result = await modelAccount.aggregate([
    { $group: { _id: '$agencia', media: { $avg: '$balance' } } },
  ]);

  var encontrado = null;
  result.forEach((item) => {
    if (item._id === agencia) {
      item.media = item.media.toFixed(2);
      encontrado = item;
    }
  });

  if (!encontrado) {
    throw new Error(
      `Agencia inválida ou não possui nenhuma conta. Erro: ${error}`
    );
  }

  return encontrado;
};

const consulteClientesOrdenados = async (limit, crescente) => {
  limit = parseInt(limit);
  const clientes = await modelAccount
    .find()
    .sort({ balance: crescente ? 1 : -1 })
    .limit(limit);

  if (!clientes) {
    throw new Error(`Não foi encontrado clientes com os parametros informados`);
  }

  return clientes;
};

const crieClientesPrivate = async () => {
  const agencias = await modelAccount.find({}).distinct('agencia');

  let contas = agencias.map(async (agencia) => {
    var result = await modelAccount.find({ agencia }).sort({ balance: -1 });
    return result[0];
  });

  contas = await Promise.all(contas);

  contas.map(async ({ _id }) => {
    return await modelAccount.findOneAndUpdate({ _id: _id }, { agencia: 99 });
  });

  if (!contas) {
    throw new Error('Nenhuma conta atualizada');
  }

  return contas;

  // return clientes.map((cliente) => {
  //   delete cliente['_id'];
  //   delete cliente['uuid'];
  //   delete cliente['max'];
  //   return cliente;
  // });
};

export {
  deposite,
  saque,
  saldo,
  deleteAccount,
  transferencia,
  consulteMediaBalance,
  consulteClientesOrdenados,
  crieClientesPrivate,
};

// FUNCTIONS AUXILIARES
const busqueConta = async (agencia, conta) => {
  return await modelAccount.findOne({
    agencia,
    conta,
  });
};

const busqueContaPorNumero = async (conta) => {
  return await modelAccount.findOne({
    conta,
  });
};

const atualizeConta = async (agencia, conta, params) => {
  return await modelAccount.findOneAndUpdate({ conta, agencia }, params, {
    new: true,
  });
};
