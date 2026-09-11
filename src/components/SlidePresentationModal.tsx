import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Heart,
  Phone,
  Instagram,
  Mail,
  Star,
  Play,
  ArrowRight,
} from 'lucide-react';
import { Logo } from './Logo';
import { PERSONAL_INFO, SOFTWARE_SKILLS } from '../data/portfolioData';

import heroIllustration from '../assets/images/dayana_hero_illustration_1788476518158.jpg';
import avatarProfiles from '../assets/images/dayana_avatar_profiles_1788476535493.jpg';
import motorcycleLandscape from '../assets/images/motorcycle_landscape_triptych_1788476551889.jpg';
import woodenProducts from '../assets/images/wooden_products_triptych_1788476570483.jpg';
import animalsPhotography from '../assets/images/animals_photography_duo_1788476588938.jpg';
import portraitDayana from '../assets/images/portrait_dayana_duo_1788476612010.jpg';
import postersTrio from '../assets/images/posters_trio_showcase_1788476629749.jpg';
import maraySheet from '../assets/images/maray_character_sheet_1789092161543.jpg';
import animationShowcase from '../assets/images/animation_2d_showcase_1788476673243.jpg';
import brandManualShowcase from '../assets/images/brand_manual_showcase_1788476689467.jpg';

interface SlidePresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlide?: number;
}

