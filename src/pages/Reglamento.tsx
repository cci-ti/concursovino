import React from 'react';
import { FileText, ClipboardList, Edit } from 'lucide-react';

export const Reglamento: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="sec-eyebrow">Bases del Concurso</div>
        <h2 className="sec-title">Reglamento y Bases</h2>
        <div className="divider-line"></div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }} className="reveal">
          <div className="por-que-card">
            <div className="icon">
              <FileText size={36} strokeWidth={1.5} />
            </div>
            <h4>Reglamento General</h4>
            <p>Normas y condiciones generales de participación y juzgamiento en el Concurso Nacional del Vino Peruano.</p>
            <a href="#" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '.78rem', padding: '.7rem 1.4rem' }}>
              Descargar PDF
            </a>
          </div>
          <div className="por-que-card">
            <div className="icon">
              <ClipboardList size={36} strokeWidth={1.5} />
            </div>
            <h4>Bases del Concurso</h4>
            <p>Detalle de categorías aceptadas, variedades de uva patrimoniales y nobles, y criterios de evaluación técnica.</p>
            <a href="#" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '.78rem', padding: '.7rem 1.4rem' }}>
              Descargar PDF
            </a>
          </div>
          <div className="por-que-card">
            <div className="icon">
              <Edit size={36} strokeWidth={1.5} />
            </div>
            <h4>Declaración Jurada</h4>
            <p>Formulario oficial de declaración jurada del productor requerido para oficializar el registro de muestras.</p>
            <a href="#" className="btn-primary" style={{ display: 'inline-block', marginTop: '1.5rem', fontSize: '.78rem', padding: '.7rem 1.4rem' }}>
              Descargar PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
