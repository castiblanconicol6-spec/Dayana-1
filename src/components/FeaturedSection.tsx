import React, { useState } from 'react';
import { Heart, Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem } from '../types';

interface FeaturedSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
}

interface HeartParticle {
  id: number;
  cardKey: string;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  size: number;
  color: string;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ onSelectItem }) => {
  const [likedCards, setLikedCards] = useState<Record<string, boolean>>({
    center: true,
  });
  const [particles, setParticles] = useState<HeartParticle[]>([]);

  // Pick three prominent items representing the portfolio (Slide 19 layout: Maray, Moto, Posters)
  const featured = [
    PORTFOLIO_ITEMS.find((i) => i.id === 'ilustracion-maray-v1') || PORTFOLIO_ITEMS[0],
    PORTFOLIO_ITEMS.find((i) => i.id === 'foto-paisaje-moto') || PORTFOLIO_ITEMS[1] || PORTFOLIO_ITEMS[0],
    PORTFOLIO_ITEMS.find((i) => i.id === 'posters-trio-coleccion') || PORTFOLIO_ITEMS[2] || PORTFOLIO_ITEMS[0],
  ];

  const toggleLike = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedCards((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    // Generate burst of floating mini hearts around the clicked heart
    const colors = ['#ef4444', '#f43f5e', '#ff2d55', '#ec4899', '#f97316', '#fb7185', '#e11d48'];
    const newParticles: HeartParticle[] = Array.from({ length: 14 }).map((_, i) => {
      const angle = (i / 14) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const distance = 42 + Math.random() * 68;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance - (key === 'center' ? 35 : 20);

      return {
        id: Date.now() + Math.random(),
        cardKey: key,
        x,
        y,
        scale: 0.8 + Math.random() * 0.6,
        rotate: (Math.random() - 0.5) * 50,
        size: 14 + Math.floor(Math.random() * 12),
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 1100);
  };

  return (
    <section id="destacados" className="py-24 bg-black relative border-t border-neutral-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-[2px] bg-portfolio-orange" />
              <span className="font-title text-sm tracking-widest text-portfolio-orange uppercase">
                Selección Curada
              </span>
            </div>
            <h2 className="font-max-voltage text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wider uppercase">
              DESTACADOS
            </h2>
          </div>
          <p className="font-mono-tech text-neutral-400 text-sm max-w-xs">
            Piezas representativas de ilustración, captura fotográfica y composición editorial.
          </p>
        </div>

        {/* 3 Prominent Cards Grid mirroring Slide 19 (Orange - White/Heart - Orange) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="featured-cards-grid">
          {/* Card 1: Orange Accent Card */}
          <div
            id="featured-card-left"
            onClick={() => onSelectItem(featured[0])}
            className="group relative cursor-pointer rounded-2xl bg-portfolio-orange p-6 flex flex-col justify-between min-h-[440px] shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono-tech text-xs uppercase font-bold text-black bg-white/90 px-3 py-1 rounded-full">
                  {featured[0].category}
                </span>
                {/* Heart Button with Burst Animation */}
                <div className="relative">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={(e) => toggleLike('left', e)}
                    className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors relative z-10"
                    aria-label="Dar me gusta"
                  >
                    <motion.div
                      animate={{
                        scale: likedCards['left'] ? [1, 1.4, 0.9, 1.15, 1] : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          likedCards['left'] ? 'fill-black text-black' : 'text-black'
                        }`}
                      />
                    </motion.div>
                  </motion.button>

                  {/* Floating burst hearts for Left card */}
                  <AnimatePresence>
                    {particles
                      .filter((p) => p.cardKey === 'left')
                      .map((p) => (
                        <motion.div
                          key={p.id}
                          initial={{ opacity: 0, scale: 0.2, x: 0, y: 0, rotate: 0 }}
                          animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0.3, p.scale, p.scale * 1.1, 0],
                            x: p.x,
                            y: p.y,
                            rotate: p.rotate,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.0, ease: 'easeOut' }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 select-none"
                        >
                          <Heart
                            className="fill-current stroke-none drop-shadow-md"
                            style={{ color: p.color, width: p.size, height: p.size }}
                          />
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>

              <h3 className="font-title text-2xl font-black text-black leading-tight mb-2">
                {featured[0].title}
              </h3>
              <p className="font-mono-tech text-black/80 text-xs line-clamp-3">
                {featured[0].description}
              </p>
            </div>

            {/* Image Preview Container */}
            <div className="relative z-10 mt-6 rounded-xl overflow-hidden border-2 border-black/20 aspect-video shadow-inner bg-black/30">
              <img
                src={featured[0].image}
                alt={featured[0].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>

            <div className="relative z-10 pt-4 flex items-center justify-between text-black font-mono-tech text-xs font-bold">
              <span>Explorar proyecto</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            {/* Subtle background texture */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Card 2: Center White Card with Heart Box below (Slide 19 signature design) */}
          <div
            id="featured-card-center"
            onClick={() => onSelectItem(featured[1])}
            className="group relative cursor-pointer rounded-2xl bg-white p-6 flex flex-col justify-between min-h-[440px] shadow-2xl hover:-translate-y-2 transition-all duration-300 md:scale-105 z-20"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono-tech text-xs uppercase font-bold text-white bg-portfolio-orange px-3 py-1 rounded-full">
                  {featured[1].category}
                </span>
                <span className="font-mono-tech text-xs text-neutral-400">
                  {featured[1].year}
                </span>
              </div>

              <h3 className="font-title text-2xl font-black text-black leading-tight mb-2">
                {featured[1].title}
              </h3>
              <p className="font-mono-tech text-neutral-600 text-xs line-clamp-3">
                {featured[1].description}
              </p>
            </div>

            {/* Image Preview Container */}
            <div className="relative z-10 mt-6 rounded-xl overflow-hidden border border-neutral-200 aspect-video shadow-md bg-neutral-100">
              <img
                src={featured[1].image}
                alt={featured[1].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative z-10 pt-4 flex items-center justify-between text-black font-mono-tech text-xs font-bold">
              <span className="text-portfolio-orange">Ver galería completa</span>
              <ArrowUpRight className="w-4 h-4 text-portfolio-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            {/* White card heart box at the bottom matching Slide 19 */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30">
              <div className="relative">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  whileHover={{ scale: 1.08 }}
                  onClick={(e) => toggleLike('center', e)}
                  className="w-11 h-11 bg-white border border-neutral-300 rounded-lg shadow-xl flex items-center justify-center hover:bg-neutral-50 transition-colors group/heart relative z-20"
                  title="Favorito"
                >
                  <motion.div
                    animate={{
                      scale: likedCards['center'] ? [1, 1.45, 0.9, 1.15, 1] : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Heart
                      className={`w-6 h-6 transition-colors ${
                        likedCards['center']
                          ? 'fill-red-500 text-red-500'
                          : 'text-black stroke-[1.8]'
                      }`}
                    />
                  </motion.div>
                </motion.button>

                {/* Floating burst hearts for Center card */}
                <AnimatePresence>
                  {particles
                    .filter((p) => p.cardKey === 'center')
                    .map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, scale: 0.2, x: 0, y: 0, rotate: 0 }}
                        animate={{
                          opacity: [0, 1, 1, 0],
                          scale: [0.3, p.scale, p.scale * 1.15, 0],
                          x: p.x,
                          y: p.y,
                          rotate: p.rotate,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.0, ease: 'easeOut' }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 select-none"
                      >
                        <Heart
                          className="fill-current stroke-none drop-shadow-md"
                          style={{ color: p.color, width: p.size, height: p.size }}
                        />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Card 3: Right Orange Accent Card */}
          <div
            id="featured-card-right"
            onClick={() => onSelectItem(featured[2])}
            className="group relative cursor-pointer rounded-2xl bg-portfolio-orange p-6 flex flex-col justify-between min-h-[440px] shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono-tech text-xs uppercase font-bold text-black bg-white/90 px-3 py-1 rounded-full">
                  {featured[2].category}
                </span>
                {/* Heart Button with Burst Animation */}
                <div className="relative">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={(e) => toggleLike('right', e)}
                    className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors relative z-10"
                    aria-label="Dar me gusta"
                  >
                    <motion.div
                      animate={{
                        scale: likedCards['right'] ? [1, 1.4, 0.9, 1.15, 1] : 1,
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors ${
                          likedCards['right'] ? 'fill-black text-black' : 'text-black'
                        }`}
                      />
                    </motion.div>
                  </motion.button>

                  {/* Floating burst hearts for Right card */}
                  <AnimatePresence>
                    {particles
                      .filter((p) => p.cardKey === 'right')
                      .map((p) => (
                        <motion.div
                          key={p.id}
                          initial={{ opacity: 0, scale: 0.2, x: 0, y: 0, rotate: 0 }}
                          animate={{
                            opacity: [0, 1, 1, 0],
                            scale: [0.3, p.scale, p.scale * 1.1, 0],
                            x: p.x,
                            y: p.y,
                            rotate: p.rotate,
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.0, ease: 'easeOut' }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 select-none"
                        >
                          <Heart
                            className="fill-current stroke-none drop-shadow-md"
                            style={{ color: p.color, width: p.size, height: p.size }}
                          />
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </div>
              </div>

              <h3 className="font-title text-2xl font-black text-black leading-tight mb-2">
                {featured[2].title}
              </h3>
              <p className="font-mono-tech text-black/80 text-xs line-clamp-3">
                {featured[2].description}
              </p>
            </div>

            {/* Image Preview Container */}
            <div className="relative z-10 mt-6 rounded-xl overflow-hidden border-2 border-black/20 aspect-video shadow-inner bg-black/30">
              <img
                src={featured[2].image}
                alt={featured[2].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="relative z-10 pt-4 flex items-center justify-between text-black font-mono-tech text-xs font-bold">
              <span>Explorar proyecto</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>

            {/* Subtle background texture */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
