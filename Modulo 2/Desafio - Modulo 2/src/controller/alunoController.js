import { promises } from 'fs';
const fs = promises;

const crie = async (aluno) => {
  try {
    const { student, subject, type, value } = aluno;
    let allGrades = await leiaArquivoJSON();
    const registro = {
      id: allGrades.nextId++,
      student: student,
      subject: subject,
      type: type,
      value: value,
      timestamp: new Date(),
    };
    allGrades.grades.push(registro);
    graveArquivoJSON(allGrades);
    return registro;
  } catch (error) {
    throw error;
  }
};

const atualize = async (aluno) => {
  try {
    const { id, student, subject, type, value } = aluno;
    let allGrades = await leiaArquivoJSON();
    let registroEncontrado = false;

    allGrades.grades.forEach((grade) => {
      if (grade.id === id) {
        grade.student = student;
        grade.subject = subject;
        grade.type = type;
        grade.value = value;
        registroEncontrado = grade;
      }
    });

    if (!registroEncontrado) {
      throw new Error(
        `Não foi encontrado grade com o parâmetro informados ID(${id})`
      );
    }

    graveArquivoJSON(allGrades);
    return registroEncontrado;
  } catch (error) {
    throw error;
  }
};

const deleteAluno = async (id) => {
  try {
    let allGrades = await leiaArquivoJSON();
    const encontrado = allGrades.grades.find((x) => x.id === parseInt(id));

    if (!encontrado) {
      throw new Error(
        `Não foi encontrado grade com o parâmetro informados ID(${id})`
      );
    }

    allGrades.grades = allGrades.grades.filter((x) => x.id !== parseInt(id));

    graveArquivoJSON(allGrades);
    return { status: 'DELETED', ...encontrado };
  } catch (error) {
    throw error;
  }
};

const obtenha = async (id) => {
  try {
    let allGrades = await leiaArquivoJSON();
    const encontrado = allGrades.grades.find((x) => x.id === parseInt(id));

    if (!encontrado) {
      throw new Error(
        `Não foi encontrado grade com o parâmetro informados ID(${id})`
      );
    }

    return encontrado;
  } catch (error) {
    throw error;
  }
};

const obtenhaMedia = async (subject, type) => {
  try {
    let allGrades = await leiaArquivoJSON();
    const grades = allGrades.grades.filter(
      (x) => x.subject === subject && x.type === type
    );

    if (grades.length <= 0) {
      throw new Error(
        `Não foi encontrado grades com os parametros informados Subject(${subject}) - Type(${type})`
      );
    }

    const sum = grades.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);

    return { Media: sum, Subject: subject, Type: type };
  } catch (error) {
    throw error;
  }
};

export default { crie, atualize, obtenha, deleteAluno, obtenhaMedia };

const graveArquivoJSON = async (grades) => {
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

const leiaArquivoJSON = async () => {
  try {
    return JSON.parse(await fs.readFile('./ArquivosJSON/grades.json', 'utf8'));
  } catch (error) {
    logger.error(`Function: (ObtenhaGrades) - ${error}`);
    throw error;
  }
};
