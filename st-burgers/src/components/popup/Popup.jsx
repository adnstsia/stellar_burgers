import React from "react";
import "./popup.css";
import { DigitsLarge } from "../../fonts/Fonts";

import { MediumText } from "../../fonts/Fonts";
import { DefaultText } from "../../fonts/Fonts";

class Popup extends React.Component {
  render() {
    return (
      <section className="popup">
        <div className="overlay"></div>
        <div className="popup__container popup__container_type_image">
          <button className="popup__close" type="button"></button>
          <DigitsLarge text="1234567890" />
          <MediumText text="идентификатор заказа" />
          <img src="" />
          <DefaultText text="Ваш заказ начали готовить" />
          <DefaultText text="Дождитесь готовности на орбитальной станции" />
        </div>
      </section>
    );
  }
}

export default Popup;
