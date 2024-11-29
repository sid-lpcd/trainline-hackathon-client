import React from "react";
import "./Navigation.scss";
import StarIcon from "../../assets/icons/star-icon.svg?react";
import SearchIcon from "../../assets/icons/search-icon.svg?react";
import ExploreIcon from "../../assets/icons/explore-icon.svg?react";
import TicketIcon from "../../assets/icons/ticket-icon.svg?react";
import ProfileIcon from "../../assets/icons/profile-icon.svg?react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="bottom-navigation">
      <Link
        to="/favourites"
        className={`${
          location.pathname === "/favourites"
            ? "bottom-navigation__item bottom-navigation__item--star bottom-navigation__item--active"
            : "bottom-navigation__item bottom-navigation__item--star"
        }`}
      >
        <StarIcon className="bottom-navigation__icon" />
        <span className="bottom-navigation__label">Favourites</span>
      </Link>
      <Link
        to="/"
        className={`${
          location.pathname === "/"
            ? "bottom-navigation__item bottom-navigation__item--active"
            : "bottom-navigation__item"
        }`}
      >
        <SearchIcon className="bottom-navigation__icon" />
        <span className="bottom-navigation__label">Search</span>
      </Link>
      <Link
        to="/explore"
        className={`${
          location.pathname === "/explore"
            ? "bottom-navigation__item bottom-navigation__item--active"
            : "bottom-navigation__item"
        }`}
      >
        <ExploreIcon className="bottom-navigation__icon" />
        <span className="bottom-navigation__label">Explore</span>
      </Link>
      <Link
        to="/tickets"
        className={`${
          location.pathname === "/tickets"
            ? "bottom-navigation__item bottom-navigation__item--active"
            : "bottom-navigation__item"
        }`}
      >
        <TicketIcon className="bottom-navigation__icon" />
        <span className="bottom-navigation__label">Tickets</span>
      </Link>
      <Link
        to="/profile"
        className={`${
          location.pathname === "/profile"
            ? "bottom-navigation__item bottom-navigation__item--active"
            : "bottom-navigation__item"
        }`}
      >
        <ProfileIcon className="bottom-navigation__icon" />
        <span className="bottom-navigation__label">Profile</span>
      </Link>
    </nav>
  );
};

export default Navigation;
