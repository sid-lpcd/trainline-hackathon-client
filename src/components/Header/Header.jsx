import "./Header.scss";
import TrainlineMainLogo from "../../assets/logo/TrainlineMain.svg?react";
import BasketIcon from "../../assets/logo/basket-icon.svg?react";
import MenuIcon from "../../assets/logo/menu-icon.svg?react";
import ProfileIcon from "../../assets/logo/profile-icon.svg?react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header--wrapper">
        <Link to="/">
          <TrainlineMainLogo />
        </Link>
        <div className="header__mobile">
          <BasketIcon />
          <MenuIcon />
          <ProfileIcon />
        </div>
        <div className="header__desktop"></div>
      </div>
    </header>
  );
};

export default Header;
