import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput/GuessInput';
import Guesses from '../Guesses/Guesses';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [win, setWin] = React.useState(false);
  const [over, setOver] = React.useState(false);

  function addGuess(word) {
    const nextGuesses = [...guesses];
    nextGuesses.push(word);
    if (word === answer) {
      setWin(true);
      setOver(true);
    } else {
      if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
        setOver(true);
      }
    }
    setGuesses(nextGuesses);
  }

  return (
  <>
    <Guesses guesses={guesses} answer={answer} />
    <GuessInput addGuess={addGuess} over={over} />
    {over && <Banner win={win} attemps={guesses.length} answer={answer} />}
  </>
  );
}

export default Game;
