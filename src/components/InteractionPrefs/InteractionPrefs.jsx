import "./InteractionPrefs.scss";
import checkbox from "../../assets/icons/checkbox.svg";
import checkboxFilled from "../../assets/icons/checkbox-checked.svg";
import { useState } from "react";

function InteractionPrefs({ setInteractionsVisible }) {
  const [selectedStates, setSelectedStates] = useState([false, false]);

  const toggleSelection = (index) => {
    setSelectedStates((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };
  return (
    <>
      <header className="header">
        <div className="spacer"></div>
        <h2 className="header__title">Interaction preferences</h2>
        <p
          className="header__close"
          onClick={() => {
            setInteractionsVisible(false);
          }}
        >
          Done
        </p>
      </header>
      <main className="list">
        <article className="list__item">
          <p className="list__item-text">No Preference</p>
          <div
            className="list__item-checkbox"
            onClick={() => toggleSelection(0)}
          >
            {selectedStates[0] ? (
              <img src={checkboxFilled} alt="Checkbox filled" />
            ) : (
              <img src={checkbox} alt="Checkbox empty" />
            )}
          </div>
        </article>
        <article className="list__item">
          <p className="list__item-text">Having a conversation</p>
          <div
            className="list__item-checkbox"
            onClick={() => toggleSelection(1)}
          >
            {selectedStates[1] ? (
              <img src={checkboxFilled} alt="Checkbox filled" />
            ) : (
              <img src={checkbox} alt="Checkbox empty" />
            )}
          </div>
        </article>
        <article className="list__item">
          <p className="list__item-text">Playing card games</p>
          <div
            className="list__item-checkbox"
            onClick={() => toggleSelection(2)}
          >
            {selectedStates[2] ? (
              <img src={checkboxFilled} alt="Checkbox filled" />
            ) : (
              <img src={checkbox} alt="Checkbox empty" />
            )}
          </div>
        </article>
        <article className="list__item">
          <p className="list__item-text">Helping the elderly</p>
          <div
            className="list__item-checkbox"
            onClick={() => toggleSelection(3)}
          >
            {selectedStates[3] ? (
              <img src={checkboxFilled} alt="Checkbox filled" />
            ) : (
              <img src={checkbox} alt="Checkbox empty" />
            )}
          </div>
        </article>
        <article className="list__item">
          <p className="list__item-text">Food 4 Thoughts</p>
          <div
            className="list__item-checkbox"
            onClick={() => toggleSelection(4)}
          >
            {selectedStates[4] ? (
              <img src={checkboxFilled} alt="Checkbox filled" />
            ) : (
              <img src={checkbox} alt="Checkbox empty" />
            )}
          </div>
        </article>
      </main>
      <button
        className="submit"
        onClick={() => {
          setInteractionsVisible(false);
        }}
      >
        Done
      </button>
    </>
  );
}

export default InteractionPrefs;
