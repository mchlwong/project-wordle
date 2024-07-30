import React from 'react';
import Guess from '../Guess/Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function Guesses({guesses, answer}) {
  const rows = [];
  let i = 0;
  while (i < NUM_OF_GUESSES_ALLOWED) {
    rows.push(i);
    i++;
  }
  return (
  <div className="guess-results">
    {rows.map(row => (
      <Guess key={row} word={guesses[row]} answer={answer} />
    ))}
  </div>
  );
}

export default Guesses;
