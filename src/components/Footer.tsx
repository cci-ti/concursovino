import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer 
      className="site-footer" 
      style={{ 
        background: 'var(--burgundy-dark)', 
        color: 'rgba(255, 255, 255, 0.7)', 
        padding: '2rem 2rem 1.2rem', 
        fontFamily: "'Lato', sans-serif", 
        fontSize: '0.88rem', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)' 
      }}
    >
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Footer Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '3rem', 
            textAlign: 'left', 
            marginBottom: '1.5rem' 
          }}
        >
          
          {/* Column 1: Logo & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <img 
                src="https://camaraica.org.pe/wp-content/uploads/2026/07/2.webp" 
                alt="Logo Concurso Nacional del Vino Peruano" 
                style={{ 
                  width: '130px', 
                  height: '130px', 
                  objectFit: 'contain'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', maxWidth: '300px' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.15rem', color: '#fff', lineHeight: 1.45, margin: 0, textAlign: 'left' }}>
                  Organizado en Chincha, Ica, celebrando la tradición vitivinícola del Perú desde su primera edición.
                </p>
                <div style={{ display: 'flex', gap: '1.2rem', marginTop: '0.2rem' }}>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--gold-light)', display: 'inline-block', transition: 'transform 0.2s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} 
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--gold-light)', display: 'inline-block', transition: 'transform 0.2s' }} 
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.15)'} 
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} 
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div style={{ paddingLeft: '1rem' }}>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>
              Concurso
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li>
                <Link to="/concurso" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                  Sobre el concurso
                </Link>
              </li>
              <li>
                <Link to="/reglamento" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                  Bases y categorías
                </Link>
              </li>
              <li>
                <Link to="/jueces" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                  Jurado
                </Link>
              </li>
              <li>
                <Link to="/historico" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                  Resultados anteriores
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#fff', fontSize: '1.05rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5rem' }}>
              Contacto
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'rgba(255, 255, 255, 0.75)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-light)' }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:imagen@camaraica.org.pe" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                  imagen@camaraica.org.pe
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-light)' }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:info@concursovinoperuano.pe" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'}>
                  info@concursovinoperuano.pe
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-light)', marginTop: '0.15rem' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span>+51 968 183 971</span>
                  <span>+51 993 479 921</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold-light)' }}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Chincha, Ica, Perú</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Divider & Text */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.8rem', textAlign: 'center', fontSize: '0.82rem', color: 'rgba(255, 255, 255, 0.45)' }}>
          <p style={{ marginBottom: '0.3rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            <strong>Concurso Nacional del Vino Peruano<sup>®</sup></strong>
          </p>
          <p style={{ marginBottom: '0.3rem' }}>
            Cámara de Comercio de Ica · <a href="mailto:imagen@camaraica.org.pe" style={{ color: 'var(--gold-light)', textDecoration: 'none' }}>imagen@camaraica.org.pe</a>
          </p>
          <p style={{ margin: 0 }}>
            © 2026 · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
