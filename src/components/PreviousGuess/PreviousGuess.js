import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";
import { checkGuess } from "../../game-helpers.js";

function PreviousGuess({ guesses, answer }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num_of_guess, index) => {
          return (
            <Guess key={index} guess={guesses[num_of_guess]} answer={answer} />
          );
        })}
      </div>
    </div>
  );
}

export default PreviousGuess;
