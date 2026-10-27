import { motion } from 'framer-motion';
import { ArrowDown, Send } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="pulse" />
            Available for Projects
          </motion.div>

          <motion.p
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Naman Agarwal | Thumbnail Designer
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            THUMBNAILS THAT
            <br />
            <span className="gradient-text">MAKE PEOPLE CLICK.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            I craft scroll-stopping YouTube thumbnails that turn attention into
            clicks and help creators stand out.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a href="#portfolio" className="btn-primary">
              <ArrowDown size={18} />
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              <Send size={18} />
              Hire Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-mascot"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mascot-wrapper">
            <motion.img
              src="/images/mascot/mascot.jpg"
              alt="Naman Agarwal - Thumbnail Designer Mascot"
              width={480}
              height={640}
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            <motion.div
              className="mascot-float-badge top-left"
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              🎨 Creative Vision
            </motion.div>

            <motion.div
              className="mascot-float-badge bottom-right"
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              🖱️ Click-Worthy
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
