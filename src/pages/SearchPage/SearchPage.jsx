import screen from "../../assets/images/SearchScreen.jpeg";
import "./SearchPage.scss";
import { Link } from "react-router-dom";

function SearchPage() {
  return (
    <>
      <main>
        <img
          className="background"
          src={screen}
          alt="Trainline Search Screen backdrop"
        />
      </main>
      <Link to="/selection">
        <button className="find"></button>
      </Link>
    </>
  );
}

export default SearchPage;
