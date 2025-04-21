import { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

function Femenino() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(res => res.json())
      .then(data => setCharacters(data.items.filter(c => c.gender === 'Female')))
      .catch(err => console.error("Error", err));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {characters.map(char => <CharacterCard key={char.id} character={char} />)}
    </div>
  );
}
export default Femenino;