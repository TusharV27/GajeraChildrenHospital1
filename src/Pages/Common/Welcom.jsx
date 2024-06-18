import React, { useState, useEffect } from "react";
import { getTranslations } from "../../translations/data";
import AOS from "aos";
import "aos/dist/aos.css";

function Welcome({ language }) {
  AOS.init({
    duration: 2000,
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(location);
  }, [location]);
  useEffect(() => {
    const fetchData = async () => {
      const translations = await getTranslations(language);
      setData(translations);
    };

    fetchData();
  }, [language]);
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="px-4 md:px-0 md:py-3 md:mt-5">
        <h1
          className="text-lg md:text-3xl font-bold text-center text-[#023f88] mb-10"
          data-aos="fade-up"
        >
          <span className="border-b-2 border-orange-500 pb-2">
            {/* Welcome To Gajera Children's Hospital. */}
            {data.home.part1.h1}
          </span>
        </h1>

        <div className="text-black text-start max-w-3xl mx-auto">
          <p className="mb-4" data-aos="fade-up">
            {/* Gajesh Children's Hospital is South Gujarat's premier children's
            hospital since 1990 located on Varacharod in Hirabagh area of Surat
            Gahar. */}
            {data.home.part1.point.p1}
          </p>
          {/* <p className="mb-4">
            This hospital has total 22 beds. It has AC special rooms and two
            general wards with modern facilities.
          </p> */}
          <p className="mb-4" data-aos="fade-up">
            {/* Along with this, there is no arrangement of a glass box for the new
            born child. Many insurance companies have cashless facility. */}
            {data.home.part1.point.p2}
          </p>
          <p className="mb-4" data-aos="fade-up">
            {/* All types of vaccines are given in this hospital. */}
            {data.home.part1.point.p3}
          </p>
          <p className="mb-6" data-aos="fade-up">
            {/* Our Gajerash Children's Hospital ensures the best treatment in a
            pediatric Pune environment. We strive to provide warm care and a
            conducive environment. Your child's health is our priority. */}
            {data.home.part1.point.p4}
          </p>
          <p className="mb-6" data-aos="fade-up">
            {/* Our Gajerash Children's Hospital ensures the best treatment in a
            pediatric Pune environment. We strive to provide warm care and a
            conducive environment. Your child's health is our priority. */}
            {data.home.part1.point.p5}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
