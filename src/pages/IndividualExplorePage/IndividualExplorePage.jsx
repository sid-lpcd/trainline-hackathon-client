import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import trips from "../../data/trips.json";
import "./IndividualExplorePage.scss";
import CardExplore from "../../components/CardExplore/CardExplore";
import CardJourney from "../../components/CardJourney/CardJourney";
import ArrowIcon from "../../assets/icons/arrow-down-icon.svg?react";

const IndividualExplorePage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const trip = trips.find((trip) => parseInt(trip.id) === parseInt(id));

  return (
    <>
      <header className="explore-header">
        <h1 className="explore-header__title">Explore</h1>
        <p
          className="explore-header__cancel"
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </p>
      </header>
      <main className="explore-feed">
        <CardExplore imageCard={trip} isIndividual={true} />
        <CardJourney
          departure_name={"London Euston"}
          arrival_name={"Edinburgh (Waverley)"}
          train_price={"£37"}
          coach_price={"£18"}
          travelId={1}
        />
        <CardJourney
          departure_name={"London Euston"}
          arrival_name={"Glasgow"}
          train_price={"£40"}
          coach_price={"£21"}
          travelId={2}
        />

        <Link
          to="https://www.getyourguide.co.uk/edinburgh-l44/"
          target="_blank"
        >
          <article className="explore-feed__travel-buddy">
            <div className="explore-feed__travel-buddy-box">
              <h3 className="explore-feed__travel-buddy-title">
                Don’t have a travel buddy?
              </h3>
              <p className="explore-feed__travel-buddy-text">
                No problem! Check out our partners and connect with other solo
                travelers to embark on an exciting journey.
              </p>
            </div>
            <div className="explore-feed__travel-buddy-box">
              <ArrowIcon className="explore-feed__travel-buddy-icon" />
            </div>
          </article>
        </Link>
      </main>
    </>
  );
};

export default IndividualExplorePage;
