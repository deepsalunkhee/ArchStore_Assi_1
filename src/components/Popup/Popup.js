import React from 'react';
import './Popup.css';

const Popup = ({ character, onClose }) => {
  return (
    <div className={`character-popup ${character ? 'open' : ''}`}>
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <h2>{character && character.name}</h2>
        {character && (
          <div>
            <img src={character.image} alt={character.name} />

           <div className="infomation1">

            <h3>Name:{character.name}</h3>
            <h3>Species:{character.species}</h3>
            <h3>Gender:{character.gender}</h3>
            <h3>Status:{character.status}</h3>
            <h3>From:{character.origin.name}</h3>
           </div> 
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
