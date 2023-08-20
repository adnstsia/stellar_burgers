import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DigitsLarge, MediumText, DefaultText } from "../../fonts/Fonts";
import cross from "../../images/cross.svg";

import styles from "./Modal.module.css";

const Modal = ({ onClose, onClickOverlay, children, isClosed }) => {
  const [isClosedState, setClosedState] = useState(false);

  const handleClosePopup = () => {
    setClosedState(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      handleClosePopup();
    }
  };

  useEffect(() => {
    if (isClosedState) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isClosedState, onClose]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        className={`${styles.overlay} ${isClosedState ? "overlay--closed" : ""}`}
        onClick={onClickOverlay}
      ></div>
      <div
        className={`${styles.popup} ${isClosedState ? "popup--closed" : ""}`}
      >
        <button
          className={styles.popup__close}
          type="button"
          onClick={handleClosePopup}
        >
          <img src={cross} alt="Закрыть" />
        </button>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
