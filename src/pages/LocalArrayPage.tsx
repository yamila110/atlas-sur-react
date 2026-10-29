import { useState } from 'react';
import { Link } from 'react-router-dom';
import { destinosLocales, RegionArgentina } from '../data/destinosLocales';
import fotoNorte from '../assets/images/quebrada_humahuaca_foto_1793229959192.jpg';

const FILTROS: ('Todas' | RegionArgentina)[] = [
  'Todas',
  'Patagonia',
  'Norte',
  'Litoral',
  'Cuyo',
];

export function LocalArrayPage() {
  const [regionActiva, setRegionActiva] = useState<'Todas' | RegionArgentina>('Todas');

  const destinosFiltrados =
    regionActiva === 'Todas'
      ? destinosLocales
      : destinosLocales.filter((destino) => destino.region === regionActiva);

  return (
    <main className="contenedor">
      <section className="hero-editorial">
        <div className="hero-texto">
          <p className="etiqueta-seccion">Colección Curada · Array de Objetos Local</p>
          <h1 className="titulo-pagina">
            Paisajes inolvidables de <em>Argentina</em>
          </h1>
          <p className="descripcion-pagina">
            Recorrido visual por seis joyas naturales del país cargadas desde nuestro
            arreglo local de objetos, con su fotografía, provincia, altitud y mejor época.
          </p>
          <Link to="/contacto" className="boton-primario">
            Consultar itinerario
          </Link>
        </div>

        <div className="hero-foto-marco">
          <img
            src={fotoNorte}
            alt="Cerro de los Siete Colores en el Norte Argentino"
            className="hero-foto"
          />
        </div>
      </section>

      <section className="barra-herramientas">
        <p className="texto-ayuda">
          Mostrando {destinosFiltrados.length} destinos · Filtrar por región:
        </p>

        <div className="grupo-filtros">
          {FILTROS.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => setRegionActiva(region)}
              className={
                regionActiva === region ? 'boton-filtro activo' : 'boton-filtro'
              }
            >
              {region}
            </button>
          ))}
        </div>
      </section>

      <section className="grilla-tarjetas">
        {destinosFiltrados.map((destino) => (
          <article key={destino.id} className="tarjeta">
            <div className="tarjeta-imagen-caja">
              <img
                src={destino.imagen}
                alt={destino.nombre}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="tarjeta-imagen"
              />
            </div>

            <div className="tarjeta-cuerpo">
              <div>
                <p className="tarjeta-subtitulo">
                  {destino.region} · {destino.provincia}
                </p>
                <h2 className="tarjeta-titulo">{destino.nombre}</h2>
                <p className="tarjeta-destacado">{destino.declaratoria}</p>
              </div>

              <p className="tarjeta-texto">{destino.descripcion}</p>

              <div className="lista-datos">
                <div className="fila-dato">
                  <span>Altitud</span>
                  <strong>{destino.altitudMsnm.toLocaleString('es-AR')} m s. n. m.</strong>
                </div>
                <div className="fila-dato">
                  <span>Mejor época</span>
                  <strong>{destino.mejorEpoca}</strong>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
