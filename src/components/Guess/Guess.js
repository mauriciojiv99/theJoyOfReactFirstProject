import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((letter, index) => {
          return (
            <span key={index} className="cell">
              {guess ? guess[letter] : undefined}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
