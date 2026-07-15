import React from 'react';
import { Link } from 'react-router-dom';

export const Inscripcion: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="sec-eyebrow">Cómo participar</div>
        <h2 className="sec-title">Proceso de Inscripción</h2>
        <div className="divider-line"></div>

        <div className="steps-inscripcion reveal">
          <div className="step-item">
            <div className="step-num"></div>
            <div className="step-body">
              <h4>Leer el reglamento</h4>
              <p>Revisa con atención las bases y el reglamento general del concurso para conocer todos los requisitos de participación.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-num"></div>
            <div className="step-body">
              <h4>Completar el formulario</h4>
              <p>Descarga y completa la ficha de inscripción con los datos de tu bodega y las muestras que participarán en el certamen.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-num"></div>
            <div className="step-body">
              <h4>Realizar el pago</h4>
              <p>Efectúa el pago de inscripción según el número de muestras que desees registrar y las categorías correspondientes.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-num"></div>
            <div className="step-body">
              <h4>Enviar la documentación</h4>
              <p>Remite la ficha de inscripción completada junto con el comprobante de pago al correo oficial del concurso.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-num"></div>
            <div className="step-body">
              <h4>Entregar las muestras</h4>
              <p>Haz llegar tus muestras físicas debidamente etiquetadas a la sede de recepción indicada dentro del plazo establecido.</p>
            </div>
          </div>
          <div className="step-item">
            <div className="step-num"></div>
            <div className="step-body">
              <h4>Confirmación de inscripción</h4>
              <p>Recibirás una confirmación oficial por correo electrónico con todos los detalles y la validación de tu participación.</p>
            </div>
          </div>
        </div>

        <div className="inscripcion-btns">
          <Link to="/contacto" className="btn-primary">Inscribirme</Link>
          <Link to="/reglamento" className="btn-outline">Descargar ficha de inscripción</Link>
          <Link to="/reglamento" className="btn-outline">Consultar bases técnicas</Link>
        </div>
      </div>
    </section>
  );
};
