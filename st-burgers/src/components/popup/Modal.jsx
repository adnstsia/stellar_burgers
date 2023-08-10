import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DigitsLarge, MediumText, DefaultText } from "../../fonts/Fonts";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cross from "../../images/cross.svg"

import styles from "./Modal.css";

const Modal = ({ onClose, onClickOverlay, children }) => {

  const [ingredients, setIngredients] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [popupType, setPopupType] = useState(null);
  const [isClosed, setClosed] = useState(false);

  useEffect(() => {
    if (isClosed) {
      const timeout = setTimeout(() => {
        onClose();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isClosed, onClose]);

  const handleClosePopup = () => {
    setClosed(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      handleClosePopup();
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isPopupOpen]);

  return ReactDOM.createPortal (
    <>
    ReactDOM.createPortal()
      <div
        className={`overlay ${isClosed ? "overlay--closed" : ""}`}
        onClick={onClickOverlay}
      ></div>
      <div className={`popup ${isClosed ? "popup--closed" : ""}`}>
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
     document.getElementById('App')
  );
};

export default Modal ;
