import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import contactConfig from '../config/contactConfig';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contactConfig.formEndpoint) {
      try {
        setStatus('sending');
        const res = await fetch(contactConfig.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setStatus('sent');
          setFormData({ name: '', email: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      // Fallback: open mailto
      const subject = encodeURIComponent(`Thumbnail Design Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      window.open(`mailto:${contactConfig.email}?subject=${subject}&body=${body}`);
      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">✦ Get in Touch</span>
          <h2 className="section-title">Let's Create Together</h2>
          <p className="section-subtitle">
            Ready to level up your thumbnails? Reach out and let's talk.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's work together</h3>
            <p>
              Whether you need a single thumbnail or ongoing design support,
              I'm here to help. Drop a message and I'll get back to you within
              a few hours.
            </p>

            <div className="contact-links">
              <a
                href={`mailto:${contactConfig.email}`}
                className="contact-link"
              >
                <div className="contact-link-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-link-details">
                  <span className="contact-link-text">Email Me Directly</span>
                  <span className="contact-link-subtext">{contactConfig.email}</span>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
              />
            </div>

            <div className="form-submit">
              <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                <Send size={18} />
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'sent'
                    ? 'Message Sent!'
                    : 'Send Message'}
              </button>
            </div>

            {status === 'error' && (
              <p style={{ color: '#f87171', fontSize: '0.85rem', marginTop: 8 }}>
                Something went wrong. Please try again or use the links above.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
