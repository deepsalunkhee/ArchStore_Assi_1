import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './../Card/Card';
import './List.css';
import SearchBar from '../SearchBar/SearchBar';
import Popup from '../Popup/Popup';

const List = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedGender, setSelectedGender] = useState('');



  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  }, []);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleCardClick = character => {
    setSelectedCharacter(character);
  };

  const handleStatusChange = event => {
    setSelectedStatus(event.target.value);
  };

  const handleGenderChange = event => {
    setSelectedGender(event.target.value);
  };

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedStatus === '' || character.status.toLowerCase() === selectedStatus) &&
    (selectedGender === '' || character.gender.toLowerCase() === selectedGender)
  );



  return (
<div >
<SearchBar
        searchQuery={searchQuery}
        selectedStatus={selectedStatus}
        selectedGender={selectedGender}
        handleSearchChange={handleSearchChange}
        handleStatusChange={handleStatusChange}
        handleGenderChange={handleGenderChange}
      />
      <div className="character-list">
      {filteredCharacters.map(character => (
        <Card
        
          key={character.id}
          character={character}
          onClick={() => handleCardClick(character)}
        />
      ))}
      <Popup character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      </div>
      
    </div>
  );
};

export default List;
