import { Link, NavLink, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const viendoMapa =
    location.pathname === '/contacto' && location.search.includes('vista=mapa');
  const viendoContacto = location.pathname === '/contacto' && !viendoMapa;

  const claseLink = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-link activo' : 'nav-link';

  return (
    <header className="navbar">
      <div className="navbar-interno">
        <Link to="/" className="navbar-marca">
          Atlas Sur
        </Link>

        <nav className="navbar-enlaces">
          <NavLink to="/" end className={claseLink}>
            Países API
          </NavLink>
          <NavLink to="/destinos" className={claseLink}>
            Destinos
          </NavLink>
          <Link
            to="/contacto"
            className={viendoContacto ? 'nav-link activo' : 'nav-link'}
          >
            Contacto
          </Link>
          <Link
            to="/contacto?vista=mapa"
            className={viendoMapa ? 'nav-link activo' : 'nav-link'}
          >
            Ubicación
          </Link>
        </nav>

        <Link to="/contacto" className="boton-primario">
          Enviar consulta
        </Link>
      </div>
    </header>
  );
}
