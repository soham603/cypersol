import React from 'react';
import "../styles/homepage.css";

const ScrollingLogos = ({ logos }) => {
  return (
    <div className="scrolling-logos-container">
      <p className="scr-logo-title">Group Brands</p>
      <div className="logos-wrapper">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo" />
        ))}
      </div>
    </div>
  );
};

export default ScrollingLogos;
