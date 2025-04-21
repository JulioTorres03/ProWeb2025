import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(res => res.json())
      .then(data => setCharacter(data))
      .catch(err => console.error("Error al cargar detalle", err));
  }, [id]);

  if (!character) return <div>Cargando...</div>;

  return (
    <div className="detail-background">
      <div className="detail-container">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
        <div className="character-info">
          <Typography variant="h3" className="character-name">
            {character.name}
          </Typography>
          <Typography variant="body1">
            <span className="detail-label">Raza:</span> {character.race}
          </Typography>
          <Typography variant="body1">
            <span className="detail-label">Especie:</span> {character.species}
          </Typography>
          <Typography variant="body1">
            <span className="detail-label">Género:</span> {character.gender}
          </Typography>
          <Typography variant="body1">
            <span className="detail-label">Estado:</span> {character.status}
          </Typography>
        </div>
      </div>
    </div>

  );
}

export default CharacterDetail;