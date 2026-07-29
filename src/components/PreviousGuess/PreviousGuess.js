import React from "react";

function PreviousGuess({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {guesses.map((word) => {
          return (
            <p className="guess" key={crypto.randomUUID()}>
              {word}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default PreviousGuess;
