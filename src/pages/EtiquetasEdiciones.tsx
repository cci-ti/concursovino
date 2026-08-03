import React from 'react';
import { Link } from 'react-router-dom';

export const EtiquetasEdiciones: React.FC = () => {
  return (
    <section
      style={{
        background: '#FAF7F2',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Back button container */}
      <div style={{ maxWidth: '1000px', width: '100%', marginBottom: '3rem', textAlign: 'left', position: 'relative', zIndex: 2 }}>
        <Link
          to="/concurso-etiquetas"
          style={{
            color: '#5E0003',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.25s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#B5987A'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#5E0003'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Volver a Concurso de Etiquetas
        </Link>
      </div>

      <div style={{ textAlign: 'center', maxWidth: '1000px', width: '100%', position: 'relative', zIndex: 2 }}>

        {/* Page Title */}
        <h2
          className="reveal"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5.5vw, 3rem)',
            fontWeight: 700,
            color: '#3A1015',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '3rem'
          }}
        >
          GALERIA DE ETIQUETAS
        </h2>

        {/* Elegant split cards grid (no extra info, visually rich) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            width: '100%',
            marginTop: '2rem'
          }}
        >
          {/* Card Edición 2024 */}
          <a
            href="https://www.facebook.com/vinoperuano/posts/pfbid0ZVaQG6ov3W3ysiRB5aDjgVv6VCBwmJxtJhdCYJKhPjADcgmx4fgvhKJiR884AVa5l?rdid=yWheZVV6LKy5ebPk&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1DJsHp5Yjc%2F#"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal"
            style={{
              position: 'relative',
              height: '380px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(94, 0, 3, 0.12)';
              const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
              if (img) img.style.transform = 'scale(1.05)';
              const btn = e.currentTarget.querySelector('.card-btn') as HTMLElement | null;
              if (btn) {
                btn.style.background = '#fff';
                btn.style.color = '#000';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.06)';
              const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
              if (img) img.style.transform = 'scale(1)';
              const btn = e.currentTarget.querySelector('.card-btn') as HTMLElement | null;
              if (btn) {
                btn.style.background = 'rgba(255, 255, 255, 0.15)';
                btn.style.color = '#fff';
              }
            }}
          >
            {/* Background Image */}
            <img
              src="https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-12.webp"
              alt="Edición 2024"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                zIndex: 1
              }}
            />
            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.7))',
                zIndex: 2
              }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 3, color: '#fff', padding: '2rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)', display: 'block', marginBottom: '0.5rem' }}>
                Edición
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.2rem', fontWeight: 700, margin: '0 0 1.8rem 0' }}>
                2024
              </h3>
              <span
                className="card-btn"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '50px',
                  padding: '0.8rem 2.8rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s'
                }}
              >
                Ver Galería &rarr;
              </span>
            </div>
          </a>

          {/* Card Edición 2025 */}
          <a
            href="https://www.facebook.com/vinoperuano/posts/pfbid0m4teMuAYjTksi7cfB1dSYKzxb6ixag4AiyHgR1uEwUFStUbPXLWpyYWTW3t1JycDl?rdid=t4Z5nl45sasI6ZiT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fp%2F1BqP5F66oR%2F#"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal"
            style={{
              position: 'relative',
              height: '380px',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              transition: 'transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(94, 0, 3, 0.12)';
              const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
              if (img) img.style.transform = 'scale(1.05)';
              const btn = e.currentTarget.querySelector('.card-btn') as HTMLElement | null;
              if (btn) {
                btn.style.background = '#fff';
                btn.style.color = '#000';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.06)';
              const img = e.currentTarget.querySelector('img') as HTMLImageElement | null;
              if (img) img.style.transform = 'scale(1)';
              const btn = e.currentTarget.querySelector('.card-btn') as HTMLElement | null;
              if (btn) {
                btn.style.background = 'rgba(255, 255, 255, 0.15)';
                btn.style.color = '#fff';
              }
            }}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=70"
              alt="Edición 2025"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s ease',
                zIndex: 1
              }}
            />
            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.7))',
                zIndex: 2
              }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 3, color: '#fff', padding: '2rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-light)', display: 'block', marginBottom: '0.5rem' }}>
                Edición
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.2rem', fontWeight: 700, margin: '0 0 1.8rem 0' }}>
                2025
              </h3>
              <span
                className="card-btn"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '50px',
                  padding: '0.8rem 2.8rem',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.3s'
                }}
              >
                Ver Galería &rarr;
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
