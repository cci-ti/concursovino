import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="main" id="mainNav">
      <div className="nav-inner">
        <div className="nav-logo">
          <img src="https://camaraica.org.pe/wp-content/uploads/2026/07/only_logo-removebg-preview.webp" alt="Concurso Nacional del Vino Peruano" className="nav-logo-img" />
          <div className="nav-logo-text">
            Concurso Nacional del Vino Peruano
            <small>Cámara de Comercio de Ica</small>
          </div>
        </div>
        <button className="hamburger" onClick={toggleMenu} aria-label="Abrir menú">
          ☰
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks">
          <li>
            <Link to="/" className={isActive('/')} onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/concurso" className={isActive('/concurso')} onClick={closeMenu}>
              El Concurso
            </Link>
          </li>
          <li>
            <Link to="/inscripcion" className={`${isActive('/inscripcion')} inscripcion-link`} onClick={closeMenu}>
              Inscripción
            </Link>
          </li>
          <li>
            <Link to="/historico" className={isActive('/historico')} onClick={closeMenu}>
              Histórico
            </Link>
          </li>
          <li>
            <Link to="/reglamento" className={isActive('/reglamento')} onClick={closeMenu}>
              Reglamento
            </Link>
          </li>
          <li>
            <Link to="/galeria" className={isActive('/galeria')} onClick={closeMenu}>
              Galería
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="btn-contacto" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
