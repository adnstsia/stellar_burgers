import React from "react";
import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
import { LargeText } from "../../fonts/Fonts";

import "./toMakeOrder.css";

class ToMakeOrder extends React.Component {
  render() {
    const { ingredients, onOpenPopup } = this.props;

    return (
      <div className="toMakeOrder">
        <div>
          <LargeText text="Соберите бургер" />
        </div>
        <div className="toMakeOrder__createBurgerSection">
          <BurgerIngredients ingredients={ingredients} />
          <BurgerConstructor ingredients={ingredients} onOpenPopup={onOpenPopup} />
        </div>
      </div>
    );
  }
}

export default ToMakeOrder;



// import React from "react";
// import BurgerIngredients from "../burgerIngredients/BurgerIngredients";
// import BurgerConstructor from "../burgerConstructor/BurgerConstructor";
// import { LargeText } from "../../fonts/Fonts";

// import "./toMakeOrder.css";

// class ToMakeOrder extends React.Component {
//   render() {
//     const { ingredients } = this.props;

//     return (
//       <div className="toMakeOrder">
//         <div>
//           <LargeText text="Соберите бургер" />
//         </div>
//         <div className="toMakeOrder__createBurgerSection">
//           <BurgerIngredients ingredients={ingredients} />{" "}
//           <BurgerConstructor ingredients={ingredients} />{" "}
//         </div>
//       </div>
//     );
//   }
// }

// export default ToMakeOrder;
