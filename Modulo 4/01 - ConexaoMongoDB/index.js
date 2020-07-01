import mongoose from 'mongoose';

(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://user:a1b2c3d4@cluster0-aofbx.mongodb.net/sample_analytics?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log(`Falha ao conectar no banco de dados, erro: ${error}`);
  }
})();

// CRIA MODELO
const studentSchema = mongoose.Schema({
  name: { type: String, require: true },
  subject: { type: String, require: true },
  type: { type: String, require: true },
  value: { type: Number, require: true },
  lastModified: { type: Date, default: Date.now },
});

// DEFININDO O MODELO DA COLEÇÃO
mongoose.model('student', studentSchema);

const student = mongoose.model('student');

new student({
  name: 'Rodrigo Assis',
  subject: 'Filosofia',
  type: 'Atividade Normal',
  value: 10,
})
  .save()
  .then(() => {
    console.log('documento inserido');
  })
  .catch((err) => {
    console.log(`Deu ruim: ${err}`);
  });
