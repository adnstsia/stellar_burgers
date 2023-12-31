import React from "react";
import { SmallText } from "../../fonts/Fonts";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./HeaderStyles.module.css";

class IconBurger extends React.Component {
  render() {
    return <BurgerIcon type="primary" />;
  }
}

class IconList extends React.Component {
  render() {
    return <ListIcon type="primary" />;
  }
}

class IconProfile extends React.Component {
  render() {
    return <ProfileIcon type="primary" />;
  }
}

class IconLogo extends React.Component {
  render() {
    return <Logo />;
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <section className={styles.headerSection}>
          <div className={styles.mixedItems}>
            <a
              href="#"
              className={`${styles.navigationItem} ${styles.constructItem}`}
            >
              <IconBurger />
              <SmallText text="Конструктор" />
            </a>

            <a
              href="#"
              className={`${styles.navigationItem} ${styles.constructItem}`}
            >
              <IconList />
              <SmallText text="Лента Заказов" />
            </a>
          </div>

          <div className={styles.logo}>
            <IconLogo className={styles.logo} />
          </div>

          <a href="#" className={styles.navigationItem}>
            <IconProfile />
            <SmallText text="Личный кабинет" />
          </a>
        </section>
      </header>
    );
  }
}

export default Header;
