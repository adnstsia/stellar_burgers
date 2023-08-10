import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import CardTemplate from "../cardTemplate/CardTemplate";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burgerIngredientsStyles.css";

// ... (прочий импорт)

class BurgerIngredients extends React.Component {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    onOpenPopup: PropTypes.func.isRequired,
  };
  render() {
    const { ingredients, onOpenPopup } = this.props;
    const buns = ingredients.filter((ingredient) => ingredient.type === "bun");
    const sauces = ingredients.filter(
      (ingredient) => ingredient.type === "sauce"
    );
    const fillings = ingredients.filter(
      (ingredient) => ingredient.type === "main"
    );

    return (
      <div>
        <div className={styles.burgerIngredients__buttons}>
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
        <div className="p-5" />
        <section className={styles.burgerIngredients}>
          <div className={styles.burgerIngredients__menu}>
            <h2 className="zeroBox">Булки</h2>
            <div className="p-3" />
            <div className={styles.burgerIngredients__cardContainer}>
              {buns.map((ingredient) => (
                <CardTemplate
                  key={ingredient._id}
                  text={ingredient.name}
                  img={ingredient.image}
                  cost={ingredient.price}
                  onClick={() => onOpenPopup(ingredient)}
                />
              ))}
            </div>
            <div className="p-5" />

            <h2 className={styles.zeroBox}>Соусы</h2>
            <div className="p-3" />

            <div className={styles.burgerIngredients__cardContainer}>
              {sauces.map((ingredient) => (
                <CardTemplate
                  key={ingredient._id}
                  text={ingredient.name}
                  img={ingredient.image}
                  cost={ingredient.price}
                  onClick={() => onOpenPopup(ingredient)}
                />
              ))}
            </div>
            <div className="p-5" />

            <h2 className={styles.zeroBox}>Начинки</h2>
            <div className="p-3" />

            <div className={styles.burgerIngredients__cardContainer}>
              {fillings.map((ingredient) => (
                <CardTemplate
                  key={ingredient._id}
                  text={ingredient.name}
                  img={ingredient.image}
                  cost={ingredient.price}
                  onClick={() => onOpenPopup(ingredient)}
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
