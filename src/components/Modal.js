import React from 'react';

const Modal = ({ showModal, children, onClose }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;