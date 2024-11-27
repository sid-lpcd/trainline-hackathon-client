import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainlineMainLogo from "../../assets/logo/TrainlineMain.svg?react";
import { apiHandler } from "../../utils/apiUtils.mjs";
import "./HomePage.scss";

const HomePage = ({ isFilterOpen, setIsFilterOpen }) => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const initialRender = async () => {};

  useEffect(() => {
    initialRender();
  }, []);

  if (!loaded) {
    return (
      <div className="loading-overlay">
        <TrainlineMainLogo className="loading-logo" />
      </div>
    );
  }
  return <></>;
};

export default HomePage;
