import React, { Fragment } from 'react';
import Action from './Action';

export default function GradesControle({ onDelete, onPersiste, grades }) {
  const tableGrades = [];

  let currentStudent = grades[0].student;
  let currentSubject = grades[0].subject;
  let currentGrades = [];
  let id = 1;

  const adicioneTableGrades = (id, currStudent, currSubject, currGrades) => {
    tableGrades.push({
      id: id,
      student: currStudent,
      subject: currSubject,
      grades: currGrades,
    });
  };

  grades.forEach((grade) => {
    if (grade.subject !== currentSubject) {
      adicioneTableGrades(id++, currentStudent, currentSubject, currentGrades);

      currentSubject = grade.subject;
      currentGrades = [];
    }

    if (grade.student !== currentStudent) {
      currentStudent = grade.student;
    }

    currentGrades.push(grade);
  });

  adicioneTableGrades(id, currentStudent, currentSubject, currentGrades);

  const handleActionClick = (id, type) => {
    const grade = grades.find((grade) => grade.id === id);

    if (type === 'delete') {
      onDelete(grade);
      return;
    }

    onPersiste(grade);
  };

  return (
    <div>
      {tableGrades.map(({ id, grades }) => {
        const finalGrade = grades.reduce(
          (acc, curr) => parseInt(acc) + parseInt(curr.value),
          0
        );
        const gradeStyle = finalGrade >= 70 ? style.goodGrade : style.badGrade;

        return (
          <table className="striped" style={style.table} key={id}>
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Aluno</th>
                <th style={{ width: '20%' }}>Disciplina</th>
                <th style={{ width: '20%' }}>Avaliação</th>
                <th style={{ width: '20%' }}>Nota</th>
                <th style={{ width: '20%' }}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {grades.map(
                ({ id, subject, student, type, value, isDeleted }) => {
                  return (
                    <tr key={id}>
                      <td>{student}</td>
                      <td>{subject}</td>
                      <td>{type}</td>
                      <td>{isDeleted ? '-' : value}</td>
                      <td>
                        <Action
                          onActionClick={handleActionClick}
                          id={id}
                          type={isDeleted ? 'add' : 'edit'}
                        />
                        {!isDeleted && (
                          <Action
                            onActionClick={handleActionClick}
                            id={id}
                            type="delete"
                          />
                        )}
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
            <tfoot>
              <tr style={gradeStyle}>
                <td>&nbsp;</td>
                <td>&nbsp;</td>

                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <span>{finalGrade}</span>
                </td>
                <td>&nbsp;</td>
              </tr>
            </tfoot>
          </table>
        );
      })}
    </div>
  );
}

const style = {
  goodGrade: {
    fontWeight: 'bold',
    color: 'green',
  },
  badGrade: {
    fontWeight: 'bold',
    color: 'red',
  },
  table: {
    margin: '20px',
    padding: '10px',
  },
};
