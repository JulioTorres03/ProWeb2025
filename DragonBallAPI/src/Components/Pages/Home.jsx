import { useEffect, useState } from 'react';
import '../../../src/App.css';
import { Grid, Box } from '@mui/material';
import CharacterCard from '../CharacterCard/CharacterCard';

function Home({ filtroGenero }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters?limit=25')
      .then(res => res.json())
      .then(data => setCharacters(data.items))
      .catch(err => console.error("Error cargando personajes", err));
  }, []);
  
  const personajesFiltrados = filtroGenero
  ? characters.filter(p => p.gender?.toLowerCase() === filtroGenero.toLowerCase())
  : characters;

  return (
   
      <Box className="home-background">
      <Box className="home-inner">

      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img 
          src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp" 
          alt="Dragon Ball API Logo" 
          style={{ width: '400px', maxWidth: '100%' }} 
        />
      </Box>
      
      <img className="dragon-ball-giro" src="https://png.pngtree.com/png-clipart/20230427/original/pngtree-dragon-ball-illustration-png-image_9115754.png" alt="Dragon Ball" />
      
      <Grid container justifyContent="center">
         {personajesFiltrados.map(c => (
      <CharacterCard key={c.id} character={c} />
       ))}
        </Grid>
      </Box>
    </Box>
  );
}
export default Home;
