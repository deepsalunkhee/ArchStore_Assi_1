import React from 'react';
import './Card.css';


const Card = ({ character, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <div className="infomation">
        <p>Status:{character.status}</p>
        <p>Gender:{character.gender}</p>
      </div>
      
    </div>
  );
};

export default Card;
