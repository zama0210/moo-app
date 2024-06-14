import React, { useEffect, useRef, useState } from "react";
import "../Styles/planning.css";

const Planning = () => {
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
      <h1 className="essay-title">Internet Art Planning</h1>
      <div className="essay-content">
        <p>
          For my internet art I had planned to simulate an environment from one
          of Mamamoo's music video and have it switch to something related to
          the group, not just their music videos. For the second scene, I intend
          to use the fan icon (Mamamoo fans are known affectionately as Moomoos)
          which is a turnip to provide more personality to the application as
          the group have different personalities compared to their professional
          selves.
        </p>
        <p>
          I will be using the set of Hip for the first scene of my internet art.
        </p>
        <h2 className="sub-heading">Tools used</h2>
        <p>
          I will be using Spline to implement my net art. I believe that taking
          the more 'traditional' route instead of trying something outside of
          what I have analysed, will leave the application particulary empty as
          it a personal value to strive for innovation.
        </p>
        <h2 className="sub-heading">References</h2>
        <p>
          <a
            href="https://spline.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spline
          </a>
        </p>
      </div>
    </div>
  );
};

export default Planning;
