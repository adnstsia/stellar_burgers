import React from "react";
import { LargeText } from "../../fonts/Fonts";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import CardTemplate from "../cardTemplate/CardTemplate";
import bun01Img from "../../images/bun-01.png";
import bun02Img from "../../images/bun-02.png";
import sauce01Img from "../../images/sauce-01.png";
import sauce02Img from "../../images/sauce-02.png";
import sauce03Img from "../../images/sauce-03.png";
import sauce04Img from "../../images/sauce-04.png";


import "./burgerIngredients.css";

class BurgerIngredients extends React.Component {
  render() {
    return (
      <div>
               <div>
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
          <CardTemplate
            text="Краторная булка N-200i"
            img={bun01Img}
            cost="20"
          />
          <CardTemplate
            text="Флюоресцентная булка R2-D3"
            img={bun02Img}
            cost="20"
          />
          
        </div>

        {/* Block with sauses */}
        <h2>Соусы</h2>
        <div className="burgerIngredients__cardContainer">
          <CardTemplate text="Соус Spicy-X" img={sauce01Img} cost="30" />
          <CardTemplate text="Соус фирменный Space Sauce" img={sauce02Img} cost="30" />
          <CardTemplate text="Соус традиционный галактический" img={sauce03Img} cost="30" />
          <CardTemplate text="Соус с шипами Антарианского плоскоходца" img={sauce04Img} cost="30" />
        </div>

</div>
      </section>
      </div>
  
    );
  }
}

export default BurgerIngredients;
