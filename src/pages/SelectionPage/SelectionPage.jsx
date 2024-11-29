import "./SelectionPage.scss";
import { Link } from "react-router-dom";
import selection from "../../assets/images/SelectionPage.jpeg";
import glasgow from "../../assets/images/GlasgowScreen.png";
import edinburgh from "../../assets/images/EdinburghScreen.png";
import { useSearchParams } from "react-router-dom";

function SelectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.get("travelId"));

  return (
    <>
      <main>
        {parseInt(searchParams.get("travelId")) === 1 ? (
          <img
            className="background"
            src={edinburgh}
            alt="Trainline journey selection screen"
          />
        ) : parseInt(searchParams.get("travelId")) === 2 ? (
          <img
            className="background"
            src={glasgow}
            alt="Glasgow Trainline journey selection screen"
          />
        ) : (
          <img
            className="background"
            src={selection}
            alt="Trainline journey selection screen"
          />
        )}
        ;
      </main>
      <Link to="/payment">
        <button className="selection"></button>
      </Link>
    </>
  );
}

export default SelectionPage;
