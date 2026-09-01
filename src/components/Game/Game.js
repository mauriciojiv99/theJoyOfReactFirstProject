import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import PreviousGuess from "../PreviousGuess/PreviousGuess";
import Banner from "../Banner/Banner";

import React, { useState } from "react";
import Guess from "../Guess/Guess";
import BannerLost from "../BannerLost/BannerLost";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [game_status, setGame_status] = useState("running");
  return (
    <>
      <PreviousGuess guesses={guesses} answer={answer} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guesses={guesses}
        setGuesses={setGuesses}
      />
      {game_status === "won" ? (
        <Banner />
      ) : game_status === "lost" ? (
        <BannerLost answer={answer} />
      ) : (
        <p>Running</p>
      )}
    </>
  );
}

export default Game;
