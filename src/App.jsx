
import React, { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';
import './App.css';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    
    <div className="app-container">
        
        
      <h1>Marvel Characters</h1>
      <div className='content'>
      <CharacterList />
      
      </div>
    </div>
  );
};

export default App;