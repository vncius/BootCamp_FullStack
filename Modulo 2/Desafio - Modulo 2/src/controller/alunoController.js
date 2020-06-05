import { promises } from 'fs';
const fs = promises;

const crie = async (aluno) => {
  try {
    const { student, subject, type, value } = aluno;
    let allGrades = await obtenhaGrades();
    const registro = {
      id: allGrades.nextId++,
      student: student,
      subject: subject,
      type: type,
      value: value,
      timestamp: new Date(),
    };
    allGrades.grades.push(registro);
    registreGrades(allGrades);
    return registro;
  } catch (error) {
    throw error;
  }
};

const obtenha = async (id) => {};

const atualize = async (aluno) => {};

const deleteAluno = async (id) => {};

export default { crie, obtenha, atualize, deleteAluno };

const registreGrades = async (grades) => {
  try {
    return await fs.writeFile(
      './ArquivosJSON/grades.json',
      JSON.stringify(grades)
    );
  } catch (error) {
    logger.error(`Function: (ObtenhaGrades) - ${error}`);
    throw error;
  }
};

const obtenhaGrades = async () => {
  try {
    return JSON.parse(await fs.readFile('./ArquivosJSON/grades.json', 'utf8'));
  } catch (error) {
    logger.error(`Function: (ObtenhaGrades) - ${error}`);
    throw error;
  }
};
