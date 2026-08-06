import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessGrid({ guess }) {
  return (
    <div className="guess-results">
      <p className="guess">
        <span className="cell">{guess}</span>
      </p>
    </div>
  );
}

export default GuessGrid;
