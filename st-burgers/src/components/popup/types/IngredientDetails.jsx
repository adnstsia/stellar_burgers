import React, { useState, useEffect } from "react";
import { DigitsLarge, DigitsMedium } from "../../../fonts/Fonts";
import { DigitsDefault } from "../../../fonts/Fonts";
import { DigitsSmall } from "../../../fonts/Fonts";
import { MediumText } from "../../../fonts/Fonts";
import { DefaultText } from "../../../fonts/Fonts";
import { SmallText } from "../../../fonts/Fonts";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";

class IngredientDetails extends React.Component {
  render() {
    const { selectedIngredient } = this.props;

    return (
      <div className="popupAboutOrder">
        <div className="p-5" />
        <div className="popupAboutOrder__bigText">
          <MediumText text="Детали ингредиента" />
        </div>
        <img
          className="popupAboutOrder__img"
          src={selectedIngredient.image}
          alt={selectedIngredient.name}
        />
        <h2>
          <DefaultText text={selectedIngredient.name} />
        </h2>
        <div className="popupAboutOrder__block">
          <div className="popupAboutOrder__textHolder">
            <p className="popup__textAdvice">
              <SmallText text="Калории, ккал" />
            </p>
            <h3 className="popupAboutOrder__text">
              <DigitsDefault text={selectedIngredient.calories} />
            </h3>
          </div>
          <div className="p-5" />

          <div className="popupAboutOrder__textHolder">
            <p className="popup__textAdvice">
              <SmallText text="Белки, г" />
            </p>
            <h3 className="popupAboutOrder__text">
              <DigitsDefault text={selectedIngredient.proteins} />
            </h3>
          </div>
          <div className="p-5" />

          <div>
            <p className="popup__textAdvice">
              <SmallText text="Жиры, г" />
            </p>
            <h3 className="popupAboutOrder__text">{selectedIngredient.fat}</h3>
          </div>
          <div className="p-5" />

          <div className="popupAboutOrder__textHolder">
            <p className="popup__textAdvice">
              <SmallText text="Углеводы, г" />
            </p>
            <h3 className="popupAboutOrder__text">
              <DigitsDefault
                className="popupAboutOrder__text "
                text={selectedIngredient.carbohydrates}
              />
            </h3>
          </div>
        </div>
        <div className="p-8" />
      </div>
    );
  }
}

export default IngredientDetails;
