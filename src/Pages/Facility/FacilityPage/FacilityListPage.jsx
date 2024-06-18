import React from "react";
import Deparment from "./images/deparment.png";
import Bed from "./images/bed.png";
import Acroom from "./images/ac.png";
import Blood from "./images/blood.png";
import Centraloxygen from "./images/centarloxygen.png";
import Lab from "./images/lab.png";
import Company from "./images/company.png";
import Manchineinjection from "./images/machineinjection.png";
import Neautalmachine from "./images/neautalmachine.png";
import Sugar from "./images/sugar.png";
import Streaming from "./images/streaming.png";
import Influ from "./images/influ.png";
import Oxygen from "./images/oxygen.png";
import Injection from "./images/injection.png";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  { imageUrl: Deparment, text: "Department of Pediatrics" },
  { imageUrl: Bed, text: "22 Bed Room Hospital" },
  { imageUrl: Acroom, text: "Special AC Room" },
  { imageUrl: Oxygen, text: "Glass Box For Baby" },
  { imageUrl: Neautalmachine, text: "Neonatal Jaundice Machine" },
  {
    imageUrl: Blood,
    text: "A Machine For Measuring The Amount Of Oxygen In The Blood",
  },
  { imageUrl: Sugar, text: "A Blood Sugar Measuring Machine" },
  { imageUrl: Centraloxygen, text: "Central Oxygen Line" },
  { imageUrl: Influ, text: "Treatment Of Infusion Pumps" },
  { imageUrl: Streaming, text: "Steaming Machine For Baby" },
  { imageUrl: Injection, text: "Immunization Center" },
  { imageUrl: Manchineinjection, text: "Injection Machine" },
  { imageUrl: Lab, text: "Laboratory Facilities" },
  { imageUrl: Company, text: "A Hospital Approved By Each Insurance Company" },
];

const FacilityListPage = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="w-full px-4 md:px-0">
        <div className="text-center mb-8">
          <h3
            className="text-[#023F88] text-3xl md:text-4xl font-semibold border-b-2 border-orange-500 inline-block"
            data-aos="fade-up"
          >
            We provide facilities like…
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-2 md:mx-36">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#023F88] text-white rounded-lg p-2 shadow-md flex flex-col items-center"
              data-aos="fade-up"
            >
              <img
                src={card.imageUrl}
                alt={`Facility ${index}`}
                className="w-full h-48 object-cover mb-4 rounded hover:scale-90 duration-300"
              />
              <div className="text-center">
                <p className="text-lg">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilityListPage;
