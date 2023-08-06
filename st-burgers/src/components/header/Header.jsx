import React from "react";
import { SmallText } from "../../fonts/Fonts";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import "./header.css";

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
      <header className="header">
        <section className="headerSection">
          <div className="mixedItems">
            <div className="navigationItem constructItem">
              <IconBurger />
              <SmallText text="Конструктор" />
            </div>

            <div className="navigationItem orderItem">
              <IconList />
              <SmallText text="Лента Заказов" />
            </div>
          </div>

          <div className="logo">
            <IconLogo className="logo" />
          </div>

          <div className="navigationItem">
            <IconProfile />
            <SmallText text="Личный кабинет" />
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
