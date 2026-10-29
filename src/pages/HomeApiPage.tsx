import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fotoPortada from '../assets/images/nahuel_huapi_bariloche_foto_1793229961759.jpg';

interface Pais {
  codigo: string;
  nombre: string;
  capital: string;
  poblacion: number;
  superficie: number;
  subregion: string;
  moneda: string;
  bandera: string;
}

const REGIONES = [
  { valor: 'TODAS', texto: 'Toda América' },
  { valor: 'South America', texto: 'Sudamérica' },
  { valor: 'Central America', texto: 'América Central' },
  { valor: 'North America', texto: 'Norteamérica' },
  { valor: 'Caribbean', texto: 'Caribe' },
];

export function HomeApiPage() {
  const [paises, setPaises] = useState<Pais[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [busqueda, setBusqueda] = useState('');
  const [regionActiva, setRegionActiva] = useState('South America');

  const obtenerPaises = async () => {
    setCargando(true);
    setError('');

    try {
      const respuesta = await fetch('https://countries.dev/countries');
      if (!respuesta.ok) {
        throw new Error('No se pudo conectar con la API pública.');
      }

      const datos = await respuesta.json();

      // Filtramos los países de América y guardamos los datos necesarios + imagen obligatoria
      const listaAmerica: Pais[] = datos
        .filter((item: any) => item.region === 'Americas')
        .map((item: any) => ({
          codigo: item.alpha3Code || item.name,
          nombre: item.translations?.es || item.name,
          capital: Array.isArray(item.capital)
            ? item.capital[0]
            : item.capital || 'Sin capital',
          poblacion: item.population || 0,
          superficie: item.area || 0,
          subregion:
            item.subregion === 'Northern America'
              ? 'North America'
              : item.subregion || 'Americas',
          moneda: item.currencies?.[0]?.name || 'No informada',
          bandera: item.flags?.svg || item.flags?.png || '',
        }))
        .sort((a: Pais, b: Pais) => a.nombre.localeCompare(b.nombre, 'es'));

      setPaises(listaAmerica);
    } catch {
      setError('Ocurrió un error al cargar los datos de la API.');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerPaises();
  }, []);

  // Filtrado por región y por texto del buscador
  const paisesFiltrados = paises.filter((pais) => {
    const coincideRegion =
      regionActiva === 'TODAS' || pais.subregion === regionActiva;
    const texto = busqueda.toLowerCase();
    const coincideTexto =
      pais.nombre.toLowerCase().includes(texto) ||
      pais.capital.toLowerCase().includes(texto);

    return coincideRegion && coincideTexto;
  });

  return (
    <main className="contenedor">
      <section className="hero-editorial">
        <div className="hero-texto">
          <p className="etiqueta-seccion">Bitácora de Viajes · Datos desde API Pública</p>
          <h1 className="titulo-pagina">
            Descubrí la diversidad cultural y geográfica de <em>América</em>
          </h1>
          <p className="descripcion-pagina">
            Guía interactiva conectada en tiempo real a una API pública con las
            banderas oficiales, capitales, población, superficie y monedas de cada país.
          </p>
          <Link to="/destinos" className="boton-primario">
            Ver destinos de Argentina
          </Link>
        </div>

        <div className="hero-foto-marco">
          <img
            src={fotoPortada}
            alt="Paisaje patagónico de Argentina"
            className="hero-foto"
          />
        </div>
      </section>

      <section className="barra-herramientas">
        <input
          type="search"
          className="input-busqueda"
          placeholder="Buscar por país o capital..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <div className="grupo-filtros">
          {REGIONES.map((reg) => (
            <button
              key={reg.valor}
              type="button"
              onClick={() => setRegionActiva(reg.valor)}
              className={
                regionActiva === reg.valor ? 'boton-filtro activo' : 'boton-filtro'
              }
            >
              {reg.texto}
            </button>
          ))}
        </div>
      </section>

      {cargando && (
        <div className="mensaje-estado">
          <p>Cargando países desde la API pública...</p>
        </div>
      )}

      {!cargando && error && (
        <div className="mensaje-estado">
          <h2>Error de conexión</h2>
          <p>{error}</p>
          <button type="button" className="boton-primario" onClick={obtenerPaises}>
            Reintentar
          </button>
        </div>
      )}

      {!cargando && !error && paisesFiltrados.length === 0 && (
        <div className="mensaje-estado">
          <h2>No se encontraron países</h2>
          <p>Probá con otro nombre o cambiá la región seleccionada.</p>
        </div>
      )}

      {!cargando && !error && paisesFiltrados.length > 0 && (
        <section className="grilla-tarjetas">
          {paisesFiltrados.map((pais) => (
            <article key={pais.codigo} className="tarjeta">
              <div className="tarjeta-bandera-caja">
                <img
                  src={pais.bandera}
                  alt={`Bandera de ${pais.nombre}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="tarjeta-imagen"
                />
              </div>

              <div className="tarjeta-cuerpo">
                <div>
                  <p className="tarjeta-subtitulo">Código ISO · {pais.codigo}</p>
                  <h2 className="tarjeta-titulo">{pais.nombre}</h2>
                </div>

                <div className="lista-datos">
                  <div className="fila-dato">
                    <span>Capital</span>
                    <strong>{pais.capital}</strong>
                  </div>
                  <div className="fila-dato">
                    <span>Población</span>
                    <strong>{pais.poblacion.toLocaleString('es-AR')} hab.</strong>
                  </div>
                  <div className="fila-dato">
                    <span>Superficie</span>
                    <strong>{pais.superficie.toLocaleString('es-AR')} km²</strong>
                  </div>
                  <div className="fila-dato">
                    <span>Moneda</span>
                    <strong>{pais.moneda}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
