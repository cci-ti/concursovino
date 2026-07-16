import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-logo">
        Concurso Nacional del Vino Peruano<sup>®</sup>
      </div>
      <p>
        Cámara de Comercio de Ica ·{' '}
        <a href="mailto:imagen@camaraica.org.pe">imagen@camaraica.org.pe</a>
      </p>
      <div className="footer-socials" style={{ display: 'flex', justifyContent: 'center', gap: '1.2rem', marginTop: '1.2rem', marginBottom: '0.8rem' }}>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
      <p style={{ marginTop: '.4rem', fontSize: '.76rem' }}>
        © 2026 · Todos los derechos reservados
      </p>
    </footer>
  );
};
