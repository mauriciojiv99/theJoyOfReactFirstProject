import React from "react";

function PreviousGuess({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {guesses.map((word, index) => {
          return <p className="guess">{word}</p>;
        })}
      </div>
    </div>
  );
}

export default PreviousGuess;
