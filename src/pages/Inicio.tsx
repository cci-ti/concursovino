import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MOSTRAR_IMAGEN_DE_FONDO = true;
const BACKGROUND_IMAGES = [
  "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
  "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
  "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
  "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp"
];
const OPACIDAD_FILTRO = 0.55;

export const Inicio: React.FC = () => {
  const [bgIndex, setBgIndex] = useState(0);

  // Efecto imágenes 6s aprox
  useEffect(() => {
    if (!MOSTRAR_IMAGEN_DE_FONDO || BACKGROUND_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header className={`hero ${MOSTRAR_IMAGEN_DE_FONDO ? 'has-bg' : ''}`}>
        {/* Carrusel de fondo animado */}
        {MOSTRAR_IMAGEN_DE_FONDO && (
          <div className="hero-bg-slideshow">
            {BACKGROUND_IMAGES.map((bgUrl, index) => (
              <div
                key={index}
                className={`hero-bg-slide ${index === bgIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url('${bgUrl}')` }}
              />
            ))}
            {/* Filtro oscuro para contraste de textos blancos */}
            <div
              className="hero-bg-overlay"
              style={{ background: `rgba(16, 8, 10, ${OPACIDAD_FILTRO})` }}
            />
          </div>
        )}

        <div className="hero-ornament">Perú · Vino · Tradición</div>
        <h1 className="hero-title">
          I Concurso Nacional<br />
          del Vino <span className="highlight-circle-container">
            Peruano
            <svg className="circle-svg" viewBox="0 0 100 40" preserveAspectRatio="none">
              <path d="M 5, 20 C 5, 5, 95, 5, 95, 20 C 95, 35, 5, 35, 8.5, 20" />
            </svg>
          </span>
        </h1>
        <p className="hero-sub">Realizado en la ciudad de Ica.</p>
        <Link to="/contacto" className="hero-contact-link-container">
          Contáctanos
          <svg className="underline-svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M 2, 5 Q 50, 7.5, 98, 4" />
          </svg>
        </Link>
      </header>

      {/* EDICION 2020 */}
      <section className="section">
        <div className="container">
          <div className="edicion-grid">
            <div>
              <div className="sec-eyebrow">Primera Edición</div>
              <h2 className="sec-title">Edición 2020</h2>
              <div className="divider-line"></div>
              <div className="edicion-text reveal">
                <p><strong>Del 9 al 11 de diciembre de 2020</strong>, el Concurso Nacional del Vino Peruano reunió en el Hotel El Carmelo de Ica a destacados productores y especialistas del sector vitivinícola para una nueva edición dedicada a reconocer la calidad y excelencia de los vinos del país.</p>
                <p>El certamen fue organizado de manera conjunta por CITEagroindustrial, la Dirección Regional de Producción y la Cámara de Comercio de Ica, consolidando una alianza estratégica en favor del desarrollo de la industria vitivinícola peruana.</p>
                <p>Durante esta edición se recibieron 104 muestras, representativas de las principales regiones productoras del Perú, las cuales fueron evaluadas bajo rigurosos estándares técnicos por un panel conformado por 12 catadores expertos. Gracias a este proceso de evaluación, más de 55 muestras fueron distinguidas con medallas de Oro, Plata y Bronce, reconociendo la calidad, innovación y esfuerzo de los productores nacionales y reafirmando el compromiso del concurso con la promoción de la cultura del vino peruano.</p>
              </div>
            </div>
            <div className="edicion-photo-wrap reveal">
              <div className="edicion-photo-arch" style={{ marginTop: '100px' }}>
                <img
                  src="https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp"
                  alt="Edición 2020 - Hotel El Carmelo, Ica"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS 2020 */}
      <div className="resultado-header">RESULTADOS</div>
      <section className="medals-section">
        <div className="container">
          <div className="medals-grid">
            <div className="medal-col reveal">
              <div className="medal-icon-wrap">
                <div className="medal-circle gold">🏅</div>
              </div>
              <div className="medal-label">Medalla de Oro</div>
              <div className="medal-count">20 Muestras</div>
              <div className="medal-card">
                <div className="card-title">Felicitamos,</div>
                <ul>
                  <li>4 muestras en el grupo de Variedades Patrimoniales</li>
                  <li>16 en el grupo de Variedades Nobles.</li>
                </ul>
                <div className="card-footer">¡Excelente trabajo y sigamos así!</div>
              </div>
            </div>
            <div className="medal-col reveal">
              <div className="medal-icon-wrap">
                <div className="medal-circle silver">🥈</div>
              </div>
              <div className="medal-label">Medalla de Plata</div>
              <div className="medal-count">20 Muestras</div>
              <div className="medal-card">
                <div className="card-title">Felicitamos,</div>
                <ul>
                  <li>8 muestras en el grupo de Variedades Patrimoniales</li>
                  <li>12 en el grupo de Variedades Nobles.</li>
                </ul>
                <div className="card-footer">¡Un logro impresionante que merece reconocimiento!</div>
              </div>
            </div>
            <div className="medal-col reveal">
              <div className="medal-icon-wrap">
                <div className="medal-circle bronze">🥉</div>
              </div>
              <div className="medal-label">Medalla de Bronce</div>
              <div className="medal-count">20 Muestras</div>
              <div className="medal-card">
                <div className="card-title">Felicitamos,</div>
                <ul>
                  <li>13 muestras en Variedades Patrimoniales</li>
                  <li>2 en Variedades Nobles.</li>
                </ul>
                <div className="card-footer">¡Este logro es digno de una medalla de bronce!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK STATS */}
      <section className="dark-stats">
        <div className="container">
          <h3 className="dark-stats cont-title" style={{ margin: 0, padding: 0, border: 'none', background: 'none' }}>Contamos la historia</h3>
          <div className="stats-row">
            <div className="stat-item"><b>104</b><small>Muestras</small></div>
            <div className="stat-item"><b>12</b><small>Jurados</small></div>
            <div className="stat-item"><b>+55</b><small>Premiados</small></div>
          </div>
          <div className="venue">Realizado en el Hotel El Carmelo.</div>
        </div>
      </section>
    </>
  );
};
