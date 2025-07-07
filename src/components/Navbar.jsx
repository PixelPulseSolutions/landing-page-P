import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/image-40x40.png'; // Assuming you have a logo image

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = ({ isActive }) => isActive ? 'active-link' : '';

  return (
    <>
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <img src={logo} alt="PixelPulse Solutions Logo" className="logo-image" />
        <span className="logo-text">PixelPulse Solutions</span>
      </NavLink>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        <span className={`bar ${open ? 'open' : ''}`}></span>
        <span className={`bar ${open ? 'open' : ''}`}></span>
        <span className={`bar ${open ? 'open' : ''}`}></span>
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><NavLink to="/" className={active} onClick={() => setOpen(false)}>Inicio</NavLink></li>
        <li><NavLink to="/servicios" className={active} onClick={() => setOpen(false)}>Servicios</NavLink></li>
        <li><NavLink to="/modelo" className={active} onClick={() => setOpen(false)}>Modelo</NavLink></li>
        <li><NavLink to="/acerca" className={active} onClick={() => setOpen(false)}>Acerca</NavLink></li>
        <li><NavLink to="/contacto" className={active} onClick={() => setOpen(false)}>Contacto</NavLink></li>
      </ul>
    </nav>
    {open && <div className="nav-overlay" onClick={() => setOpen(false)}></div>};
    </>)
}
