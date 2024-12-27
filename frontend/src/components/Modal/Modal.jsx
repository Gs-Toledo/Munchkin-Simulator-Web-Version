import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{children}</div>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
