import React from 'react';

function Guess({word}) {
  if (!word) {
    return (
      <p className="guess">
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
        <span className="cell"></span>
      </p>
    );
  }
  return (
    <p className="guess">
      <span className="cell">{[...word][0]}</span>
      <span className="cell">{[...word][1]}</span>
      <span className="cell">{[...word][2]}</span>
      <span className="cell">{[...word][3]}</span>
      <span className="cell">{[...word][4]}</span>
    </p>
  );
}

export default Guess;
