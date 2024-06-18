import React, { useState, useEffect } from "react";
import FacilityPage from "./FacilityPage/FacilityPage";
import FacilityListPage from "./FacilityPage/FacilityListPage";
import ServicePage from "./FacilityPage/ServicePage";
import "./Background.css";
import backgroundImage from "./interior-modern-emergency-room-with-empty-nurses-station-generative-ai_587448-2137.jpg";
import { getTranslations } from "../../translations/data";

const Background = ({ text }) => {
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay1">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

function Facility({ language }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const translations = await getTranslations(language);
      setData(translations);
    };

    fetchData();
  }, [language]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Background text={data.facility.name} />
      <FacilityListPage text={data.facility.image} />
      <ServicePage text={data.facility.part1} />
    </div>
  );
}

export default Facility;
