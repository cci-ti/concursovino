import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  url: string;
  caption: string;
  location: string;
}

interface Edition {
  id: string;
  title: string;
  description: string;
  icon: string;
  photos: Photo[];
}

const editionsData: Edition[] = [
  {
    id: "2020",
    title: "I Edición - Lima 2020",
    description: "Inauguración histórica de la competencia nacional, reuniendo a las principales bodegas de los valles del sur en catas profesionales a ciegas.",
    icon: "🍷",
    photos: [
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Evaluación organoléptica a ciegas por el jurado calificador.",
        location: "Hotel Country Club, San Isidro"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Inspección previa de las vides en el valle de evaluación.",
        location: "Viñedo Queirolo, Ica"
      },
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Mesa técnica de sumilleres puntuando los primeros vinos tintos.",
        location: "San Isidro, Lima"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Selección oficial de botellas patrimoniales participantes.",
        location: "Almacén Central del Concurso"
      }
    ]
  },
  {
    id: "2021",
    title: "II Edición - Ica 2021",
    description: "Celebrada en el corazón vitivinícola del país, destacando el resurgimiento de variedades criollas patrimoniales y piscos de guarda.",
    icon: "🍇",
    photos: [
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Cosecha y selección manual de uva Quebranta en el campo.",
        location: "Fundo Tres Esquinas, Subtanjalla"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Evaluación de barricas de roble americano en sala de crianza.",
        location: "Bodega Tacama, Ica"
      },
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Cata técnica de vinos blancos peruanos Albilla y Torontel.",
        location: "Ica, Perú"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Panel de jueces internacionales revisando las fichas OIV.",
        location: "Hacienda La Caravedo"
      }
    ]
  },
  {
    id: "2022",
    title: "III Edición - Arequipa 2022",
    description: "Los valles de altura y de desierto expusieron vinos con notas minerales y acidez vibrante en el marco del majestuoso cañón del Colca.",
    icon: "✨",
    photos: [
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Vides de altura creciendo bajo el sol andino del sur.",
        location: "Valle de Majes, Arequipa"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Servido protocolar de muestras finalistas clasificadas.",
        location: "Casona Tristan del Pozo, Arequipa"
      },
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Fase visual de cata: análisis de limpidez y matices de color.",
        location: "Arequipa Centro Histórico"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Brindis de clausura tras la entrega de medallas de oro.",
        location: "Club de la Unión, Arequipa"
      }
    ]
  },
  {
    id: "2023",
    title: "IV Edición - Moquegua 2023",
    description: "Puesta en valor de la ruta del vino de Moquegua, uniendo bodegas tradicionales y bodegas modernas de pequeña escala artesanal.",
    icon: "🍾",
    photos: [
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Apertura de espumantes peruanos bajo método tradicional.",
        location: "Valle de Moquegua"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Análisis técnico sensorial de vinos de uva Negra Criolla.",
        location: "Mesa de jueces de Moquegua"
      },
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Cena de premiación con productores vitivinícolas locales.",
        location: "Salón Consistorial, Moquegua"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Reunión de enólogos evaluando nuevas mezclas de guarda.",
        location: "Bodega Parras y Reyes"
      }
    ]
  },
  {
    id: "2024",
    title: "V Edición - Gran Final Lima 2024",
    description: "Edición con récord de muestras y participación de más de 65 bodegas de Ica, Lima, Arequipa, Moquegua y Tacna.",
    icon: "🥇",
    photos: [
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Botella ganadora del premio Gran Medalla de Oro 2024.",
        location: "Gala de Premiación, Miraflores"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Copa de degustación capturando reflejos rubí en cata de tintos.",
        location: "Swissôtel, San Isidro"
      },
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Mesa del jurado de honor deliberando los campeones de categoría.",
        location: "San Isidro, Lima"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Paisaje vitícola del concurso: el esfuerzo del viticultor.",
        location: "Valle de Lunahuaná, Cañete"
      }
    ]
  },
  {
    id: "2025",
    title: "VI Edición - Bicentenario 2025",
    description: "La edición conmemorativa que consolida el prestigio de la vitivinicultura peruana a nivel global, con la participación de catadores del extranjero.",
    icon: "🎉",
    photos: [
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Torta conmemorativa y brindis oficial de apertura.",
        location: "Palacio de Gobierno, Lima"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Copas dispuestas para la evaluación final de Cabernet Sauvignon y Syrah.",
        location: "Club Empresarial, Lima"
      },
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Muestras de racimos patrimoniales presentados en la feria técnica.",
        location: "Feria Agropecuaria Nacional"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Degustación de Malbec peruano del desierto en Ica.",
        location: "Valle del Sol, Ica"
      }
    ]
  }
];

