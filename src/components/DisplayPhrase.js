// src/components/Displayphrase.js
import React from 'react';
  
function DisplayPhrase({ phrase }) {

  
  return (
    <div className="DisplayPhrase">
      <img src={phrase.image} alt= '' />
      <ul>
        <h3>Phrase: {phrase.quote}</h3>
        <p>Phrase: {phrase.character}</p>
    </div>
  );
};
  
export default DisplayPhrase;
