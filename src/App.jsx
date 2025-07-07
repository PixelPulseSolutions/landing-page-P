import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Modelo from './pages/Modelo';
import Acerca from './pages/Acerca';
import Contacto from './pages/Contacto';
import Footer from './pages/Footer';

function App() {
  return (
    <>
    <div className='app-wrapper'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/modelo" element={<Modelo />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
