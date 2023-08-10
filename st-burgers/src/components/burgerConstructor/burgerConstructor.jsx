import React from "react";
import PropTypes from "prop-types";

import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { DigitsMedium } from "../../fonts/Fonts";
import styles from "./BurgerConstructorStyles.css";

class IconCurrency extends React.Component {
  render() {
    return <CurrencyIcon type="primary" />;
  }
}

class BurgerConstructor extends React.Component {
  static propTypes = {
    ingredients: PropTypes.array.isRequired,
    onOpenPopup: PropTypes.func.isRequired,
  };

  render() {
    const { ingredients, onOpenPopup } = this.props;

    return (
      <section className={styles.burgerConstructor}>
        <div
          className={styles.burgerConstructor__order}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://example.com/bun-image.png"
          />

          {ingredients.map((ingredient) => (
            <ConstructorElement
              key={ingredient._id}
              type={ingredient.type}
              isLocked={false}
              text={ingredient.name}
              price={ingredient.price}
              thumbnail={ingredient.image}
            />
          ))}
        </div>

        <div className={styles.burgerConstructor__createOrder}>
          <div className={styles.burgerConstructor__total}>
            <DigitsMedium text="600" />
            <IconCurrency />
          </div>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={onOpenPopup}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    );
  }
}

export default BurgerConstructor;
