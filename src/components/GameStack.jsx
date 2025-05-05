import React, { useEffect, useState } from "react";

const GameStack = ({ topImage }) => {
  // Create a state variable to manage the loading state of the image
  // Initialize the state to be true
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const handleDragStart = (event) => {
    // Set the data to be the source of the image element
    // Use the event.dataTransfer.setData method
    // The data type should be set as "text/plain"
    // The image element can be accessed using event.target
    const imageSoruce = event.target.src;
    event.dataTransfer.setData("text/plain", imageSoruce);
  };

  useEffect(() => {
    if (topImage) {
      const image = new Image();
      image.src = topImage;

      image.onload = () => {
        setIsLoadingImage(false);
      };
    }
  }, [topImage]);

  if (isLoadingImage) {
    return (
      <div className="game-stack">
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="game-stack">
      {/* If topImage exists return an image element */}
      {/* The image element must be draggable */}
      {/* The image element must have the source set to topImage */}
      {/* The image element must have an onDragStart event listener */}
      {/* The onDragStart event listener must call the handleDragStart function */}
      {/* The image element must have the class "top-image" */}
      {/* (optional) The image element must have an alt attribute set to "Pokemon Silhouette" */}
      {topImage && (
        <img
          draggable
          src={topImage}
          onDragStart={handleDragStart}
          className="top-image"
          alt="Pokemon Silhouette"
        />
      )}
    </div>
  );
};

export default GameStack;
