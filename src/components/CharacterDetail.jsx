import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';

const CharacterDetail = ({ characterId, onClose }) => {
  const [characterDetail, setCharacterDetail] = useState(null);

  useEffect(() => {
    if (characterId) {
      const fetchCharacterDetail = async () => {
        try {
          const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=7129ccce028404d358ffac2047c97453
&hash=b1f38d062df9c025fadbe8394d983724`);
          setCharacterDetail(response.data.data.results[0]);
        } catch (error) {
          console.error('Error fetching character detail:', error);
        }
      };

      fetchCharacterDetail();
    }
  }, [characterId]);

  if (!characterDetail) {
    return <div>Select a character to see the details</div>;
  }
  return (
    
    <div className='dets'>
      <button onClick={onClose}>Close</button>
      <h2>{characterDetail.name}</h2>
      <p>{characterDetail.description || 'No description available'}</p>
      <h3>Comics:</h3>
      <ul>
        {characterDetail.comics.items.map(comic => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;