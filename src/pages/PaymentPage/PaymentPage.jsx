import "./PaymentPage.scss";
import paymentHeader from "../../assets/images/PaymentScreen/paymentHeader.jpeg";
import paymentTicket from "../../assets/images/PaymentScreen/paymentTicket.jpeg";
import paymentOptions from "../../assets/images/PaymentScreen/paymentOptions.jpeg";
import paymentAdvert from "../../assets/images/PaymentScreen/paymentAdvert.jpeg";
import paymentCard from "../../assets/images/PaymentScreen/paymentCard.jpeg";
import { Link } from "react-router-dom";

function PaymentPage() {
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
          src={paymentTicket}
          alt="payment page ticket template"
        />
        <img
          className="header__payment"
          src={paymentOptions}
          alt="payment page options template"
        />
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
