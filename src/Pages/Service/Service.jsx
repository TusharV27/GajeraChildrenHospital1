import { FaCircleQuestion, FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
// import BackgroundSection from "./BackgroundSection";
import GirlCoughing from "./Images/vector-kid-puking_75487-1339.jpg";

const cardData = [
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
  {
    imageUrl: GirlCoughing,
    description: ["Vomit?", " Watery diarrhea?", "Does the diarrhea smell?"],
    reason: "So they can get gastro",
    isLeft: true,
  },
];

const Card = () => {
  return (
    <div
      className="flex flex-col lg:flex-row lg:mx-auto lg:px-[5%] py-8"
      data-aos="fade-up"
    >
      <div className="lg:w-1/4 lg:mr-4 mb-4 lg:mb-0 flex justify-center">
        <img
          src={GirlCoughing}
          alt="girl coughing"
          className="w-auto h-[200px] md:w-auto md:h-[250px]"
        />
      </div>
      <div className="lg:w-3/4" data-aos="fade-up">
        <h1 className="text-xl lg:text-2xl font-bold text-[#023F88] mb-4">
          What about your child?
        </h1>
        <p className="my-4 flex items-center">
          <FaCircleQuestion className="mr-1 text-[#023F88] text-xl" />
          Vomit?
        </p>
        <p className="my-4 flex items-center">
          <FaCircleQuestion className="mr-1 text-[#023F88] text-xl" />
          Watery diarrhea?
        </p>
        <p className="my-4 flex items-center">
          <FaCircleQuestion className="mr-1 text-[#023F88] text-xl" />
          Does the diarrhea smell?
        </p>
        <div className="my-6 bg-[#023F88] text-white py-2 text-lg flex items-center">
          <FaArrowRight className="mx-2 text-bold" />
          So they can get gastro
        </div>
      </div>
    </div>
  );
};

function Service() {
  AOS.init({
    duration: 2000,
  });

  return (
    <>
      {/* <BackgroundSection /> */}
      <div className="mx-auto px-4">
        <h1
          className="text-[#023F88] text-[25px] md:text-2xl font-bold border-b-2 border-orange-500 inline-block mx-auto mt-16 lg:mx-[35%] lg:mt-24 "
          data-aos="fade-up"
        >
          We treat diseases such as...
        </h1>
        <Card />
      </div>
    </>
  );
}

export default Service;
