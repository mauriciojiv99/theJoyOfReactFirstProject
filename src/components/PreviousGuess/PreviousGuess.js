import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../GuessGrid/Guess";

function PreviousGuess({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {NUM_OF_GUESSES_ALLOWED.map((num_of_guess, index) => {
          return <Guess key={num_of_guess} guess={guesses[num_of_guess]} />;
        })}
      </div>
    </div>
  );
}

export default PreviousGuess;
