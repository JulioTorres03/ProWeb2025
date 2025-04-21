import { AppBar, Toolbar, Box, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar
    position="fixed"
    elevation={3}
    sx={{ backgroundColor: '#0d47a1', padding: '0 1rem' }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/">
        <img
          src="https://web.dragonball-api.com/images-compress/android-icon-192x192.webp"
          alt="Dragon Ball Logo"
          style={{ height: '50px', objectFit: 'contain' }}
        />
      </Link>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Tooltip title="Inicio">
          <IconButton component={Link} to="/">
            <img
              src="https://icons.iconarchive.com/icons/musett/dragon-ballz/128/Dragon-Ball-icon.png"
              alt="Inicio"
              style={{ width: '30px' }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Masculino">
          <IconButton component={Link} to="/masculino">
            <img
              src="https://static.wikia.nocookie.net/5f52b8b9-e2e0-4c90-bfb7-31f3f84b146d/scale-to-width/370"
              alt="Masculino"
              style={{ width: '30px' }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Femenino">
          <IconButton component={Link} to="/femenino">
            <img
              src="https://i.pinimg.com/564x/b7/24/d0/b724d0f93ff9ea455af21d73cdd2e42e.jpg"
              alt="Femenino"
              style={{ width: '30px' }}
            />
          </IconButton>
        </Tooltip>

        <Tooltip title="Acerca de">
          <IconButton component={Link} to="/acercade">
            <img
              src="https://iconarchive.com/download/i84978/musett/dragon-ballz/Dragon-Radar.ico"
              alt="Acerca de"
              style={{ width: '30px' }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Toolbar>
  </AppBar>
  );
}
export default Navbar;
