import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import CardTemplate from "../cardTemplate/CardTemplate";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import "./burgerIngredients.css";

class BurgerIngredients extends React.Component {
  render() {
    const { ingredients } = this.props;

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
            {/* Block with buns */}
            <h2>Булки</h2>
            <div className="burgerIngredients__cardContainer">
              {buns.map((ingredient) => (
                <CardTemplate
                  key={ingredient._id}
                  text={ingredient.name}
                  img={ingredient.image}
                  cost={ingredient.price}
                />
              ))}
            </div>
            {/* Block with sauces */}
            <h2>Соусы</h2>
            <div className="burgerIngredients__cardContainer">
              {sauces.map((ingredient) => (
                <CardTemplate
                  key={ingredient._id}
                  text={ingredient.name}
                  img={ingredient.image}
                  cost={ingredient.price}
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
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BurgerIngredients;