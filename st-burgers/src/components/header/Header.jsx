import React from 'react';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';

class IconBurger extends React.Component {
  render() {
    return (
      <BurgerIcon type="primary" />
    );
  }
}

class IconList extends React.Component {
  render() {
    return (
      <ListIcon type="primary" />
    );
  }
}

class IconProfile extends React.Component {
  render() {
    return (
      <ProfileIcon type="primary" />
    );
  }
}

class IconLogo extends React.Component {
  render() {
    return (
      <Logo />
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <IconBurger />
          <h2 className='nono'>Конструктор</h2>
        </div>

        <div>
          <IconList />
          <h2>Лента Заказов</h2>
        </div>

        <IconLogo />

        <div>
          <IconProfile />
          <h2>Личный кабинет</h2>
        </div>

      </header>
    );
  }
}

export default Header;

