import React, { useEffect, useState } from "react";
// import Background from "./Background";
import Welcome from "../Common/Welcom";
import { FaHospital } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import AOS from "aos";
import { getTranslations } from "../../translations/data";
import "aos/dist/aos.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/doctor.jpeg";
import "./Background.css";
import backgroundImage from "./image1.png";

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

const Card = ({ text }) => {
  AOS.init({
    duration: 2000,
  });
  console.log(text);
  return (
    <>
      <div className="flex flex-col space-y-4 mx-6 md:mx-44 md:flex-row md:space-y-0 md:space-x-14 items-center justify-center p-4">
        {/* Card 1 */}
        <div
          className="bg-[#023f88] basis-full w-full md:basis-1/3 h-44 text-white p-4 rounded-lg flex items-center space-x-4 max-w-sm md:w-1/2 md:max-w-none"
          data-aos="fade-up"
        >
          <div className="basis-1/4">
            <FaHospital className="h-14 w-14" />
          </div>

          <div className="basis-3/4 flex flex-col">
            <span className="font-bold text-start text-lg md:text-xl border-b-2 border-orange-500 pb-2">
              {/* Immediate treatment */}
              {text.card1.name}
            </span>
            <h1 className="text-white mt-3 text-sm md:text-lg">
              {/* Your only 24-hour children's hospital */}
              {text.card1.day}
              <br />
              {text.card1.time1}
              <br />
              {text.card1.time2}
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#023f88] basis-full w-full md:basis-1/3 h-44 text-white p-4 rounded-lg flex items-center space-x-4 max-w-sm md:w-1/2 md:max-w-none"
          data-aos="fade-up"
        >
          <div className="basis-1/4">
            <BiSolidInjection className="h-14 w-14" />
          </div>
          <div className="basis-3/4 flex flex-col">
            <span className="font-bold text-start text-lg md:text-xl border-b-2 border-orange-500 pb-2">
              {text.card1.name}
            </span>
            <h1 className="text-white mt-3 text-sm md:text-lg">
              {text.card1.time3.day}
              <div>{text.card1.time3.time}</div>
            </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#023f88] basis-full w-full md:basis-1/3 h-44 text-white p-4 rounded-lg flex items-center space-x-4 max-w-sm md:w-1/2 md:max-w-none"
          data-aos="fade-up"
        >
          <div className="basis-1/4">
            <MdAccessTimeFilled className="h-14 w-14" />
          </div>
          <div className="basis-3/4 flex flex-col">
            <span className="font-bold text-start text-lg md:text-lg border-b-2 border-orange-500 pb-2">
              {text.card2.title}
            </span>
            <h1 className="text-white mt-3 text-sm md:text-lg">
              {text.card2.name}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const WhoAreWe = ({ text, text2 }) => {
  AOS.init({
    duration: 2000,
  });
  return (
    <>
      <div className="text-center">
        <h1
          className="text-[#023F88] text-[150%] md:text-[180%] font-bold border-b-2 border-orange-500 inline-block  md:mx-[42%] my-8"
          data-aos="fade-up"
        >
          {/* Who are we ? */}
          {text.name}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mx-5 md:mx-[10%]">
        <div
          className="bg-white rounded-lg overflow-hidden m-0 md:m-[10px] w-full md:w-[30%]"
          data-aos="fade-up"
        >
          <div
            className="w-full h-[250px] bg-cover bg-center rounded-[10px] hover:opacity-80"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          ></div>
          <div className="p-5 relative bg-[#ffffffad] mt-[-75px] h-[220px] flex flex-col justify-start mx-12 rounded-xl shadow-2xl mb-12">
            <div
              className="text-white bg-[#023f88] hover:bg-white hover:text-[#023f88] hover:border-[#023f88] hover:border-4 hover:outline-none absolute top-[-3%] left-[50%] tran w-20 h-20 outline outline-[9px] outline-white rounded-[50%] text-[30px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="flex justify-center items-center w-full h-full">
                <FaEye />
              </div>
            </div>
            <div className="mt-5">
              <div className="text-center">
                <h3 className="text-[20px] hover:text-[#023F88] font-semibold border-b-2 border-orange-500 inline-block my-2">
                  {/* Our Vision */}
                  {text.card1.name}
                </h3>
              </div>
              <p className="text-[15px] text-center">
                {/* Giving Medical Treatment To Sick Children And Making Them Free
                From Illness And Spreading Happiness In The Family. */}
                {text.card1.dis}
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden m-0 md:m-[10px] w-full md:w-[30%]"
          data-aos="fade-up"
        >
          <div
            className="w-full h-[250px] bg-cover bg-center rounded-[10px] hover:opacity-80"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          ></div>
          <div className="p-5 relative bg-[#ffffffad] mt-[-75px] h-[220px] flex flex-col justify-start mx-12 rounded-xl shadow-2xl mb-12">
            <div
              className="text-white bg-[#023f88] hover:bg-white hover:text-[#023f88] hover:border-[#023f88] hover:border-4 hover:outline-none absolute top-[-3%] left-[50%] tran w-20 h-20 outline outline-[9px] outline-white rounded-[50%] text-[30px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="flex justify-center items-center w-full h-full">
                <FaBullseye />
              </div>
            </div>
            <div className="mt-5">
              <div className="text-center">
                <h3 className="text-[20px] hover:text-[#023F88] font-semibold border-b-2 border-orange-500 inline-block my-2">
                  {/* Our Goal */}
                  {text.card2.name}
                </h3>
              </div>
              <p className="text-[15px] text-center">
                {/* Our Desire Is To Build A Healthy Society And A Healthy Nation By
                Making Sick And Weak Children Healthy And Strong. */}
                {text.card2.dis}
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg overflow-hidden m-0 md:m-[10px] w-full md:w-[30%]"
          data-aos="fade-up"
        >
          <div
            className="w-full h-[250px] bg-cover bg-center rounded-[10px] hover:opacity-80"
            style={{
              backgroundImage: `url(${img3})`,
            }}
          ></div>
          <div className="p-5 relative bg-[#ffffffad] mt-[-75px] h-[220px] flex flex-col justify-start mx-12 rounded-xl shadow-2xl mb-12">
            <div
              className="text-white bg-[#023f88] hover:bg-white hover:text-[#023f88] hover:border-[#023f88] hover:border-4 hover:outline-none absolute top-[-3%] left-[50%] tran w-20 h-20 outline outline-[9px] outline-white rounded-[50%] text-[30px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <div className="flex justify-center items-center w-full h-full">
                <FaHandshake />
              </div>
            </div>
            <div className="mt-5">
              <div className="text-center">
                <h3 className="text-[20px] hover:text-[#023F88] font-semibold border-b-2 border-orange-500 inline-block my-2">
                  {/* Our Core Value */}
                  {text.card3.name}
                </h3>
              </div>
              <p className="text-[100%] text-center">
                {/* To Provide Good Treatment At Minimum Cost. */}
                {text.card3.dis}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1
          className="text-[#023F88] text-2xl md:text-3xl font-bold border-b-2 border-orange-500 inline-block  my-10"
          data-aos="fade-up"
        >
          {/* Meet our doctor */}
          {text2.name}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mx-10 md:mx-[10%] mb-20">
        <div className="basis-full md:basis-1/3" data-aos="fade-up">
          <img
            className="w-full h-64 md:w-[27rem] md:h-[30rem] object-cover"
            src={img4}
            alt="Dean Doctor"
          />
          <h1 className="text-center mt-2 text-lg md:text-xl text-[#023F88] font-bold">
            {/* Dr. Vasantbhai Gajera ( M.B.D.C.H.) */}
            {text2.doctor}
          </h1>
        </div>
        <div
          className="basis-full md:basis-2/3 mt-4 md:mt-0 md:ml-2 text-sm md:text-base font-light"
          data-aos="fade-up"
        >
          {text2.dis.map((val) => {
            return <p className="my-4">{val}</p>;
          })}
        </div>
      </div>
    </>
  );
};

function About({ language }) {
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
      <>
        <Background text={data.about.name} />
      </>
      <>
        <Welcome language={language} />
      </>
      <>
        <Card text={data.about.part2} />
      </>
      <>
        <WhoAreWe text={data.about.part3} text2={data.about.part4} />
      </>
    </div>
  );
}

export default About;
