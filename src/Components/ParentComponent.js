import React, { useState } from "react";
import Cards from "./Cards";
import TrailerModal from "./TrailerModal";

const ParentComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleThumbnailClick = (videoId) => {
    setSelectedVideoId(videoId);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedVideoId(null);
  };

  return (
    <div>
      {/* Render music videos with thumbnails */}
      <Cards
        isLarge={false}
        media={{
          title: "Example Music Video",
          videoId: "exampleVideoId",
          snippet: {
            thumbnails: {
              high: {
                url: "thumbnailImageUrl",
              },
            },
          },
        }}
        onClickThumbnail={handleThumbnailClick}
      />

      {/* Conditionally render the modal */}
      {showModal && (
        <TrailerModal videoId={selectedVideoId} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ParentComponent;
