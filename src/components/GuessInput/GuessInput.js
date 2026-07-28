import React from "react";
import React, { useState } from "react";

function GuessInput() {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(word);
    setWord("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={word}
          pattern="[A-Za-z]{5}"
          onChange={(event) => setWord(event.target.value.toUpperCase())}
        />
        <span>{word.toUpperCase()}</span>
      </form>
    </div>
  );
}

export default GuessInput;
