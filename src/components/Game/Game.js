import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";
import React, { useState } from "react";
import GuessGrid from "../GuessGrid/GuessGrid";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  return (
    <>
      <GuessGrid guesses={guesses} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      <PreviousGuess guesses={guesses} />
    </>
  );
}

export default Game;
