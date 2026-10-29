# Atlas Sur — Trabajo Final de Programación Web II

**Módulo:** Programación Web II  
**Docente:** Lic. Carlos Pacheco  
**Tecnologías:** React, React Router, Vite y CSS3 (Flexbox y CSS Grid).

---

## Cumplimiento de Consignas del Trabajo Práctico

1. **Página Principal (`/` — `src/pages/HomeApiPage.tsx`) — Consumo de API Pública:**
   - Consume en tiempo real la API pública **Countries REST API** (`https://countries.dev/countries`) mediante `fetch()` dentro de `useEffect()`.
   - Muestra **imagen obligatoria** (bandera oficial SVG/PNG de cada país) y **5 datos de la API** (superando el mínimo de 3): Nombre en español, Capital, Población, Superficie en km² y Moneda oficial.
   - Incluye buscador dinámico por nombre/capital, filtros por subregión y modal de detalle.

2. **Segunda Página (`/#/destinos` — `src/pages/LocalArrayPage.tsx`) — Array de Objetos Local:**
   - Obtiene los datos desde el arreglo local exportado en `src/data/destinosLocales.ts`.
   - Cada objeto incluye obligatoriamente su campo `imagen` apuntando a fotografías alojadas localmente en `src/assets/images/`, además de `nombre`, `provincia`, `region`, `altitudMsnm`, `mejorEpoca` y `descripcion`.

3. **Tercera Página (`/#/contacto` — `src/pages/ContactPage.tsx`) — Formulario Funcional + Mapa Embebido:**
   - **Formulario funcional:** valida todos los campos en el cliente y envía el mensaje por correo electrónico mediante `fetch()` a **FormSubmit AJAX API** (`https://formsubmit.co/ajax/...`), permitiendo recibir correos reales incluso estando alojado en sitios estáticos como **GitHub Pages**, además de ofrecer envío directo por cliente de correo (`mailto:`).
   - **Mapa embebido al lado del formulario:** utiliza una grilla de dos columnas (`lg:grid-cols-2`) con un `<iframe>` interactivo de Google Maps junto al formulario y selector de sedes.

---

## Ejecución Local

```bash
npm install
npm run dev
```

## Compilación para Producción / GitHub Pages

```bash
npm run build
```
