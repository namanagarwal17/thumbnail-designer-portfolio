import './index.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import FeaturedCarousel from './sections/FeaturedCarousel';
import Portfolio from './sections/Portfolio';
import Services from './sections/Services';
import About from './sections/About';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCarousel />
        <Portfolio />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
