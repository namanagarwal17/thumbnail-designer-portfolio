import { motion } from 'framer-motion';
import { RefreshCw, Gamepad2, Cpu, Smartphone, Repeat } from 'lucide-react';
import { YoutubeIcon } from '../components/Icons';
import servicesData from '../data/servicesData';

const iconMap = {
  youtube: YoutubeIcon,
  refresh: RefreshCw,
  gamepad: Gamepad2,
  cpu: Cpu,
  smartphone: Smartphone,
  repeat: Repeat,
};

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ Services</span>
          <h2 className="section-title">What I Offer</h2>
          <p className="section-subtitle">
            End-to-end thumbnail design services tailored for YouTube creators.
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || YoutubeIcon;
            return (
              <motion.div
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="service-icon">
                  <Icon size={24} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
