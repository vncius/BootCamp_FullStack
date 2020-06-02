const express = require('express');
//const fs = require('fs'); // MANIPULAR ARQUIVOS NO SISTEMA, BIBLIOTECA DO PRÓPRIO NODE
const fs = require('fs').promises; // MANIPULA ARQUIVOS DE FORMA ASYNCRONA USANDO PROMISSES
const app = express();
const accountsRouter = require('./routes/accounts.js');
global.fileName = 'accounts.json'; // DEFINE VARIÁVEL GLOBAL

// CONFIGURAÇÃO PARA A REQUISIÇÃO RECEBER O JSON, CONVERTE O BODY PARA JSON
app.use(express.json());
app.use('/account', accountsRouter);

//LISTEN SERVE PARA EXECUTAR A APLICAÇÃO E DEIXA-LA OUVINDO NA PORTA 3000,
//SÓ ASSIM SERÁ POSSIVEL RECEBER REQUISIÇÕES
app.listen(3000, async () => {
  try {
    await fs.readFile(global.fileName, 'utf8');
  } catch (error) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    await fs.writeFile(global.fileName, JSON.stringify(initialJson), 'utf8');
  }
  console.log('Listerning');
});
