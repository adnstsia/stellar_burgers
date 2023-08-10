import React, { useState, useEffect } from "react";
import { DigitsLarge } from "../../../fonts/Fonts";
import { MediumText } from "../../../fonts/Fonts";
import { DefaultText } from "../../../fonts/Fonts";
import doneImage from "../../../images/done.png";
import styles from "../Modal.module.css"
class OrderDetails extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <section className={styles.popup__container}>
        <div className="p-60" />
        <h2 className={styles.popup__number}>
          <DigitsLarge className={styles.popup__number} text="12345" />
        </h2>
        <h2 className={styles.popup__description}>
          <MediumText text="идентификатор заказа" />
        </h2>
        <div className={styles.popup__image}>
          <img src={doneImage} alt="Здесь должна быть картинка" />
        </div>
        <h2 className={styles.popup__text}>
          <DefaultText text="Ваш заказ начали готовить" />
        </h2>
        <p className={styles.popup__textAdvice}>
          <DefaultText text="Дождитесь готовности на орбитальной станции" />
        </p>
        <div className="p-60" />
      </section>
    );
  }
}

export default OrderDetails;
