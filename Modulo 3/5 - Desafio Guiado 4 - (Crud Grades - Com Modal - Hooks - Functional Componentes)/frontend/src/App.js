import React, { useState, useEffect } from 'react';

import * as api from './api/apiService';
import Spinner from './components/preloader/Spinner';
import GradesControle from './components/GradesControle';
import ModalGrade from './components/ModalGrade';

export default function App() {
  const [allGrades, setAllGrades] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setAllGrades(await api.getAllGrades());
    }, 1000);
  }, []);

  const handleDelete = async (gradeToDelete) => {
    var isDeleted = await api.deleteGrade(gradeToDelete);
    if (isDeleted) {
      const deletedGradeIndex = allGrades.findIndex(
        (grade) => grade.id === gradeToDelete.id
      );

      const newGrades = Object.assign([], allGrades);
      newGrades[deletedGradeIndex].isDeleted = true;
      newGrades[deletedGradeIndex].value = 0;
      setAllGrades(newGrades);
    }
  };
  const handlePersist = (gradeToPersist) => {
    setSelectedGrade(gradeToPersist);
    setIsModalOpen(true);
  };

  const handlePersistData = async (data) => {
    const { id, newValue } = data;
    const newGrades = Object.assign([], allGrades);
    const gradeToPersist = newGrades.find((x) => x.id === id);
    gradeToPersist.value = newValue;

    if (gradeToPersist.isDeleted) {
      gradeToPersist.isDeleted = false;
      await api.insertGrade(gradeToPersist);
    } else {
      await api.updateGrade(gradeToPersist);
    }

    setIsModalOpen(false);
  };

  const HandleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1 className="center">Controle de Notas</h1>
      {allGrades.length > 0 && (
        <GradesControle
          grades={allGrades}
          onDelete={handleDelete}
          onPersiste={handlePersist}
        />
      )}
      {allGrades.length == 0 && <Spinner>Carregando Notas...</Spinner>}

      {isModalOpen && (
        <div style={styles.tamanhoModal}>
          <ModalGrade
            onSave={handlePersistData}
            onClose={HandleModalClose}
            selectedGrade={selectedGrade}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  tamanhoModal: {
    width: '30px' + '!important',
    margin: 'auto',
  },
};
