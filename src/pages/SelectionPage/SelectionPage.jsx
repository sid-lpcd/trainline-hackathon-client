import "./SelectionPage.scss";
import { Link } from "react-router-dom";
import selection from "../../assets/images/SelectionPage.jpeg";

function SelectionPage() {
  return (
    <>
      <main>
        <img
          className="background"
          src={selection}
          alt="Trainline journey selection screen"
        />
      </main>
      <Link to="/payment">
        <button className="selection"></button>
      </Link>
    </>
  );
}

export default SelectionPage;
