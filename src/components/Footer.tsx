import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-logo">Concurso Nacional del Vino Peruano</div>
      <p>
        Cámara de Comercio, Industria y Turismo de Ica ·{' '}
        <a href="mailto:imagen@camaraica.org.pe">imagen@camaraica.org.pe</a>
      </p>
      <p style={{ marginTop: '.4rem', fontSize: '.76rem' }}>
        © 2026 · Todos los derechos reservados
      </p>
    </footer>
  );
};
