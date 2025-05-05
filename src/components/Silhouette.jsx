import React, { useMemo, useState } from "react";

const success = new URL("../assets/success.mp3", import.meta.url).href;
const wrong = new URL("../assets/wrong.mp3", import.meta.url).href;

const Silhouette = ({ imageUrl, removeTopImageFromStack }) => {
  // Manage the state of the image being matched (isMatched) and the image being dragged over (isDragOver)
  // Initialize the state of both to be false
  const [isMatched, setIsMatched] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const successSound = useMemo(() => new Audio(success), []);
  const failureSound = useMemo(() => new Audio(wrong), []);

  const handleDragEnter = (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Set the state of the image being dragged over to be true
    setIsDragOver(true);
  };

  const handleDragOver = (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();
  };

  const handleDragLeave = (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Set the state of the image being dragged over to be false
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();

    if (event.dataTransfer.getData("text/plain") === imageUrl) {
      successSound.play();

      // Set the state of the image being matched to be true
      setIsMatched(true);
      // Call the function to remove the top image from the stack
      removeTopImageFromStack();
    } else {
      failureSound.play();
    }

    // Set the state of the image being dragged over to be false
    setIsDragOver(false);
  };

  const className = `
    pokemon-silhouette
    ${isDragOver ? "drag-over" : ""}
    ${isMatched ? "is-matched" : ""}
  `;

  return (
    <div
      className={className}
      style={{ backgroundImage: `url("${imageUrl}")` }}
      // Add the necessary event listeners to the div element
      // Assign to them the necessary event handler functions
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    />
  );
};

export default Silhouette;
