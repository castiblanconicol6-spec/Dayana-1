import React, { useState, useMemo } from 'react';
import { Sparkles, Filter, Layers, Film, Camera, Palette, Briefcase } from 'lucide-react';
import { PORTFOLIO_ITEMS, PERSONAL_INFO } from '../data/portfolioData';
import { CategoryId, PhotoSubcategory, PortfolioItem } from '../types';

interface PortfolioSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const [activePhotoSubcat, setActivePhotoSubcat] = useState<PhotoSubcategory | 'all'>('all');

  const categories: { id: CategoryId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: 'TODOS', icon: Layers },
    { id: 'ilustraciones', label: 'ILUSTRACIONES', icon: Palette },
    { id: 'animacion', label: 'ANIMACIÓN 2D', icon: Film },
    { id: 'fotografias', label: 'FOTOGRAFÍAS', icon: Camera },
    { id: 'posters', label: 'POSTERS', icon: Sparkles },
    { id: 'proyectos', label: 'PROYECTOS', icon: Briefcase },
  ];

  const photoSubcategories: { id: PhotoSubcategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Todas las fotos' },
    { id: 'paisaje', label: 'Paisaje' },
    { id: 'producto', label: 'Producto' },
    { id: 'animales', label: 'Animales' },
    { id: 'retrato', label: 'Retrato' },
  ];

  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      if (activeCategory === 'fotografias' && activePhotoSubcat !== 'all') {
        return item.subcategory?.toLowerCase() === activePhotoSubcat;
      }
      return true;
    });
  }, [activeCategory, activePhotoSubcat]);

  return (
    <section id="portafolio" className="py-24 bg-black relative border-t border-neutral-900">
      {/* Cover Header Banner mirroring Slide 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" id="portfolio-cover-banner">
        <div className="relative rounded-3xl bg-neutral-950 border border-neutral-800/80 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left avatar crop (Slide 2) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-neutral-700 shadow-xl bg-black">
                <img
                  src={PERSONAL_INFO.heroIllustration}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right: Big Titles (Slide 2) */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-portfolio-orange font-mono-tech text-sm tracking-widest uppercase mb-3">
                <span className="w-2 h-2 rounded-full bg-portfolio-orange animate-pulse" />
                <span>Colección Integral</span>
              </div>

              <h2 className="font-max-voltage text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-wider leading-[0.95] mb-4">
                PORTAFOLIO
                <br />
                <span className="text-portfolio-orange">2026</span>
              </h2>

              <p className="font-title text-xl sm:text-2xl lg:text-3xl text-neutral-300 font-bold tracking-wider uppercase mb-2">
                PRODUCTORA MULTIMEDIA
              </p>

              <p className="font-mono-tech text-base sm:text-lg text-neutral-400">
                Nicol Dayana Castiblanco Espinosa
              </p>
            </div>
          </div>

          {/* Background subtle neon orange ambient */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Main Categories Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-800 pb-6">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-2 w-full lg:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-btn-${cat.id}`}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    if (cat.id !== 'fotografias') {
                      setActivePhotoSubcat('all');
                    }
                  }}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-title font-bold tracking-wider transition-all whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-portfolio-orange text-black shadow-lg shadow-orange-500/20'
                      : 'bg-neutral-900/90 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="font-mono-tech text-xs text-neutral-400">
            Mostrando <span className="text-white font-bold">{filteredItems.length}</span> piezas
          </div>
        </div>

        {/* Subcategories bar for Fotografías (Paisaje, Producto, Animales, Retrato from slides 9, 10, 11, 12) */}
        {activeCategory === 'fotografias' && (
          <div className="flex items-center space-x-2 pt-4 overflow-x-auto no-scrollbar animate-in fade-in duration-200">
            <span className="font-mono-tech text-xs text-neutral-500 uppercase mr-2 flex items-center space-x-1">
              <Filter className="w-3 h-3" />
              <span>Series:</span>
            </span>
            {photoSubcategories.map((sub) => {
              const isSubActive = activePhotoSubcat === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setActivePhotoSubcat(sub.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-colors ${
                    isSubActive
                      ? 'bg-white text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Grid of Portfolio Items - Clean Visual Gallery matching reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="portfolio-grid">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                id={`portfolio-card-${item.id}`}
                onClick={() => onSelectItem(item)}
                className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-neutral-950 border border-neutral-800/70 hover:border-portfolio-orange/80 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1.5 flex items-center justify-center p-3 sm:p-4 aspect-[16/10] relative"
              >
                {/* Visual Artwork Container */}
                <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain object-center group-hover:scale-[1.04] transition-transform duration-500 select-none"
                  />

                  {/* Hover Title & Topic Overlay on the bottom of the image */}
                  <div className="absolute inset-x-0 bottom-0 pt-12 pb-3.5 px-3 sm:px-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col justify-end items-center text-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-10">
                    <h3 className="font-max-voltage text-base sm:text-lg lg:text-xl font-bold text-white tracking-wider uppercase drop-shadow-md line-clamp-1">
                      {item.title}
                    </h3>
                    <span className="font-mono-tech text-[10px] sm:text-xs text-portfolio-orange font-bold uppercase tracking-wider mt-0.5">
                      {item.subcategory || item.category}
                    </span>
                  </div>
                </div>

                {/* Subtle Hover Glow Border */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-portfolio-orange/0 group-hover:border-portfolio-orange/40 pointer-events-none transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
