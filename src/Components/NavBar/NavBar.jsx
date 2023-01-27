import React from 'react';
import './NavBar.scss';

import logo from '../../assets/images/logo.svg';
import location from '../../assets/images/location.svg';
import search from '../../assets/images/search.svg';
import user from '../../assets/images/user.svg';
import basket from '../../assets/images/basket.svg';
import burger from '../../assets/images/burger.svg';

export const NavBar = () => {

  return (
    <>
      <div className="navbar">
        <div className="navbar__main">
          <img className="navbar__logo pointer" src={logo} alt="logo" />
          <div className="navbar__buttons">
            <div className="navbar__input_container">
              <img className="input_container__icon" src={search} alt="search" />
              <input className="input_container__text" type="text" placeholder="cerca ..." />
            </div>
            <img className="navbar__location pointer" src={location} alt="location" />
            <img className="navbar__user pointer" src={user} alt="user" />
            <img className="navbar__basket pointer" src={basket} alt="basket" />
          </div>
        </div>

        <div className="navbar__mobile">
          <img className="navbar__mobile_burger" src={burger} alt="burger" />
          <img className="navbar__mobile_user" src={user} alt="user" />
          <img className="navbar__mobile_logo" src={logo} alt="logo" />
          <img className="navbar__mobile_search" src={search} alt="search" />
          <img className="navbar__mobile_basket" src={basket} alt="basket" />
        </div>

        <div className="navbar__red-line"></div>
      </div>
    </>
  );
};