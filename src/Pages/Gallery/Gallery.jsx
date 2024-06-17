import React, { useEffect } from "react";
import {
  FaChevronRight,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
// import BackgroundSection from "./BackgroundSection";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const images = [
    "IMG_4917",
    "IMG_4921",
    "IMG_4925",
    "IMG_4926",
    "IMG_4933",
    "IMG_4939",
    "IMG_4940",
    "IMG_4945",
    "IMG_4946",
    "IMG_4947",
    "IMG_4949",
    "IMG_4951",
    "IMG_4952",
    "IMG_4953",
    "IMG_4954",
    "IMG_4955",
    "IMG_4956",
    "IMG_4962",
    "IMG_4965",
    "IMG_4967",
    "IMG_4973",
  ];

  return (
    <>
      {/* <BackgroundSection /> */}
      <div className="text-center px-4 md:px-0">
        <h1
          className="text-2xl md:text-4xl font-bold text-[#023F88]"
          data-aos="fade-up"
        >
          Gallery
        </h1>
        <div
          className="w-20 md:w-36 h-[2px] bg-orange-500 mx-auto mt-2"
          data-aos="fade-up"
        ></div>
      </div>
      <div className="lg:mb-10 mx-[10%] px-4">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
          data-aos="fade-up"
        >
          {images.map((img, index) => (
            <div key={index} className="m-1" data-aos="fade-up">
              <img
                src={`https://www.gajerachildrenhospital.in/gallery/${img}.jpg`}
                alt={`Image ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-20 px-4 md:px-0" data-aos="fade-up">
        <h3 className="text-[#023F88] text-2xl md:text-3xl font-bold border-b-2 border-orange-500 inline-block mb-4">
          Review and Testimonial video
        </h3>
      </div>
      <div className="my-4 px-4 md:px-0" data-aos="fade-up">
        <video
          className="mx-auto w-full md:w-[1300px] h-auto md:h-auto"
          controls
        >
          <source
            src="https://www.gajerachildrenhospital.in/gallery/Gajera-Testimonial.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};
export default Gallery;
