
import fotoIguazu from '../assets/images/cataratas_iguazu_foto_1793229955939.jpg';
import fotoPeritoMoreno from '../assets/images/glaciar_perito_moreno_foto_1793229958288.jpg';
import fotoHumahuaca from '../assets/images/quebrada_humahuaca_foto_1793229959192.jpg';
import fotoIschigualasto from '../assets/images/ischigualasto_valle_luna_foto_1793229959854.jpg';
import fotoBariloche from '../assets/images/nahuel_huapi_bariloche_foto_1793229961759.jpg';
import fotoUshuaia from '../assets/images/canal_beagle_ushuaia_foto_1793229962451.jpg';

export type RegionArgentina = 'Litoral' | 'Patagonia' | 'Norte' | 'Cuyo';

export interface DestinoLocal {
  id: number;
  nombre: string;
  provincia: string;
  region: RegionArgentina;
  altitudMsnm: number;
  mejorEpoca: string;
  declaratoria: string;
  descripcion: string;
  imagen: string; // Campo obligatorio de imagen en el array local
}

export const destinosLocales: DestinoLocal[] = [
  {
    id: 1,
    nombre: 'Cataratas del Iguazú',
    provincia: 'Misiones',
    region: 'Litoral',
    altitudMsnm: 195,
    mejorEpoca: 'Abril a octubre',
    declaratoria: 'Patrimonio Natural de la Humanidad (UNESCO)',
    descripcion:
      'Sistema de 275 saltos de agua rodeados de selva paranaense dentro del Parque Nacional Iguazú, con la imponente Garganta del Diablo de 80 metros de caída.',
    imagen: fotoIguazu,
  },
  {
    id: 2,
    nombre: 'Glaciar Perito Moreno',
    provincia: 'Santa Cruz',
    region: 'Patagonia',
    altitudMsnm: 185,
    mejorEpoca: 'Octubre a abril',
    declaratoria: 'Parque Nacional Los Glaciares',
    descripcion:
      'Frente glaciar de 5 kilómetros de ancho y paredes de hielo de hasta 60 metros de altura sobre el brazo Rico del Lago Argentino, en constante equilibrio dinámico.',
    imagen: fotoPeritoMoreno,
  },
  {
    id: 3,
    nombre: 'Quebrada de Humahuaca',
    provincia: 'Jujuy',
    region: 'Norte',
    altitudMsnm: 2939,
    mejorEpoca: 'Marzo a noviembre',
    declaratoria: 'Paisaje Cultural de la Humanidad (UNESCO)',
    descripcion:
      'Corredor andino de 155 kilómetros flanqueado por formaciones minerales multicolores como el Cerro de los Siete Colores en Purmamarca y la Serranía de Hornocal.',
    imagen: fotoHumahuaca,
  },
  {
    id: 4,
    nombre: 'Parque Provincial Ischigualasto',
    provincia: 'San Juan',
    region: 'Cuyo',
    altitudMsnm: 1300,
    mejorEpoca: 'Abril a noviembre',
    declaratoria: 'Reserva Paleontológica del Triásico',
    descripcion:
      'Conocido como Valle de la Luna, resguarda una secuencia geológica continental completa del período Triásico y geoformas esculpidas por la erosión eólica.',
    imagen: fotoIschigualasto,
  },
  {
    id: 5,
    nombre: 'Parque Nacional Nahuel Huapi',
    provincia: 'Río Negro y Neuquén',
    region: 'Patagonia',
    altitudMsnm: 764,
    mejorEpoca: 'Todo el año',
    declaratoria: 'Primer Parque Nacional de la Argentina (1934)',
    descripcion:
      'Ecosistema de lagos glaciarios, bosques andino-patagónicos de coihues y arrayanes, y cumbres graníticas encabezadas por el Cerro Tronador.',
    imagen: fotoBariloche,
  },
  {
    id: 6,
    nombre: 'Canal Beagle y Faro Les Éclaireurs',
    provincia: 'Tierra del Fuego',
    region: 'Patagonia',
    altitudMsnm: 12,
    mejorEpoca: 'Noviembre a marzo',
    declaratoria: 'Paso Bioceánico Austral',
    descripcion:
      'Paso marítimo austral frente a la ciudad de Ushuaia donde convergen cordones montañosos fueguinos, islotes con fauna marina y el histórico faro de 1920.',
    imagen: fotoUshuaia,
  },
];
