import express from 'express';
import mongoose from 'mongoose';
import routerAccount from './routes/routerAccount.js';

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dev:c3r2e7u3@cluster0-aofbx.mongodb.net/my_bank_api_mongodb?retryWrites=true&w=majority',
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
app.use('/account', routerAccount);

app.listen(3000, () => {
  console.log('Listerning at port 3000...');
});
