import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>PixelPulse Solutions</h3>
          <p>Impulsando negocios con automatización e inteligencia artificial.</p>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <ul>
            <li>📍 Aguascalientes, Aguascalientes, México</li>
            <li>📞 +52 449 110 0507</li>
            <li>✉️ pixelpulsesolutions16@gmail.com</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/modelo">Modelo</a></li>
            <li><a href="/acerca">Acerca</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PixelPulse Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
