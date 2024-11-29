import { useEffect } from "react";
import booking from "../../assets/images/BookingConfirmation.jpg";
import "./BookingConfirmation.scss";
import { Link, useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const navigate = useNavigate();
  const backToHome = async () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    backToHome();
  }, []);

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
