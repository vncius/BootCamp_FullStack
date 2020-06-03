const express = require('express');
const router = express.Router();
const control = require('../controller/controllerStates.js');

router.get('/QtdCidadesPorEstado/:uf', async (req, res) => {
  const x = await control.obtenhaQuatidadeDeCidadesPorEstado(req.params.uf);
  res.status(200).send(x);
});

router.get('/obtenhaCidadesOrdenadasMaiorNome', async (_req, res) => {
  res.send(await control.obtenhaCidadesOrdenadasPorNome(true));
});

router.get('/obtenhaCidadesOrdenadasMenorNome', async (_req, res) => {
  res.send(await control.obtenhaCidadesOrdenadasPorNome(false));
});

router.get('/obtenhaEstadosComMaisCidades', async (_req, res) => {
  res.send(await control.obtenhaTop5Estados(true));
});

router.get('/obtenhaEstadosComMenosCidades', async (_req, res) => {
  res.send(await control.obtenhaTop5Estados(false));
});

module.exports = router;
