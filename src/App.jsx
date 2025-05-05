import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import generateRandomPokemonImages from "./helpers/generateRandomPokemonImages";
import GameStack from "./components/GameStack";
import GameBoard from "./components/GameBoard";
import GameCompleteMessage from "./components/GameCompleteMessage";

import "./App.css";

const App = () => {
  // Manage the state of the images on the board (boardImages) and the stack (stackImages)
  // Initialize the state of both to be undefined
  const [boardImages, setBoardImages] = useState();
  const [stackImages, setStackImages] = useState([]);

  // Create a function to remove the top image from the stack
  // Use the second implementation of the state setter function
  const removeTheTopImageFromTheStack = () =>
    setStackImages((prevStackImages) => prevStackImages?.slice(1));

  useEffect(() => {
    if (!boardImages) {
      generateRandomPokemonImages(10, (images) => {
        const nonEmptyImages = images.filter((image) => image);

        // Set the board images to be the non-empty images
        setBoardImages(nonEmptyImages);

        const shuffledImages = [...nonEmptyImages].sort(
          () => Math.random() - 0.5
        );

        // Set the stack images to be the shuffled images
        setStackImages(shuffledImages);
      });
    }
  }, [boardImages]);

  if (!boardImages) {
    return (
      <div className="app-container">
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      {/* Include the GameStack component */}
      {/* Pass the topImage of the stack as prop */}
      <GameStack topImage={stackImages?.[0]} />

      {/* Include the GameBoard component */}
      {/* Pass the boardImages as prop */}
      {/* Pass the function to remove the top image from the stack as prop */}
      <GameBoard
        boardImages={boardImages}
        removeTheTopImageFromTheStack={removeTheTopImageFromTheStack}
      />

      {/* Include the GameCompleteMessage component */}
      {/* Pass the display prop */}
      {/* The prop value for display must be a boolean which is true if stackImages length is 0 */}
      <GameCompleteMessage display={stackImages?.length === 0} />
    </div>
  );
};

export default App;
