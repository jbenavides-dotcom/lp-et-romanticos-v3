import type {
  NavLink,
  Experience,
  FaqItem,
  Stat,
  SearchTag,
  CabinFeature,
  PerfectForItem,
  DistancePoint,
  PrivacyPoint,
  PriceCard,
  Review,
} from './types';

// ─── Assets ───────────────────────────────────────────────────────────────────
const CDN = 'https://res.cloudinary.com/dkqocgknd/image/upload/f_auto,q_auto';
const CDN_VIDEO = 'https://res.cloudinary.com/dkqocgknd/video/upload/q_auto,w_1280';
export const ASSETS = {
  HERO_BG:         `${CDN},w_1600/lpet/romantico-hero.jpg`,
  HERO_VIDEO_MP4:  `${CDN_VIDEO}/lpet/romantico-hero-video.mp4`,
  HERO_VIDEO_WEBM: `${CDN_VIDEO}/lpet/romantico-hero-video.webm`,
  TINA_VIDEO_MP4:  `${CDN_VIDEO}/lpet/romantico-tina-video.mp4`,
  TINA_VIDEO_WEBM: `${CDN_VIDEO}/lpet/romantico-tina-video.webm`,
  CAMA_VIDEO_MP4:  `${CDN_VIDEO}/lpet/romantico-cama-video.mp4`,
  CAMA_VIDEO_WEBM: `${CDN_VIDEO}/lpet/romantico-cama-video.webm`,
  CABANA:    `${CDN},w_1000/lpet/romantico-cabana.jpg`,
  TINA:      `${CDN},w_1000/lpet/romantico-tina.jpg`,
  SUNSET:    `${CDN},w_1000/lpet/romantico-sunset.jpg`,
  EXTERIOR:  `${CDN},w_1000/lpet/romantico-exterior.jpg`,
  BOSQUE:    `${CDN},w_1000/lpet/romantico-bosque.jpg`,
  // Imágenes genéricas finca (respaldo)
  CAFETALES: 'https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_900/lpet/cafetales.png',
  DEGUSTACION: 'https://res.cloudinary.com/dsylu9a7k/image/upload/f_auto,q_auto,w_900/lpet/degustacion-cafe.png',
} as const;

// ─── Contact & CTAs ───────────────────────────────────────────────────────────
export const WHATSAPP_URL =
  'https://wa.me/573189565617?text=Hola%2C%20quiero%20informacion%20sobre%20escapadas%20romanticas';
export const CLOUDBEDS_URL = 'https://hotels.cloudbeds.com/es/reservation/yB0fEt?ga_sess_id=885637364.1682640000&currency=cop';
export const EMAIL = 'reservations@lapalmayeltucan.com';

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Reservar', href: '#reservar' },
];

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: '9.5/10', label: 'Booking', sublabel: 'Calificación de huéspedes' },
  { value: '5.0/5', label: 'TripAdvisor', sublabel: '#1 en Zipacón' },
  { value: '90 min', label: 'Desde Bogotá', sublabel: 'Acceso fácil en carro' },
  { value: '10', label: 'Cabañas privadas', sublabel: 'Independientes con tina' },
];

