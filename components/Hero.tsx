import { ChevronDown } from 'lucide-react';
import { ASSETS, CLOUDBEDS_URL, WHATSAPP_URL } from '../constants';
import { useAnalytics } from '../hooks/useAnalytics';

const TRUST_CHIPS = [
  'Cabañas privadas',
  'Tina privada',
  'Coffee Tour',
  'Bosque de niebla',
];

export default function Hero() {
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();

  const handleScrollDown = () => {
    const next = document.querySelector('#busqueda');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Inicio — Cabañas privadas La Palma & El Tucán"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={ASSETS.HERO_BG}
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        >
          <source src={ASSETS.HERO_VIDEO_WEBM} type="video/webm" />
          <source src={ASSETS.HERO_VIDEO_MP4} type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 bg-brand-gold/20 border border-brand-gold/40 text-brand-gold px-4 py-2 rounded-full text-sm font-medium tracking-widest uppercase mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          Finca Cafetera · Zipacón, Cundinamarca
        </div>

        {/* H1 */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
          Escapadas en pareja en una{' '}
          <span className="text-brand-gold italic">finca cafetera</span>{' '}
          de clase mundial
        </h1>

        {/* H2 italic */}
        <h2 className="font-serif text-xl sm:text-2xl italic text-brand-beige mb-6 font-light">
          Finca cafetera · Zipacón, Cundinamarca · A 90 minutos de Bogotá
        </h2>

        {/* Subheadline */}
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Escápate a un hotel boutique inmerso en una finca cafetera reconocida mundialmente.
          Un lugar pensado para bajar el ritmo, respirar profundo y volver a conversar sin afán.
        </p>

        {/* Trust chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TRUST_CHIPS.map((chip) => (
            <span
              key={chip}
              className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium"
            >
              <svg
                className="w-3.5 h-3.5 text-brand-gold flex-shrink-0"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7L5.5 10.5L12 3.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {chip}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('hero')}
            className="w-full sm:w-auto bg-brand-pink text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 text-center"
          >
            Ver disponibilidad
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="w-full sm:w-auto flex items-center justify-center bg-brand-pink text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1"
          >
            Reservar ahora
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors duration-200 animate-bounce"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
