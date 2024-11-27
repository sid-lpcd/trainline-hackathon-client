import "./Header.scss";
import TrainlineMainLogo from "../../assets/logo/TrainlineMain.svg?react";
import BasketIcon from "../../assets/icons/basket-icon.svg?react";
import MenuIcon from "../../assets/icons/menu-icon.svg?react";
import ProfileIcon from "../../assets/icons/profile-icon.svg?react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header header--wrapper">
      <Link to="/">
        <TrainlineMainLogo />
      </Link>
      <div className="header__mobile">
        <BasketIcon className="header__basket-icon" />
        <MenuIcon className="header__menu-icon" />
        <ProfileIcon className="header__profiles-icon" />
      </div>
      <div className="header__desktop"></div>
    </header>
  );
};

export default Header;
