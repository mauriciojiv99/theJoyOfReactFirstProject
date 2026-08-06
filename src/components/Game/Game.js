import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";
import React, { useState } from "react";
import GuessGrid from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  return (
    <>
      <PreviousGuess guesses={guesses} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guesses={guesses}
        setGuesses={setGuesses}
      />
    </>
  );
}

export default Game;
