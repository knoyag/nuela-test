import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface Subject {
  name: string;
  group: string;
  type: string;
  curso: string;
  hours: number;
  space: string;
}

interface Props {
  show: boolean;
  onClose: () => void;
  onAddSubject: (newSubject: Subject) => void;
  subject: Subject | null;
  isViewMode: boolean;
}

const CustomModal: React.FC<Props> = ({ show, onClose, onAddSubject, subject }) => {
  const [editedSubject, setEditedSubject] = useState<Subject | null>(null);

  useEffect(() => {
    if (subject) {
      setEditedSubject(subject);
    } else {
      setEditedSubject({
        name: '',
        group: '',
        type: '',
        curso: '',
        hours: 0,
        space: ''
      });
    }
  }, [subject]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedSubject((prevSubject) => ({
      ...prevSubject!,
      [name]: value,
    }));
  };

  const handleAddOrUpdateSubject = () => {
    if (editedSubject) {
      onAddSubject(editedSubject);
      onClose();
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{subject ? 'Editar asignatura' : 'Añadir asignatura'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedSubject?.name || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Grupo:</Form.Label>
            <Form.Control
              type="text"
              name="group"
              value={editedSubject?.group || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Tipo:</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={editedSubject?.type || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Curso:</Form.Label>
            <Form.Control
              type="text"
              name="curso"
              value={editedSubject?.curso || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Horas semana:</Form.Label>
            <Form.Control
              type="number"
              name="hours"
              value={editedSubject?.hours || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Espacio:</Form.Label>
            <Form.Control
              type="text"
              name="space"
              value={editedSubject?.space || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleAddOrUpdateSubject} disabled={!editedSubject}>
          {subject ? 'Editar' : 'Añadir'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
