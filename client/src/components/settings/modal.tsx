import React, { useState } from 'react';
import './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  const [shouldShowModal, setShouldShowModal] = useState(isOpen);

  const handleCloseModal = () => {
    setShouldShowModal(false);
    onClose();
  };

  if (!shouldShowModal) {
    return null;
  }

  return (
    <div className='modal-container'>
      <div
        className='modal-background'
        onClick={handleCloseModal}
        role='button'
        tabIndex={0}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleCloseModal();
          }
        }}
      />
      <div className='modal-content'>
        <div className='modal-header'>
          <h2 className='modal-title'>{title}</h2>
          <button className='modal-close-button' onClick={handleCloseModal}>
            X
          </button>
        </div>
        <div className='modal-body '>
          <button
            className='btn-secondary standard-radius-5'
            onClick={handleCloseModal}
          >
            {'Remplir le profil'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
