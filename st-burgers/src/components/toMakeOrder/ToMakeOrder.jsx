import React from "react";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/burgerConstructor"; // Обратите внимание на регистр букв
import { LargeText } from "../../fonts/Fonts";

import './toMakeOrder.css'

class ToMakeOrder extends React.Component {
  render() {
    return (
      <div className="toMakeOrder">
        <div><LargeText text="Соберите бургер" /></div>
        <div className="toMakeOrder__createBurgerSection">
          <BurgerIngredients />
        <BurgerConstructor />
        </div>
        
      </div>
    );
  }
}

export default ToMakeOrder;

