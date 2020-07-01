import mongoose from 'mongoose';

// MODELO
const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, required: true },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) {
        throw new Error('Valor negativo para nota não é permitido');
      }
    },
  },
  lastModified: { type: Date, default: Date.now },
});

// DEFININDO O MODELO DA COLEÇÃO
const studentModel = mongoose.model('students', studentSchema, 'students');

export { studentModel };
