import React, { useEffect, useMemo, useState } from "react";

const complete = new URL("../assets/complete.mp3", import.meta.url).href;

const GameCompleteMessage = ({display}) => {
  // Manage the state of the opacity of the message
  // Initialize the state to be 0
  const [opacity, setOpacity] =useState(0);

  const completeSound = useMemo(() => new Audio(complete), []);

  useEffect(() => {
    if (display) {
      setTimeout(() => {
        completeSound.play();
        // Set the state of the opacity to be 1
       setOpacity(1);
      }, 100);
    }
  }, [display]);

  const style = { opacity };

  if (!display) return null;

  return (
    <div style={style} className="game-complete-message">
      <h2 className="title">Congratulations!</h2>
      <p className="description">You have completed the game.</p>
    </div>
  );
};

export default GameCompleteMessage;
