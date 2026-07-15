import React, { useState } from 'react';

interface Juez {
  nombre: string;
  cargo: string;
}

const juecesConcurso1: Juez[] = [
  { nombre: 'Juan Mendiola', cargo: 'Catador' },
  { nombre: 'Jonatan Serrano', cargo: 'Sommelier' },
  { nombre: 'Héctor Tuesta', cargo: 'Sommelier' },
  { nombre: 'Juan Carlos Hidalgo', cargo: 'Enólogo' },
  { nombre: 'Armando Pone', cargo: 'Sommelier' },
  { nombre: 'Renato Piaggio', cargo: 'Sommelier' },
  { nombre: 'Diego Cruz', cargo: 'Sommelier' },
  { nombre: 'Oswaldo Fernandez', cargo: '' },
  { nombre: 'Bryan Rubio', cargo: 'Sommelier' },
  { nombre: 'Pedro Guerrero', cargo: 'Sommelier' },
  { nombre: 'Ronal Carhuas', cargo: 'Sommelier' },
  { nombre: 'Jesús Castro', cargo: 'Enólogo' }
];

const juecesConcurso2: Juez[] = [
  { nombre: 'Hector Tuesta Rivera', cargo: 'Sommelier Profesional' },
  { nombre: 'Manuel Carrasco Valderrama', cargo: 'Enólogo y Sommelier' },
  { nombre: 'Jesus Castro Rojas', cargo: 'Ing en Enología y Vitivinicultura' },
  { nombre: 'Gina Vasallo Valleumbrocio', cargo: 'Enóloga e Investigadora' },
  { nombre: 'Juan Pablo Figueroa', cargo: 'Sommelier Profesional' },
  { nombre: 'Lucero Villagaria', cargo: 'Sommelier Profesional' },
  { nombre: 'Danny Villanueva', cargo: 'Enólogo' },
  { nombre: 'Alexander Sanabria', cargo: 'Enólogo' },
  { nombre: 'Rodrigo Avilés', cargo: 'Sommelier' },
  { nombre: 'Armando Pone', cargo: 'Sommelier' },
  { nombre: 'Bryan Rubio', cargo: 'Sommelier' },
  { nombre: 'Carlos Beltran', cargo: 'Sommelier' },
  { nombre: 'Diego Cruz', cargo: 'Sommelier' },
  { nombre: 'Renato Piaggio', cargo: 'Sommelier' }
];

const juecesConcurso3: Juez[] = [
  { nombre: 'Danny Villanueva', cargo: 'Enólogo' },
  { nombre: 'Manuel Carrasco', cargo: 'Enólogo' },
  { nombre: 'Alexander Sanabria', cargo: 'Enólogo' },
  { nombre: 'Jesus Castro', cargo: 'Enólogo' },
  { nombre: 'Juan Carlos Hidalgo', cargo: 'Enólogo' },
  { nombre: 'Hector Tuesta', cargo: 'Sommelier' },
  { nombre: 'Andrea Bruno', cargo: 'Sommelier' },
  { nombre: 'Rodrigo Avilés', cargo: 'Enólogo' },
  { nombre: 'Diego Cruz', cargo: 'Sommelier' },
  { nombre: 'Juan Pablo Figueroa', cargo: 'Sommelier' },
  { nombre: 'Joseph Ruiz', cargo: 'Sommelier' },
  { nombre: 'Renato Piaggio', cargo: 'Sommelier' },
  { nombre: 'Rosario Olivas', cargo: 'Sommelier' },
  { nombre: 'Juan Carlos Ramos', cargo: 'Enólogo' }
];

const juecesConcurso4: Juez[] = [
  { nombre: 'Rodrigo Avilés', cargo: 'Enólogo' },
  { nombre: 'Joseph Ruiz', cargo: 'Sommelier' },
  { nombre: 'Juan Pablo Figueroa', cargo: 'Sommelier' },
  { nombre: 'Mirtha Noceda', cargo: 'Sommelier' },
  { nombre: 'Wilson Dominguez', cargo: 'Sommelier' },
  { nombre: 'Manuel Carrasco', cargo: 'Enólogo' },
  { nombre: 'Alexander Zanabria', cargo: 'Enólogo' },
  { nombre: 'Diego Cruz', cargo: 'Sommelier' },
  { nombre: 'Isbet Monroy', cargo: 'Sommelier' },
  { nombre: 'Claudia Eraso', cargo: 'Sommelier' },
  { nombre: 'Claudia Martin', cargo: 'Enólogo' },
  { nombre: 'Sheila Medina', cargo: 'Enóloga' },
  { nombre: 'Jorge Jimenez', cargo: 'Sommelier' },
  { nombre: 'Soledad Marroquin', cargo: 'Sommelier' },
  { nombre: 'Danny Villanueva', cargo: 'Enólogo' },
  { nombre: 'Jesus Castro', cargo: 'Enólogo' },
  { nombre: 'Erick Calienes', cargo: 'Sommelier' },
  { nombre: 'Noryelith Quintana', cargo: 'Sommelier' },
  { nombre: 'Martin Torre de la Gala', cargo: 'Vitivinicultor' }
];

