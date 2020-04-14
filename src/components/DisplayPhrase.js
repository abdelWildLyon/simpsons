// src/components/Displayphrase.js
import React from 'react';
  
function DisplayPhrase({ phrase }) {

  
  return (
    <div className="DisplayPhrase">
      <img
        src={phrase.image}
        alt= ''
      />
      <ul>
        <li>Phrase: {phrase.quote}</li>
        <li>Phrase: {phrase.character}</li>
        <li> je sais pas: {phrase.characterDirection}</li> 
      </ul>
    </div>
  );
};
  
export default DisplayPhrase;