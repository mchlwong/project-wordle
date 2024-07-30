import React from 'react';

function Banner({win, attemps, answer}) {
  if (!win) {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    );
  }
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{attemps} guess{attemps === 1 ? '' : 'es'}</strong>.
      </p>
    </div>
  )
}

export default Banner;
