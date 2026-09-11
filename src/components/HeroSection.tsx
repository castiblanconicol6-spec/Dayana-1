import React, { useState } from 'react';
import { ArrowRight, Camera, Palette, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onExplorePortfolio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplorePortfolio }) => {
  const [showRealPortrait, setShowRealPortrait] = useState(false);

  const togglePortraitMode = () => {
    setShowRealPortrait((prev) => !prev);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] md:min-h-screen bg-black flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient lighting behind hero */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Typography & Call to Action (exact text from Slide 1) */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start z-10">
          <h1
            id="hero-title"
            className="font-max-voltage text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-white uppercase tracking-wider leading-[1.0] mb-6 select-none"
          >
            ESTO ES LO
            <br />
            QUE CREO
          </h1>

          <p
            id="hero-subtitle"
            className="font-mono-tech text-xl sm:text-2xl text-neutral-300 font-normal tracking-wide mb-10"
          >
            Y apenas es el comienzo
          </p>

          <div className="flex items-center">
            {/* Styled CTA button with thin orange border matching slide 1 */}
            <button
              id="hero-cta-btn"
              onClick={onExplorePortfolio}
              className="group inline-flex items-center space-x-3 px-6 py-3.5 border-2 border-portfolio-orange hover:bg-portfolio-orange text-white hover:text-black transition-all duration-300 rounded-none shadow-lg active:scale-95"
            >
              <span className="font-mono-tech text-base sm:text-lg font-bold tracking-wider">
                Ver portafolio
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </div>
        </div>

        {/* Right: Character Illustration & Real Portrait Toggle (Slide 1) */}
        <div className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end items-center relative">
          <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
            {/* The primary hero artwork container with toggle */}
            <div className="relative z-10 overflow-hidden rounded-2xl border-2 border-neutral-800/90 hover:border-portfolio-orange/60 shadow-2xl bg-neutral-950 transition-colors duration-500 group">
              {/* Image with smooth fade transition */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  id="hero-dayana-img"
                  key={showRealPortrait ? 'real' : 'animated'}
                  src={showRealPortrait ? PERSONAL_INFO.realPortrait : PERSONAL_INFO.heroIllustration}
                  alt={
                    showRealPortrait
                      ? 'Nicol Dayana Castiblanco - Retrato Real'
                      : 'Nicol Dayana - Ilustración Digital Animada'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-all duration-700 ease-out hover:scale-103 animate-in fade-in zoom-in-95"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                {/* Single Button for toggling image mode */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    id="hero-toggle-portrait-btn"
                    onClick={togglePortraitMode}
                    className="flex items-center space-x-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-black/85 hover:bg-portfolio-orange text-white hover:text-black border-2 border-portfolio-orange shadow-2xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 active:scale-95 font-title text-xs sm:text-sm font-bold tracking-wider"
                  >
                    {showRealPortrait ? (
                      <>
                        <Palette className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        <span>Ver imagen animada</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        <span>Ver retrato real</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
