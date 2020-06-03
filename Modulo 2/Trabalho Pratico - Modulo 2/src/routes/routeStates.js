const express = require('express');
const router = express.Router();
const control = require('../controller/controllerStates.js');

router.get('/QtdCidadesPorEstado/:uf', async (req, res) => {
  try {
    res.send(await control.obtenhaQuatidadeDeCidadesPorEstado(req.params.uf));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComCidadesDeMaiorNome', async (_req, res) => {
  try {
    res.send(await control.obtenhaEstadosECidadePorRegra(true));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComCidadesDeMenorNome', async (_req, res) => {
  try {
    res.send(await control.obtenhaEstadosECidadePorRegra(false));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaCidadesOrdenadasMaiorNome', async (_req, res) => {
  try {
    res.send(await control.obtenhaCidadesOrdenadasPorNome(true));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaCidadesOrdenadasMenorNome', async (_req, res) => {
  try {
    res.send(await control.obtenhaCidadesOrdenadasPorNome(false));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComMaisCidades', async (_req, res) => {
  try {
    res.send(await control.obtenhaTop5Estados(true));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComMenosCidades', async (_req, res) => {
  try {
    res.send(await control.obtenhaTop5Estados(false));
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
