import React from "react";
import { SmallText } from "../../fonts/Fonts";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import "./cardTemplate.css";

class IconCurrency extends React.Component {
  render() {
    return <CurrencyIcon type="primary" />;
  }
}

class CardTemplate extends React.Component {
  render() {
    const { text } = this.props;
    const { img } = this.props;
    const { cost } = this.props;

    return (
      <section className="cardTemplate">
        <Counter
          className="counter"
          count={1}
          size="default"
          extraClass="m-1"
        />
        <img src={img} />

        <div className="cardTemplate__cost">
          <h2 className="cardTemplate__text"> {cost} </h2>
          <IconCurrency />
        </div>
        <SmallText text={text} />
      </section>
    );
  }
}

export default CardTemplate;
