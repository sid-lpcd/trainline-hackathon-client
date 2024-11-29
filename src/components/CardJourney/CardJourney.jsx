import train from "../../assets/icons/train.svg";
import coach from "../../assets/icons/coach.svg";
import bulletpoint from "../../assets/icons/bulletpoint.svg";
import { Link } from "react-router-dom";
import "./CardJourney.scss";

function CardJourney({
  departure_name,
  arrival_name,
  train_price,
  coach_price,
  travelId,
}) {
  return (
    <article className="card">
      <div className="card__header">
        <div className="destinations">
          <p className="destination__title">{departure_name}</p>
          <p className="destination__title">{arrival_name}</p>
        </div>
        <Link to={`/selection?travelId=${travelId}`}>
          <button className="card__button">Go</button>
        </Link>
      </div>
      <div className="card__details">
        <div className="card__box">
          <div className="card__details-transport">
            <img className="card__icon" src={train} alt="train icon" />
            <p className="card__text">Train</p>
            <img src={bulletpoint} alt="bullet point image" />
            <p className="card__text">Direct</p>
          </div>
          <div className="card__details-transport">
            <img className="card__icon" src={coach} alt="coach icon" />
            <p className="card__text">Coach</p>
            <img src={bulletpoint} alt="bullet point image" />
            <p className="card__text">Direct</p>
          </div>
        </div>
        <div className="card__box">
          <div className="card__price">from: {train_price}</div>
          <div className="card__price">from: {coach_price}</div>
        </div>
      </div>
    </article>
  );
}

export default CardJourney;
