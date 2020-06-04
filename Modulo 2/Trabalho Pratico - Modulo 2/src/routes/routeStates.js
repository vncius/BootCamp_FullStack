const express = require('express');
const router = express.Router();
const control = require('../controller/controllerStates.js');

router.get('/QtdCidadesPorEstado/:uf', async (req, res) => {
  try {
    logger.info(`GET url(${req.url}) - ip(${req.ip})`);
    res.send(await control.obtenhaQuatidadeDeCidadesPorEstado(req.params.uf));
  } catch (err) {
    logger.error(`GET /QtdCidadesPorEstado - IP(${req.ip}) - ${err}`);
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComCidadesDeMaiorNome', async (req, res) => {
  try {
    logger.info(`GET url(${req.url}) - ip(${req.ip})`);
    res.send(await control.obtenhaEstadosECidadePorRegra(true));
  } catch (err) {
    //prettier-ignore
    logger.error(`GET /obtenhaEstadosComCidadesDeMaiorNome - IP(${req.ip}) - ${err}`);
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComCidadesDeMenorNome', async (req, res) => {
  try {
    logger.info(`GET url(${req.url}) - ip(${req.ip})`);
    res.send(await control.obtenhaEstadosECidadePorRegra(false));
  } catch (err) {
    //prettier-ignore
    logger.error(`GET /obtenhaEstadosComCidadesDeMenorNome - IP(${req.ip}) - ${err}`);
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaCidadesOrdenadasMaiorNome', async (req, res) => {
  try {
    logger.info(`GET url(${req.url}) - ip(${req.ip})`);
    res.send(await control.obtenhaCidadesOrdenadasPorNome(true));
  } catch (err) {
    //prettier-ignore
    logger.error(`GET /obtenhaCidadesOrdenadasMaiorNome - IP(${req.ip}) - ${err}`);
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaCidadesOrdenadasMenorNome', async (req, res) => {
  try {
    logger.info(`GET url(${req.url}) - ip(${req.ip})`);
    res.send(await control.obtenhaCidadesOrdenadasPorNome(false));
  } catch (err) {
    //prettier-ignore
    logger.error(`GET /obtenhaCidadesOrdenadasMenorNome - IP(${req.ip}) - ${err}`);
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComMaisCidades', async (req, res) => {
  try {
    logger.info(`GET url(${req.url}) - ip(${req.ip})`);
    res.send(await control.obtenhaTop5Estados(true));
  } catch (err) {
    logger.error(`GET /obtenhaEstadosComMaisCidades - IP(${req.ip}) - ${err}`);
    res.status(400).send({ error: err });
  }
});

router.get('/obtenhaEstadosComMenosCidades', async (req, res) => {
  try {
    logger.info(`GET url(${req.url}) - ip(${req.ip})`);
    res.send(await control.obtenhaTop5Estados(false));
  } catch (err) {
    logger.error(`GET /obtenhaEstadosComMenosCidades - IP(${req.ip}) - ${err}`);
    res.status(400).send({ error: err });
  }
});

module.exports = router;
