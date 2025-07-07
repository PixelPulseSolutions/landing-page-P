import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Modelo from './pages/Modelo';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Footer from './pages/Footer';
import whatsappIcon from './assets/whatsapp-icon.png';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <div className='app-wrapper'>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/modelo" element={<Modelo />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <a
        href="https://wa.me/524491100507" // ← cambia por tu número (sin + ni espacios)
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsappIcon}
          alt="Chat en WhatsApp"
          className="whatsapp-icon"
        />
      </a>
      <Footer />
    </div>
    </>
  );
}

export default App;
