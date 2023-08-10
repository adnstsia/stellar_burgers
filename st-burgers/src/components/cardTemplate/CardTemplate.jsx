import React from "react";
import PropTypes from "prop-types";
import { SmallText } from "../../fonts/Fonts";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./CardTemplateStyles.css";

class CardTemplate extends React.Component {
  render() {
    const { text, img, cost, onClick } = this.props; 

    return (
      <div className={styles.cardTemplate} onClick={onClick}> 
        <Counter className={styles.counter} count={1} size="default" extraClass="m-1" />
        <img src={img} alt={text} />

        <div className={styles.cardTemplate__cost}>
          <h2 className={styles.cardTemplate__text}> {cost} </h2>
          <CurrencyIcon type="primary" />
        </div>
        <SmallText text={text} />
      </div>
    );
  }
}

CardTemplate.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardTemplate;
