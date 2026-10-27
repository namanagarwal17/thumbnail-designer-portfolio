import { motion } from 'framer-motion';
import { Search, PenTool, RefreshCw, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand',
    description:
      'I learn about your channel, audience, and video goals to align the design with your content strategy.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Create',
    description:
      'I craft eye-catching thumbnails using bold visuals, strategic composition, and on-brand styling.',
  },
  {
    number: '03',
    icon: RefreshCw,
    title: 'Refine',
    description:
      "We iterate together — I refine the design based on your feedback until it's perfect.",
  },
  {
    number: '04',
    icon: Send,
    title: 'Deliver',
    description:
      'You receive polished, high-res thumbnail files ready to upload and start getting clicks.',
  },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ Creative Process</span>
          <h2 className="section-title">How I Work</h2>
          <p className="section-subtitle">
            A streamlined process that delivers results, every time.
          </p>
        </motion.div>

        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className="process-number">{step.number}</div>
                <div className="process-icon">
                  <Icon size={24} />
                </div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
