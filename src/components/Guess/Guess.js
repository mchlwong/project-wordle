import React from 'react';
import {checkGuess} from '../../game-helpers';

function Guess({word, answer}) {
  const columns = [0, 1, 2, 3, 4];
  if (!word) {
    return (
      <p className="guess">
        {columns.map(column => (
          <span key={column} className="cell"></span>
        ))}
      </p>
    );
  }
  const result = checkGuess(word, answer);
  return (
    <p className="guess">
      {columns.map(column => (
        <span key={column} className={`cell ${result[column].status}`}>{[...word][column]}</span>
      ))}
    </p>
  );
}

export default Guess;