export const Jueces: React.FC = () => {
  // Independent search states
  const [searchQuery1, setSearchQuery1] = useState('');
  const [searchQuery2, setSearchQuery2] = useState('');
  const [searchQuery3, setSearchQuery3] = useState('');
  const [searchQuery4, setSearchQuery4] = useState('');

  // Filtering
  const filtered1 = juecesConcurso1.filter(
    (j) =>
      j.nombre.toLowerCase().includes(searchQuery1.toLowerCase()) ||
      j.cargo.toLowerCase().includes(searchQuery1.toLowerCase())
  );

  const filtered2 = juecesConcurso2.filter(
    (j) =>
      j.nombre.toLowerCase().includes(searchQuery2.toLowerCase()) ||
      j.cargo.toLowerCase().includes(searchQuery2.toLowerCase())
  );

  const filtered3 = juecesConcurso3.filter(
    (j) =>
      j.nombre.toLowerCase().includes(searchQuery3.toLowerCase()) ||
      j.cargo.toLowerCase().includes(searchQuery3.toLowerCase())
  );

  const filtered4 = juecesConcurso4.filter(
    (j) =>
      j.nombre.toLowerCase().includes(searchQuery4.toLowerCase()) ||
      j.cargo.toLowerCase().includes(searchQuery4.toLowerCase())
  );

  return (
    <>
      {/* HEADER BANNER */}
      <div className="modal-header-banner">
        <h2>Listado De Jueces</h2>
        <p>Imparcialidad Y Justicia En Cada Decisión</p>
      </div>

      {/* BODY CONTENT */}
      <div className="modal-body">
        <div className="container">
          <div className="modal-jueces-grid">
            
            {/* I CONCURSO */}
            <div className="jueces-table-section">
              <h4 className="jueces-table-title">I Concurso Nacional del Vino Peruano</h4>
              <div className="table-search-row">
                <input
                  type="text"
                  placeholder="Search..."
                  className="table-search-input"
                  value={searchQuery1}
                  onChange={(e) => setSearchQuery1(e.target.value)}
                />
                <button className="table-search-btn" onClick={() => setSearchQuery1('')}>-</button>
              </div>
              <div className="jueces-table-wrap">
                <table className="jueces-table">
                  <thead>
                    <tr>
                      <th>Nombres</th>
                      <th>Profesión/Cargo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered1.length > 0 ? (
                      filtered1.map((j, idx) => (
                        <tr key={idx}>
                          <td>{j.nombre}</td>
                          <td>{j.cargo || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="jueces-no-results">No se encontraron jueces.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* II CONCURSO */}
            <div className="jueces-table-section">
              <h4 className="jueces-table-title">II Concurso Nacional del Vino Peruano</h4>
              <div className="table-search-row">
                <input
                  type="text"
                  placeholder="Search..."
                  className="table-search-input"
                  value={searchQuery2}
                  onChange={(e) => setSearchQuery2(e.target.value)}
                />
                <button className="table-search-btn" onClick={() => setSearchQuery2('')}>-</button>
              </div>
              <div className="jueces-table-wrap">
                <table className="jueces-table">
                  <thead>
                    <tr>
                      <th>Nombres</th>
                      <th>Profesión/Cargo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered2.length > 0 ? (
                      filtered2.map((j, idx) => (
                        <tr key={idx}>
                          <td>{j.nombre}</td>
                          <td>{j.cargo || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="jueces-no-results">No se encontraron jueces.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* III CONCURSO */}
            <div className="jueces-table-section">
              <h4 className="jueces-table-title">III Concurso Nacional del Vino Peruano</h4>
              <div className="table-search-row">
                <input
                  type="text"
                  placeholder="Search..."
                  className="table-search-input"
                  value={searchQuery3}
                  onChange={(e) => setSearchQuery3(e.target.value)}
                />
                <button className="table-search-btn" onClick={() => setSearchQuery3('')}>-</button>
              </div>
              <div className="jueces-table-wrap">
                <table className="jueces-table">
                  <thead>
                    <tr>
                      <th>Nombres</th>
                      <th>Profesión/Cargo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered3.length > 0 ? (
                      filtered3.map((j, idx) => (
                        <tr key={idx}>
                          <td>{j.nombre}</td>
                          <td>{j.cargo || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="jueces-no-results">No se encontraron jueces.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* IV CONCURSO */}
            <div className="jueces-table-section">
              <h4 className="jueces-table-title">IV Concurso Nacional del Vino Peruano</h4>
              <div className="table-search-row">
                <input
                  type="text"
                  placeholder="Search..."
                  className="table-search-input"
                  value={searchQuery4}
                  onChange={(e) => setSearchQuery4(e.target.value)}
                />
                <button className="table-search-btn" onClick={() => setSearchQuery4('')}>-</button>
              </div>
              <div className="jueces-table-wrap">
                <table className="jueces-table">
                  <thead>
                    <tr>
                      <th>Nombres</th>
                      <th>Profesión/Cargo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered4.length > 0 ? (
                      filtered4.map((j, idx) => (
                        <tr key={idx}>
                          <td>{j.nombre}</td>
                          <td>{j.cargo || ''}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={2} className="jueces-no-results">No se encontraron jueces.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
