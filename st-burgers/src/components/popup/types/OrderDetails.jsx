import React, { useState, useEffect } from "react";
import { DigitsLarge } from "../../../fonts/Fonts";
import { MediumText } from "../../../fonts/Fonts";
import { DefaultText } from "../../../fonts/Fonts";
import doneImage from "../../../images/done.png";

class OrderDetails extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <section className="popup__container">
        <div className="p-60" />
        <h2 className="popup__number">
          <DigitsLarge className="popup__number" text="12345" />
        </h2>
        <h2 className="popup__description">
          <MediumText text="идентификатор заказа" />
        </h2>
        <div className="popup__image">
          <img src={doneImage} alt="Здесь должна быть картинка" />
        </div>
        <h2 className="popup__text">
          <DefaultText text="Ваш заказ начали готовить" />
        </h2>
        <p className="popup__textAdvice">
          <DefaultText text="Дождитесь готовности на орбитальной станции" />
        </p>
        <div className="p-60" />
      </section>
    );
  }
}

export default OrderDetails;
