import booking from "../../assets/images/BookingConfirmation.jpg";
import "./BookingConfirmation.scss";
import { Link } from "react-router-dom";

function BookingConfirmation() {
  return (
    <>
      <main>
        <img
          className="background"
          src={booking}
          alt="Trainline booking confirmation screen"
        />
      </main>
      <Link to="/">
        <button className="find"></button>
      </Link>
    </>
  );
}

export default BookingConfirmation;
