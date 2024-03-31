import React, { useState } from 'react';
import CustomModal from './CustomModal';

const AddSubjectComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <button onClick={handleShowModal}>Mostrar Modal</button>
      <CustomModal show={showModal} onClose={handleCloseModal} onAddSubject={() => {}} subject={null} isViewMode={false} />
    </>
  );
};

export default AddSubjectComponent;
