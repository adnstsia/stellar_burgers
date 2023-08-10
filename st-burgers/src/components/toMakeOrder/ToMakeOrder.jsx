import React from "react";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor";
import { LargeText } from "../../fonts/Fonts";

import styles from "./ToMakeOrder.css";

class ToMakeOrder extends React.Component {
  render() {
    const { ingredients, onOpenPopup, onOpenIngredientsPopup } = this.props;

    return (
      <div className={styles.toMakeOrder}>
        <div>
          <div className="p-5">
            <LargeText text="Соберите бургер" />
          </div>
        </div>
        <div className={styles.toMakeOrder__createBurgerSection}>
          <BurgerIngredients
            ingredients={ingredients}
            onOpenPopup={onOpenPopup}
          />
          <BurgerConstructor
            ingredients={ingredients}
            onOpenPopup={onOpenIngredientsPopup}
          />
        </div>
      </div>
    );
  }
}

export default ToMakeOrder;
