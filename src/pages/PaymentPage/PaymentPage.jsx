import "./PaymentPage.scss";
import paymentHeader from "../../assets/images/PaymentScreen/paymentHeader.jpeg";
import brighton from "../../assets/images/PaymentScreen/paymentTicketBrighton.jpeg";
import paris from "../../assets/images/PaymentScreen/paymentTicketParis.jpeg";
import paymentOptions from "../../assets/images/PaymentScreen/paymentOptions.jpeg";
import paymentAdvert from "../../assets/images/PaymentScreen/paymentAdvert.jpeg";
import paymentCard from "../../assets/images/PaymentScreen/paymentCard.jpeg";
import friendsicon from "../../assets/icons/friends-icon.svg";
import addIcon from "../../assets/icons/add-icon.svg";
import { Link, useParams } from "react-router-dom";
import InteractionPrefs from "../../components/InteractionPrefs/InteractionPrefs";
import { useState } from "react";

function PaymentPage() {
  const [interactionsVisible, setInteractionsVisible] = useState(false);

  if (interactionsVisible) {
    return <InteractionPrefs setInteractionsVisible={setInteractionsVisible} />;
  }



function PaymentPage() {
  const { location } = useParams();

  return (
    <>
      <header className="header">
        <img
          className="header__payment"
          src={paymentHeader}
          alt="payment page header template"
        />
      </header>
      <main className="main">
        <img
          className="header__payment"
          src={location === "paris" ? paris : brighton}
          alt={
            location === "paris"
              ? "payment page ticket template for Paris"
              : "payment page ticket template for Brighton"
          }
        />
        <img
          className="header__payment"
          src={paymentOptions}
          alt="payment page options template"
        />
        <article
          className="interactions"
          onClick={() => {
            setInteractionsVisible(!interactionsVisible);
          }}
        >
          <p className="interactions__text">
            I am open to interaction with new people
          </p>
          <div className="addIcon">
            <img src={addIcon} alt="Plus icon" />
          </div>
        </article>
        <article className="friends">
          <div className="friends__wrapper">
            <img
              className="friends__icon"
              src={friendsicon}
              alt="friends icon"
            />
            <div className="friends__wrapper-form">
              <p className="friends__title">Travelling with friends</p>
              <p className="friends__text">
                Invite your friend to share journey
              </p>
              <form className="form">
                <label className="form__label" name="email">
                  Email
                </label>
                <div className="input__wrapper">
                  <input className="form__input" name="email" type="email" />
                  <button className="form__add" type="submit">
                    <img src={addIcon} alt="icon to add" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>
        <img
          className="header__payment"
          src={paymentAdvert}
          alt="payment page adverts template"
        />
        <img
          className="header__payment"
          src={paymentCard}
          alt="payment page card template"
        />
      </main>
      <Link to="/booking">
        <button className="applepay"></button>
      </Link>
    </>
  );
}

export default PaymentPage;
