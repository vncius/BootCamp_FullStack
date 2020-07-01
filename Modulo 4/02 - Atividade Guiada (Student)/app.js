import express from 'express';
import studentRouter from './routes/studentRouter.js';
import mongoose from 'mongoose';

// CONEXÃO COM BANCO DE DADOS
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dev:c3r2e7u3@cluster0-aofbx.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(`Falha ao conectar no banco de dados, erro: ${error}`);
  }
})();

const app = express();
app.use(express.json());

app.use('/student', studentRouter);

app.get('*', (res, req) => {
  req.send({ result: 'Page Not Found' });
});

app.listen(3000, () => {
  console.log('Listerning at port 3000...');
});
