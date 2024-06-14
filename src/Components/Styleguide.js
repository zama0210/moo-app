import React, { useEffect, useRef, useState } from "react";
import "../Styles/styleguide.css";

const Styleguide = () => {
  const styleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!isVisible && styleRef.current) {
        const topPos = styleRef.current.getBoundingClientRect().top;
        const scrollPos = window.innerHeight / 1.3; // Adjust this ratio as needed
        if (topPos < scrollPos) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [isVisible]);

  return (
    <div
      ref={styleRef}
      className={`essay-container ${isVisible ? "essay-show" : ""}`}
    >
      <h1 className="essay-title">Styleguide</h1>
      <div className="essay-content">
        <h2 className="sub-heading">General Styling</h2>
        <p>
          The application is dark-themed, following UI elements that are similar
          to Netflix's. The academic elements are in their own seperate pages so
          that the overall theme is not compromised. I have decided to use
          #13151E, #43598E, #82559B, #F5F5FA.
        </p>
      </div>
    </div>
  );
};

export default Styleguide;
