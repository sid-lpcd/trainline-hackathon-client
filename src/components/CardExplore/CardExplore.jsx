import "./CardExplore.scss";
import { useState } from "react";
import HeartIcon from "../../assets/icons/heart-icon.svg?react";
import SaveIcon from "../../assets/icons/save-icon.svg?react";

const CardExplore = ({ imageSrc, location, thought }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleLike = () => setLiked((prevLiked) => !prevLiked);
  const toggleSave = () => setSaved((prevSaved) => !prevSaved);

  return (
    <article className="card-explore">
      <div className="card-explore__image-frame">
        <img
          src={imageSrc}
          alt={`View of ${location}`}
          className="card-explore__image"
        />
      </div>
      <div className="card-explore__content">
        <div className="card-explore__actions">
          <span onClick={toggleLike}>
            {liked ? (
              <HeartIcon className="card-explore__icon card-explore__icon--liked" />
            ) : (
              <HeartIcon className="card-explore__icon" />
            )}
          </span>
          <span onClick={toggleSave}>
            {saved ? (
              <SaveIcon className="card-explore__icon card-explore__icon--saved" />
            ) : (
              <SaveIcon className="card-explore__icon" />
            )}
          </span>
        </div>
        <h3 className="card-explore__location">{location}</h3>
        <p className="card-explore__thought">{thought}</p>
      </div>
    </article>
  );
};

export default CardExplore;
