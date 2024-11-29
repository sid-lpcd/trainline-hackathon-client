import "InteractionPrefs.scss";
import checkbox from "../../assets/icons/checkbox.svg";
import checkboxFilled from "../../assets/icons/checkbox-checked.svg";

function InteractionPrefs() {
  return (
    <>
      <header className="header">
        <h2 className="header__title">Interaction preferences</h2>
        <p className="header__close">Done</p>
      </header>
      <main className="list">
        <article className="list__item">
          <p className="list__item-text">No Preference</p>
          <div
            onClick={() => {
              toggleLike();
            }}
          >
            {liked ? (
              <HeartIcon className="card-explore__icon card-explore__icon--liked" />
            ) : (
              <HeartIcon className="card-explore__icon" />
            )}
          </div>
        </article>
      </main>
    </>
  );
}

export default InteractionPrefs;
