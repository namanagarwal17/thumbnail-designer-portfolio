export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-logo">NAMAN</span>
        <p className="footer-copy">
          © {year} Naman Agarwal. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="#portfolio">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
