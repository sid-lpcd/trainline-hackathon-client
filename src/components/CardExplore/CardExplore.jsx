import { useState } from "react";
import StarIcon from "../../assets/icons/star-icon.svg?react";
import TrainIcon1 from "../../assets/icons/train-icon-1.svg?react";
import TrainIcon2 from "../../assets/icons/train-icon-2.svg?react";
import TrainIcon3 from "../../assets/icons/train-icon-3.svg?react";
import TrainIcon4 from "../../assets/icons/train-icon-4.svg?react";
import { useNavigate } from "react-router-dom";
import "./CardExplore.scss";

const CardExplore = ({
  imageSrc,
  location,
  author,
  thought,
  travel_dates,
  stations,
}) => {
  const [flipped, setFlipped] = useState(false);
  const handleCardClick = () => {
    setFlipped((prevFlipped) => !prevFlipped);
  };

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => setLiked((prevLiked) => !prevLiked);
  const toggleSave = () => setSaved((prevSaved) => !prevSaved);

  const navigate = useNavigate();
  const handleStationClick = (station) => {
    navigate(`/?group=${station.id}`);
  };

  return (
    <article
      className={`card-explore ${flipped ? "card-explore--flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="card-explore__inner">
        <div className="card-explore__front">
          <div className="card-explore__image-frame">
            <img
              src={imageSrc}
              alt={`View of ${location}`}
              className="card-explore__image"
            />
          </div>
          <div className="card-explore__content">
            <div className="card-explore__actions">
              <span
                onClick={(event) => {
                  event.stopPropagation();
                  toggleLike();
                }}
              >
                {liked ? (
                  <StarIcon className="card-explore__icon card-explore__icon--liked" />
                ) : (
                  <StarIcon className="card-explore__icon" />
                )}
              </span>
            </div>
            <div className="card-explore__header">
              <h3 className="card-explore__location">{location}</h3>
              <p className="card-explore__author">{author}</p>
            </div>
            <p className="card-explore__thought">{thought}</p>
            <p className="card-explore__more">View more</p>
          </div>
        </div>
        <div className="card-explore__back">
          <h3 className="card-explore__title">
            Hop aboard the <em> Track Pack </em>
          </h3>
          <div className="card-explore__info">
            <p className="card-explore__discount">
              🎉 Discount: Save up to 25%
            </p>
            <p className="card-explore__date">
              📅 Travel Dates: {travel_dates}
            </p>
          </div>
          <div className="card-explore__stations">
            {stations.map((station, index) => (
              <div
                key={index}
                className="card-explore__station"
                onClick={(event) => {
                  event.stopPropagation();
                  handleStationClick(station);
                }}
              >
                <h4 className="card-explore__station-name">{station.name}</h4>

                <div>
                  {index === 0 && (
                    <TrainIcon1 className="card-explore__train-icon" />
                  )}
                  {index === 1 && (
                    <TrainIcon2 className="card-explore__train-icon" />
                  )}
                  {index === 2 && (
                    <TrainIcon3 className="card-explore__train-icon" />
                  )}
                  {index === 3 && (
                    <TrainIcon4 className="card-explore__train-icon" />
                  )}
                </div>
                <p className="card-explore__station-details">
                  Group: {station.people}/{station.max_group}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardExplore;
