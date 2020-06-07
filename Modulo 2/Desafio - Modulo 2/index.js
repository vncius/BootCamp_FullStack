import routerAluno from './src/route/alunoRoute.js';
import { promises } from 'fs';
import express from 'express';
import winston from 'winston';
import cors from 'cors';
const app = express();
const fs = promises;

app.use(express.json());
// ROTAS
app.use('/aluno', routerAluno);

app.get('/', async (req, res) => {
  const index = await fs.readFile('./index.html', 'utf8');
  res.send(index);
});

app.get('*', (req, res) => {
  res.send('<h1>Rota inexistente!<h1>');
});

app.use(cors);

// // CONFIGURAÇÕES DE LOG
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  //prettier-ignore
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: './Logs/API.log'})
  ],
  format: combine(label({ label: 'api' }), timestamp(), myFormat),
});

app.listen(21153, () => {
  logger.info('Listerning at port 3000....');
});
