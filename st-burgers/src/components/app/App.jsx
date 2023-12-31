import React, { useState, useEffect } from "react";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import Header from "../header/Header";
import ToMakeOrder from "../toMakeOrder/ToMakeOrder";
import Modal from "../popup/Modal";
import OrderDetails from "../popup/types/OrderDetails";
import IngredientDetails from "../popup/types/IngredientDetails";
import styles from "./AppStyles.module.css";

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



  return (
    <div className={styles.app}>
<div id="modal"></div>
      <a href="#" className={styles.headerAsLink}>
      <div id="modal-container"></div>
              <Header />
      </a>

      <div className="p-5" />

      <ToMakeOrder
        ingredients={ingredients}
        onOpenPopup={(ingredient) => handleOpenPopup(ingredient, "order")}
        onOpenIngredientsPopup={(ingredient) =>
          handleOpenPopup(ingredient, "ingredient")
        }
      />
      {isPopupOpen && selectedIngredient && (
        <Modal
          className={`${styles.popup} ${styles.popupAboutOrder}`}
          onClose={handleClosePopup}
          onClickOverlay={handlePopupOverlayClick}
        >
          {popupType === "order" && (
            <>
              {/* Вывод информации о заказе */}

              <IngredientDetails selectedIngredient={selectedIngredient} />
            </>
          )}
          {popupType === "ingredient" && (
            <>
              {/* Вывод информации об ингредиенте */}
              <OrderDetails />
                          </>
          )}
        </Modal>
              )}
    </div>
  );
};

export default App;
