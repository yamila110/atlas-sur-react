import { FormEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CORREO_DESTINO, SEDES_MAPA } from '../config';

export function ContactPage() {
  const location = useLocation();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const [sedeActiva, setSedeActiva] = useState(SEDES_MAPA[0]);

  useEffect(() => {
    if (location.search.includes('vista=mapa')) {
      document.getElementById('mapa')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.search]);

  const enviarFormulario = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMensajeExito('');
    setMensajeError('');

    if (!nombre.trim() || !email.trim() || !asunto.trim() || !mensaje.trim()) {
      setMensajeError('Por favor, completá todos los campos antes de enviar.');
      return;
    }

    setEnviando(true);

    try {
      const respuesta = await fetch(`https://formspree.io/f/xeaazjng`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Nombre: nombre,
          Email: email,
          Asunto: asunto,
          Mensaje: mensaje,
          _subject: `Mensaje desde Atlas Sur: ${asunto}`,
        }),
      });

      if (respuesta.ok) {
        setMensajeExito(
          `¡Mensaje enviado correctamente a ${CORREO_DESTINO}! Si es tu primer envío, revisá tu correo (o spam) para confirmar FormSubmit.`
        );
        setNombre('');
        setEmail('');
        setAsunto('');
        setMensaje('');
      } else {
        setMensajeError('No se pudo procesar el envío en este momento.');
      }
    } catch {
      setMensajeError('Error de red al intentar enviar el correo.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="contenedor">
      <section className="encabezado-pagina">
        <p className="etiqueta-seccion">Atención Personalizada · Contacto y Ubicación</p>
        <h1 className="titulo-pagina">
          Escribinos tu <em>consulta</em>
        </h1>
        <p className="descripcion-pagina">
          Completá el formulario para enviarnos un mensaje directo por correo
          electrónico y encontrá nuestra sede principal en Salta Capital en el mapa al lado.
        </p>
        <div className="datos-rapidos-contacto">
          <span>Sede principal: Salta Capital</span>
          <span>·</span>
          <span>Correo directo: {CORREO_DESTINO}</span>
          <span>·</span>
          <span>Atención: Lunes a viernes de 09:00 a 18:00 hs</span>
        </div>
      </section>

      <section className="contacto-grid">
        {/* Columna izquierda: Formulario de contacto funcional */}
        <div className="panel-contacto">
          <div>
            <h2>Enviar mensaje</h2>
            <p className="texto-ayuda">
              Completá tus datos y el mensaje llegará a nuestro correo electrónico.
            </p>
          </div>

          {mensajeExito && <div className="alerta-exito">{mensajeExito}</div>}
          {mensajeError && <div className="alerta-error">{mensajeError}</div>}

          <form onSubmit={enviarFormulario} className="formulario">
            <div className="campo-grupo">
              <label htmlFor="nombre">Nombre completo</label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu nombre y apellido"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="asunto">Asunto</label>
              <input
                id="asunto"
                type="text"
                placeholder="Motivo de la consulta"
                value={asunto}
                onChange={(e) => setAsunto(e.target.value)}
                required
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                rows={4}
                placeholder="Escribí tu mensaje aquí..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="boton-primario" disabled={enviando}>
              {enviando ? 'Enviando...' : 'Enviar al correo'}
            </button>
          </form>

          <p className="nota-pie-panel">Destinatario: {CORREO_DESTINO}</p>
        </div>

        {/* Columna derecha: Mapa embebido al lado del formulario */}
        <div id="mapa" className="panel-contacto">
          <div>
            <h2>Ubicación en el mapa</h2>
            <p className="texto-ayuda">Seleccioná una ciudad para ver en Google Maps:</p>
          </div>

          <div className="grupo-filtros">
            {SEDES_MAPA.map((sede) => (
              <button
                key={sede.id}
                type="button"
                onClick={() => setSedeActiva(sede)}
                className={
                  sedeActiva.id === sede.id ? 'boton-filtro activo' : 'boton-filtro'
                }
              >
                {sede.ciudad}
              </button>
            ))}
          </div>

          <div className="mapa-contenedor">
            <iframe
              key={sedeActiva.id}
              src={sedeActiva.embedUrl}
              title={`Mapa de ${sedeActiva.ciudad}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mapa-iframe"
              allowFullScreen
            />
          </div>

          <p className="nota-pie-panel">
            {sedeActiva.direccion} · {sedeActiva.horario}
          </p>
        </div>
      </section>
    </main>
  );
}
