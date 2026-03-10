import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, MapPin, Clock, Mountain, Wifi, Star, MessageCircle, CalendarDays, CheckCircle } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logo from './components/Logo';

import { useScrollReveal } from './hooks/useScrollReveal';
import { useAnalytics } from './hooks/useAnalytics';

import {
  ASSETS,
  STATS,
  CABIN_FEATURES,
  PERFECT_FOR,
  EXPERIENCES,
  DISTANCE_POINTS,
  PRIVACY_POINTS,
  FAQ_ITEMS,
  CLOUDBEDS_URL,
  WHATSAPP_URL,
  EMAIL,
  NAV_LINKS,
} from './constants';

// ─── WhatsApp floating button ─────────────────────────────────────────────────
function FloatingCTA() {
  const { trackWhatsAppClick } = useAnalytics();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 30000);

    const initial = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(initial);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      <div
        className={`bg-white text-brand-dark text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm shadow-lg border border-brand-beige/50 whitespace-nowrap transition-all duration-300 ${
          showTooltip
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        Pregunta por reservas 💬
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('floating_button')}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-pink text-white shadow-lg hover:bg-brand-pink/90 hover:shadow-xl hover:shadow-brand-pink/40 hover:-translate-y-1 transition-all duration-300"
        aria-label="Contáctanos"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </a>
    </div>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="bg-brand-dark py-10" aria-label="Estadísticas clave">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl sm:text-5xl text-brand-gold mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base mb-0.5">
                {stat.label}
              </div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Search Section ───────────────────────────────────────────────────────────
function SearchSection() {
  const { ref, isVisible } = useScrollReveal();

  const POETIC_ITEMS = [
    'Despertar con el sonido de los pájaros.',
    'Disfrutar de un atardecer colorido.',
    'Caminar entre montañas a 1.800 metros de altura.',
    'Dormir profundamente en medio del silencio.',
  ];

  const PHOTO_GRID = [
    { src: ASSETS.BOSQUE,    alt: 'Bosque de niebla' },
    { src: ASSETS.SUNSET,    alt: 'Atardecer desde la cabaña' },
    { src: ASSETS.EXTERIOR,  alt: 'Exterior de la cabaña' },
    { src: ASSETS.CABANA,    alt: 'Interior de la cabaña' },
  ];

  return (
    <section
      id="busqueda"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="busqueda-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column — text */}
          <div>
            <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
              Un refugio para desconectarse juntos
            </p>
            <h2
              id="busqueda-titulo"
              className="font-serif text-4xl sm:text-5xl text-brand-dark mb-5"
            >
              Si estás buscando esto, estás en el lugar correcto.
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-7">
              Nuestras cabañas privadas, rodeadas de cafetales y bosque de niebla, están
              diseñadas para ofrecer intimidad, calma y comodidad en su forma más auténtica.
            </p>
            <ul className="space-y-3 mb-7">
              {POETIC_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-pink mt-2"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif text-brand-dark text-lg italic">
              Eso es lo que define una escapada aquí.
            </p>
          </div>

          {/* Right column — 2×2 photo grid */}
          <div className="grid grid-cols-2 gap-3">
            {PHOTO_GRID.map((photo) => (
              <div
                key={photo.src}
                className="rounded-2xl overflow-hidden aspect-[4/3]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Cabin Section ────────────────────────────────────────────────────────────
function CabinSection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();

  return (
    <section
      id="cabanas"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cabanas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Sobre nuestras cabañas
          </p>
          <h2
            id="cabanas-titulo"
            className="font-serif text-4xl sm:text-5xl text-brand-dark mb-3"
          >
            Cada cabaña es independiente y está construida en madera natural, en armonía con el entorno
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-4">Cuentan con baño privado, terraza y una atmósfera cálida y serena que invita al descanso profundo.</p>
          <p className="font-serif text-brand-dark text-xl font-medium italic">El lujo aquí no es exceso.<br />Es espacio, silencio y naturaleza.</p>
        </div>

        {/* Main cabin content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Media Gallery */}
          <div className="flex flex-col gap-2">
            {/* Tina video - main */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video autoPlay muted loop playsInline poster={ASSETS.TINA} className="w-full h-[280px] object-cover">
                <source src={ASSETS.TINA_VIDEO_WEBM} type="video/webm" />
                <source src={ASSETS.TINA_VIDEO_MP4} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <video autoPlay muted loop playsInline poster={ASSETS.CABANA} className="w-full h-[180px] object-cover">
                  <source src={ASSETS.CAMA_VIDEO_WEBM} type="video/webm" />
                  <source src={ASSETS.CAMA_VIDEO_MP4} type="video/mp4" />
                </video>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img src={ASSETS.CABANA} alt="Interior cabaña romántica" className="w-full h-[180px] object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-brand-dark mb-6">
              Lo que incluye tu estadía:
            </h3>
            <ul className="space-y-4 mb-8">
              {CABIN_FEATURES.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-brand-pink"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature.text}</span>
                </li>
              ))}
            </ul>

            {/* Perfect for */}
            <div className="bg-brand-light rounded-2xl p-5 mb-8">
              <p className="text-brand-dark font-semibold mb-3 text-sm uppercase tracking-wide">
                Ideal para:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {PERFECT_FOR.map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-gray-700 text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CLOUDBEDS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAvailabilityClick('cabanas_section')}
                className="flex-1 text-center bg-brand-pink text-white py-3.5 rounded-full font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
              >
                Ver disponibilidad
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('cabanas_section')}
                className="flex-1 text-center bg-brand-pink text-white py-3.5 rounded-full font-semibold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-lg hover:shadow-brand-pink/30 hover:-translate-y-0.5"
              >
                Reservar ahora
              </a>
            </div>
          </div>
        </div>

        {/* Gallery strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { src: ASSETS.CAFETALES, alt: 'Cafetales de La Palma & El Tucán' },
            { src: ASSETS.BOSQUE, alt: 'Caminata por el bosque de niebla' },
            { src: ASSETS.DEGUSTACION, alt: 'Degustación de cafés de especialidad' },
          ].map((img) => (
            <div key={img.src} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experiences Section ──────────────────────────────────────────────────────
function ExperiencesSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="experiencias"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="experiencias-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Todo incluido
          </p>
          <h2
            id="experiencias-titulo"
            className="font-serif text-4xl sm:text-5xl text-brand-dark mb-3"
          >
            No es solo hospedaje. Es toda una experiencia.
          </h2>
          <p className="text-gray-500 text-lg">Tu estadía incluye:</p>
        </div>

        {/* Experience cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={exp.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-brand-beige/40 hover:shadow-md hover:-translate-y-1 transition-all duration-200 group"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-4">{exp.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-pink transition-colors duration-200">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
            </article>
          ))}
        </div>

        {/* Processing station image */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-xl relative">
          <img
            src={ASSETS.EXTERIOR}
            alt="Proceso de beneficio del café en La Palma & El Tucán"
            className="w-full h-64 sm:h-80 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-transparent flex items-center">
            <div className="p-8 max-w-lg">
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-3">
                Hotel boutique en una finca de clase mundial
              </p>
              <p className="font-serif text-white text-xl leading-snug mb-3">
                La Palma &amp; El Tucán no es un hotel tradicional.
              </p>
              <p className="text-white/80 text-sm leading-relaxed mb-2">
                Es un proyecto de caficultura y humano que ha puesto el nombre de Colombia en las mejores tazas del mundo.
              </p>
              <p className="text-white/80 text-sm leading-relaxed italic">
                Hospedarte aquí es vivir esa historia desde adentro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Section ──────────────────────────────────────────────────────────
function ReviewsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const REVIEWS = [
    {
      text: 'Una experiencia que no esperaba encontrar tan cerca de la ciudad. Las cabañas son acogedoras, el silencio es real y el Coffee Tour fue lo mejor del viaje. Volvimos al mes siguiente.',
      author: 'Visitante desde Bogotá',
      rating: 5,
      source: 'Google',
    },
    {
      text: 'Llegamos por nuestro aniversario y fue mucho mejor de lo que imaginamos. Desayuno delicioso, cabaña íntima, atardecer espectacular. El tipo de lugar al que uno quiere volver.',
      author: 'Pareja de aniversario',
      rating: 5,
      source: 'Google',
    },
    {
      text: 'Sabía que La Palma & El Tucán era conocida por el café, pero no imaginé que el hospedaje fuera tan especial. La combinación de naturaleza, arquitectura en madera y el café de especialidad lo hace único en Colombia.',
      author: 'Viajero de Medellín',
      rating: 5,
      source: 'Google',
    },
    {
      text: 'Ya es la tercera vez que venimos. El bosque de niebla, el silencio y el desayuno artesanal son razones suficientes para repetir. Un refugio real a 90 minutos de Bogotá.',
      author: 'Huésped recurrente',
      rating: 5,
      source: 'Google',
    },
  ];

  const perPage = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3;
  const totalPages = Math.ceil(REVIEWS.length / perPage);

  const goTo = (p: number, pause = true) => {
    if (pause) setIsPaused(true);
    setPage(((p % totalPages) + totalPages) % totalPages);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => goTo(page + 1, false), 5000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [page, isPaused]);

  const visible = REVIEWS.slice(page * perPage, page * perPage + perPage);

  return (
    <section
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="resenas-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Reseñas reales
          </p>
          <h2
            id="resenas-titulo"
            className="font-serif text-4xl sm:text-5xl text-brand-dark"
          >
            Lo que dicen nuestras parejas
          </h2>
        </div>

        <div className="relative flex items-center gap-4">
          <button
            onClick={() => goTo(page - 1)}
            aria-label="Reseñas anteriores"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-beige bg-white shadow-sm flex items-center justify-center text-brand-dark hover:border-brand-pink hover:text-brand-pink transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6" aria-live="polite">
            {visible.map((review, i) => (
              <article
                key={`${page}-${i}`}
                className="bg-brand-light border border-brand-beige/50 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-brand-dark text-sm leading-relaxed flex-1 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{review.author}</span>
                  <span className="font-medium">{review.source}</span>
                </div>
              </article>
            ))}
          </div>

          <button
            onClick={() => goTo(page + 1)}
            aria-label="Siguientes reseñas"
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-beige bg-white shadow-sm flex items-center justify-center text-brand-dark hover:border-brand-pink hover:text-brand-pink transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              aria-label={`Página ${i + 1}`}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === page
                  ? 'w-6 h-2.5 bg-brand-pink'
                  : 'w-2.5 h-2.5 bg-brand-beige hover:bg-brand-pink/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Distance Section ─────────────────────────────────────────────────────────
function DistanceSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      id="ubicacion"
      ref={ref}
      className={`py-20 bg-white scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="ubicacion-titulo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Cerca y privado
          </p>
          <h2
            id="ubicacion-titulo"
            className="font-serif text-4xl sm:text-5xl text-brand-dark"
          >
            Cerca de Bogotá. Lejos del ruido.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Distance column */}
          <div className="bg-brand-dark rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-brand-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold">
                ¿A qué distancia estamos?
              </h3>
            </div>
            <ul className="space-y-5">
              {DISTANCE_POINTS.map((point) => (
                <li key={point.text} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 leading-tight">{point.icon}</span>
                  <span className="text-white/85 leading-relaxed">{point.text}</span>
                </li>
              ))}
            </ul>

            {/* Map snippet hint */}
            <div className="mt-8 bg-white/10 rounded-2xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-brand-gold" aria-hidden="true" />
                <span className="text-brand-gold text-sm font-semibold">Ruta sugerida</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Bogotá → Facatativá → Zipacón. Sin vías difíciles ni 4x4.
              </p>
            </div>
          </div>

          {/* Privacy column */}
          <div className="bg-brand-light rounded-3xl p-8 border border-brand-beige">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-pink/15 flex items-center justify-center flex-shrink-0">
                <Mountain className="w-5 h-5 text-brand-pink" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-dark">
                ¿Es privado?
              </h3>
            </div>
            <ul className="space-y-4">
              {PRIVACY_POINTS.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-pink/15 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-brand-pink"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6L4.5 8.5L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 leading-relaxed">{point.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm border border-brand-beige/50">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="w-4 h-4 text-brand-green" aria-hidden="true" />
                <span className="text-brand-green text-sm font-semibold">
                  Confort garantizado
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Toda la comodidad de un hotel boutique, en medio de la naturaleza. Sin aglomeraciones, sin ruido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Urgency Section ──────────────────────────────────────────────────────────
function UrgencySection() {
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();
  return (
    <section
      ref={ref}
      className={`py-24 relative overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="urgencia-titulo"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.SUNSET}
          alt=""
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Flame icon */}
        <div className="flex justify-center mb-6">
          <span className="text-5xl">🔥</span>
        </div>

        <h2
          id="urgencia-titulo"
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight"
        >
          Los fines de semana{' '}
          <span className="text-brand-pink italic">suelen llenarse con anticipación</span>
        </h2>

        <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Si estás planeando una pausa en pareja, te recomendamos revisar disponibilidad con tiempo.
          Reserva directamente con nosotros y vive la experiencia completa.
        </p>

        {/* Availability indicator */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-brand-pink/15 border border-brand-pink/30 text-brand-pink px-5 py-2.5 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
            Disponibilidad limitada este fin de semana
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('urgency_section')}
            className="w-full sm:w-auto bg-brand-pink text-white px-10 py-[18px] rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Ver disponibilidad ahora
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('urgency_section')}
            className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-200 hover:-translate-y-1"
          >
            Más información
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FaqSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="faq-titulo"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Resolvemos tus dudas
          </p>
          <h2
            id="faq-titulo"
            className="font-serif text-4xl sm:text-5xl text-brand-dark"
          >
            Preguntas frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={index} className="bg-white rounded-2xl shadow-sm border border-brand-beige/50 overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-light/50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-inset"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-brand-dark text-base pr-4">
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-auto text-brand-pink">
                    {isOpen ? (
                      <ChevronUp size={20} aria-hidden="true" />
                    ) : (
                      <ChevronDown size={20} aria-hidden="true" />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-brand-beige/40 pt-4">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Booking Steps Section ────────────────────────────────────────────────────
function BookingStepsSection() {
  const { ref, isVisible } = useScrollReveal();
  const steps = [
    { icon: MessageCircle, title: 'Escríbenos por WhatsApp', description: 'Cuéntanos tus fechas y preferencias' },
    { icon: CalendarDays, title: 'Confirma tus fechas', description: 'Te enviamos disponibilidad y opciones' },
    { icon: CheckCircle, title: '¡Listo, nos vemos!', description: 'Recibe confirmación y detalles de llegada' },
  ] as const;

  return (
    <section
      ref={ref}
      className={`py-20 bg-brand-light scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="pasos-titulo"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold tracking-widest uppercase text-sm mb-3">
            Fácil y rápido
          </p>
          <h2 id="pasos-titulo" className="font-serif text-4xl sm:text-5xl text-brand-dark">
            Reserva en 3 simples pasos
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6 relative">
          {/* Dashed line connector (desktop only) */}
          <div className="hidden sm:block absolute top-10 left-[20%] right-[20%] border-t-2 border-dashed border-brand-beige" aria-hidden="true" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center relative z-10 flex-1">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-beige shadow-sm flex items-center justify-center">
                    <Icon className="w-8 h-8 text-brand-pink" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-pink text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-dark mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────
function CtaFinal() {
  const { ref, isVisible } = useScrollReveal();
  const { trackAvailabilityClick, trackWhatsAppClick } = useAnalytics();

  const STEPS = [
    { number: '1', label: 'Elige tu fecha' },
    { number: '2', label: 'Confirma disponibilidad' },
    { number: '3', label: 'Prepárate para desconectarte' },
  ];

  return (
    <section
      id="reservar"
      ref={ref}
      className={`relative py-28 overflow-hidden scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      aria-labelledby="cta-titulo"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.CAFETALES}
          alt="Cafetales de La Palma & El Tucán al atardecer"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-dark/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-pink/20 border border-brand-pink/40 text-brand-pink px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
          Disponibilidad limitada
        </div>

        <h2
          id="cta-titulo"
          className="font-serif text-4xl sm:text-5xl text-white mb-4"
        >
          Reserva en 2 minutos
        </h2>

        <p className="text-white/70 text-base mb-12">
          Así de sencillo es empezar tu escapada perfecta.
        </p>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-pink flex items-center justify-center text-white font-bold text-lg mb-2 shadow-lg shadow-brand-pink/40">
                  {step.number}
                </div>
                <span className="text-white/85 text-sm font-medium text-center max-w-[100px]">
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:block w-12 h-0.5 bg-white/20 mt-[-20px]" />
              )}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={CLOUDBEDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAvailabilityClick('cta_final')}
            className="w-full sm:w-auto bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Ver disponibilidad
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('cta_final')}
            className="w-full sm:w-auto flex items-center justify-center bg-brand-pink text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-brand-pink/90 transition-all duration-200 hover:shadow-2xl hover:shadow-brand-pink/50 hover:-translate-y-1"
          >
            Escribir por correo
          </a>
        </div>

        {/* Trust note */}
        <p className="text-white/50 text-sm">
          Respuesta inmediata · Hablamos español · Confirmación al instante
        </p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const { trackWhatsAppClick, trackEmailClick } = useAnalytics();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Logo variant="light" size="lg" />
            <p className="text-white/50 text-sm mt-4 leading-relaxed max-w-xs">
              Finca cafetera boutique a 90 minutos de Bogotá. Cabañas privadas con tina,
              desayuno y Coffee Tour incluido.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Navegación
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('footer')}
                  className="flex items-center gap-2 text-white/50 hover:text-brand-pink text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick('footer')}
                  className="text-white/50 hover:text-brand-pink text-sm transition-colors duration-200 break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-white/50 text-sm">
                  Zipacón, Cundinamarca, Colombia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} La Palma &amp; El Tucán. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Cabañas románticas cerca a Bogotá · Finca cafetera Zipacón
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  useAnalytics(true);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <SearchSection />
        <CabinSection />
        <ExperiencesSection />
        <ReviewsSection />
        <DistanceSection />
        <UrgencySection />
        <FaqSection />
        <BookingStepsSection />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
