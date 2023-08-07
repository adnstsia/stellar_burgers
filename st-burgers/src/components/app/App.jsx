import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import ToMakeOrder from "../toMakeOrder/ToMakeOrder";
import Popup from "../popup/Popup";
import { DigitsLarge } from "../../fonts/Fonts";
import { MediumText } from "../../fonts/Fonts";
import { DefaultText } from "../../fonts/Fonts";
import doneImage from "../../images/done.png";
import cross from "../../images/cross.svg";
import "../app/App.css";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setIngredients(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleOpenPopup = (ingredient) => {
    setSelectedIngredient(ingredient);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedIngredient(null);
    setPopupOpen(false);
  };

  const handlePopupOverlayClick = () => {
    handleClosePopup();
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

  return (
    <div className="app">
      <Header />
      <ToMakeOrder ingredients={ingredients} onOpenPopup={handleOpenPopup} />
      {isPopupOpen && selectedIngredient && (
        <Popup
          className="popup"
          onClose={handleClosePopup}
          onClickOverlay={handlePopupOverlayClick}
        >
          <h2 className="popup__number">
            <DigitsLarge className="popup__number" text="12345" />
          </h2>
          <h2 className="popup__description">
            <MediumText text="идентификатор заказа" />
          </h2>
          <div className="popup__image">
            <img src={doneImage} alt="Здесь должна быть картинка" />
          </div>
          <h2 className="popup__text">
            <DefaultText text="Ваш заказ начали готовить" />
          </h2>
          <p className="popup__textAdvice">
            <DefaultText text="Дождитесь готовности на орбитальной станции" />
          </p>
        </Popup>
      )}
    </div>
  );
};

export default App;