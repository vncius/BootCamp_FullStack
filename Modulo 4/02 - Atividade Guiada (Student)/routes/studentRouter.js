import express from 'express';
import { studentModel } from '../model/student.js';
import {
  obtenha,
  insira,
  deleteRegistro,
  atualize,
} from '../controller/studentController.js';

const routerStudent = express.Router();

routerStudent.get('/', async (req, res) => {
  try {
    res.send(await obtenha());
  } catch (error) {
    res.status(500).send(error);
  }
});

routerStudent.post('/', async (req, res) => {
  try {
    res.send(await insira(req.body));
  } catch (error) {
    res.status(500).send(error);
  }
});

routerStudent.delete('/:id', async (req, res) => {
  try {
    const student = await deleteRegistro(req.params.id);

    if (!student) {
      res.status(404).send('Registro não encontrado para exclusão.');
    }

    res.status(200).send({ Status: 'Registro excluido', Registro: student });
  } catch (error) {
    res.status(500).send(error);
  }
});

routerStudent.put('/:id', async (req, res) => {
  try {
    const student = await atualize(req.params.id, req.body);

    if (!student) {
      res.status(404).send('Registro não encontrado para atualização.');
    }

    res.status(200).send({ Status: 'Registro atualizado', Registro: student });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default routerStudent;
