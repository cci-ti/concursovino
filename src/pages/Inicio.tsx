import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio: React.FC = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <header
        className="hero has-bg"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://camaraica.org.pe/wp-content/uploads/2026/07/VII-Concurso-Nacional-del-Vino-Peruano-800-x-600-px.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '5rem 2rem',
          color: '#fff',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {/* Badge: Inscripciones abiertas */}
        <a
          href="https://concursovinos.icaconvention.com/inscripcion/fichadigital.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#fff',
            color: 'var(--burgundy-dark)',
            padding: '0.6rem 2rem',
            borderRadius: '4px',
            fontFamily: "'Lato', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '2.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
            display: 'inline-block',
            textDecoration: 'none',
            transition: 'transform 0.25s, box-shadow 0.25s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 255, 255, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
          }}
          className="reveal"
        >
          Inscripciones abiertas
        </a>

        {/* Subtitle 1: II Concurso Internacional... */}
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            color: 'var(--cream-dark)',
            fontWeight: 500,
            letterSpacing: '0.02em',
            marginBottom: '0.8rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
            display: 'block'
          }}
          className="reveal"
        >
          II Concurso Internacional de Vinos de Origen y Patrimonio
        </span>

        {/* Main Title: VII Concurso Nacional... */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#fff',
            marginBottom: '2rem',
            textShadow: '0 2px 6px rgba(0,0,0,0.5)',
            maxWidth: '900px'
          }}
          className="reveal"
        >
          VII Concurso Nacional del Vino Peruano
        </h1>

        {/* Subtitle 2: Dos concursos, una misma celebración... */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '750px',
            lineHeight: 1.5,
            textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            margin: '0 auto',
            textAlign: 'center'
          }}
          className="reveal"
        >
          Dos concursos, una misma celebración: el mejor vino peruano y los vinos de origen del mundo, juntos en Chincha.
        </p>
      </header>

      {/* 2. DATES, LOCATION & ACTIONS */}
      <section style={{ position: 'relative', padding: '4.5rem 2rem', background: 'var(--cream)', overflow: 'hidden' }}>
        {/* Floating Leaf Left */}
        <img
          src="https://camaraica.org.pe/wp-content/uploads/2026/07/1.webp"
          alt="Hoja de parra decorativa izquierda"
          style={{
            position: 'absolute',
            left: '-60px',
            top: '50%',
            transform: 'translateY(-50%) rotate(15deg)',
            width: '180px',
            opacity: 0.9,
            pointerEvents: 'none',
            display: 'block'
          }}
          className="reveal"
        />

        {/* Floating Leaf Right */}
        <img
          src="https://camaraica.org.pe/wp-content/uploads/2026/07/1.webp"
          alt="Hoja de parra decorativa derecha"
          style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%) scaleX(-1) rotate(15deg)',
            width: '180px',
            opacity: 0.9,
            pointerEvents: 'none',
            display: 'block'
          }}
          className="reveal"
        />

        <div className="container" style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              textAlign: 'center',
              alignItems: 'start'
            }}
          >
            {/* Column 1: Date & Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }} className="reveal">
              <div style={{ color: 'var(--burgundy-dark)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                  <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
                </svg>
                <span style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text)', fontFamily: "'Playfair Display', serif" }}>
                  Octubre, 20 al 24
                </span>
              </div>
              <a
                href="https://concursovinos.icaconvention.com/inscripcion/fichadigital.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'var(--burgundy-dark)',
                  color: '#fff',
                  border: 'none',
                  padding: '0.8rem 2.5rem',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(94, 0, 3, 0.25)',
                  transition: 'all 0.25s',
                  display: 'inline-block'
                }}
              >
                Inscribir mi vino
              </a>
            </div>

            {/* Column 2: Location & Button */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }} className="reveal">
              <div style={{ color: 'var(--burgundy-dark)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text)', fontFamily: "'Playfair Display', serif" }}>
                  Chincha, Ica - Perú
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <a
                href="https://drive.google.com/file/d/1-kucwyDT43F3ESPpU-OFTvKSvcak_18u/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'var(--burgundy-dark)',
                  color: '#fff',
                  border: 'none',
                  padding: '0.9rem 2.5rem',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(94, 0, 3, 0.25)',
                  transition: 'all 0.25s',
                  display: 'inline-block'
                }}
              >
                Conoce el reglamento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION: EL ESCENARIO... */}
      <section className="section alt" style={{ padding: '5.5rem 2rem', background: 'var(--cream-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            {/* Left Image from Gallery (Wine tasting) */}
            <div
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                height: '380px'
              }}
              className="reveal"
            >
              <img
                src="https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-11.webp"
                alt="Proceso de Cata de Vinos"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            {/* Right Content */}
            <div className="reveal">
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--burgundy-dark)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase'
                }}
              >
                El escenario donde los grandes vinos del Perú brillan
              </h2>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.05rem', color: 'var(--text-soft)', lineHeight: 1.8, textAlign: 'justify' }}>
                En las últimas ediciones, el Concurso Nacional del Vino Peruano ha contado con la participación sostenida de más de 60 bodegas a nivel nacional, provenientes de regiones emblemáticas como Ica, Moquegua, Arequipa, Tacna, Lima, Apurímac y La Libertad, entre otras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. "LO QUE SE VIVE EN EL CONCURSO" */}
      <section
        style={{
          background: 'var(--burgundy-dark)',
          padding: '6.5rem 2rem',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Infinite scrolling marquee banner bridging sections */}
        <div className="marquee-container">
          <div className="marquee-content">
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
          </div>
          <div className="marquee-content">
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
            <span style={{ marginRight: '15rem' }}>CONVIP</span>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.3rem',
                fontStyle: 'italic',
                color: 'var(--gold-light)',
                display: 'block',
                marginBottom: '0.6rem'
              }}
            >
              Un solo evento, cuatro competencias
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                fontWeight: 500,
                color: '#fff',
                margin: 0
              }}
            >
              Lo que se vive en el concurso
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.8rem' }}>

            {/* Card 1 */}
            <Link
              to="/historico"
              className="reveal competencia-card"
              style={{
                height: '320px',
                display: 'block',
                textDecoration: 'none'
              }}
            >
              <img
                src="https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-10.webp"
                alt="Concurso Nacional del Vino Peruano"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 5, 8, 0.85) 10%, rgba(30, 5, 8, 0.45) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1.5rem'
                }}
              >
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, lineHeight: 1.35 }}>
                  CONCURSO NACIONAL DEL VINO PERUANO
                </h4>
              </div>
            </Link>

            {/* Card 2 */}
            <div
              className="reveal competencia-card"
              style={{
                height: '320px'
              }}
            >
              <img
                src="https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-1-scaled.webp"
                alt="Concurso Internacional de Vinos de Origen y Patrimonio"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 5, 8, 0.85) 10%, rgba(30, 5, 8, 0.45) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1.5rem'
                }}
              >
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, lineHeight: 1.35 }}>
                  CONCURSO INTERNACIONAL DE VINOS DE ORIGEN Y PATRIMONIO
                </h4>
              </div>
            </div>

            {/* Card 3 */}
            <Link
              to="/concurso-etiquetas"
              className="reveal competencia-card"
              style={{
                height: '320px',
                display: 'block',
                textDecoration: 'none'
              }}
            >
              <img
                src="https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png"
                alt="Concurso de Etiquetas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 5, 8, 0.85) 10%, rgba(30, 5, 8, 0.45) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1.5rem'
                }}
              >
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, lineHeight: 1.35 }}>
                  CONCURSO DE ETIQUETAS
                </h4>
              </div>
            </Link>

            {/* Card 4 */}
            <div
              className="reveal competencia-card"
              style={{
                height: '320px'
              }}
            >
              <img
                src="https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-5.webp"
                alt="Salón de Aromas"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(30, 5, 8, 0.85) 10%, rgba(30, 5, 8, 0.45) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1.5rem'
                }}
              >
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0, lineHeight: 1.35 }}>
                  SALÓN DE AROMAS
                </h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section style={{ position: 'relative', padding: '5.5rem 2rem', background: 'var(--cream)', overflow: 'hidden', textAlign: 'center' }}>
        {/* Floating Leaf Left */}
        <img
          src="https://camaraica.org.pe/wp-content/uploads/2026/07/1.webp"
          alt="Hoja de parra decorativa izquierda"
          style={{
            position: 'absolute',
            left: '-60px',
            bottom: '10%',
            width: '180px',
            opacity: 0.9,
            pointerEvents: 'none',
            display: 'block'
          }}
          className="reveal"
        />

        {/* Floating Leaf Right */}
        <img
          src="https://camaraica.org.pe/wp-content/uploads/2026/07/1.webp"
          alt="Hoja de parra decorativa derecha"
          style={{
            position: 'absolute',
            right: '-60px',
            bottom: '10%',
            transform: 'scaleX(-1)',
            width: '180px',
            opacity: 0.9,
            pointerEvents: 'none',
            display: 'block'
          }}
          className="reveal"
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '650px', margin: '0 auto' }}>
          <h3 className="reveal" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', color: 'var(--text)', fontWeight: 700, marginBottom: '1rem' }}>
            ¿Tu bodega quiere competir?
          </h3>
          <p
            className="reveal"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.15rem',
              color: 'var(--text-soft)',
              marginBottom: '2.5rem',
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Las inscripciones cierran el 15 de Octubre de 2026.
          </p>
          <div className="reveal">
            <a
              href="https://concursovinos.icaconvention.com/inscripcion/fichadigital.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: 'var(--burgundy-dark)',
                color: '#fff',
                border: 'none',
                padding: '0.95rem 3.5rem',
                fontSize: '0.92rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderRadius: '4px',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(94, 0, 3, 0.25)',
                display: 'inline-block'
              }}
            >
              Inscripciones
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
