import React, { useState, useEffect } from "react";
import img1 from "./banner.jpg";
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
      <header className="w-full h-auto bg-white px-4 md:px-20">
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
    <div className="text-center text-lg">
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

const cards = [
  {
    id: 1,
    title: "Rakesh Ahir",
    description:
      "Best hospital in Surat. All the doctors and hospital staff are well trained. They take care and get regular follow ups of every patients. All Doctor is very humble.",
  },
  {
    id: 2,
    title: "Kavad Dhruti",
    description:
      "We immensely value your expression of appreciation for our healthcare services. It keeps us motivated to serve you first best always. Thank you",
  },
  {
    id: 3,
    title: "Rinku Nakum",
    description:
      "Very good experience at hospital... Polite staff... Well experienced doctors... Best treatment for newborns",
  },
  {
    id: 4,
    title: "Vishal Tarsariya",
    description:
      "Best children hospital in Surat. Also available ayushman bharat yojana. Good staff Humbley talking Appreciate for the doctors",
  },
  {
    id: 5,
    title: "Hiren Chauhan",
    description:
      "I have few points to give five starts for this hospital, Very good experience Doctor, Caring nursing staff. , Very clean hospital, Providing NICU for new born baby., It has operation theater.",
  },
];

const CardSwiper = () => {
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

  return (
    <div className="mx-10 md:mx-20 my-20">
      <div className="text-center">
        <h3
          className="text-[#023F88] text-2xl md:text-3xl font-bold pb-2 md:pb-4 border-b-2 border-orange-500 inline-block mb-12 md:mb-12"
          data-aos="fade-up"
        >
          What They Say About Us
        </h3>
      </div>

      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="px-2">
            <Card title={card.title} description={card.description} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Blog = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <div className="max-w-screen-lg mx-auto mt-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-10">
        <span className="border-b-2 border-orange-500 pb-2">Blogs</span>
      </h1>
      <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md"
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

function Home() {
  return (
    <div>
      <>
        <MainImage />
      </>
      <>
        <Welcome />
      </>
      <>
        <CardSwiper />
      </>
      <>
        <Blog />
      </>
    </div>
  );
}

export default Home;
