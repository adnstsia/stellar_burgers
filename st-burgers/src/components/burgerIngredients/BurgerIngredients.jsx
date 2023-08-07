import React, { useState } from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import CardTemplate from "../cardTemplate/CardTemplate";
import Popup from "../popup/Popup";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import "./burgerIngredients.css";

const BurgerIngredients = ({ ingredients }) => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleOpenPopup = (ingredient) => {
    setSelectedIngredient(ingredient);
  };

  const handleClosePopup = () => {
    setSelectedIngredient(null);
  };

  // Фильтрация ингредиентов по типам
  const buns = ingredients.filter((ingredient) => ingredient.type === "bun");
  const sauces = ingredients.filter(
    (ingredient) => ingredient.type === "sauce"
  );
  const fillings = ingredients.filter(
    (ingredient) => ingredient.type === "main"
  );

  return (
    <div>
      <div className="burgerIngredients__buttons">
        {/* Кнопки для фильтрации */}
        <Button htmlType="button" type="secondary" size="medium">
          Булки
        </Button>
        <Button htmlType="button" type="secondary" size="medium">
          Соусы
        </Button>
        <Button htmlType="button" type="secondary" size="medium">
          Начинки
        </Button>
      </div>
      <section className="burgerIngredients">
        <div className="burgerIngredients__menu">
          <h2>Булки</h2>
          <div className="burgerIngredients__cardContainer">
            {buns.map((ingredient) => (
              <CardTemplate
                key={ingredient._id}
                text={ingredient.name}
                img={ingredient.image}
                cost={ingredient.price}
                onClick={() => handleOpenPopup(ingredient)}
              />
            ))}
          </div>
          <h2>Соусы</h2>
          <div className="burgerIngredients__cardContainer">
            {sauces.map((ingredient) => (
              <CardTemplate
                key={ingredient._id}
                text={ingredient.name}
                img={ingredient.image}
                cost={ingredient.price}
                onClick={() => handleOpenPopup(ingredient)}
              />
            ))}
          </div>
          {/* Block with fillings */}
          <h2>Начинки</h2>
          <div className="burgerIngredients__cardContainer">
            {fillings.map((ingredient) => (
              <CardTemplate
                key={ingredient._id}
                text={ingredient.name}
                img={ingredient.image}
                cost={ingredient.price}
                onClick={() => handleOpenPopup(ingredient)}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="popupIngredients">
        {selectedIngredient && (
          <Popup onClose={handleClosePopup}>
            <h2>Детали ингредиента</h2>
            <img src={selectedIngredient.image} alt={selectedIngredient.name} />
            <h2>{selectedIngredient.name}</h2>
            <div>
              <div>
                <p>Калории, ккал</p>
                <h3>{selectedIngredient.calories}</h3>
              </div>
              <div>
                <p>Белки, г</p>
                <h3>{selectedIngredient.proteins}</h3>
              </div>
              <div>
                <p>Жиры, г</p>
                <h3>{selectedIngredient.fat}</h3>
              </div>
              <div>
                <p>Углеводы, г</p>
                <h3>{selectedIngredient.carbohydrates}</h3>
              </div>
            </div>
          </Popup>
        )}
      </div>
    </div>
  );
};

export default BurgerIngredients;