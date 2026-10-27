import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import portfolioData, { categories } from '../data/portfolioData';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="section" id="portfolio">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ Portfolio</span>
          <h2 className="section-title">My Thumbnail Gallery</h2>
          <p className="section-subtitle">
            Browse through my work across different content niches.
          </p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div className="portfolio-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => setLightbox(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
              <LightboxImage src={lightbox.image} alt={lightbox.title} />
              <p className="lightbox-title">{lightbox.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PortfolioCard({ item, index, onClick }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className="portfolio-card"
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
    >
      {imgError ? (
        <PlaceholderThumb title={item.title} category={item.category} />
      ) : (
        <img
          className="portfolio-card-image"
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      )}

      <div className="portfolio-card-overlay">
        <p className="portfolio-card-title">{item.title}</p>
        <span className="portfolio-card-category">{item.category}</span>
      </div>
    </motion.div>
  );
}

function LightboxImage({ src, alt }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'rgba(255,255,255,0.7)',
          fontSize: '1.1rem',
          fontWeight: 600,
        }}
      >
        {alt}
      </div>
    );
  }

  return <img src={src} alt={alt} onError={() => setErrored(true)} />;
}

function PlaceholderThumb({ title, category }) {
  const gradients = {
    Gaming: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    Tech: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    Finance: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    Vlogs: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    Other: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
  };

  return (
    <div
      className="portfolio-placeholder"
      style={{ background: gradients[category] || gradients.Other }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
          <rect x="2" y="2" width="20" height="20" rx="3" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-5-5L5 21" />
        </svg>
        <span
          style={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}
        >
          {title}
        </span>
        <span
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.7rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          {category}
        </span>
      </div>
    </div>
  );
}
