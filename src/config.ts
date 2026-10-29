
export const CORREO_DESTINO = 'jordanyamila25@gmail.com';

export interface SedeMapa {
  id: string;
  ciudad: string;
  direccion: string;
  horario: string;
  embedUrl: string;
}

export const SEDES_MAPA: SedeMapa[] = [
  {
    id: 'salta',
    ciudad: 'Salta Capital',
    direccion: 'Caseros 500, Plaza 9 de Julio, Salta, Argentina',
    horario: 'Lunes a viernes de 09:00 a 18:00 hs',
    embedUrl:
      'https://www.google.com/maps?q=Plaza+9+de+Julio,+Salta,+Argentina&hl=es&z=16&output=embed',
  },
  {
    id: 'cordoba',
    ciudad: 'Córdoba Capital',
    direccion: 'Bv. San Juan 150, Centro, Córdoba, Argentina',
    horario: 'Lunes a viernes de 09:00 a 17:30 hs',
    embedUrl:
      'https://www.google.com/maps?q=Plaza+San+Martin,+Cordoba,+Argentina&hl=es&z=15&output=embed',
  },
  {
    id: 'mendoza',
    ciudad: 'Ciudad de Mendoza',
    direccion: 'Av. Sarmiento 250, Mendoza, Argentina',
    horario: 'Lunes a viernes de 08:30 a 17:00 hs',
    embedUrl:
      'https://www.google.com/maps?q=Plaza+Independencia,+Mendoza,+Argentina&hl=es&z=15&output=embed',
  },
];