export const Galeria: React.FC = () => {
  const [activeEditionId, setActiveEditionId] = useState<string>("2025");
  const [currentPhotoIdx, setCurrentPhotoIdx] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const activeEdition = editionsData.find(ed => ed.id === activeEditionId) || editionsData[editionsData.length - 1];

  const totalPhotos = activeEdition.photos.length;
  const prevPhotoIdx = (currentPhotoIdx - 1 + totalPhotos) % totalPhotos;
  const nextPhotoIdx = (currentPhotoIdx + 1) % totalPhotos;

  // Sync index boundaries on edition change
  const handleEditionChange = (edId: string) => {
    setActiveEditionId(edId);
    setCurrentPhotoIdx(0);
  };

  // Prevent scroll when Lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        handleNextPhoto();
      } else if (e.key === "ArrowLeft") {
        handlePrevPhoto();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPhotoIdx, totalPhotos]);

  const handlePrevPhoto = () => {
    setCurrentPhotoIdx((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIdx((prev) => (prev + 1) % totalPhotos);
  };

  // Motion variants
  const tabSlideVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };

  return (
    <section className="section alt" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="gallery-section-header">
          <div className="sec-eyebrow">Galería Histórica</div>
          <h2 className="sec-title">Imágenes de las Ediciones</h2>
          <div className="divider-line"></div>
        </div>

        {/* Edition selector Tabs */}
        <div className="gallery-tabs-wrapper">
          <div className="gallery-tabs">
            {editionsData.map((ed) => {
              const isActive = ed.id === activeEditionId;
              return (
                <button
                  key={ed.id}
                  onClick={() => handleEditionChange(ed.id)}
                  className={`gallery-tab-btn ${isActive ? 'active' : ''}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="gallery-active-pill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '999px',
                        background: 'var(--burgundy)',
                        zIndex: -1
                      }}
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span style={{ marginRight: '0.35rem' }}>{ed.icon}</span>
                  {ed.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Banner of selected edition */}
        <motion.div
          key={`banner-${activeEditionId}`}
          initial="hidden"
          animate="visible"
          variants={tabSlideVariants}
          className="gallery-edition-banner"
        >
          <h3>{activeEdition.title}</h3>
          <p>{activeEdition.description}</p>
        </motion.div>

        {/* Premium 3D-esque Stacked Card Showroom Carousel */}
        <div className="gallery-3d-stage">
          {/* Previous Card (Left Peek) */}
          <div
            className="gallery-3d-card left"
            onClick={handlePrevPhoto}
          >
            <img src={activeEdition.photos[prevPhotoIdx].url} alt="Anterior" />
            <div className="gallery-3d-card-overlay-peek" />
          </div>

          {/* Active Card (Center Stage) */}
          <div
            className="gallery-3d-card center"
            onClick={() => setIsLightboxOpen(true)}
          >
            {/* Zoom hint */}
            <div className="gallery-carousel-zoom-hint">
              <Maximize2 size={12} />
              <span>Ampliar</span>
            </div>

            {/* Left navigation arrow inside main card */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}
              className="gallery-carousel-nav-btn prev"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Right navigation arrow inside main card */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }}
              className="gallery-carousel-nav-btn next"
              aria-label="Foto siguiente"
            >
              <ChevronRight size={22} />
            </button>

            <img src={activeEdition.photos[currentPhotoIdx].url} alt={activeEdition.photos[currentPhotoIdx].caption} />
          </div>

          {/* Next Card (Right Peek) */}
          <div
            className="gallery-3d-card right"
            onClick={handleNextPhoto}
          >
            <img src={activeEdition.photos[nextPhotoIdx].url} alt="Siguiente" />
            <div className="gallery-3d-card-overlay-peek" />
          </div>
        </div>

        {/* Active photo info display */}
        <motion.div
          key={`caption-${activeEditionId}-${currentPhotoIdx}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="gallery-3d-info-container"
        >
          <div className="gallery-carousel-caption">
            <h4>{activeEdition.photos[currentPhotoIdx].caption}</h4>
            <p>{activeEdition.photos[currentPhotoIdx].location}</p>
            <span>Edición {activeEdition.id} · Concurso Nacional</span>
          </div>

          {/* Interactive Indicator dots */}
          <div className="gallery-carousel-indicators" style={{ justifyContent: 'center', marginTop: '1.2rem' }}>
            {activeEdition.photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPhotoIdx(idx)}
                className={`gallery-carousel-dot ${idx === currentPhotoIdx ? 'active' : ''}`}
                aria-label={`Ir a foto ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* FULLSCREEN LIGHTBOX VISOR (Rendered with Portal directly to body for perfect centering) */}
        {isLightboxOpen && createPortal(
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="lightbox-overlay"
          >
            <div
              className="lightbox-content-box"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="lightbox-close-btn"
                aria-label="Cerrar visor"
              >
                <X size={22} />
              </button>

              {/* Left navigation arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}
                className="lightbox-nav-btn prev"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Right navigation arrow */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNextPhoto(); }}
                className="lightbox-nav-btn next"
                aria-label="Foto siguiente"
              >
                <ChevronRight size={28} />
              </button>

              {/* Image container */}
              <motion.div
                key={currentPhotoIdx}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="lightbox-img-wrapper"
              >
                <img
                  src={activeEdition.photos[currentPhotoIdx].url}
                  alt={activeEdition.photos[currentPhotoIdx].caption}
                  className="lightbox-img"
                />
              </motion.div>

              {/* Photo Caption Box */}
              <div className="lightbox-caption-box">
                <h3>{activeEdition.photos[currentPhotoIdx].caption}</h3>
                <p>{activeEdition.photos[currentPhotoIdx].location}</p>
                <span>Edición {activeEdition.id} · Concurso Nacional</span>
              </div>
            </div>
          </motion.div>,
          document.body
        )}
      </div>
    </section>
  );
};
