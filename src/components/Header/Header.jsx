import "./Header.scss";
import TrainlineMainLogo from "../../assets/logo/TrainlineMain.svg?react";
import BasketIcon from "../../assets/icons/basket-icon.svg?react";
import MenuIcon from "../../assets/icons/menu-icon.svg?react";
import ProfileIcon from "../../assets/icons/profile-icon.svg?react";
import ArrowDown from "../../assets/icons/arrow-down-icon.svg?react";
import UkFlag from "../../assets/images/UKFlag.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header header--wrapper">
      <Link to="/" className="header__logo">
        <TrainlineMainLogo />
      </Link>
      <div className="header__mobile">
        <BasketIcon className="header__basket-icon" />
        <MenuIcon className="header__menu-icon" />
        <ProfileIcon className="header__profiles-icon" />
      </div>
      <div className="header__desktop">
        <div className="header__menu-item">
          <div className="header__flag"></div>
          <ArrowDown className="header__arrow-down-icon" />
        </div>
        <div className="header__menu-item">
          <p className="header__menu-text">Travel extras</p>
        </div>
        <div className="header__menu-item">
          <p className="header__menu-text">Business</p>
        </div>
        <div className="header__menu-item">
          <p className="header__menu-text">Basket</p>
        </div>
        <div className="header__menu-item">
          <p className="header__menu-text">My Bookings</p>
        </div>
        <div className="header__menu-item">
          <p className="header__menu-text">Register</p>
        </div>
        <div className="header__menu-item">
          <MenuIcon className="header__menu-icon" />
        </div>
        <div className="header__menu-item header__menu-item--round">
          <p className="header__menu-text header__menu-text--round">Sign In</p>
          <ProfileIcon className="header__profiles-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
