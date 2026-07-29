import React from "react";

function GuessInput({ guess, setGuess, guesses, setGuesses }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuesses([...guesses, guess]);
    setGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          pattern="[A-Za-z]{5}"
          title="5 letter word"
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessInput;
