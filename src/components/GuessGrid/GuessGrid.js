import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
function GuessGrid({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
          return (
            <p className="guess">
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
              <span className="cell"></span>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default GuessGrid;
