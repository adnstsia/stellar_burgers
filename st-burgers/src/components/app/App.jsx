import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import ToMakeOrder from "../toMakeOrder/ToMakeOrder";
import Popup from "../popup/Popup";
import { DigitsLarge, DigitsMedium } from "../../fonts/Fonts";
import { DigitsDefault } from "../../fonts/Fonts";
import { DigitsSmall } from "../../fonts/Fonts";
import { MediumText } from "../../fonts/Fonts";
import { DefaultText } from "../../fonts/Fonts";
import { SmallText } from "../../fonts/Fonts";
import doneImage from "../../images/done.png";
import cross from "../../images/cross.svg";
import "../app/App.css";

const API_URL = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [popupType, setPopupType] = useState(null);

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

  const handleOpenPopup = (ingredient, type) => {
    setSelectedIngredient(ingredient);
    setPopupType(type);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedIngredient(null);
    setPopupType(null);
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
      <ToMakeOrder
        ingredients={ingredients}
        onOpenPopup={(ingredient) => handleOpenPopup(ingredient, "order")}
        onOpenIngredientsPopup={(ingredient) =>
          handleOpenPopup(ingredient, "ingredient")
        }
      />
      {isPopupOpen && selectedIngredient && (
        <Popup
          className="popup popupAboutOrder"
          onClose={handleClosePopup}
          onClickOverlay={handlePopupOverlayClick}
        >
          {popupType === "order" && (
            <>
              {/* Вывод информации о заказе */}
              <div className="popupAboutOrder">
                <div className="popupAboutOrder__bigText">
                  <MediumText text="Детали ингредиента" />
                </div>
                <img
                  src={selectedIngredient.image}
                  alt={selectedIngredient.name}
                />
                <h2>
                  <DefaultText text={selectedIngredient.name} />
                </h2>
                <div className="popupAboutOrder__block">
                  <div className="popupAboutOrder__textHolder">
                    <p>
                      <SmallText text="Калории, ккал" />
                    </p>
                    <h3 className="popupAboutOrder__text">
                      <DigitsDefault text={selectedIngredient.calories} />
                    </h3>
                  </div>
                  <div className="popupAboutOrder__textHolder">
                    <p>
                      <SmallText text="Белки, г" />
                    </p>
                    <h3 className="popupAboutOrder__text">
                      <DigitsDefault text={selectedIngredient.proteins} />
                    </h3>
                  </div>
                  <div>
                    <p>
                      <SmallText text="Жиры, г" />
                    </p>
                    <h3 className="popupAboutOrder__text">
                      {selectedIngredient.fat}
                    </h3>
                  </div>
                  <div className="popupAboutOrder__textHolder">
                    <p>
                      <SmallText text="Углеводы, г" />
                    </p>
                    <h3 className="popupAboutOrder__text">
                      <DigitsDefault
                        className="popupAboutOrder__text"
                        text={selectedIngredient.carbohydrates}
                      />
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
          {popupType === "ingredient" && (
            <>
              {/* Вывод информации об ингредиенте */}
              <section className="popup__container">
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
              </section>
            </>
          )}
        </Popup>
      )}
    </div>
  );
};

export default App;
