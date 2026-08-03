import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessGrid({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        return (
          <p className="guess" key={row}>
            <span className="cell">{guesses[row] ? guesses[row][0] : ""}</span>
            <span className="cell">{guesses[row] ? guesses[row][1] : ""}</span>
            <span className="cell">{guesses[row] ? guesses[row][2] : ""}</span>
            <span className="cell">{guesses[row] ? guesses[row][3] : ""}</span>
            <span className="cell">{guesses[row] ? guesses[row][4] : ""}</span>
          </p>
        );
      })}
    </div>
  );
}

export default GuessGrid;
