import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import "../Styles/media-slider.css";

const Cards = ({ isLarge, media }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
  };

  return (
    <div className={`card ${isLarge ? "card-large" : ""}`}>
      {showVideo ? (
        <VideoPlayer videoId={media.videoId} onClose={handleClose} />
      ) : (
        <div>
          <img
            className="card-image"
            src={`https://img.youtube.com/vi/${media.videoId}/hqdefault.jpg`}
            alt={media.title}
            onClick={handlePlay}
          />
          <h4 className="card-title">{media.title}</h4>
        </div>
      )}
    </div>
  );
};

export default Cards;
