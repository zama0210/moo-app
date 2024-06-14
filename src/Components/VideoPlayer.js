import React from "react";

const VideoPlayer = ({ videoId, width = "100%", height = "100%" }) => {
  return (
    <iframe
      width={400}
      height={200}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default VideoPlayer;
