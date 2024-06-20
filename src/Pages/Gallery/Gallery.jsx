import React, { useEffect, useState } from "react";
import {
  FaChevronRight,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { getTranslations } from "../../translations/data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Background.css";
import backgroundImage from "./side-view-doctor-examining-child_23-2148231357.jpg";
import video1 from "./Gajera-Testimonial.mp4";
import video2 from "./GajeraChildrenHospital.mp4";
import IMG_4917 from "./Images/IMG_4917.jpg";
import IMG_4921 from "./Images/IMG_4921.jpg";
import IMG_4925 from "./Images/IMG_4925.jpg";
import IMG_4926 from "./Images/IMG_4926.jpg";
import IMG_4933 from "./Images/IMG_4933.jpg";
import IMG_4939 from "./Images/IMG_4939.jpg";
import IMG_4940 from "./Images/IMG_4940.jpg";
import IMG_4945 from "./Images/IMG_4945.jpg";
import IMG_4946 from "./Images/IMG_4946.jpg";
import IMG_4947 from "./Images/IMG_4947.jpg";
import IMG_4949 from "./Images/IMG_4949.jpg";
import IMG_4951 from "./Images/IMG_4951.jpg";
import IMG_4952 from "./Images/IMG_4952.jpg";
import IMG_4953 from "./Images/IMG_4953.jpg";
import IMG_4954 from "./Images/IMG_4954.jpg";
import IMG_4955 from "./Images/IMG_4955.jpg";
import IMG_4956 from "./Images/IMG_4956.jpg";
import IMG_4962 from "./Images/IMG_4962.jpg";
import IMG_4965 from "./Images/img20.jpeg";
import IMG_4967 from "./Images/img21.jpeg";
import IMG_4973 from "./Images/img22.jpeg";
import IMG_4974 from "./Images/img24.jpeg";

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

const Gallery = ({ language }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const images = [
    IMG_4917,
    IMG_4921,
    IMG_4925,
    IMG_4926,
    IMG_4933,
    IMG_4939,
    IMG_4940,
    IMG_4945,
    IMG_4946,
    IMG_4947,
    IMG_4949,
    IMG_4951,
    IMG_4952,
    IMG_4953,
    IMG_4954,
    IMG_4955,
    IMG_4956,
    IMG_4962,
    IMG_4965,
    IMG_4967,
    IMG_4973,
    IMG_4974,
  ];

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
    <>
      {/* <BackgroundSection /> */}
      <Background text={data.gallery.name} />
      <div className="text-center px-4 md:px-0">
        <h1
          className="text-2xl md:text-4xl mt-8 font-bold text-[#023F88]"
          data-aos="fade-up"
        >
          {data.gallery.name}
        </h1>
        <div
          className="w-20 md:w-36 h-[2px] bg-orange-500 mx-auto mt-2 mb-4"
          data-aos="fade-up"
        ></div>
      </div>
      <div className="lg:mb-10 mx-[10%] px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
          data-aos="fade-up"
        >
          {images.map((img, index) => {
            return (
              <div key={index} className="m-1" data-aos="fade-up">
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-72"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center mt-20 px-4 md:px-0" data-aos="fade-up">
        <h3 className="text-[#023F88] text-2xl md:text-3xl font-bold border-b-2 border-orange-500 inline-block mb-4">
          {data.gallery.h1}
        </h3>
      </div>
      <div className="my-4 px-4 md:px-0" data-aos="fade-up">
        <video
          className="mx-auto w-full md:w-[1300px] h-auto md:h-auto"
          controls
        >
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className="my-4 px-4 md:px-0" data-aos="fade-up">
        <video
          className="mx-auto w-full md:w-[1300px] h-auto md:h-auto"
          controls
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
export default Gallery;
