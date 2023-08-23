import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search characters..."
        value={props.searchQuery}
        onChange={props.handleSearchChange}
      />
      <select value={props.selectedStatus} onChange={props.handleStatusChange}>
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
      </select>
      <select value={props.selectedGender} onChange={props.handleGenderChange}>
        <option value="">All Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default SearchBar;
