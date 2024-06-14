import React, { useEffect, useRef, useState } from "react";

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
      <h1 className="essay-title">Critical Analysis Essay</h1>
      <div className="essay-content">
        <p>Para 1</p>
        <p>para 2</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <p>
          <a
            href="https://www.academia.edu/25652024/Role_of_Simplicity_in_Creative_Behaviour_The_Case_of_the_Poietic_Generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dessalles, J., Saillenfest, A., & Auber, O. (n.d.). Role of
            Simplicity in Creative Behaviour: The Case of the Poietic Generator.
            www.academia.edu.
          </a>
        </p>
      </div>
      <div className="essay-images">
        <img
          className={isVisible ? "show" : ""}
          src="image1.jpg"
          alt="Description 1"
        />
        <img
          className={isVisible ? "show" : ""}
          src="image2.jpg"
          alt="Description 2"
        />
        <img
          className={isVisible ? "show" : ""}
          src="image3.jpg"
          alt="Description 3"
        />
      </div>
    </div>
  );
};

export default Styleguide;
