import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-interno">
        <div>
          <span className="footer-marca">Atlas Sur</span> · Bitácora de Viajes
        </div>

        <nav className="footer-enlaces">
          <Link to="/">Países API</Link>
          <Link to="/destinos">Destinos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/contacto?vista=mapa">Ubicación</Link>
        </nav>

        <p>© {new Date().getFullYear()} Programación Web II</p>
      </div>
    </footer>
  );
}
