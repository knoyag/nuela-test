import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import CustomModal from './CustomModal';

interface Subject {
  name: string;
  group: string;
  type: string;
  curso: string;
  hours: number;
  space: string;
}

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSubject(null);
    setIsEditMode(false);
  };

  const handleShowModal = () => setShowModal(true);

  const handleAddSubject = (newSubject: Subject) => {
    setSubjects([...subjects, newSubject]);
    setSelectedSubject(null);
    handleCloseModal();
  };

  const handleViewSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setIsEditMode(false);
    handleShowModal();
  };

  const handleEditSubject = (subject: Subject) => {
    setSelectedSubject(subject);
    setIsEditMode(true);
    handleShowModal();
  };

  const handleDeleteSubject = (index: number) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };

  return (
    <>
      <CustomModal
        show={showModal}
        onClose={handleCloseModal}
        onAddSubject={handleAddSubject}
        subject={selectedSubject}
        isViewMode={!isEditMode && !selectedSubject}
      />
      <div className="d-flex justify-content-end mb-3">
        <Button variant="primary" onClick={handleShowModal} style={{ backgroundColor: '#6f42c1', color: '#fff' }}>
          Agregar Asignatura
        </Button>
      </div>
      <main>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Grupo</th>
              <th>Tipo</th>
              <th>Curso</th>
              <th>Horas semana</th>
              <th>Espacio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.name}</td>
                <td>{subject.group}</td>
                <td>{subject.type}</td>
                <td>{subject.curso}</td>
                <td>{subject.hours}</td>
                <td>{subject.space}</td>
                <td>
                  <Button variant="light" size="sm" onClick={() => handleViewSubject(subject)} style={{ color: '#6f42c1' }}>
                    Ver
                  </Button>
                  <Button variant="light" size="sm" onClick={() => handleEditSubject(subject)} style={{ color: '#6f42c1' }}>
                    Editar
                  </Button>
                  <Button variant="light" size="sm" onClick={() => handleDeleteSubject(index)} style={{ color: 'red' }}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </>
  );
};

export default Dashboard;
