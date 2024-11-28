import "./TicketPage.scss";
import ticket from "../../assets/images/TicketScreen.jpg";

function TicketPage() {
  return (
    <main>
      <img
        className="background"
        src={ticket}
        alt="Trainline booking confirmation screen"
      />
    </main>
  );
}

export default TicketPage;
