import express from 'express';
import {
  deposite,
  saque,
  saldo,
  deleteAccount,
  transferencia,
  consulteMediaBalance,
  consulteClientesOrdenados,
  crieClientesPrivate,
} from '../controllers/controllerAccount.js';
const routerAccount = express.Router();

routerAccount.get('/', async (req, res) => {
  res.send({ result: 'Ok' });
});

routerAccount.put('/deposito/', async (req, res) => {
  try {
    res.status(200).send(await deposite(req.body));
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.put('/saque/', async (req, res) => {
  try {
    res.status(200).send(await saque(req.body));
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.get('/saldo/:agencia/:conta', async (req, res) => {
  try {
    res.status(200).send(await saldo(req.params));
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.delete('/deleteAccount', async (req, res) => {
  try {
    res.status(200).send(await deleteAccount(req.body));
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.post('/transferencia', async (req, res) => {
  try {
    res.status(200).send(await transferencia(req.body));
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.get('/mediaBalance/:agencia', async (req, res) => {
  try {
    var resultado = await consulteMediaBalance(req.params);
    res.status(200).send(resultado);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.get('/clientesMaisPobres/:limit', async (req, res) => {
  try {
    var resultado = await consulteClientesOrdenados(req.params.limit, true);
    res.status(200).send(resultado);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.get('/clientesMaisRicos/:limit', async (req, res) => {
  try {
    var resultado = await consulteClientesOrdenados(req.params.limit, false);
    res.status(200).send(resultado);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

routerAccount.get('/crieClientesPrivate/', async (req, res) => {
  try {
    var resultado = await crieClientesPrivate();
    res.status(200).send(resultado);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default routerAccount;
