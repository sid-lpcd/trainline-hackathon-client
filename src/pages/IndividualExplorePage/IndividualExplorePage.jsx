import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import trips from "../../data/trips.json";
import "./IndividualExplorePage.scss";
import CardExplore from "../../components/CardExplore/CardExplore";
import CardJourney from "../../components/CardJourney/CardJourney";

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
          arrival_name={"Edinburgh Waverley"}
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
      </main>
    </>
  );
};

export default IndividualExplorePage;
