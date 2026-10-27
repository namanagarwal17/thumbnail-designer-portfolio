import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ About Me</span>
          <h2 className="section-title">The Designer Behind the Thumbnails</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              className="about-image"
              src="/images/mascot/mascot.jpg"
              alt="Naman Agarwal"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3>
              Hi, I'm <span className="gradient-text">Naman Agarwal</span>
            </h3>
            <p>
              I'm a YouTube thumbnail designer passionate about visual
              storytelling and creative design. I believe a great thumbnail is
              the difference between a scroll-past and a click - it's your
              video's first impression, and I make sure it counts.
            </p>
            <p>
              Every thumbnail I create is designed to stop the scroll, spark
              curiosity, and drive real engagement. I combine bold visuals,
              strategic composition, and a deep understanding of YouTube's
              audience psychology to deliver designs that truly perform.
            </p>
            <p>
              Whether you're a gaming creator, tech reviewer, finance educator,
              or vlogger - I'm here to make your content visually irresistible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
