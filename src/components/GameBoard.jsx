import React from "react";
import Silhouette from "./Silhouette";

const GameBoard = ({ boardImages, removeTheTopImageFromTheStack }) => (
  <div className="game-board">
    {/* Include a Silhouette component for each image */}
    {/* Pass the image (image url) as prop */}
    {/* Pass the function to remove the top image from the stack as prop */}
    {boardImages?.map((image, index) => (
      <Silhouette
        key={index}
        imageUrl={image}
        removeTopImageFromStack={removeTheTopImageFromTheStack}
      />
    ))}
  </div>
);

export default GameBoard;
