import routerAluno from './src/route/alunoRoute.js';
import express from 'express';
import winston from 'winston';
import cors from 'cors';
const app = express();
app.use(express.json());
// ROTAS
app.use('/aluno', routerAluno);
app.get('/', (req, res) => {
  res.send('ok');
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

app.listen(3000, () => {
  logger.info('Listerning at port 3000....');
});
