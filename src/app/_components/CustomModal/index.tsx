"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

const CustomModal = ({ isOpen, onClose, children }: any) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Tiempo que tarda la animación en terminar
  };

  return (
    <div
      className={isClosing ? styles.overlay + " " + styles.fadeOut : styles.overlay}
      onClick={handleClose}
    >
      <div
        className={isClosing ? styles.modal + " " + styles.slideOut : styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;