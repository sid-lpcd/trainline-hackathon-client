import train from "../../assets/icons/train.svg";
import coach from "../../assets/icons/coach.svg";
import bulletpoint from "../../assets/icons/bulletpoint.svg";

function CardJourney() {
  <article className="card">
    <div className="card__header">
      <div className="destinations">
        <p className="destination__from">London Euston</p>
        <p className="destination__to">Edinburgh Waverly</p>
      </div>
      <button>Go</button>
    </div>
    <div className="card__details">
      <div className="card__details-train">
        <img className="icon" src={train} alt="train icon" />
        <p className="card__text">Train</p>
        <img src={bulletpoint} alt="bullet point image" />
        <p className="card__text">Direct</p>
      </div>
      <div className="card__details-coach">
        <img className="icon" src={coach} alt="coach icon" />
        <p className="card__text">Train</p>
        <img src={bulletpoint} alt="bullet point image" />
        <p className="card__text">Direct</p>
      </div>
    </div>
  </article>;
}

export default CardJourney;
