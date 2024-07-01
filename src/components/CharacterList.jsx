import { useState, useEffect } from 'react'; 
import CharacterDetail from './CharacterDetail';
import axios from 'axios'; 

function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacterID, setSelectedCharacterID] = useState(null);

    useEffect(() => {
        async function fetchCharacters(){
            try {
                const response = await axios.get("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=7129ccce028404d358ffac2047c97453&hash=b1f38d062df9c025fadbe8394d983724")
                setCharacters(response.data.data.results);
            } catch (error){
                console.log(error)
            }
        }
        fetchCharacters();
    }, []);
    
    return (
        <div className='layout'>
          {characters.map((character) => (
            <div key={character.id} onClick={() => setSelectedCharacterID(character.id)}>
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
              <h3>{character.name}</h3>
              
              <button>Info</button>
            </div>
          ))}
          {selectedCharacterID && (
            < CharacterDetail characterId = {selectedCharacterID} onClose = {() => setSelectedCharacterID(null)}/>
          )}
        </div>
    );   
}

export default CharacterList;