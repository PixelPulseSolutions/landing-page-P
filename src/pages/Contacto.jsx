import { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const texto = `Hola, soy ${nombre}. Mi correo es ${correo}. ${mensaje}`;
    const url = `https://wa.me/524491100507?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank'); // Abre WhatsApp en nueva pestaña
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Tu correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        required
      />
      <textarea
        placeholder="Tu mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        required
      />
      <button type="submit">Enviar por WhatsApp</button>
    </form>
  );
}

export default Contacto;
