import express from 'express';
import controller from '../controller/alunoController.js';
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.crie(req.body));
  } catch (err) {
    registreLog(false, req.ip, req.url, err);
    res.status(500).send({ error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.obtenha(req.params.id));
  } catch (err) {
    registreLog(false, req.ip, req.url, err);
    res.status(500).send({ error: err });
  }
});

router.put('/', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.atualize(req.params.body));
  } catch (err) {
    registreLog(false, req.ip, req.url, err);
    res.status(500).send({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    registreLog(true, req.ip, req.url, '');
    res.status(200).send(await controller.deleteAluno(req.params.id));
  } catch (err) {
    registreLog(false, req.ip, req.url, err);
    res.status(500).send({ error: err });
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
