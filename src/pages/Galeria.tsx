import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  url: string;
  caption?: string;
  location?: string;
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
        caption: "Imagen 1",
        location: "Hotel El Carmelo"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Imagen 2",
        location: "Hotel El Carmelo"
      },
      {
        url: "https://camaraica.org.pe/wp-content/uploads/2024/09/391670310_791967542938942_2891257950320501127_n-1.webp",
        caption: "Imagen 3",
        location: "Hotel El Carmelo"
      },
      {
        url: "https://concursovino.camaraica.org.pe/wp-content/uploads/2025/08/fondo-concurso-vino.png",
        caption: "Imagen 4",
        location: "Hotel El Carmelo"
      }
    ]
  },
  {
    id: "2021",
    title: "II Edición - Ica 2021",
    description: "Celebrada en el corazón vitivinícola del país, destacando el resurgimiento de variedades criollas patrimoniales y piscos de guarda.",
    icon: "🍇",
    photos: [
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2021-II.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2021-II-2.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2021-II-3.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2021-II-Con-exito-se-realizo-el-II-Concurso-Nacional-del-Vino-Peruano-en-la-ciudad-de-Ica-1.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2021-II-Con-exito-se-realizo-el-II-Concurso-Nacional-del-Vino-Peruano-en-la-ciudad-de-Ica-2.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/CONVIP2021-edicion-2021-II.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2021-II-Sr.-Vila.webp" }
    ]
  },
  {
    id: "2022",
    title: "III Edición - Arequipa 2022",
    description: "Los valles de altura y de desierto expusieron vinos con notas minerales y acidez vibrante en el marco del majestuoso cañón del Colca.",
    icon: "✨",
    photos: [
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-2.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-3.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-4.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-5.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-6.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-7.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-8.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-9.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-10.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-11.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-12.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-13.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-JURADOS-1.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-JURADOS-2.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-JURADOS-3.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2022-III-JURADOS-4.webp" }
    ]
  },
  {
    id: "2023",
    title: "IV Edición - Moquegua 2023",
    description: "Puesta en valor de la ruta del vino de Moquegua, uniendo bodegas tradicionales y bodegas modernas de pequeña escala artesanal.",
    icon: "🍾",
    photos: [
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-1-scaled.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-2023-IV-3-scaled.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv2023_-7-scaled.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-2023-JOSE-2-scaled.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-2023-SR.ALAN-4-scaled.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-2023-SRT.CLAUDIA-5-scaled.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-2023_-6-scaled.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-8.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-9.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-10.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-11.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-12.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-13.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-15.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-16.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-17.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-19.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-20.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-21.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-22.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-23.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-24.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-25.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-26.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-27.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-28.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-29.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-30.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-31.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-32.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2023-iv-34.webp" }
    ]
  },
  {
    id: "2024",
    title: "V Edición - Gran Final Lima 2024",
    description: "Edición con récord de muestras y participación de más de 65 bodegas de Ica, Lima, Arequipa, Moquegua y Tacna.",
    icon: "🥇",
    photos: [
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-2.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-3.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-4.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-5.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-6.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-7.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-8.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-9.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-10.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-11.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-12.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-13.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-14.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-15.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-16.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-17.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-18.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-19.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-20.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-21.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-22.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-23.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-24.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-25.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2024-v-26.webp" }
    ]
  },
  {
    id: "2025",
    title: "VI Edición - Bicentenario 2025",
    description: "La edición conmemorativa que consolida el prestigio de la vitivinicultura peruana a nivel global, con la participación de catadores del extranjero.",
    icon: "🎉",
    photos: [
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-1.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-2.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-3.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-4.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-5.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-6.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-7.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-8.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-9.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-10.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-11.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-12.webp" },
      { url: "https://camaraica.org.pe/wp-content/uploads/2026/07/edicion-2025-vi-13.webp" }
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

            <img src={activeEdition.photos[currentPhotoIdx].url} alt="" />
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
                  alt=""
                  className="lightbox-img"
                />
              </motion.div>
            </div>
          </motion.div>,
          document.body
        )}
      </div>
    </section>
  );
};
