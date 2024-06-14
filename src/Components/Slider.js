// src/components/Slider.js

import React, { useState, useRef } from "react";
import "../Styles/media-slider.css";
import { ReactComponent as LeftArrowIcon } from "../Assets/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../Assets/right-arrow.svg";
import TrailerModal from "./TrailerModal";

const Slider = ({ title, videos, isLarge }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const sliderRef = useRef(null);

  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-container">
      <h2 className="slider__title">{title}</h2>
      <div className="slider-wrapper">
        <button
          className="media-slider__arrow media-slider__arrow-left"
          onClick={scrollLeft}
        >
          <LeftArrowIcon />
        </button>
        <div className="slider" ref={sliderRef}>
          <div className="slider__cards">
            {videos.map((video) => (
              <div
                key={video.videoId}
                className={`slider__card ${
                  isLarge ? "slider__card--large" : ""
                }`}
                onClick={() => handleVideoClick(video.videoId)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/0.jpg`}
                  className="slider__card-image"
                  alt={video.title}
                />
                <h4 className="slider__card-title">{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
        <button
          className="media-slider__arrow media-slider__arrow-right"
          onClick={scrollRight}
        >
          <RightArrowIcon />
        </button>
      </div>
      {selectedVideo && (
        <TrailerModal videoId={selectedVideo} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Slider;
