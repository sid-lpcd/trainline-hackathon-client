import Filters from "../../components/sections/Filters/Filters";
import ImageList from "../../components/sections/ImageList/ImageList";
import Mission from "../../components/sections/Mission/Mission";
import { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

import { apiHandler } from "../../utils/apiUtils.mjs";

import "./HomePage.scss";
import { useNavigate } from "react-router-dom";

const HomePage = ({ isFilterOpen, setIsFilterOpen }) => {
  const [filters, setFilters] = useState(null);
  const [images, setImages] = useState(null);

  const [selectedFilters, setSelectedFilters] = useState([]);
  const [displayImages, setDisplayImages] = useState(images);

  const navigate = useNavigate();

  const handleFilters = (filter) => {
    let newFilters = [];
    let newImagesFiltered = [];
    if (selectedFilters.length) {
      if (selectedFilters.find((item) => item === filter)) {
        newFilters = selectedFilters.filter((item) => item !== filter);
        setSelectedFilters(newFilters);
      } else {
        newFilters = [...selectedFilters, filter];
        setSelectedFilters(newFilters);
      }
    } else {
      newFilters = [...selectedFilters, filter];
      setSelectedFilters(newFilters);
    }

    newImagesFiltered = images.filter((image) =>
      newFilters.some((filter) => image.tags.includes(filter))
    );
    {
      /* Diving deeper with sorting by number of matches in filter tags*/
    }
    newImagesFiltered.sort((a, b) => {
      const aFilterCount = newFilters.reduce(
        (count, filter) => (a.tags.includes(filter) ? count + 1 : count),
        0
      );
      const bFilterCount = newFilters.reduce(
        (count, filter) => (b.tags.includes(filter) ? count + 1 : count),
        0
      );
      return bFilterCount - aFilterCount;
    });

    newFilters.length
      ? setDisplayImages(newImagesFiltered)
      : setDisplayImages(images);
  };

  const initialRender = async () => {
    const imgs = await apiHandler("GET", "photos/");
    const filter = await apiHandler("GET", "tags/");
    if (imgs?.error || filter?.error) {
      navigate("/not-found");
    } else {
      setImages(imgs);
      setDisplayImages(imgs);
      setFilters(filter);
    }
  };

  useEffect(() => {
    initialRender();
  }, []);

  if (!images && !filters && !displayImages) {
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
  return (
    <>
      <Filters
        isFilterOpen={isFilterOpen}
        filters={filters}
        selectedFilters={selectedFilters}
        handleFilters={handleFilters}
        setIsFilterOpen={setIsFilterOpen}
      />
      <main
        className={`main__wrapper ${
          isFilterOpen ? "main__wrapper--filter-open" : ""
        }`}
      >
        <Mission />
        <ImageList
          displayImages={displayImages}
          selectedFilters={selectedFilters}
        />
      </main>
    </>
  );
};

export default HomePage;
