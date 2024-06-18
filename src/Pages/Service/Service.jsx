import { FaCircleQuestion, FaArrowRight } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
// import BackgroundSection from "./BackgroundSection";
import { getTranslations } from "../../translations/data";
import { useState, useEffect } from "react";
import Image1 from "./medical-expert-uses-stethoscope-diagnosis-research-generated-by-ai_188544-20400.jpg";
import img1 from "./Images/vector-kid-puking_75487-1339.jpg";
import img2 from "./Images/cartoon-character-with-jaundice-symptoms_1308-47370.jpg";
import img3 from "./Images/cute-little-boy-need-pee-holding-urinary-bladder-want-go-toilet_535862-317.jpg";
import img4 from "./Images/cute-little-girl-applying-insect-repellent-spray-her-arm-as-protection-against-mosquitoes_535862-1109.jpg";
import img5 from "./Images/little-boy-mosquito_73842-215.jpg";
import img6 from "./Images/lungs-human-icon-vector_1308-115232.jpg";
import img7 from "./Images/sick-boy-coughing_642458-760.jpg";
import img8 from "./Images/unhappy-child-with-painful-skin-sunburn-red-inflamed-causing-discomfort-distress-needing-treatment_1016-15923.jpg";
import img9 from "./Images/woman_753212-1285.jpg";
import img10 from "./Images/image.jpg";
import img11 from "./Images/image2.jpeg";

const Background = ({ text }) => {
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${Image1})` }}
    >
      <div className="overlay1">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

const Card = ({ imageUrl, description, reason, isLeft, mainText }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:mx-auto lg:px-[5%] py-8 ${
        isLeft ? "lg:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
    >
      <div className="flex justify-center mb-4 lg:mb-0 lg:w-1/4 lg:mr-4">
        <img
          src={imageUrl}
          alt="girl coughing"
          className="w-auto h-[200px] md:h-[250px]"
        />
      </div>
      <div className="lg:w-3/4" data-aos="fade-up">
        <h1 className="text-xl lg:text-2xl font-bold text-[#023F88] mb-4">
          {mainText}
        </h1>
        {description.map((desc, index) => (
          <p key={index} className="my-4 flex items-center">
            <FaCircleQuestion className="mr-1 text-[#023F88] text-xl" />
            {desc}
          </p>
        ))}
        <div className="my-6 bg-[#023F88] text-white py-2 text-lg flex items-center">
          <FaArrowRight className="mx-2 text-bold" />
          {reason}
        </div>
      </div>
    </div>
  );
};

function Service({ language }) {
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
  console.log(data);
  AOS.init({
    duration: 2000,
  });

  const cardData = [
    {
      imageUrl: img1,
      description: [
        data.service.cards.card1.p1,
        data.service.cards.card1.p2,
        data.service.cards.card1.p3,
      ],
      reason: data.service.cards.card1.ans,
      isLeft: false,
    },
    {
      imageUrl: img2,
      description: [
        data.service.cards.card3.p1,
        data.service.cards.card3.p2,
        data.service.cards.card3.p3,
        data.service.cards.card3.p4,
      ],
      reason: data.service.cards.card3.ans,
      isLeft: true,
    },
    {
      imageUrl: img3,
      description: [
        data.service.cards.card4.p1,
        data.service.cards.card4.p2,
        data.service.cards.card4.p3,
        data.service.cards.card4.p4,
      ],
      reason: data.service.cards.card4.ans,
      isLeft: false,
    },
    {
      imageUrl: img4,
      description: [
        data.service.cards.card5.p1,
        data.service.cards.card5.p2,
        data.service.cards.card5.p3,
        data.service.cards.card5.p4,
      ],
      reason: data.service.cards.card5.ans,
      isLeft: true,
    },
    {
      imageUrl: img5,
      description: [
        data.service.cards.card6.p1,
        data.service.cards.card6.p2,
        data.service.cards.card6.p3,
        data.service.cards.card6.p4,
      ],
      reason: data.service.cards.card6.ans,
      isLeft: false,
    },
    {
      imageUrl: img6,
      description: [
        data.service.cards.card7.p1,
        data.service.cards.card7.p2,
        data.service.cards.card7.p3,
        data.service.cards.card7.p4,
        data.service.cards.card7.p5,
        data.service.cards.card7.p6,
      ],
      reason: data.service.cards.card7.ans,
      isLeft: true,
    },
    {
      imageUrl: img7,
      description: [
        data.service.cards.card8.p1,
        data.service.cards.card8.p2,
        data.service.cards.card8.p3,
        data.service.cards.card8.p4,
      ],
      reason: data.service.cards.card8.ans,
      isLeft: false,
    },
    {
      imageUrl: img8,
      description: [
        data.service.cards.card9.p1,
        data.service.cards.card9.p2,
        data.service.cards.card9.p3,
        data.service.cards.card9.p4,
        data.service.cards.card9.p5,
      ],
      reason: data.service.cards.card9.ans,
      isLeft: true,
    },
    {
      imageUrl: img9,
      description: [
        data.service.cards.card10.p1,
        data.service.cards.card10.p2,
        data.service.cards.card10.p3,
        data.service.cards.card10.p4,
      ],
      reason: data.service.cards.card10.ans,
      isLeft: false,
    },
    {
      imageUrl: img10,
      description: [
        data.service.cards.card11.p1,
        data.service.cards.card11.p2,
        data.service.cards.card11.p3,
      ],
      reason: data.service.cards.card11.ans,
      isLeft: true,
    },
    {
      imageUrl: img11,
      description: [
        data.service.cards.card2.p1,
        data.service.cards.card2.p2,
        data.service.cards.card2.p3,
        data.service.cards.card2.p4,
        data.service.cards.card2.p5,
        data.service.cards.card2.p6,
      ],
      reason: data.service.cards.card2.ans,
      isLeft: false,
    },
  ];
  return (
    <>
      {/* <BackgroundSection /> */}
      <Background text={data.service.name} />
      <div className="mx-4 md:mx-20 px-4">
        <div className="text-center">
          <h1
            className="text-[#023F88] text-[25px] md:text-2xl font-bold border-b-2 border-orange-500 inline-block mx-auto mt-16 lg:mx-[35%] lg:mt-24 "
            data-aos="fade-up"
          >
            {/* We treat diseases such as... */}
            {data.service.h1}
          </h1>
        </div>
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            description={card.description}
            reason={card.reason}
            isLeft={card.isLeft}
            mainText={data.service.cards.card1.main}
          />
        ))}
      </div>
    </>
  );
}

export default Service;
