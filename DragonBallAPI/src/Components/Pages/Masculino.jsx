import { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import '../../../src/App.css';

function Masculino() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters/')
      .then(res => res.json())
      .then(data => setCharacters(data.items.filter(c => c.gender === 'Male')))
      .catch(err => console.error("Error", err));
  }, []);

  return (
    <div className="filtered-background">
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {characters.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  </div>
  );
}
export default Masculino;
