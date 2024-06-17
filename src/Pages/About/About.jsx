import React from "react";
import Background from "./Background";
import Welcome from "../Common/Welcom";
import { FaHospital } from "react-icons/fa6";
import { BiSolidInjection } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  return (
    <>
      <div className="flex flex-col space-y-4 mx-6 md:mx-44 md:flex-row md:space-y-0 md:space-x-14 items-center justify-center p-4">
        {/* Card 1 */}
        <div className="bg-[#023f88] md:basis-1/3 basis-full h-44 text-white p-4 rounded-lg flex items-center space-x-4 max-w-sm md:w-1/2 md:max-w-none  ">
          <FaHospital className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="font-bold text-start text-lg md:text-xl border-b-2 border-orange-500 pb-2">
              Immediate treatment
            </span>
            <h1 className="text-white mt-3 text-lg md:text-xl">
              Your only 24-hour children's hospital
            </h1>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#023f88] basis-full w-full md:basis-1/3 h-44 text-white p-4 rounded-lg flex items-center space-x-4 max-w-sm md:w-1/2 md:max-w-none">
          <div className="basis-1/4">
            <BiSolidInjection className="h-10 w-10" />
          </div>
          <div className="basis-3/4 flex flex-col">
            <span className="font-bold text-start text-lg md:text-xl border-b-2 border-orange-500 pb-2">
              Visiting Time
            </span>
            <h1 className="text-white mt-3 text-lg md:text-xl">
              Monday To saturday
              <div>:- 10 am to 1 pm</div>
              <div>:- 5 am to 8 pm</div>
            </h1>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#023f88] basis-full w-full md:basis-1/3 h-44 text-white p-4 rounded-lg flex items-center space-x-4 max-w-sm md:w-1/2 md:max-w-none">
          <div className="basis-1/4">
            <BiSolidInjection className="h-10 w-10" />
          </div>
          <div className="basis-3/4 flex flex-col">
            <span className="font-bold text-start text-lg md:text-xl border-b-2 border-orange-500 pb-2">
              Visiting Time
            </span>
            <h1 className="text-white mt-3 text-lg md:text-xl">
              Sunday
              <div>:- 10 am to 1 pm</div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

const WhoAreWe = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <>
      <div className="text-center">
        <h1
          className="text-[#023F88] text-[200%] md:text-[250%] font-bold border-b-2 border-orange-500 inline-block  md:mx-[42%] my-8"
          data-aos="fade-up"
        >
          Who are we ?
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
              backgroundImage: `url(https://www.gajerachildrenhospital.in/images/concentration-focus-business-goal-target-business-goal-solution-concept-target-hit-center-business-success-vector-illutration-flat-style_1150-58758.jpg)`,
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
                <h3 className="text-[20px] hover:text-[#023F88] font-semibold border-b-2 border-orange-500 inline-block mb-4">
                  Our Vision
                </h3>
              </div>
              <p className="text-[15px] text-center">
                Giving Medical Treatment To Sick Children And Making Them Free
                From Illness And Spreading Happiness In The Family.
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
              backgroundImage: `url(https://www.gajerachildrenhospital.in/images/business-people-working-setting-company-target_1262-20616.jpg)`,
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
                <h3 className="text-[20px] hover:text-[#023F88] font-semibold border-b-2 border-orange-500 inline-block mb-4">
                  Our Goal
                </h3>
              </div>
              <p className="text-[15px] text-center">
                Our Desire Is To Build A Healthy Society And A Healthy Nation By
                Making Sick And Weak Children Healthy And Strong.
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
              backgroundImage: `url(https://www.gajerachildrenhospital.in/images/paper-style-core-values-background_23-2149079276.jpg)`,
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
                <h3 className="text-[20px] hover:text-[#023F88] font-semibold border-b-2 border-orange-500 inline-block mb-4">
                  Our Core Value
                </h3>
              </div>
              <p className="text-[100%] text-center">
                To Provide Good Treatment At Minimum Cost.
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
          Meet our doctor
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mx-10 md:mx-[10%] mb-20">
        <div className="basis-full md:basis-1/3" data-aos="fade-up">
          <img
            className="w-full h-64 md:w-[27rem] md:h-[30rem] object-cover"
            src="https://www.gajerachildrenhospital.in/images/doctor-image.png.jpeg"
            alt="Dean Doctor"
          />
          <h1 className="text-center mt-2 text-lg md:text-xl text-[#023F88] font-bold">
            Dr. Vasantbhai Gajera ( M.B.D.C.H.)
          </h1>
        </div>
        <div
          className="basis-full md:basis-2/3 mt-4 md:mt-0 md:ml-2 text-sm md:text-base font-light"
          data-aos="fade-up"
        >
          In 1988 received his degree in Pediatrics from Surat City.
        </div>
      </div>
    </>
  );
};

function About() {
  return (
    <div>
      <>
        <Background />
      </>
      <>
        <Welcome />
      </>
      <>
        <Card />
      </>
      <>
        <WhoAreWe />
      </>
    </div>
  );
}

export default About;
