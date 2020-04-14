// src/components/Displayphrase.js
import React from 'react';
  
function DisplayPhrase({ phrase }) {

  
  return (
    <div className="DisplayPhrase">
      <img src={phrase.image} alt= '' />
        <h3>{phrase.character}</h3>
        <p>{phrase.quote}</p>
    </div>
  );
};
  
export default DisplayPhrase;
