import React from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Snowfall from 'react-snowfall'; // Import the Snowfall component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Snowfall snowflakeCount={300} color="#007bff" style={{ zIndex: -1 }} />
    </div>
  );
}

export default App;
