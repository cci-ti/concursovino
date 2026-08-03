import React from 'react';
import { Link } from 'react-router-dom';

export const Etiquetas: React.FC = () => {
  return (
    <>
      {/* 1. HERO SECTION */}
      <header
        className="hero has-bg"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2rem 4rem 6rem 4rem',
          color: '#fff',
          position: 'relative'
        }}
      >
        {/* Top Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
          {/* Back button */}
          <Link
            to="/"
            style={{
              color: 'rgba(255, 255, 255, 0.85)',
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
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-light)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Volver
          </Link>

          {/* Nav Links top right */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            <Link
              to="/inscripcion"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'opacity 0.25s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Inscribirse
            </Link>
            <Link
              to="/concurso-etiquetas/ediciones"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '0.55rem 1.6rem',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c9952a';
                e.currentTarget.style.borderColor = '#c9952a';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(201, 149, 42, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              Ediciones
            </Link>
          </div>
        </div>

        {/* Hero Centered Content */}
        <div className="reveal" style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
              fontWeight: 500,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '3rem',
              maxWidth: '850px',
              textAlign: 'center'
            }}
          >
            III Concurso Nacional<br /> de Etiquetas y<br />Packaging
          </h1>

          <Link
            to="/inscripcion"
            style={{
              background: '#990011',
              color: '#fff',
              padding: '0.85rem 3rem',
              fontSize: '0.88rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'background 0.25s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#BD0017'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#990011'}
          >
            INSCRIBIRSE
          </Link>
        </div>
      </header>

      {/* 2. RECOGNITION SECTION (Burgundy #8A0005 + Background figure 'copa.webp') */}
      <section
        style={{
          background: '#8A0005',
          padding: '8rem 4rem',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background figure watermark */}
        <img
          src="https://camaraica.org.pe/wp-content/uploads/2026/08/copa.webp"
          alt=""
          style={{
            position: 'absolute',
            right: '7%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '300px',
            height: 'auto',
            opacity: 0.16,
            pointerEvents: 'none',
            zIndex: 1
          }}
          className="d-none-mobile"
        />

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>

          {/* Left Column: Title (Scroll animated) */}
          <div className="reveal">
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(2.2rem, 5.5vw, 3.4rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                margin: 0,
                textAlign: 'left'
              }}
            >
              El<br />reconocimiento<br />a la excelencia<br />en el diseño de<br />etiquetas del<br />vino peruano
            </h2>
          </div>

          {/* Right Column: Paragraphs (Scroll animated) */}
          <div className="reveal">
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#fff',
                marginBottom: '1.8rem',
                textAlign: 'justify'
              }}
            >
              El III Concurso Nacional de Etiquetas es una iniciativa organizada en el marco del VII Concurso Nacional del Vino Peruano, con el propósito de reconocer y promover la excelencia en el diseño gráfico aplicado a la industria vitivinícola peruana.
            </p>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#fff',
                margin: 0,
                textAlign: 'justify'
              }}
            >
              Este concurso nace como una plataforma que pone en valor el papel de la etiqueta como un elemento fundamental en la construcción de la identidad de un vino, su posicionamiento comercial y la comunicación de su origen, historia y calidad. Se premia la creatividad, la innovación, la funcionalidad y la capacidad del diseño para transmitir la esencia de cada marca.
            </p>
          </div>

        </div>
      </section>

      {/* 3. OBJECTIVES & WHO CAN PARTICIPATE (Tan #BFA38A + Background figure 'vino-y-copa.webp') */}
      <section
        style={{
          background: '#BFA38A',
          padding: '8rem 4rem',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background figure watermark */}
        <img
          src="https://camaraica.org.pe/wp-content/uploads/2026/08/vino-y-copa.webp"
          alt=""
          style={{
            position: 'absolute',
            left: '5%',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '350px',
            height: 'auto',
            opacity: 0.16,
            pointerEvents: 'none',
            zIndex: 1
          }}
          className="d-none-mobile"
        />

        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start', position: 'relative', zIndex: 2 }}>

          {/* Left Column: Objetivos (Scroll animated) */}
          <div className="reveal">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                fontWeight: 500,
                color: '#fff',
                marginBottom: '2.5rem'
              }}
            >
              Objetivos
            </h3>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.6rem'
              }}
            >
              {[
                'Promover la cultura del diseño como una herramienta estratégica para la competitividad del sector vitivinícola.',
                'Incentivar a las bodegas a desarrollar propuestas gráficas que fortalezcan la identidad y el valor comercial de sus productos.',
                'Contribuir al posicionamiento del vino peruano mediante el reconocimiento de la excelencia en su presentación e imagen.'
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.8rem',
                    color: '#fff'
                  }}
                >
                  <span style={{ color: '#fff', fontSize: '1.2rem', marginTop: '-0.1rem' }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Who can participate (Scroll animated) */}
          <div className="reveal">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.5rem',
                fontWeight: 500,
                color: '#fff',
                marginBottom: '2.5rem'
              }}
            >
              ¿Quién puede participar?
            </h3>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#fff',
                marginBottom: '1.8rem',
                textAlign: 'justify'
              }}
            >
              La participación en el III Concurso Nacional de Etiquetas es exclusiva para las bodegas y empresas vitivinícolas inscritas en el VII Concurso Nacional del Vino Peruano.
            </p>
            <p
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#fff',
                margin: 0,
                textAlign: 'justify'
              }}
            >
              Podrán participar con las etiquetas de los vinos oficialmente registrados en el certamen principal, las cuales serán evaluadas por un jurado especializado que reconocerá la excelencia en diseño, creatividad, identidad visual y comunicación de marca.
            </p>
          </div>

        </div>
      </section>

      {/* 4. CATEGORIES (With boxed containers and hover animation) */}
      <section
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '7rem 4rem',
          color: '#fff'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '3rem',
              fontWeight: 500,
              marginBottom: '4rem',
              color: '#fff'
            }}
          >
            Categorías.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {[
              'Mejor Diseño de Etiqueta',
              'Mejor Branding de Vino',
              'Mejor Packaging Patrimonial'
            ].map((cat, idx) => (
              <div
                key={idx}
                className="reveal"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  padding: '3.5rem 2rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  textAlign: 'center',
                  cursor: 'default',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                  e.currentTarget.style.borderColor = 'var(--gold-light)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(201, 149, 42, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                  e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                }}
              >
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.8rem',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#fff',
                    margin: 0
                  }}
                >
                  {cat}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BASES SECTION (Light Cream #FAF5F0 + Background figure 'hoja-de-otono.webp') */}
      <section
        style={{
          background: '#FAF5F0',
          padding: '8rem 4rem',
          color: 'var(--text)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>

          {/* Header block aligned left: leaf on the left, title on the right */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '6rem', marginBottom: '2.5rem', width: '100%', flexWrap: 'wrap' }}>
            <img
              src="https://camaraica.org.pe/wp-content/uploads/2026/08/hoja-de-otono.webp"
              alt="Hoja de Otoño"
              style={{ width: '140px', height: 'auto', flexShrink: 0 }}
              className="reveal"
            />
            <h2
              className="reveal"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '2.8rem',
                fontWeight: 700,
                color: '#1E0508',
                margin: 0
              }}
            >
              Bases del Concurso
            </h2>
          </div>

          {/* Paragraphs underneath justified */}
          <p
            className="reveal"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.15rem',
              fontWeight: 600,
              color: '#3d2612',
              lineHeight: 1.6,
              marginBottom: '1.2rem',
              textAlign: 'justify'
            }}
          >
            Toda la información que necesitas para participar está aquí.
          </p>

          <p
            className="reveal"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.05rem',
              color: 'var(--text-soft)',
              lineHeight: 1.7,
              marginBottom: '1.2rem',
              textAlign: 'justify'
            }}
          >
            Consulte las bases oficiales del III Concurso Nacional de Etiquetas y conoce el proceso de inscripción, quiénes pueden participar, los criterios de evaluación, el calendario del concurso, las categorías, los premios y las condiciones generales del certamen.
          </p>

          <p
            className="reveal"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '1.05rem',
              color: 'var(--text-soft)',
              lineHeight: 1.7,
              marginBottom: '3rem',
              textAlign: 'justify'
            }}
          >
            Descarga las bases y prepárate para ser parte del reconocimiento que distingue la excelencia en el diseño de etiquetas del vino peruano.
          </p>

          <a
            href="https://drive.google.com/file/d/18Rkf5gdMb9L6lWp-zn9rrDg2p-ZyNv4d/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal"
            style={{
              border: '2px solid #002244',
              color: '#002244',
              background: 'transparent',
              padding: '0.8rem 2.8rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              alignSelf: 'center',
              transition: 'all 0.25s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#002244';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#002244';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Bases para inscribir &rarr;
          </a>
        </div>
      </section>
    </>
  );
};
