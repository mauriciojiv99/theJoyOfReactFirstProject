import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";
import { WORDS } from "../../data.js";

function Guess({ guess, answer }) {
  const status = checkGuess(guess, answer);
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((letter, index) => {
          return (
            <span
              key={index}
              className={`cell ${
                guess && status && status[index]
                  ? status[index].status === "correct"
                    ? "correct"
                    : status[index].status === "incorrect"
                    ? "incorrect"
                    : status[index].status === "misplaced"
                    ? "misplaced"
                    : ""
                  : ""
              }`}
            >
              {guess ? guess[letter] : undefined}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
