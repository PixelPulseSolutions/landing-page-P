import hero from '../assets/hero.png';
export default function Home() {
  return (
    <>
    <header className="hero fade-in">
      <div className="hero-text">
        <h1><span className="highlight">Automatización</span> & <span className="highlight">IA</span><br/>
          para negocios inteligentes
        </h1>
        <p>Impulsa tu empresa con herramientas modernas...</p>
        <div className="hero-buttons">
          <a href="#servicios" className="boton azul">Ver servicios</a>
          <a href="#contacto" className="boton blanco">Contáctanos</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Demostración de sistema" />
      </div>
    </header>
    {/* TESTIMONIOS: movidos fuera del header */}
    <section className="testimonios fade-in">
      <h2>Lo que opinan nuestros clientes</h2>
      <div className="testimonio-cards">
        <div className="testimonio-card">
            <img className="testimonio-avatar" src="/avatar1.png" alt="Mariana G." />
          <p>"Gracias a PixelPulse hemos automatizado tareas que nos tomaban horas. Su agente de IA responde mejor que algunos empleados 😅."</p>
          <strong>- Mariana G., Dueña de tienda en línea</strong>
        </div>
        <div className="testimonio-card">
            <img className="testimonio-avatar" src="/avatar1.png" alt="Mariana G." />
          <p>"Sus reportes automáticos son oro puro. Nos llegan al WhatsApp cada lunes sin tener que hacer nada."</p>
          <strong>- Juan P., Gerente de operaciones</strong>
        </div>
        <div className="testimonio-card">
            <img className="testimonio-avatar" src="/avatar1.png" alt="Mariana G." />
          <p>"No sabía que necesitaba un chatbot hasta que lo vi funcionando con mis clientes. ¡Lo recomiendo!"</p>
          <strong>- Arturo L., Coach personal</strong>
        </div>
      </div>
        </section>
    </>
  );
}
