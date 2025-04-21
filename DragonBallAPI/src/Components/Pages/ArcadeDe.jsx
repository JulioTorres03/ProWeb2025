import { Typography, Box } from '@mui/material';
import '../../App.css';

function AcercaDe() {
  return (
      <Box className="acercade-background">
        <Box className="acercade-panel">
          <Typography variant="h4" className="acercade-title" gutterBottom>
            Acerca De
          </Typography>
          <Typography variant="body1" className="acercade-text">
            👤 Nombre: Julio Cesar Torres Velasquez
          </Typography>
          <Typography variant="body1" className="acercade-text">
            📧 Correo: julio.torres@udla.edu.co
          </Typography>
          <Typography variant="body1" className="acercade-text">
            📘 Curso: Programación Web 2025-I
          </Typography>
        </Box>
      </Box>
);
}
export default AcercaDe;