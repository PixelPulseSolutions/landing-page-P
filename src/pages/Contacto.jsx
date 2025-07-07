export default function Contacto() {
  return (
    <section className="contenido">
      <h1>Contáctanos</h1>
      <div className="contact-wrapper fade-in">
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> pixelpulsesolutions16@gmail.com</p>
          <p><i className="fab fa-whatsapp"></i> +52 449 110 0507</p>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensaje enviado (demo)!");
          }}
        >
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
