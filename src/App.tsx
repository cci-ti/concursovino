import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Inicio } from './pages/Inicio';
import { Concurso } from './pages/Concurso';
import { Inscripcion } from './pages/Inscripcion';
import { Reglamento } from './pages/Reglamento';
import { Historico } from './pages/Historico';
import { Galeria } from './pages/Galeria';
import { Contacto } from './pages/Contacto';
import { Jueces } from './pages/Jueces';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="concurso" element={<Concurso />} />
          <Route path="inscripcion" element={<Inscripcion />} />
          <Route path="reglamento" element={<Reglamento />} />
          <Route path="historico" element={<Historico />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="jueces" element={<Jueces />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
