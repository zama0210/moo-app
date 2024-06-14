import React, { useEffect, useRef, useState } from "react";
import wireframeImage from "../Assets/wireframe.png";
import "../Styles/wireframes.css";

const Wireframes = () => {
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
      <h1 className="essay-title">Wireframes</h1>
      <div className="essay-content">
        <p>
          These are the initial wireframes. I have taken inspiration from the
          structure of Netflix and Spotify. I hoped to translate the group's
          content well with a similar structure.
        </p>
        <h2 className="sub-heading">Home Page</h2>
        <p>
          I wanted the home page to start with introducing the members instead
          of having an about page given that application is not targeted at
          first-time listeners or new fans. The aim of the application is to
          have all of the groups content centred together so that you are able
          to listen to or watch their videos whilst being kept up to date on
          what each member is doing.
        </p>
        <p>
          With the help of the Youtube API I hope to display all of the music
          videos for the group. In terms of the other content, I was hoping to
          use either the Spotify API or the Apple Music APi to display and play
          their albums, EPs ,and singles.
        </p>
        <p>
          As part of the brief's requirements, I am supposed to have a section
          dedicated to theory. The wireframes, critical analysis essy,
          styleguide, internet art planning and internet art will be placed at
          the very bottom of the application so that they do not disruot the
          app's overall theme.
        </p>

        <h2 className="sub-heading">Video and Music Player</h2>
        <p>
          A video player will be embedded into the app so that the videos do not
          open on Youtube and a music player will be embedded into the app for
          the same reason.
        </p>
      </div>
      <div className="essay-images">
        <img
          className={isVisible ? "show" : ""}
          src={wireframeImage}
          alt="Wireframe"
        />
        <img
          className={isVisible ? "show" : ""}
          src="image2.jpg"
          alt="Updated wireframe"
        />
      </div>
    </div>
  );
};

export default Wireframes;