export const SlidePresentationModal: React.FC<SlidePresentationModalProps> = ({
  isOpen,
  onClose,
  initialSlide = 1,
}) => {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [heartLiked, setHeartLiked] = useState(false);

  const totalSlides = 19;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides ? prev + 1 : 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 1 ? prev - 1 : totalSlides));
  }, [totalSlides]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, nextSlide, prevSlide, onClose]);

  if (!isOpen) return null;

  // Determine active nav link depending on current slide
  const getActiveNav = (slide: number): string => {
    if (slide === 1) return 'INICIO';
    if (slide === 17 || slide === 18) return 'SOBRE MÍ';
    if (slide === 19) return 'DESTACADOS';
    return 'PORTAFOLIO';
  };

  const activeNav = getActiveNav(currentSlide);

  return (
    <div
      id="slide-presentation-modal-overlay"
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-between select-none overflow-hidden"
    >
      {/* Top Floating Control Bar */}
      <div className="w-full bg-neutral-950/90 border-b border-neutral-800 px-4 sm:px-6 py-2.5 flex items-center justify-between z-40">
        <div className="flex items-center space-x-3">
          <span className="font-title text-xs sm:text-sm text-portfolio-orange font-bold">
            MODO DIAPOSITIVAS
          </span>
          <span className="font-mono-tech text-xs text-neutral-400">
            Diapositiva <strong className="text-white font-bold">{currentSlide}</strong> de {totalSlides}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
                setIsFullscreen(true);
              } else {
                document.exitFullscreen().catch(() => {});
                setIsFullscreen(false);
              }
            }}
            className="hidden sm:flex items-center space-x-1 text-xs text-neutral-300 hover:text-white px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800"
            title="Pantalla Completa"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span>{isFullscreen ? 'Salir' : 'Pantalla Completa'}</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700"
            aria-label="Cerrar diapositivas"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main 16:9 Slide Canvas Screen */}
      <div className="flex-1 w-full max-w-6xl p-2 sm:p-4 flex items-center justify-center relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 z-30 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-portfolio-orange text-white hover:text-black border border-neutral-700 transition-all shadow-xl active:scale-95"
          aria-label="Diapositiva anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 z-30 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-portfolio-orange text-white hover:text-black border border-neutral-700 transition-all shadow-xl active:scale-95"
          aria-label="Diapositiva siguiente"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* 16:9 Presentation Frame */}
        <div className="w-full aspect-[16/9] max-h-[82vh] bg-black border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden relative flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Header inside slide matching every slide */}
          <div className="w-full flex items-center justify-between border-b border-neutral-900/60 pb-3 mb-2 z-20">
            <Logo size="sm" />

            <div className="flex items-center space-x-4 sm:space-x-7">
              {['INICIO', 'SOBRE MÍ', 'SERVICIOS', 'DESTACADOS', 'PORTAFOLIO'].map((link) => {
                const isActive = activeNav === link;
                return (
                  <span
                    key={link}
                    className={`font-title text-[11px] sm:text-sm font-bold tracking-wider relative ${
                      isActive ? 'text-portfolio-orange' : 'text-neutral-400'
                    }`}
                  >
                    {link}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-portfolio-orange rounded-full" />
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Slide Content Dynamic Renderer */}
          <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden py-2">
            {/* SLIDE 1: INICIO (HERO) */}
            {currentSlide === 1 && (
              <div className="w-full h-full grid grid-cols-12 gap-6 items-center">
                <div className="col-span-7 flex flex-col items-start justify-center">
                  <h1 className="font-max-voltage text-4xl sm:text-6xl lg:text-7xl text-white leading-none mb-4 uppercase">
                    ESTO ES
                    <br />
                    LO
                    <br />
                    QUE
                    <br />
                    CREO
                  </h1>
                  <p className="font-mono-tech text-sm sm:text-xl text-neutral-300 mb-6">
                    Y apenas es el comienzo
                  </p>
                  <button
                    onClick={() => setCurrentSlide(2)}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 border border-portfolio-orange text-white hover:bg-portfolio-orange hover:text-black transition-colors font-mono-tech text-xs sm:text-sm font-bold"
                  >
                    <span>Ver portafolio</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="col-span-5 flex justify-end items-center h-full">
                  <img
                    src={heroIllustration}
                    alt="Dayana Ilustradora"
                    className="h-full max-h-[85%] object-contain rounded-xl shadow-2xl border border-neutral-800"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 2: CARÁTULA PORTAFOLIO 2026 */}
            {currentSlide === 2 && (
              <div className="w-full h-full grid grid-cols-12 gap-6 items-center">
                <div className="col-span-4 flex justify-start items-center h-full">
                  <img
                    src={heroIllustration}
                    alt="Avatar Dayana"
                    className="h-full max-h-[85%] object-contain rounded-xl shadow-2xl border border-neutral-800"
                  />
                </div>
                <div className="col-span-8 flex flex-col justify-center">
                  <h2 className="font-max-voltage text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-none uppercase mb-2">
                    PORTAFOLIO
                    <br />
                    <span className="text-portfolio-orange">2026</span>
                  </h2>
                  <p className="font-title text-2xl sm:text-4xl text-neutral-200 font-bold uppercase tracking-wider mb-2">
                    PRODUCTORA MULTIMEDIA
                  </p>
                  <p className="font-mono-tech text-base sm:text-xl text-neutral-400">
                    Nicol Dayana Castiblanco Espinosa
                  </p>
                </div>
              </div>
            )}

            {/* SLIDE 3: SEPARADOR ILUSTRACIONES / BOCETOS */}
            {currentSlide === 3 && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <h2 className="font-max-voltage text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-4">
                  ILUSTRACIONES
                </h2>
                <p className="font-mono-tech text-2xl sm:text-3xl text-neutral-300">
                  Bocetos
                </p>
              </div>
            )}

            {/* SLIDE 4: ILUSTRACIONES - MARAY VERSIÓN UNO */}
            {currentSlide === 4 && (
              <div className="w-full h-full grid grid-cols-12 gap-6 items-center">
                <div className="col-span-8 flex items-center justify-center h-full">
                  <img
                    src={maraySheet}
                    alt="Maray Versión Uno"
                    className="w-full h-full max-h-[85%] object-contain rounded-xl border border-neutral-800 bg-neutral-950 p-2"
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-center">
                  <h3 className="font-title text-3xl sm:text-4xl font-black text-white uppercase mb-2">
                    MARAY
                  </h3>
                  <span className="font-mono-tech text-lg text-portfolio-orange mb-4">
                    Version Uno
                  </span>
                  <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Diseño de personaje base, bocetado lineal con turnaround ortográfico y guía de expresiones gestuales.
                  </p>
                </div>
              </div>
            )}

            {/* SLIDE 5: ILUSTRACIONES - MARAY VERSIÓN DOS */}
            {currentSlide === 5 && (
              <div className="w-full h-full grid grid-cols-12 gap-6 items-center">
                <div className="col-span-4 flex flex-col justify-center">
                  <h3 className="font-title text-3xl sm:text-4xl font-black text-white uppercase mb-2">
                    MARAY
                  </h3>
                  <span className="font-mono-tech text-lg text-portfolio-orange mb-4">
                    Version Dos
                  </span>
                  <p className="font-mono-tech text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    Evolución anatómica y desarrollo de vestuario estilizado con vistas ortográficas completas.
                  </p>
                </div>
                <div className="col-span-8 flex items-center justify-center h-full">
                  <img
                    src={maraySheet}
                    alt="Maray Versión Dos"
                    className="w-full h-full max-h-[85%] object-contain rounded-xl border border-neutral-800 bg-neutral-950 p-2"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 6: SEPARADOR ANIMACIÓN 2D */}
            {currentSlide === 6 && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <h2 className="font-max-voltage text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-4">
                  ANIMACIÓN
                </h2>
                <p className="font-mono-tech text-2xl sm:text-4xl text-neutral-300">
                  2D
                </p>
              </div>
            )}

            {/* SLIDE 7: ANIMACIÓN 2D WORKSPACES */}
            {currentSlide === 7 && (
              <div className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-full max-h-[88%] flex items-center justify-center">
                  <img
                    src={animationShowcase}
                    alt="Animación 2D en Adobe Animate"
                    className="w-full h-full object-contain rounded-xl border-2 border-portfolio-orange/80 shadow-2xl p-2 bg-neutral-950"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 8: SEPARADOR FOTOGRAFÍAS */}
            {currentSlide === 8 && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <h2 className="font-max-voltage text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight">
                  FOTOGRAFÍAS
                </h2>
              </div>
            )}

            {/* SLIDE 9: FOTOGRAFÍAS - PAISAJE */}
            {currentSlide === 9 && (
              <div className="w-full h-full flex flex-col justify-between">
                <h3 className="font-mono-tech text-xl sm:text-2xl text-neutral-300 font-bold mb-2">
                  Paisaje
                </h3>
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={motorcycleLandscape}
                    alt="Fotografía Paisaje Motocicleta"
                    className="w-full h-full object-contain rounded-xl border border-neutral-800 shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 10: FOTOGRAFÍAS - PRODUCTO */}
            {currentSlide === 10 && (
              <div className="w-full h-full flex flex-col justify-between">
                <h3 className="font-mono-tech text-xl sm:text-2xl text-neutral-300 font-bold mb-2">
                  Producto
                </h3>
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={woodenProducts}
                    alt="Fotografía Producto Madera y Bambú"
                    className="w-full h-full object-contain rounded-xl border border-neutral-800 shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 11: FOTOGRAFÍAS - ANIMALES */}
            {currentSlide === 11 && (
              <div className="w-full h-full flex flex-col justify-between">
                <h3 className="font-mono-tech text-xl sm:text-2xl text-neutral-300 font-bold mb-2">
                  Animales
                </h3>
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={animalsPhotography}
                    alt="Fotografía Animales Gato y Perico"
                    className="w-full h-full object-contain rounded-xl border border-neutral-800 shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 12: FOTOGRAFÍAS - RETRATO */}
            {currentSlide === 12 && (
              <div className="w-full h-full flex flex-col justify-between">
                <h3 className="font-mono-tech text-xl sm:text-2xl text-neutral-300 font-bold mb-2">
                  Retrato
                </h3>
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={portraitDayana}
                    alt="Fotografía Retrato Dayana"
                    className="w-full h-full object-contain rounded-xl border border-neutral-800 shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 13: SEPARADOR POSTERS */}
            {currentSlide === 13 && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <h2 className="font-max-voltage text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight">
                  POSTERS
                </h2>
              </div>
            )}

            {/* SLIDE 14: POSTERS (BARTOLITO, VOGUE, DAYANA) */}
            {currentSlide === 14 && (
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={postersTrio}
                  alt="Posters Trío: Bartolito, Vogue, Dayana"
                  className="w-full h-full object-contain rounded-xl border border-neutral-800 shadow-xl"
                />
              </div>
            )}

            {/* SLIDE 15: SEPARADOR PROYECTOS */}
            {currentSlide === 15 && (
              <div className="w-full h-full flex flex-col items-center justify-center text-center">
                <h2 className="font-max-voltage text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight">
                  PROYECTOS
                </h2>
              </div>
            )}

            {/* SLIDE 16: PROYECTOS - MANUAL DE MARCA */}
            {currentSlide === 16 && (
              <div className="w-full h-full flex flex-col justify-between">
                <h3 className="font-mono-tech text-xl sm:text-2xl text-neutral-300 font-bold mb-2">
                  Manual de marca
                </h3>
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <img
                    src={brandManualShowcase}
                    alt="Manual de marca ROI y Firefly"
                    className="w-full h-full object-contain rounded-xl border border-neutral-800 shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* SLIDE 17: SOBRE MÍ */}
            {currentSlide === 17 && (
              <div className="w-full h-full grid grid-cols-12 gap-6 items-center">
                <div className="col-span-4 flex flex-col items-center justify-center">
                  <div className="relative flex flex-col items-center -space-y-4">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white bg-neutral-900 shadow-xl">
                      <img
                        src={avatarProfiles}
                        alt="Avatar Guiño"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white bg-neutral-900 shadow-xl">
                      <img
                        src={avatarProfiles}
                        alt="Avatar Sonrisa"
                        className="w-full h-full object-cover object-bottom"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-8 flex flex-col justify-center">
                  <h2 className="font-max-voltage text-3xl sm:text-4xl font-bold text-white mb-4 uppercase tracking-wider">
                    Soy Dayana
                  </h2>
                  <p className="font-mono-tech text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 max-w-xl">
                    {PERSONAL_INFO.bio}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-neutral-800">
                    <div className="flex items-center space-x-2 text-[11px] font-mono-tech text-neutral-300">
                      <div className="w-7 h-7 rounded-full bg-black border border-orange-500 flex items-center justify-center text-portfolio-orange flex-shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{PERSONAL_INFO.phone}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-[11px] font-mono-tech text-neutral-300">
                      <div className="w-7 h-7 rounded-full bg-black border border-orange-500 flex items-center justify-center text-portfolio-orange flex-shrink-0">
                        <Instagram className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{PERSONAL_INFO.instagram}</span>
                    </div>

                    <div className="flex items-center space-x-2 text-[11px] font-mono-tech text-neutral-300">
                      <div className="w-7 h-7 rounded-full bg-black border border-orange-500 flex items-center justify-center text-portfolio-orange flex-shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span className="truncate">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 18: SOFTWARE SKILLS E IDIOMA */}
            {currentSlide === 18 && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-full max-w-4xl bg-white rounded-2xl p-6 sm:p-8 text-black shadow-2xl grid grid-cols-12 gap-6 items-center">
                  <div className="col-span-8 grid grid-cols-2 gap-4">
                    {SOFTWARE_SKILLS.map((skill) => (
                      <div key={skill.shortCode} className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-full bg-black border border-orange-500 flex items-center justify-center text-cyan-400 font-title font-bold text-sm flex-shrink-0">
                          {skill.shortCode}
                        </div>
                        <div>
                          <div className="flex items-center space-x-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-4 h-4 ${
                                  s <= skill.rating ? 'fill-black text-black' : 'text-neutral-300 stroke-[1.5]'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-4 flex flex-col items-center justify-center">
                    <span className="font-mono-tech text-neutral-600 text-xs font-bold mb-1">
                      Idioma
                    </span>
                    <div className="bg-portfolio-orange text-white py-3 px-6 text-center shadow-md w-full max-w-[180px]">
                      <span className="font-title text-xl font-bold uppercase tracking-wider">
                        ESPAÑOL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 19: DESTACADOS */}
            {currentSlide === 19 && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="grid grid-cols-3 gap-6 w-full max-w-3xl items-center">
                  {/* Card Left Orange */}
                  <div className="bg-portfolio-orange rounded-xl p-4 h-56 flex flex-col justify-between shadow-lg">
                    <span className="font-mono-tech text-[10px] font-bold uppercase text-black bg-white/80 px-2 py-0.5 rounded w-fit">
                      ILUSTRACIÓN
                    </span>
                    <p className="font-title text-sm font-bold text-black leading-tight">
                      MARAY Concept Art
                    </p>
                    <div className="h-24 rounded bg-black/20 overflow-hidden">
                      <img src={maraySheet} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Card Center White with Heart Below (Slide 19) */}
                  <div className="relative bg-white rounded-xl p-4 h-60 flex flex-col justify-between shadow-2xl scale-105 z-10 text-black">
                    <span className="font-mono-tech text-[10px] font-bold uppercase text-white bg-portfolio-orange px-2 py-0.5 rounded w-fit">
                      FOTOGRAFÍA
                    </span>
                    <p className="font-title text-sm font-bold text-black leading-tight">
                      Serie Carretera
                    </p>
                    <div className="h-28 rounded bg-neutral-200 overflow-hidden">
                      <img src={motorcycleLandscape} alt="" className="w-full h-full object-cover" />
                    </div>

                    {/* Heart icon button below card */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                      <button
                        onClick={() => setHeartLiked(!heartLiked)}
                        className="w-9 h-9 bg-white border border-neutral-300 rounded shadow-md flex items-center justify-center hover:bg-neutral-50 transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            heartLiked ? 'fill-red-500 text-red-500' : 'text-black'
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Card Right Orange */}
                  <div className="bg-portfolio-orange rounded-xl p-4 h-56 flex flex-col justify-between shadow-lg">
                    <span className="font-mono-tech text-[10px] font-bold uppercase text-black bg-white/80 px-2 py-0.5 rounded w-fit">
                      POSTERS
                    </span>
                    <p className="font-title text-sm font-bold text-black leading-tight">
                      VOGUE Editorial
                    </p>
                    <div className="h-24 rounded bg-black/20 overflow-hidden">
                      <img src={postersTrio} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer note inside slide frame */}
          <div className="w-full flex items-center justify-between pt-2 border-t border-neutral-900/60 text-[10px] font-mono-tech text-neutral-400">
            <span>Nicol Dayana Castiblanco Espinosa</span>
            <span>Diapositiva {currentSlide} de 19</span>
          </div>
        </div>
      </div>

      {/* Bottom Thumbnails Strip for Quick Navigation */}
      <div className="w-full bg-neutral-950 border-t border-neutral-800 py-3 px-4 overflow-x-auto no-scrollbar flex items-center justify-center space-x-2 z-40">
        {Array.from({ length: totalSlides }, (_, i) => i + 1).map((slideNum) => (
          <button
            key={slideNum}
            onClick={() => setCurrentSlide(slideNum)}
            className={`px-3 py-1 text-xs font-mono-tech rounded transition-all ${
              currentSlide === slideNum
                ? 'bg-portfolio-orange text-black font-bold scale-110 shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
            }`}
          >
            {slideNum}
          </button>
        ))}
      </div>
    </div>
  );
};
