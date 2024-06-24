import React, { useState, useEffect } from "react";
import Navbar from "./Navigation/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Navigation/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Service from "./Service/Service";
import Facility from "./Facility/Facility";
import Gallery from "./Gallery/Gallery";
import ContactUs from "./ContactUs/ContactUs";
import { Helmet } from "react-helmet";

function Main() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  console.log(language);

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <div>
      <Helmet>
        <title>Gajera Children Hospital</title>
        <meta
          name="description"
          content="Gajera Children Hospital provides top-notch pediatric care with a dedicated team of experienced doctors."
        />
        <link
          rel="canonical"
          href="https://gajera-children-hospital1.vercel.app"
        />
        <meta
          name="keywords"
          content="Gajera Children Hospital, pediatric care, children hospital, neonatology, pediatric services, child healthcare, emergency pediatric care"
        />
        <meta name="author" content="Gajera Children Hospital" />
        <meta property="og:title" content="Gajera Children Hospital" />
        <meta
          property="og:description"
          content="Providing exceptional pediatric care with a focus on your child's health and well-being."
        />
        <meta
          property="og:url"
          content="https://gajera-children-hospital1.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="URL_to_your_og_image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gajera Children Hospital" />
        <meta
          name="twitter:description"
          content="Exceptional pediatric care with a dedicated team of experienced doctors."
        />
        <meta name="twitter:image" content="URL_to_your_twitter_image.jpg" />
      </Helmet>
      <BrowserRouter>
        <div>
          <Navbar
            handleChangeLanguage={handleChangeLanguage}
            language={language}
          />
          <Routes>
            <Route path="" element={<Home language={language} />} />
            <Route path="about" element={<About language={language} />} />
            <Route path="service" element={<Service language={language} />} />
            <Route path="facility" element={<Facility language={language} />} />
            <Route path="gallery" element={<Gallery language={language} />} />
            <Route path="contact" element={<ContactUs language={language} />} />
          </Routes>
          <div className="w-full h-full">
            <Outlet />
          </div>
          <Footer language={language} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Main;
