import "./Header.scss";
import FilterIcon from "../../../assets/icons/Filter.svg?react";
import BackIcon from "../../../assets/icons/Arrow.svg?react";
import { Link } from "react-router-dom";

const Header = ({ isFilterOpen, setIsFilterOpen, isIndividualPage }) => {
  return (
    <header className="header header--wrapper">
      <h1 className="header__logo">Snaps</h1>
      {!isIndividualPage ? (
        <button
          className={`header__filter-btn header__filter-btn--small ${
            isFilterOpen ? "header__filter-btn--active" : ""
          }`}
          onClick={() => {
            setIsFilterOpen(!isFilterOpen);
          }}
        >
          Filters
          <FilterIcon alt="Filter Icon" className="header__filter-icon" />
        </button>
      ) : (
        <Link to="/" className="header__nav-link-home">
          <BackIcon /> <h3 className="header__home">Home</h3>
        </Link>
      )}
    </header>
  );
};

export default Header;
