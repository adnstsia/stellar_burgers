import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { DigitsMedium } from "../../fonts/Fonts";
import bun01Img from "../../images/bun-01.png";
import bun02Img from "../../images/bun-02.png";
import sauce01Img from "../../images/sauce-01.png";
import sauce02Img from "../../images/sauce-02.png";
import sauce03Img from "../../images/sauce-03.png";
import sauce04Img from "../../images/sauce-04.png";
import iconFree from "../../images/icon-free.png";

import "./burgerConstructor.css";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class IconCurrency extends React.Component {
  render() {
    return <CurrencyIcon type="primary" />;
  }
}

class ElementFixed extends React.Component {
  render() {
    const { img } = this.props;
    const { state } = this.props;

    return (
      <div className="burgerConstructor__element">
        <ConstructorElement
          type={state}
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={img}
        />
      </div>
    );
  }
}

class ElementFree extends React.Component {
  render() {
    const { img } = this.props;
    return (
      <section className="burgerConstructor__elementFree">
        <img className="burgerConstructor__img" src={iconFree} />
        <div className="burgerConstructor__element">
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
      </div>
      </section>
      
    );
  }
}

class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className="burgerConstructor">
      <div className="burgerConstructor__order" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <ElementFixed img={bun01Img} state='top'/>
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFree img={bun02Img} />
        <ElementFixed img={bun01Img} state='bottom'/>
      </div>

      <div className="burgerConstructor__createOrder">

     <div className="burgerConstructor__total">
     <DigitsMedium text="600" />
<IconCurrency />
     </div>
      <Button htmlType="button" type="primary" size="large">
      Оформить заказ
    </Button>
      </div>
      </section>

    );
  }
}

export default BurgerConstructor;
