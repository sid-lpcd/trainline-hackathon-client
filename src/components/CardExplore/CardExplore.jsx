import { useState } from "react";
import StarIcon from "../../assets/icons/star-icon.svg?react";
import communityProfile from "../../assets/icons/community-profile-icon.png";
import { Link, useNavigate } from "react-router-dom";
import "./CardExplore.scss";

const CardExplore = ({ imageCard }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked((prevLiked) => !prevLiked);

  const navigate = useNavigate();
  const handleStationClick = (station) => {
    navigate(`/explore/${imageCard.id}`);
  };

  return (
    <article className="image-card" onClick={handleStationClick}>
      <div className="image-card__top">
        <img
          src={imageCard.imageSrc}
          alt={imageCard.short_description}
          className="image-card__img"
        />
      </div>

      <div className="image-card__row image-card__row--bottom">
        <div className="image-card__sub-row">
          <h3 className="image-card__location">{imageCard.location}</h3>
          <span
            onClick={(event) => {
              event.stopPropagation();
              toggleLike();
            }}
            className="image-card__likes"
          >
            {liked ? (
              <StarIcon className="image-card__icon image-card__icon--liked" />
            ) : (
              <StarIcon className="image-card__icon" />
            )}
          </span>
        </div>
        <div className="image-card__details">
          <p className="image-card__description">
            {imageCard.short_description.length > 40
              ? `${imageCard.short_description.substring(0, 40)}...`
              : imageCard.short_description}
          </p>
          <div className="image-card__community-profile">
            <img
              src={communityProfile}
              alt="community profile icon"
              className="image-card__community-profile-icon"
            />
            <p className="image-card__author">{imageCard.author}</p>
          </div>
          <Link to={`/explore/${imageCard.id}`} className="image-card__more">
            View more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CardExplore;
