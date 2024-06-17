import React, { useState, useEffect } from "react";
import Navbar from "./Navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Navigation/Footer";

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
      <div>
        <Navbar
          handleChangeLanguage={handleChangeLanguage}
          language={language}
        />
        <div className="w-full h-full pt-20">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
