import React, { useState } from 'react';

type TabId = 'e2020' | 'e2021' | 'e2022' | 'e2023' | 'e2024' | 'e2025';

export const Historico: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('e2020');

  const getTabClass = (id: TabId) => {
    return activeTab === id ? 'tab-btn active' : 'tab-btn';
  };

  const getPanelClass = (id: TabId) => {
    return activeTab === id ? 'edicion-panel show' : 'edicion-panel';
  };

  return (
    <section className="section alt">
      <div className="container">
        <div className="sec-eyebrow">Ediciones Anteriores</div>
        <h2 className="sec-title">Histórico del Concurso</h2>
        <div className="divider-line"></div>

        <div className="ediciones-tabs">
          <button className={getTabClass('e2020')} onClick={() => setActiveTab('e2020')}>2020 — I</button>
          <button className={getTabClass('e2021')} onClick={() => setActiveTab('e2021')}>2021 — II</button>
          <button className={getTabClass('e2022')} onClick={() => setActiveTab('e2022')}>2022 — III</button>
          <button className={getTabClass('e2023')} onClick={() => setActiveTab('e2023')}>2023 — IV</button>
          <button className={getTabClass('e2024')} onClick={() => setActiveTab('e2024')}>2024 — V</button>
          <button className={getTabClass('e2025')} onClick={() => setActiveTab('e2025')}>2025 — VI</button>
        </div>

        {/* PANEL 2020 */}
        <div className={getPanelClass('e2020')} id="e2020">
          <div className="edicion-header">
            <div className="edicion-num">I</div>
            <div className="edicion-meta">
              <strong>Edición 2020</strong>
              9–11 de diciembre · Hotel El Carmelo, Ica
            </div>
          </div>
          <div className="edicion-stats">
            <div className="edicion-stat"><b>104</b><small>Muestras</small></div>
            <div className="edicion-stat"><b>12</b><small>Catadores</small></div>
            <div className="edicion-stat"><b>+55</b><small>Premiados</small></div>
          </div>
          <div className="edicion-body">
            <p>El Concurso Nacional del Vino Peruano reunió en el Hotel El Carmelo de Ica a destacados productores y especialistas del sector vitivinícola para una nueva edición dedicada a reconocer la calidad y excelencia de los vinos del país. El certamen fue organizado de manera conjunta por CITEagroindustrial, la Dirección Regional de Producción y la Cámara de Comercio de Ica, consolidando una alianza estratégica en favor del desarrollo de la industria vitivinícola peruana.</p>
            <div style={{ marginTop: '1.8rem' }}>
              <a
                href="https://drive.google.com/file/d/17dJ-GdhQfTCcobqZHADSaCIS-d8voaWi/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.65rem 1.3rem' }}
              >
                Ver Resultados Oficiales I Concurso (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* PANEL 2021 */}
        <div className={getPanelClass('e2021')} id="e2021">
          <div className="edicion-header">
            <div className="edicion-num">II</div>
            <div className="edicion-meta">
              <strong>Edición 2021</strong>
              13–15 de diciembre · Hotel Casa Sur, Ica
            </div>
          </div>
          <div className="edicion-stats">
            <div className="edicion-stat"><b>134</b><small>Muestras</small></div>
            <div className="edicion-stat"><b>12</b><small>Catadores</small></div>
            <div className="edicion-stat"><b>+55</b><small>Premiados</small></div>
          </div>
          <div className="edicion-body">
            <p>Del 13 al 15 de diciembre de 2021, el Concurso Nacional del Vino Peruano celebró una nueva edición en el Hotel Casa Sur, Ica, reafirmando su compromiso con la promoción y reconocimiento de la excelencia vitivinícola del país. En esta oportunidad, la organización estuvo a cargo de la Cámara de Comercio de Ica, con el valioso respaldo de diversas instituciones aliadas, fortaleciendo el trabajo conjunto en favor del desarrollo del sector.</p>
            <p>Durante el certamen se recibieron 134 muestras, representando la diversidad, calidad y riqueza de la viticultura peruana. Cada una fue evaluada por un panel de 12 catadores expertos, quienes aplicaron rigurosos criterios técnicos para garantizar un proceso de calificación transparente e imparcial. Como resultado de esta evaluación, más de 55 muestras fueron distinguidas con medallas de Oro, Plata y Bronce, consolidando al Concurso Nacional del Vino Peruano como el principal referente para reconocer la calidad de los vinos producidos en el país.</p>
            <div style={{ marginTop: '1.8rem' }}>
              <a
                href="https://drive.google.com/file/d/1AkNiVrvReFPU2JrEz_kBVmwShv6eU3dm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.65rem 1.3rem' }}
              >
                Ver Resultados Oficiales II Concurso (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* PANEL 2022 */}
        <div className={getPanelClass('e2022')} id="e2022">
          <div className="edicion-header">
            <div className="edicion-num">III</div>
            <div className="edicion-meta">
              <strong>Edición 2022</strong>
              31 oct – 2 nov · Hotel Radisson Resort Paracas, Pisco
            </div>
          </div>
          <div className="edicion-stats">
            <div className="edicion-stat"><b>171</b><small>Muestras</small></div>
            <div className="edicion-stat"><b>12</b><small>Catadores</small></div>
            <div className="edicion-stat"><b>+98</b><small>Premiados</small></div>
          </div>
          <div className="edicion-body">
            <p>Del 31 de octubre al 2 de noviembre de 2022, el Concurso Nacional del Vino Peruano realizó una nueva edición en el Hotel Radisson Resort Paracas, en la provincia de Pisco, consolidando su crecimiento y posicionamiento como el certamen más importante del sector vitivinícola nacional. La organización estuvo a cargo de la Cámara de Comercio, Industria y Turismo de Ica, con el respaldo de diversas instituciones aliadas, reafirmando el compromiso conjunto con el fortalecimiento de la industria del vino peruano.</p>
            <p>En esta edición se recibieron 171 muestras, reflejando el creciente interés y la participación de bodegas de las principales regiones vitivinícolas del país. Las muestras fueron evaluadas por un panel de 12 catadores expertos, quienes aplicaron rigurosos estándares técnicos para garantizar una calificación objetiva y transparente. Como resultado, más de 98 muestras fueron reconocidas con medallas de Oro, Plata y Bronce, destacando la excelencia, innovación y calidad de los vinos peruanos y consolidando al concurso como una plataforma de prestigio para la promoción de la vitivinicultura nacional.</p>
            <div style={{ marginTop: '1.8rem' }}>
              <a
                href="https://drive.google.com/file/d/1fVR1hJzvZazqxEGithAxiKc3k0jeOepc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.65rem 1.3rem' }}
              >
                Ver Resultados Oficiales III Concurso (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* PANEL 2023 */}
        <div className={getPanelClass('e2023')} id="e2023">
          <div className="edicion-header">
            <div className="edicion-num">IV</div>
            <div className="edicion-meta">
              <strong>Edición 2023</strong>
              18–21 de octubre · USIL, La Molina, Lima
            </div>
          </div>
          <div className="edicion-stats">
            <div className="edicion-stat"><b>174</b><small>Muestras</small></div>
            <div className="edicion-stat"><b>14</b><small>Catadores</small></div>
            <div className="edicion-stat"><b>+77</b><small>Premiados</small></div>
          </div>
          <div className="edicion-body">
            <p>Del 18 al 21 de octubre de 2023, el Concurso Nacional del Vino Peruano dio un importante paso en su consolidación nacional al desarrollarse en las instalaciones de la Universidad San Ignacio de Loyola (USIL), en La Molina, Lima. Esta edición fue organizada por la Cámara de Comercio, Industria y Turismo de Ica, en alianza con la Universidad San Ignacio de Loyola (USIL), fortaleciendo la vinculación entre el sector académico y la industria vitivinícola peruana para impulsar la cultura del vino y la excelencia enológica.</p>
            <p>En esta edición participaron 174 muestras, representando la diversidad y calidad de la producción vitivinícola del país. La evaluación estuvo a cargo de un panel conformado por 14 catadores expertos, quienes aplicaron rigurosos criterios técnicos y metodologías internacionales para garantizar un proceso de calificación objetivo y transparente. Como resultado, más de 77 muestras fueron distinguidas con medallas de Oro, Plata y Bronce, reconociendo el esfuerzo, la innovación y la calidad de las bodegas participantes, y reafirmando al Concurso Nacional del Vino Peruano como el máximo referente de evaluación y reconocimiento del vino peruano.</p>
            <div style={{ marginTop: '1.8rem' }}>
              <a
                href="https://drive.google.com/file/d/1u-YrJtxoeLavzcFKK6i1wcxYSapu4anX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.65rem 1.3rem' }}
              >
                Ver Resultados Oficiales IV Concurso (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* PANEL 2024 */}
        <div className={getPanelClass('e2024')} id="e2024">
          <div className="edicion-header">
            <div className="edicion-num">V</div>
            <div className="edicion-meta">
              <strong>Edición 2024</strong>
              Ica · Ciudad de Ica
            </div>
          </div>
          <div className="edicion-stats">
            <div className="edicion-stat"><b>165</b><small>Muestras</small></div>
            <div className="edicion-stat"><b>12</b><small>Catadores</small></div>
            <div className="edicion-stat"><b>+70</b><small>Premiados</small></div>
          </div>
          <div className="edicion-body">
            <p>La quinta edición del Concurso Nacional del Vino Peruano se llevó a cabo en la histórica ciudad vitivinícola de Ica, consolidando los logros y la evaluación técnica de los productores nacionales y promoviendo la mejora constante de la industria local.</p>
            <div style={{ marginTop: '1.8rem' }}>
              <a
                href="https://drive.google.com/file/d/1BcJ5DVrAkGwGt9uzLGuz9vHMJ8XkLULu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.65rem 1.3rem' }}
              >
                Ver Resultados Oficiales V Concurso (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* PANEL 2025 */}
        <div className={getPanelClass('e2025')} id="e2025">
          <div className="edicion-header">
            <div className="edicion-num">VI</div>
            <div className="edicion-meta">
              <strong>Edición 2025</strong>
              24–27 de septiembre · Ciudad de Tacna
            </div>
          </div>
          <div className="edicion-stats">
            <div className="edicion-stat"><b>174</b><small>Muestras</small></div>
            <div className="edicion-stat"><b>13</b><small>Catadores</small></div>
            <div className="edicion-stat"><b>+77</b><small>Premiados</small></div>
          </div>
          <div className="edicion-body">
            <p>Del 24 al 27 de septiembre de 2025, el Concurso Nacional del Vino Peruano celebró su sexta edición en la ciudad de Tacna, marcando un nuevo hito en su proceso de descentralización y fortalecimiento de la industria vitivinícola nacional. Esta edición fue organizada por la Cámara de Comercio, Industria y Turismo de Ica, en alianza con el Gobierno Regional de Tacna, consolidando una articulación estratégica entre el sector público y privado para promover la calidad, competitividad y reconocimiento del vino peruano.</p>
            <p>El certamen reunió 174 muestras, representativas de las principales regiones vitivinícolas del país, las cuales fueron sometidas a una rigurosa evaluación técnica por un panel de 13 catadores expertos, nacionales e internacionales. Gracias a este proceso, más de 77 muestras fueron distinguidas con medallas de Oro, Plata y Bronce, reconociendo la excelencia de los vinos participantes y reafirmando al Concurso Nacional del Vino Peruano como el principal escenario de evaluación, promoción y valorización de la producción vitivinícola del Perú.</p>
            <div style={{ marginTop: '1.8rem' }}>
              <a
                href="https://drive.google.com/file/d/1EM5Oq2cA_U0HulYFTrAPTWQ_0qALXyUW/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.65rem 1.3rem' }}
              >
                Ver Resultados Oficiales VI Concurso (PDF)
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
