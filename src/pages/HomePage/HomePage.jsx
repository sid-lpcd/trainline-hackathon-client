import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { apiHandler } from "../../utils/apiUtils.mjs";
import "./HomePage.scss";

const HomePage = ({ isFilterOpen, setIsFilterOpen }) => {
  const [loaded, setLoaded] = useState(true);
  const navigate = useNavigate();

  const initialRender = async () => {};

  useEffect(() => {
    initialRender();
  }, []);

  if (!loaded) {
    return (
      <div className="loader-overlay">
        <InfinitySpin
          visible={true}
          width="200"
          color="#1e6655"
          ariaLabel="infinity-spin-loading"
        />
      </div>
    );
  }
  return <></>;
};

export default HomePage;
