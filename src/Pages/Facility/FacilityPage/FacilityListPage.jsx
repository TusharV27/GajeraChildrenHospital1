import React from "react";
import Deparment from "./images/IMG_4956.jpg";
import Bed from "./images/WhatsApp Image 2024-06-18 at 3.54.56 PM (1).jpeg";
import Acroom from "./images/WhatsApp Image 2024-06-18 at 3.54.55 PM.jpeg";
import Blood from "./images/blood.png";
import Centraloxygen from "./images/centarloxygen.png";
import Lab from "./images/lab.png";
import Company from "./images/company.png";
import Manchineinjection from "./images/machineinjection.png";
import Tikakaran from "./images/WhatsApp Image 2024-06-18 at 3.55.11 PM.jpeg";
import Neautalmachine from "./images/neautalmachine.png";
import Sugar from "./images/sugar.png";
import Streaming from "./images/streaming.png";
import Influ from "./images/influ.png";
import Oxygen from "./images/oxygen.png";
import Injection from "./images/injection.png";
import Prayogshala from "./images/IMG_4962.jpg";
import BimaImage from "./images/health-Insurance.png";
import imgimg2 from "./images/image5.jpeg";
import imgimg3 from "./images/image6.jpeg";
import imgimg4 from "./images/imgimg10.jpeg";
import imgimg5 from "./images/imgimg11.jpeg";
import imgimg6 from "./images/imgimg12.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const FacilityListPage = ({ text }) => {
  AOS.init({
    duration: 2000,
  });
  const cardData = [
    { imageUrl: Deparment, text: text.image1.name },
    { imageUrl: Bed, text: text.image2.name },
    { imageUrl: Acroom, text: text.image3.name },
    { imageUrl: Oxygen, text: text.image4.name },
    { imageUrl: imgimg3, text: text.image5.name },
    {
      imageUrl: Sugar,
      text: text.image6.name,
    },
    { imageUrl: imgimg4, text: text.image7.name },
    { imageUrl: Tikakaran, text: text.image8.name },
    { imageUrl: Neautalmachine, text: text.image9.name },
    { imageUrl: Prayogshala, text: text.image10.name },
    { imageUrl: BimaImage, text: text.image11.name },
    { imageUrl: imgimg5, text: text.image12.name },
    { imageUrl: imgimg6, text: text.image13.name },
    {
      imageUrl: imgimg2,
      text: text.image14.name,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="w-full px-4 md:px-0">
        <div className="text-center mb-8">
          <h3
            className="text-[#023F88] text-3xl md:text-4xl font-semibold border-b-2 border-orange-500 inline-block"
            data-aos="fade-up"
          >
            {text.h1}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-2 md:mx-36">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-[#023F88] h-84 text-white rounded-lg p-2 shadow-md flex flex-col items-center"
              data-aos="fade-up"
            >
              <img
                src={card.imageUrl}
                alt={`Facility ${index}`}
                className="w-full h-60 object-cover mb-4 rounded hover:scale-90 duration-300"
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
