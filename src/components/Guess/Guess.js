import React, { use, useState } from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers.js";
import { WORDS } from "../../data.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => {
          return (
            <Cell
              key={num}
              letter={result ? result[num].letter : undefined}
              status={result ? result[num].status : undefined}
            />
          );
        })}
      </p>
    </div>
  );
}

export default Guess;
