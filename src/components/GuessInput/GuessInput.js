import React from 'react';

function GuessInput({addGuess, over}) {
  const [word, setWord] = React.useState('');
  
  function handleChange(e) {
    setWord(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    addGuess(word);
    setWord('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Z]{5,5}" value={word} onChange={handleChange} required={true} disabled={over} />
    </form>
  );
}

export default GuessInput;
