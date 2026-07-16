import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        Concurso Nacional del Vino Peruano<sup>®</sup>
      </div>
      <p>
        Cámara de Comercio, Industria y Turismo de Ica ·{' '}
        <a href="mailto:imagen@camaraica.org.pe">imagen@camaraica.org.pe</a>
      </p>
      <div className="footer-socials" style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', marginTop: '1.2rem', marginBottom: '0.8rem' }}>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
          <Instagram size={20} strokeWidth={1.5} />
        </a>
      </div>
      <p style={{ marginTop: '.4rem', fontSize: '.76rem' }}>
        © 2026 · Todos los derechos reservados
      </p>
    </footer>
  );
};
