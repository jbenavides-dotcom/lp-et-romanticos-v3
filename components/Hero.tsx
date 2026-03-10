import { ChevronDown } from 'lucide-react';
import { ASSETS, WHATSAPP_URL } from '../constants';
import { useAnalytics } from '../hooks/useAnalytics';

const TRUST_CHIPS = [
  'Cabañas privadas',
  'Tina privada',
  'Coffee Tour incluido',
  'Booking 9.5/10',
];

export default function Hero() {
  const { trackWhatsAppClick } = useAnalytics();

  const handleScrollDown = () => {
    const next = document.querySelector('#por-que');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPrecios = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#precios');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Inicio — Escapada Romántica La Palma & El Tucán"
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
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
          Tu Escapada Romántica a{' '}
          <span className="text-brand-gold italic">90 Minutos de Bogotá</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Cabañas privadas en bosque de niebla · Tina · Coffee Tour incluido · Booking 9.5/10
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero')}
            className="w-full sm:w-auto bg-brand-pink text-white px-8 py-4 rounded-full text-base font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 text-center"
          >
            Reservar por WhatsApp
          </a>
          <a
            href="#precios"
            onClick={handleScrollToPrecios}
            className="w-full sm:w-auto flex items-center justify-center border-2 border-white/40 text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            Ver planes y precios
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
