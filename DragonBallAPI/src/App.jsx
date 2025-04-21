import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import CharacterDetail from './Components/CharacterCard/CharacterDetail';
import AcercaDe from './Components/Pages/ArcadeDe';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/masculino" element={<Home filtroGenero="Male" />} />
          <Route path="/femenino" element={<Home filtroGenero="Female" />} />
          <Route path="/personaje/:id" element={<CharacterDetail />} />
          <Route path="/acercade" element={<AcercaDe />} />
        </Routes>
      </main>
    </Router>
  );
}


export default App;

