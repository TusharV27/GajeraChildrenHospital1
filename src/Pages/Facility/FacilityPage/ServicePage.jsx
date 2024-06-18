import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicePage = ({ text }) => {
  AOS.init({
    duration: 2000,
  });
  return (
    <div className="w-full flex flex-col justify-center px-[10%] mt-[50px]">
      <div className="items-center mb-[20px]">
        <div className="text-center">
          <h3
            className="text-[#023F88] text-2xl md:text-4xl font-semibold border-b-2 border-orange-500 inline-block mb-4"
            data-aos="fade-up"
          >
            {/* Service Activities Of The Hospital */}
            {text.h1}
          </h3>
        </div>
        <div className="flex justify-start w-full">
          <div className="text-left text-black font-[Roboto, sans-serif] w-full text-lg opacity-90 space-y-4">
            <p data-aos="fade-up">{text.point.p1}</p>
            <p data-aos="fade-up">{text.point.p2}</p>
            <p data-aos="fade-up">{text.point.p3}</p>
            <p data-aos="fade-up">{text.point.p4}</p>
            <p data-aos="fade-up">{text.point.p5}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
