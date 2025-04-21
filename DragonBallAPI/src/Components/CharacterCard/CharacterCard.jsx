
import { useNavigate } from 'react-router-dom';

function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <div className="dbz-card-wrapper" onClick={() => navigate(`/personaje/${character.id}`)}>
    <div className={`dbz-character-img-section ${character.race?.toLowerCase().replace(/\s+/g, '-')}`}>
  <img src={character.image} alt={character.name} className="dbz-character-img" />
    </div>
  
    <div className="dbz-character-info-section">
      <p className="dbz-name">{character.name}</p>
      <p className="dbz-race-gender">{character.race} - {character.gender}</p>
      <p className="dbz-label">Base KI: <span>{character.ki || 0}</span></p>
      <p className="dbz-label">Total KI: <span>{character.maxKi || 0}</span></p>
      <p className="dbz-label">Affiliation: <span>{character.affiliation || '—'}</span></p>
    </div>
  </div>
);
}
export default CharacterCard;