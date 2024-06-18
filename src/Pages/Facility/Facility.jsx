import React from "react";
import FacilityPage from "./FacilityPage/FacilityPage";
import FacilityListPage from "./FacilityPage/FacilityListPage";
import ServicePage from "./FacilityPage/ServicePage";

function Facility() {
  return (
    <div>
      <FacilityPage />
      <FacilityListPage />
      <ServicePage />
    </div>
  );
}

export default Facility;
