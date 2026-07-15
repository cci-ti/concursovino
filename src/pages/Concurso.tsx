import React from 'react';
import { Link } from 'react-router-dom';

export const Concurso: React.FC = () => {
  return (
    <>
      {/* SECCIÓN HISTORIA */}
      <section className="section alt" style={{ paddingBottom: '5rem' }}>
        <div className="container">
          <div className="sec-eyebrow">Nuestra Historia</div>
          <h2 className="sec-title">Una historia que comenzó<br />en el momento más desafiante.</h2>
          <div className="divider-line"></div>

          <div className="editorial-story-container">
            {/* Bloque 1 */}
            <div className="story-block reveal">
              <div className="story-block-text">
                <span className="story-block-num">01</span>
                <br></br>
                <h3>El Origen (2020)</h3>
                <h4>Un nacimiento en medio del desafío global</h4>
                <p>Hay proyectos que nacen de una oportunidad. Otros nacen de una necesidad.</p>
                <p>El Concurso Nacional del Vino Peruano nació en uno de los momentos más complejos para la humanidad: la pandemia. Mientras el mundo se detenía y la incertidumbre marcaba el rumbo de todos los sectores, las bodegas peruanas continuaban trabajando en silencio. La vid siguió su ciclo, las cosechas no podían esperar y cientos de productores mantuvieron viva una tradición que forma parte del patrimonio del Perú.</p>
                <p>Fue entonces cuando surgió una convicción: el vino peruano merecía un espacio donde su calidad fuera reconocida con rigor, transparencia y prestigio.</p>
                <p>Así nació el Concurso Nacional del Vino Peruano, con el propósito de impulsar la excelencia, promover la mejora continua y fortalecer la cultura vitivinícola del país.</p>
              </div>
              <div className="story-block-image">
                <img src="https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp" alt="El Origen" />
              </div>
            </div>

            {/* Bloque 2 - Invertido */}
            <div className="story-block block-reverse reveal">
              <div className="story-block-text">
                <span className="story-block-num">02</span>
                <br></br>
                <h3>La Evolución</h3>
                <h4>De la producción artesanal a la calidad de nivel mundial</h4>
                <p>Desde aquella primera edición hemos sido testigos de la extraordinaria evolución de nuestra industria. Hemos visto llegar botellas con etiquetas de elaboración artesanal, reflejo del enorme esfuerzo y dedicación de pequeñas bodegas que apostaban por crecer.</p>
                <p>Hoy, esas mismas bodegas presentan vinos con una identidad consolidada, etiquetas de nivel internacional, procesos enológicos más precisos y una calidad que demuestra el gran avance de la vitivinicultura peruana.</p>
                <p>Cada edición del concurso ha acompañado esa transformación.</p>
                <p>Más que otorgar medallas, el certamen se ha convertido en una herramienta para medir el progreso del sector, incentivar la innovación y reconocer el compromiso de quienes trabajan por elevar el nivel del vino peruano.</p>
              </div>
              <div className="story-block-image">
                <img src="https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png" alt="La Evolución" />
              </div>
            </div>

            {/* Bloque 3 */}
            <div className="story-block reveal">
              <div className="story-block-text">
                <span className="story-block-num">03</span>
                <br></br>
                <h3>Expansión e Iniciativas</h3>
                <h4>Recorriendo valles y acercando el vino al consumidor</h4>
                <p>Con el paso de los años, el concurso también ha recorrido distintas regiones del país, llevando consigo una visión descentralizada que pone en valor la diversidad de nuestros valles vitivinícolas y el enorme potencial de cada territorio productor.</p>
                <p>El crecimiento del concurso permitió ampliar su impacto con nuevas iniciativas que fortalecen la cultura del vino. Así nacieron el Concurso Nacional de Etiquetas, que reconoce la creatividad y la identidad visual de las marcas; y el Salón de Aromas, un espacio que acerca el vino al consumidor a través de experiencias sensoriales y educativas.</p>
                <p>Pero la historia no podía detenerse allí.</p>
              </div>
              <div className="story-block-image">
                <img src="https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png" alt="Expansión" />
              </div>
            </div>

            {/* Bloque 4 - Invertido */}
            <div className="story-block block-reverse reveal">
              <div className="story-block-text">
                <span className="story-block-num">04</span>
                <br></br>
                <h3>Proyección Internacional</h3>
                <h4>Conectando al Perú con el mundo y buscando la excelencia OIV</h4>
                <p>Impulsado por el deseo permanente de seguir creciendo y convencido de que el vino peruano puede ocupar un lugar destacado en el escenario mundial, el concurso dio un nuevo paso con la creación del Concurso Internacional de Vinos de Origen y Patrimonio.</p>
                <p>Esta iniciativa reúne vinos provenientes de territorios con identidad, tradición e historia, fortaleciendo el intercambio entre países y proyectando al Perú como sede de competencias enológicas de alcance internacional.</p>
                <p>Su creación también responde a un objetivo estratégico: avanzar hacia la obtención del reconocimiento de la Organización Internacional de la Viña y el Vino (OIV), mediante su sello oficial para concursos enológicos, una distinción que certifica el cumplimiento de los más altos estándares de organización, evaluación y transparencia. Este desafío representa nuestro compromiso permanente con la excelencia y la mejora continua.</p>
                <p>Hoy, el Concurso Nacional del Vino Peruano es mucho más que una competencia. Es el reflejo de una industria que ha sabido evolucionar, una plataforma que preserva nuestro patrimonio vitivinícola y proyecta al Perú hacia el mundo.</p>
              </div>
              <div className="story-block-image">
                <img src="https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp" alt="Proyección Internacional" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER CITADO HISTORIA */}
      <section
        className="history-banner"
        style={{
          backgroundImage: "linear-gradient(rgba(74, 16, 25, 0.88), rgba(74, 16, 25, 0.88)), url('https://images.unsplash.com/photo-1506377585622-bedcbb5a8baf?w=1600&q=70')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          padding: '2rem 2rem',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="decorator" style={{ fontSize: '3rem', color: 'var(--gold)', marginBottom: '1rem', fontFamily: 'serif', lineHeight: 1 }}>“</div>
          <p
            className="summary-quote"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.6rem',
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: '#fff',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            Es el reconocimiento al trabajo de productores, enólogos, catadores e instituciones que creen en el potencial del vino peruano. Es una plataforma que impulsa la calidad, preserva nuestro patrimonio vitivinícola y proyecta al Perú hacia el mundo. Porque detrás de cada botella hay una historia. Detrás de cada cosecha hay una familia. Y detrás de cada edición del concurso existe un compromiso inquebrantable: reconocer la excelencia, honrar el origen y construir el futuro del vino peruano.
          </p>
          <p
            className="summary-author"
            style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--gold-light)',
              textAlign: 'center'
            }}
          >
            Comité Organizador · Concurso Nacional del Vino Peruano
          </p>
        </div>
      </section>

      {/* POR QUÉ PARTICIPAR */}
      <section className="section">
        <div className="container">
          <div className="sec-eyebrow">¿Por qué participar?</div>
          <h2 className="sec-title" style={{ margin: 0, padding: 0, border: 'none', background: 'none' }}>Porque tu vino merece ser reconocido.</h2>
          <div className="divider-line"></div>
          <div className="por-que-grid">
            <div className="por-que-card reveal">
              <div className="icon">🏆</div>
              <h4>Evaluación a Ciegas</h4>
              <p>Es la plataforma donde las mejores bodegas del país demuestran la calidad de sus vinos ante un jurado de prestigio nacional e internacional, mediante una evaluación técnica, imparcial y a ciegas.</p>
            </div>
            <div className="por-que-card reveal">
              <div className="icon">📈</div>
              <h4>Fortalecer tu Marca</h4>
              <p>Participar significa obtener un reconocimiento que genera confianza en el consumidor, te ayuda a diferenciarte en el mercado y a formar parte del certamen que impulsa la excelencia de la vitivinicultura peruana.</p>
            </div>
            <div className="por-que-card reveal">
              <div className="icon">🌎</div>
              <h4>Internacionalización</h4>
              <p>El concurso da un paso hacia la internacionalización con el objetivo de alcanzar los más altos estándares de la industria y el reconocimiento de la OIV, consolidando al Perú como un referente en el mundo del vino.</p>
            </div>
          </div>
          <p
            style={{
              marginTop: '2.8rem',
              textAlign: 'center',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.45rem',
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'var(--burgundy)'
            }}
            className="reveal"
          >
            Tu vino tiene calidad. Ahora es momento de demostrarla.
          </p>
        </div>
      </section>

      {/* EQUIPO ORGANIZADOR */}
      <section className="section alt">
        <div className="container">
          <div className="sec-eyebrow">El Concurso</div>
          <h2 className="sec-title">Equipo Organizador</h2>
          <div className="divider-line"></div>
          <div className="equipo-grid">
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--text)' }}>
                Instituciones Organizadoras
              </h3>
              <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <img
                  src="https://camaraica.org.pe/wp-content/uploads/2026/03/LOGO-FULL-COLOR-scaled.webp"
                  alt="Cámara de Comercio de Ica"
                  style={{ maxHeight: '110px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', margin: '1.5rem 0 1rem', color: 'var(--text)' }}>
                Comité Técnico
              </h3>
              <ul className="comite-list reveal" style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                <li><span className="nombre">Alan Watkin</span><span className="cargo">Presidente del concurso</span></li>
                <li><span className="nombre">Jose Carlos Falconi</span><span className="cargo">Director de Concurso</span></li>
                <li><span className="nombre">Jaime Pumayauli</span><span className="cargo">Director de Cata</span></li>
                <li><span className="nombre">Claudia Castro</span><span className="cargo">Directora del evento</span></li>
                <li><span className="nombre">Nahomy Villagaray</span><span className="cargo">Auxiliar de Evento</span></li>
                <li><span className="nombre">Zahir Huamán</span><span className="cargo">Auxiliar de Concurso</span></li>
              </ul>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', margin: '1.5rem 0 1rem', color: 'var(--text)' }}>
                Cuerpo de Jurados
              </h3>
              <div className="reveal" style={{ marginTop: '0.5rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-soft)', marginBottom: '1rem' }}>
                  El concurso cuenta con jurados y catadores expertos de prestigio nacional e internacional.
                </p>
                <Link
                  to="/jueces"
                  className="btn-outline"
                  style={{ display: 'inline-block', fontSize: '0.8rem', padding: '0.6rem 1.2rem' }}
                >
                  Ver Relación Oficial de Jurados
                </Link>
              </div>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: '1.2rem', color: 'var(--text)' }}>
                Sedes del Concurso
              </h3>
              <div className="timeline reveal">
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2020</div>
                  <div className="tl-edition">I Concurso Nacional del Vino Peruano</div>
                  <div className="tl-place">Ciudad de Ica</div>
                  <div className="tl-venue">Hotel El Carmelo</div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2021</div>
                  <div className="tl-edition">II Concurso Nacional del Vino Peruano</div>
                  <div className="tl-place">Ciudad de Ica</div>
                  <div className="tl-venue">Hotel Casa Sur</div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2022</div>
                  <div className="tl-edition">III Concurso Nacional del Vino Peruano</div>
                  <div className="tl-place">Paracas (Pisco, Ica)</div>
                  <div className="tl-venue">Hotel Radisson Resort Paracas</div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2023</div>
                  <div className="tl-edition">IV Concurso Nacional del Vino Peruano</div>
                  <div className="tl-place">Lima</div>
                  <div className="tl-venue">Universidad San Ignacio de Loyola (USIL), La Molina</div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2024</div>
                  <div className="tl-edition">V Concurso Nacional del Vino Peruano</div>
                  <div className="tl-place">Ica</div>
                  <div className="tl-venue">Ciudad de Ica</div>
                </div>
                <div className="tl-item">
                  <div className="tl-dot"></div>
                  <div className="tl-year">2025</div>
                  <div className="tl-edition">VI Concurso Nacional del Vino Peruano</div>
                  <div className="tl-place">Tacna</div>
                  <div className="tl-venue">Ciudad de Tacna</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
