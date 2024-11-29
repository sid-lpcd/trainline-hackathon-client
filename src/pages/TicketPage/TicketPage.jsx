import "./TicketPage.scss";
import ticket from "../../assets/images/Ticket/Ticket1.png";
import ticket2 from "../../assets/images/Ticket/Ticket2.png";
import rewardsIcon from "../../assets/icons/rewards-icon.png";
import ArrowIcon from "../../assets/icons/arrow-down-icon.svg?react";
import { useNavigate } from "react-router-dom";

function TicketPage() {
  const navigate = useNavigate();
  return (
    <main className="ticket-page">
      <img
        className="ticket-section"
        src={ticket}
        alt="Trainline booking confirmation screen"
      />
      <section
        className="ticket-section"
        onClick={() => {
          navigate("/rewards");
        }}
      >
        <div className="rewards-tab">
          <div className="rewards-tab__icon">
            <img
              src={rewardsIcon}
              alt="rewards icon"
              className="rewards-tab__img"
            />
          </div>
          <div className="rewards-tab__content">
            <h3 className="rewards-tab__title">Local Rewards</h3>
            <p className="rewards-tab__description">
              Your community rewards points
            </p>
          </div>
          <ArrowIcon className="rewards-tab__arrow" />
        </div>
      </section>

      <img
        className="ticket-section"
        src={ticket2}
        alt="Trainline booking confirmation screen"
      />
    </main>
  );
}

export default TicketPage;
