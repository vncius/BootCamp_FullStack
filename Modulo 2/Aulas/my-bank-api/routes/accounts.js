const express = require('express');
//const fs = require('fs'); // MANIPULAR ARQUIVOS NO SISTEMA, BIBLIOTECA DO PRÓPRIO NODE
const router = express.Router();
const fs = require('fs').promises; // MANIPULA ARQUIVOS DE FORMA ASYNCRONA USANDO PROMISSES

router.post('/', async (req, res) => {
  try {
    const account = req.body;
    let json = await getAccounts();

    //DA PARA USAR O SPREED PARA ADICIONAR ATRIBUTOS A UM JSON TAMBÉM
    json.accounts.push({ id: json.nextId++, ...account });
    await setAccounts(json);

    res.status(200).send({ message: ' Included' }); // OR res.end();
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/', async (_, res) => {
  try {
    let json = await getAccounts();
    delete json.nextId;
    res.status(200).send(json);
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    let json = await getAccounts();
    const account = json.accounts.find((x) => x.id === parseInt(req.params.id));

    res.status(200).send(account);
  } catch (error) {
    res.status(400).send({ error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let json = await getAccounts();

    json.accounts = json.accounts.filter(
      (x) => x.id !== parseInt(req.params.id)
    );

    await setAccounts(json);
    res.status(200).send({ message: 'Deleted' }); // OR res.end();
  } catch (error) {
    res.status(400).send({ error: err });
  }
});

router.put('/', async (req, res) => {
  try {
    const newAccount = req.body;
    let json = await getAccounts();

    const oldIndex = json.accounts.findIndex((x) => x.id === newAccount.id);

    json.accounts[oldIndex].name = newAccount.name;
    json.accounts[oldIndex].balance = newAccount.balance;
    setAccounts(json);

    res.status(200).send({ message: 'Updated' }); // OR res.end();
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

router.post('/transaction', async (req, res) => {
  try {
    const params = req.body;
    let json = await getAccounts();

    const index = json.accounts.findIndex((x) => x.id === params.id);

    //prettier-ignore
    if ((json.accounts[index].balance + params.value) < 0 && params.value < 0) {
      throw new Error('Saldo insuficiente!');
    }

    json.accounts[index].balance += params.value;
    setAccounts(json);

    //prettier-ignore
    res.status(200).send({ message: 'Balance Altered', 
                          account: json.accounts[index] }); // OR res.end();
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

const getAccounts = async () => {
  try {
    const resp = await fs.readFile(global.fileName, 'utf8');
    return JSON.parse(resp);
  } catch (error) {
    throw error;
  }
};

const setAccounts = async (data) => {
  try {
    await fs.writeFile(global.fileName, JSON.stringify(data), 'utf8');
  } catch (error) {
    throw error;
  }
};

module.exports = router;