// ─── Why Cards ────────────────────────────────────────────────────────────────
export interface WhyCard {
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CARDS: WhyCard[] = [
  { title: 'Privacidad Total', description: '10 cabañas independientes. Tu espacio, tu ritmo, tu silencio.', iconName: 'Shield' },
  { title: 'Naturaleza Inmersiva', description: 'Bosque de niebla, senderos entre cafetales, aves exóticas a metros de tu cabaña.', iconName: 'Trees' },
  { title: 'Coffee Tour Incluido', description: 'Recorre la finca que produjo el café récord ($303/lb). Incluido en tu estadía.', iconName: 'Coffee' },
  { title: 'Farm-to-Table', description: 'Desayuno con ingredientes de la finca, café de especialidad recién tostado cada mañana.', iconName: 'UtensilsCrossed' },
];

// ─── Search Tags ──────────────────────────────────────────────────────────────
export const SEARCH_TAGS: SearchTag[] = [
  { text: 'Cabañas cerca a Bogotá' },
  { text: 'Plan romántico con tina' },
  { text: 'Hotel boutique en naturaleza' },
  { text: 'Escapada de fin de semana' },
  { text: 'Hotel para aniversario' },
  { text: 'Finca cafetera cerca a Bogotá' },
  { text: 'Cabañas con tina privada' },
  { text: 'Escape del ruido de la ciudad' },
];

// ─── Cabin Features ───────────────────────────────────────────────────────────
export const CABIN_FEATURES: CabinFeature[] = [
  { text: 'Tina privada en cada cabaña' },
  { text: 'Terraza con vista al valle' },
  { text: 'Ducha al aire libre' },
  { text: 'Malla catamarán suspendida' },
  { text: 'WiFi de alta velocidad' },
  { text: 'Chimenea (cabañas select)' },
];

export const PERFECT_FOR: PerfectForItem[] = [
  { emoji: '💑', label: 'Aniversarios' },
  { emoji: '🎂', label: 'Cumpleaños especiales' },
  { emoji: '🌿', label: 'Escapadas de fin de semana' },
  { emoji: '✨', label: 'Momentos que merecen atención y tiempo' },
];

// ─── Experiences ──────────────────────────────────────────────────────────────
export const EXPERIENCES: Experience[] = [
  { icon: 'Coffee', title: 'Coffee Tour', description: 'Recorre la finca cafetera y aprende del grano al pocillo.' },
  { icon: 'Mountain', title: 'Senderismo', description: 'Caminos entre bosque de niebla y cafetales.' },
  { icon: 'Bird', title: 'Avistamiento de Aves', description: '+150 especies documentadas en la finca.' },
  { icon: 'Heart', title: 'Yoga & Bienestar', description: 'Sesiones al amanecer con vista a las montañas.' },
  { icon: 'Wine', title: 'Degustación de Café', description: 'Cata profesional de microlotes de especialidad.' },
  { icon: 'Flame', title: 'Fogata Nocturna', description: 'Termina el día bajo las estrellas con chocolate caliente.' },
];

// ─── Price Cards ──────────────────────────────────────────────────────────────
export const PRICE_CARDS: PriceCard[] = [
  {
    name: 'Entre Semana', price: 'Desde $450.000/noche',
    description: 'Cabaña privada con tina, desayuno farm-to-table, coffee tour, WiFi, parqueadero',
    includes: ['Cabaña privada con tina', 'Desayuno farm-to-table', 'Coffee tour por la finca', 'WiFi de alta velocidad', 'Parqueadero privado'],
  },
  {
    name: 'Fin de Semana', price: 'Desde $550.000/noche',
    description: 'Todo lo de entre semana + check-out flexible',
    includes: ['Cabaña privada con tina', 'Desayuno farm-to-table', 'Coffee tour por la finca', 'WiFi de alta velocidad', 'Parqueadero privado', 'Check-out flexible'],
    highlighted: true,
  },
  {
    name: 'Experiencia Completa', price: 'Desde $750.000/noche',
    description: 'Todo incluido: cabaña premium, cena romántica, masaje en pareja, cata de café',
    includes: ['Cabaña premium con tina', 'Desayuno farm-to-table', 'Coffee tour por la finca', 'Cena romántica', 'Masaje en pareja', 'Cata de café de especialidad', 'WiFi + parqueadero', 'Check-out flexible'],
  },
];

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const REVIEWS: Review[] = [
  { text: 'Un paraíso a solo 1.5 horas de Bogotá. Las cabañas son increíbles, la tina con vista al valle es un sueño. El desayuno con productos de la finca fue lo mejor.', author: 'Pareja · Bogotá · 2025', rating: 5, source: 'Booking' },
  { text: 'Uno de los mejores hoteles en los que nos hemos hospedado. La atención de Lina y Diego es excepcional, se nota que aman lo que hacen.', author: 'Pareja · Medellín · 2025', rating: 5, source: 'TripAdvisor' },
  { text: '100 de 100. Literalmente todo es perfecto. La cabaña, el silencio, el café recién tostado cada mañana. Ya reservamos para volver.', author: 'Pareja · Bogotá · 2024', rating: 5, source: 'Booking' },
  { text: 'Nos encantó absolutamente todo. Acogedor, relajante, emocionante y hermoso al mismo tiempo. El coffee tour fue la cereza del pastel.', author: 'Pareja · Cali · 2025', rating: 5, source: 'TripAdvisor' },
  { text: 'Buscábamos una escapada romántica cerca de Bogotá y encontramos mucho más. La finca es mágica, las aves, el bosque de niebla... inolvidable.', author: 'Pareja · Bogotá · 2024', rating: 5, source: 'Booking' },
  { text: 'La ducha al aire libre y la malla catamarán suspendida son experiencias únicas. Despertamos con el sonido de los pájaros y el olor del café.', author: 'Pareja · Bucaramanga · 2025', rating: 5, source: 'Booking' },
];

// ─── Distance & Privacy ───────────────────────────────────────────────────────
export const DISTANCE_POINTS: DistancePoint[] = [
  { icon: '🚗', text: '90 minutos en carro' },
  { icon: '🛣️', text: 'Acceso fácil' },
  { icon: '🌤️', text: 'Clima fresco de montaña' },
  { icon: '🌿', text: 'Privacidad real' },
];

export const PRIVACY_POINTS: PrivacyPoint[] = [
  { text: 'Un cambio de paisaje sin viajes largos.' },
  { text: 'Una pausa verdadera sin renunciar al confort.' },
  { text: 'Cada cabaña es independiente, construida en madera natural.' },
  { text: 'Espacios íntimos diseñados para el descanso y el encuentro.' },
];

// ─── FAQ Items ────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FaqItem[] = [
  { question: '¿El desayuno está incluido?', answer: 'Sí. Todos nuestros planes incluyen desayuno farm-to-table preparado con ingredientes frescos de la finca. Café de especialidad ilimitado.' },
  { question: '¿Aceptan mascotas?', answer: 'Actualmente no aceptamos mascotas para garantizar la tranquilidad de todos los huéspedes y la fauna local.' },
  { question: '¿A cuánto queda de Bogotá?', answer: 'La Palma y el Tucán está a 90 minutos de Bogotá por la vía Facatativá-Anolaima. Carretera pavimentada con los últimos 10 minutos en vía destapada en buen estado.' },
  { question: '¿Cuál es la mejor época para visitar?', answer: 'Cualquier época es ideal. El clima es templado todo el año (18-24°C). Para avistamiento de aves, los meses de marzo a mayo y octubre a noviembre son especialmente buenos.' },
  { question: '¿Las cabañas tienen tina privada?', answer: 'Sí. Todas nuestras cabañas cuentan con tina privada, además de ducha al aire libre y terraza con vista al valle.' },
  { question: '¿Qué incluye la estadía?', answer: 'Incluye cabaña privada, desayuno farm-to-table, coffee tour por la finca, WiFi, parqueadero y acceso a senderos. Experiencias adicionales como masajes y cenas románticas tienen costo extra.' },
  { question: '¿Se puede hacer coffee tour?', answer: 'Sí, el coffee tour está incluido en todas las estadías. Recorrerás la finca que produjo el café récord mundial ($303/lb en subasta) y aprenderás todo el proceso del grano al pocillo.' },
  { question: '¿Tienen WiFi?', answer: 'Sí, todas las cabañas y áreas comunes cuentan con WiFi de alta velocidad.' },
  { question: '¿Hay parqueadero?', answer: 'Sí, parqueadero gratuito y privado dentro de la finca.' },
  { question: '¿Puedo llegar en transporte público?', answer: 'Es posible pero no recomendado. Desde Bogotá hay buses a Anolaima desde el Terminal del Sur, pero los últimos kilómetros requieren taxi o transporte privado. Recomendamos vehículo propio o servicio de transporte que podemos coordinar.' },
];
