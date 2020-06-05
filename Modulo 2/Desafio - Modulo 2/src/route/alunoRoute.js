import express from 'express';
import controller from '../controller/alunoController.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.crie(req.body));
  } catch (err) {
    registreLog(false, req.ip, req.url, err.message);
    res.status(500).send({ error: err.message });
  }
});

router.put('/', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.atualize(req.body));
  } catch (err) {
    registreLog(false, req.ip, req.url, err.message);
    res.status(500).send({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.deleteAluno(req.params.id));
  } catch (err) {
    registreLog(false, req.ip, req.url, err.message);
    res.status(500).send({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.obtenha(req.params.id));
  } catch (err) {
    registreLog(false, req.ip, req.url, err.message);
    res.status(500).send({ error: err.message });
  }
});

router.get('/:subject/:type', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    const { subject, type } = req.params;
    res.status(200).send(await controller.obtenhaMedia(subject, type));
  } catch (err) {
    registreLog(false, req.ip, req.url, err.message);
    res.status(500).send({ error: err.message });
  }
});

router.get('/top3/:subject/:type', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    const { subject, type } = req.params;
    res.status(200).send(await controller.obtenhaTop3(subject, type));
  } catch (err) {
    registreLog(false, req.ip, req.url, err.message);
    res.status(500).send({ error: err.message });
  }
});

const registreLog = (ehInfo, ip, url, err) => {
  if (ehInfo) {
    logger.info(`Ip(${ip}) - Url(${url})`);
  } else {
    logger.error(`Ip(${ip}) Url(${url}) - ${err}`);
  }
};

export default router;
