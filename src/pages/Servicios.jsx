export default function Servicios() {
  return (
    <main className="main-container">
      <section id="servicios" className="servicios fade-in">
  <div className="contenido">
    <h1>Servicios Inteligentes para tu Negocio</h1>
    <div className="servicios-grid">
      <div className="servicio-card ia">
        <div className="servicio-icon">🤖</div>
        <h2>Agentes de IA</h2>
        <ul>
          <li>Asistentes virtuales personalizados</li>
          <li>Respuesta a preguntas frecuentes</li>
          <li>Integración con WhatsApp Business</li>
          <li>Flujos conversacionales inteligentes</li>
          <li>Instalación y entrenamiento inicial</li>
          <li><em>Se hace contizacion previa para el precio del servicio</em></li>
        </ul>
      </div>
      <div className="servicio-card auto">
        <div className="servicio-icon">⚙️</div>
        <h2>Automatizaciones / Chatbots</h2>
        <ul>
          <li>Conexión entre sistemas y plataformas</li>
          <li>Automatización de procesos internos</li>
          <li>Chatbots con o sin IA</li>
          <li>Integración con Google Sheets, Notion, CRMs…</li>
          <li><em>Desde $6,500 MXN + (depende de la complejidad)</em></li>
        </ul>
      </div>
      <div className="servicio-card report">
        <div className="servicio-icon">📊</div>
        <h2>Reportes Automáticos</h2>
        <ul>
          <li>Generación de reportes periódicos</li>
          <li>Envío programado (correo o WhatsApp)</li>
          <li>Visualización y exportación de datos</li>
          <li>Personalización según necesidades</li>
          <li><em>Desde $4,500 MXN + mensualidad</em></li>
        </ul>
      </div>
      <div className="servicio-card web">
        <div className="servicio-icon">🌐</div>
        <h2>Páginas Web</h2>
        <ul>
          <li>Diseño rápido y eficiente</li>
          <li>Sin necesidad de programar</li>
          <li>Adaptativo para móvil</li>
          <li>Dominio incluido</li>
          <li>Hosting primer mes gratis!</li>
          <li>SEO básico incluido</li>
          <li><em>Desde $4,500 MXN + mantenimiento</em></li>
        </ul>
      </div>
      <div>
         <a
            href="/cotizacion-pixelpulse.pdf"
            download
            className="boton descargar"
        >
        Descargar cotización PDF
        </a>
    </div>
    </div>
  </div>
</section>
    </main>

  );
}
