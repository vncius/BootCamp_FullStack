import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { useEffect } from 'react';
import * as api from '../api/apiService';

Modal.setAppElement('#root');

export default function ModalGrade({ onSave, onClose, selectedGrade }) {
  const { id, student, subject, type } = selectedGrade;
  const [gradeValue, setGradeValue] = useState(selectedGrade.value);
  const [gradeValidation, setGradeValidation] = useState({});
  const [erroMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const execute = async () => {
      const validation = await api.getValidationFromGradeType(type);
      setGradeValidation(validation);
    };

    execute();
  }, [type]);

  useEffect(() => {
    const { minValue, maxValue } = gradeValidation;
    if (gradeValue < minValue || gradeValue > maxValue) {
      setErrorMessage(
        `O valor da nota deve ser entre ${minValue} e ${maxValue} (inclusive)`
      );
      return;
    }
    setErrorMessage('');
  }, [gradeValue, gradeValidation]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id,
      newValue: gradeValue,
    };

    onSave(formData);
  };
  const handleGradeChange = (event) => {
    setGradeValue(event.target.value);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Manutenção de notas</span>
          <button
            className="waves-effect waves-lights btn red dark-4"
            onClick={onClose}
          >
            X
          </button>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="input-field">
            <label className="active" htmlFor="inputName">
              Nome do aluno:
            </label>
            <input id="inputName" type="text" value={student} readOnly />
          </div>
          <div className="input-field">
            <label className="active" htmlFor="inputSubject">
              Disciplina:
            </label>
            <input id="inputSubject" type="text" value={subject} readOnly />
          </div>
          <div className="input-field">
            <label className="active" htmlFor="inputType">
              Tipo Avaliação
            </label>
            <input id="inputType" type="text" value={type} readOnly />
          </div>
          <div className="input-field">
            <label className="active" htmlFor="inpuGrade">
              Nota:
            </label>
            <input
              id="inpuGrade"
              type="number"
              min={gradeValidation.minValue}
              max={gradeValidation.maxValue}
              value={gradeValue}
              step="1"
              onChange={handleGradeChange}
              autoFocus
            />
          </div>
          <div style={styles.flexRow}>
            <button
              className="waves-effect waves-light btn"
              disabled={erroMessage.trim() !== ''}
            >
              Salvar
            </button>
            <span style={styles.errorMessage}>{erroMessage}</span>
          </div>
        </form>
      </Modal>
    </div>
  );
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBotton: '40px',
  },

  title: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },

  errorMessage: {
    color: 'red',
    fontWeight: 'bold',
  },
};
