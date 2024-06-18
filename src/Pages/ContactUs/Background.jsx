import React from "react";
import "./Background.css";
import backgroundImage from "./image1.png";

const Background = () => {
  return (
    <div
      className="background-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay1">
        <h1>Contact Us</h1>
      </div>
    </div>
  );
};

export default Background;
