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
