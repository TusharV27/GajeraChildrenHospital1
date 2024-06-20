import React, { useState, useEffect } from "react";
import img1 from "./image.png";
import img2 from "./ipd.jpg";
import Welcome from "../Common/Welcom";
import Slider from "react-slick";
import { IoMdStar } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "./Image1.jpg";
import image2 from "./Image2.jpg";
import image3 from "./Image3.jpg";
import image4 from "./Image4.jpg";
import image5 from "./Image5.jpg";
import image6 from "./blog.jpg";
import { getTranslations } from "../../translations/data";
let cards = [];
let mainText = "";

const MainImage = () => {
  const [currentImage, setCurrentImage] = useState(img1);

  useEffect(() => {
    const images = [img1, img2];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[currentIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <header className="w-full pt-20 pb-8 md:py-24 h-auto bg-white px-4 md:px-20">
        <img src={currentImage} alt="" className="w-full h-auto" />
      </header>
    </div>
  );
};

const Card = ({ title, description }) => (
  <div
    className="flex flex-col justify-between bg-[#023F88] dark:bg-[#023F88] text-white rounded-lg p-6 shadow-lg w-full h-[20rem] md:h-[15rem]"
    data-aos="fade-up"
  >
    <div className="text-center">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
    </div>
    <div className="text-center text-sm">
      <p className="mb-4">{description}</p>
    </div>
    <div className="flex justify-center ">
      <IoMdStar className="text-yellow-500 text-[30px]" />
      <IoMdStar className="text-yellow-500 text-[30px]" />
      <IoMdStar className="text-yellow-500 text-[30px]" />
      <IoMdStar className="text-yellow-500 text-[30px]" />
      <IoMdStar className="text-yellow-500 text-[30px]" />
    </div>
  </div>
);

const CardSwiper = ({ review }) => {
  // const [cards, setCards] = useState(review);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  console.log(review);

  return (
    <div className="mx-10 md:mx-20 my-20">
      <div className="text-center">
        <h3
          className="text-[#023F88] text-2xl md:text-3xl font-bold pb-2 md:pb-4 border-b-2 border-orange-500 inline-block mb-12 md:mb-12"
          data-aos="fade-up"
        >
          {mainText}
        </h3>
      </div>

      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2" data-aos="fade-up">
            <Card title={card.name} description={card.p} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Blog = ({ text }) => {
  AOS.init({
    duration: 2000,
  });
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <div className="max-w-screen-lg mx-auto mt-8">
      <h1
        className="text-2xl md:text-3xl font-bold text-center text-[#023f88] mb-10"
        data-aos="fade-up"
      >
        <span className="border-b-2 border-orange-500 pb-2">{text}</span>
      </h1>
      <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
            data-aos="fade-up"
          >
            <img
              src={image}
              alt={`Blog ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

function Home({ language }) {
  AOS.init({
    duration: 2000,
  });

  console.log(language);
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
  cards = data.home.review;
  mainText = data.home.mp;
  return (
    <div>
      <>
        <MainImage />
      </>
      <>
        <Welcome language={language} />
      </>
      <div
        className="w-full flex items-center justify-center"
        data-aos="fade-up"
      >
        <button
          onClick={() => (window.location.href = "/about")}
          className="bg-[#023f88] text-white py-2 px-6 rounded hover:bg-blue-800"
        >
          {data.home.button}
        </button>
      </div>
      <>
        <CardSwiper review={data.home.review} />
      </>
      <>
        <Blog text={data.home.blog} />
      </>
    </div>
  );
}

export default Home;
