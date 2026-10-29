import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeApiPage } from './pages/HomeApiPage';
import { LocalArrayPage } from './pages/LocalArrayPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <HashRouter>
      <div className="layout-sitio">
        <Navbar />
        <div className="contenido-principal">
          <Routes>
            <Route path="/" element={<HomeApiPage />} />
            <Route path="/destinos" element={<LocalArrayPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
