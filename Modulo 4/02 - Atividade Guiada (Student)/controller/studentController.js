import { studentModel } from '../model/student.js';

const insira = async (reqStudent) => {
  const student = new studentModel(reqStudent);
  await student.save();
  return student;
};

const obtenha = async () => {
  return await studentModel.find({});
};

const deleteRegistro = async (id) => {
  return await studentModel.findOneAndDelete({ _id: id });
};

const atualize = async (id, body) => {
  return await studentModel.findOneAndUpdate({ _id: id }, body, { new: true });
};

export { obtenha, insira, deleteRegistro, atualize };
