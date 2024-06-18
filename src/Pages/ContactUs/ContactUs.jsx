import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelopeOpen } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import { getTranslations } from "../../translations/data";
// import Background from "./Background";
import "./Background.css";
import backgroundImage from "./WhatsApp Image 2024-06-18 at 3.57.02 PM.jpeg";

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

function ContactUs({ language }) {
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
  AOS.init({
    duration: 2000,
  });
  return (
    <>
      <>
        <Background text={data.contact.name} />
      </>
      <div className="text-center" data-aos="fade-up">
        <h1 className="text-[#023F88] p-2 text-3xl md:text-4xl font-semibold border-b-2 border-orange-500 inline-block mb-4 mt-10 md:my-44">
          {/* Stay in touch with us */}
          {data.contact.h1}
        </h1>
        <p className="text-2xl text-black">
          {/* If you have any questions, feel free to contact us */}
          {data.contact.h2}
        </p>
      </div>
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mx-4 md:mx-36 p-4">
        <div
          class="basis-full md:basis-1/3 flex items-center bg-white shadow-xl rounded-lg p-4"
          data-aos="zoom-in"
        >
          <div class="bg-[#023F88] text-white text-3xl p-3 rounded-md">
            <FaPhone />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-zinc-900 opacity-95">
              {/* Call To Make An Appointment */}
              {data.contact.cards.card1.name}
            </h3>
            <p class="text-[rgb(13,110,253)] text-lg">
              <a href="tel:(0261) 2550251">
                {data.contact.cards.card1.phone.phone1}
              </a>
              <br />
              <a href="tel:(0261) 2550251">
                {data.contact.cards.card1.phone.phone2}
              </a>
            </p>
            <p class="text-[rgb(13,110,253)] text-lg">
              <a href="tel:9824310103">{data.contact.cards.card1.mobile}</a>
            </p>
          </div>
        </div>
        <div
          class="basis-full md:basis-1/3 flex items-center bg-white shadow-xl rounded-lg p-4"
          data-aos="zoom-in"
        >
          <div class="bg-[#023F88] text-white text-3xl p-3 rounded-md">
            <FaLocationDot />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-zinc-900 opacity-95">
              {/* Visit Our Hospital */}
              {data.contact.cards.card2.name}
            </h3>
            <p class="text-[rgb(13,110,253)] text-md">
              {/* 14, Ishwar Palace, Varachha Main Road, Near Soham Nagar, Opposite
              Sargam Doctor House, Hirabagh, Surat, Gujarat 395006 */}
              {data.contact.cards.card2.address}
            </p>
          </div>
        </div>
        <div
          class="basis-full md:basis-1/3 flex items-center bg-white  shadow-xl rounded-lg p-4"
          data-aos="zoom-in"
        >
          <div class="bg-[#023F88] text-white text-3xl p-3 rounded-md">
            <FaEnvelopeOpen />
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-zinc-900 opacity-95">
              {/* Email To Get Enquiry */}
              {data.contact.cards.card3.name}
            </h3>
            <p class="text-[rgb(13,110,253)] text-md">
              <a href="mailto:vasant_gajera@yahoo.com">
                {data.contact.cards.card3.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-16 mx-4 md:mx-36" data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4536370883507!2d72.85827607431155!3d21.21385268139741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f468ad3bfaf%3A0x3fecdcb920f8cc52!2sGajera%20Children%20Hospital!5e0!3m2!1sen!2sin!4v1706107184868!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}

export default ContactUs;
