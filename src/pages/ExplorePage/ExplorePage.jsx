import CardExplore from "../../components/CardExplore/CardExplore";
import trips from "../../data/trips.json";
import helpIcon from "../../assets/icons/help-icon.png";
import "./ExplorePage.scss";
import { useState } from "react";

const ExplorePage = () => {
  const [selectedTrips, setSelectedTrips] = useState(trips);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filters = ["Social Travel", "Solo Travel", "Family Travel", "Couples"];

  const handleFilterClick = (filter) => {
    if (!selectedFilters.length) {
      setSelectedTrips(trips);
    }
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
      setSelectedTrips(trips.filter((trip) => !trip.category.includes(filter)));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
      setSelectedTrips(trips.filter((trip) => trip.category.includes(filter)));
    }
  };

  return (
    <>
      <header className="explore-header">
        <img src={helpIcon} alt="help icon" className="explore-header__icon" />
        <h1 className="explore-header__title">Explore</h1>
      </header>
      <main className="explore-feed">
        <div className="explore-feed__filters">
          <h3 className="explore-feed__filters-title">Filters</h3>
          <div className="explore-feed__filters-container">
            {filters.map((filter, index) => (
              <p
                className={`explore-feed__filters-item${
                  selectedFilters.includes(filter)
                    ? " explore-feed__filters-item--active"
                    : ""
                }`}
                key={index}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </p>
            ))}
          </div>
        </div>
        {selectedTrips.length ? (
          selectedTrips.map((trip, index) => (
            <CardExplore key={index} imageCard={trip} />
          ))
        ) : (
          <p className="explore-feed__no-results">No results found</p>
        )}
      </main>
    </>
  );
};

export default ExplorePage;
