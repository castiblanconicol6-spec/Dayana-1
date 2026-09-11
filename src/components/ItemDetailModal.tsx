import React, { useState } from 'react';
import { X, Sparkles, Layers, MessageCircle, ExternalLink, Play, Pause, RotateCcw } from 'lucide-react';
import { PortfolioItem } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ItemDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({ item, onClose }) => {
  const [isPlayingSim, setIsPlayingSim] = useState(false);

  if (!item) return null;

  const isAnimation = item.category === 'animacion';

  return (
    <div
      id="item-detail-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        id="item-detail-modal-content"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-8 text-white"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/80 hover:bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left Media Viewport */}
          <div className="lg:col-span-7 bg-black flex flex-col items-center justify-center relative p-4 sm:p-8 min-h-[360px] border-b lg:border-b-0 lg:border-r border-neutral-800">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-neutral-800/80 max-h-[550px] flex items-center justify-center bg-neutral-950">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className={`w-full h-auto object-contain max-h-[500px] transition-all duration-300 ${
                  isPlayingSim ? 'brightness-110 scale-[1.02]' : ''
                }`}
              />

              {/* Simulated playback glow effect for animations */}
              {isAnimation && isPlayingSim && (
                <div className="absolute inset-0 border-2 border-portfolio-orange animate-pulse pointer-events-none" />
              )}
            </div>

            {/* Animation interactive control bar */}
            {isAnimation && (
              <div className="mt-4 flex items-center space-x-4 bg-neutral-900/90 border border-neutral-800 px-5 py-2.5 rounded-full shadow-lg">
                <button
                  onClick={() => setIsPlayingSim(!isPlayingSim)}
                  className="flex items-center space-x-2 text-xs font-title font-bold text-portfolio-orange hover:text-white transition-colors"
                >
                  {isPlayingSim ? (
                    <>
                      <Pause className="w-4 h-4 fill-portfolio-orange" />
                      <span>PAUSAR ESTUDIO</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-portfolio-orange" />
                      <span>REPRODUCIR DINÁMICA</span>
                    </>
                  )}
                </button>
                <div className="w-[1px] h-4 bg-neutral-700" />
                <span className="font-mono-tech text-[11px] text-neutral-400">
                  {isPlayingSim ? '24 FPS • 1920x1080' : 'Vista estática'}
                </span>
              </div>
            )}
          </div>

          {/* Right Information Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Year Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-tech text-xs uppercase font-bold text-portfolio-orange bg-orange-950/40 border border-orange-800/40 px-3 py-1 rounded-md">
                  {item.subcategory || item.category}
                </span>
                <span className="font-mono-tech text-xs text-neutral-400">
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-title text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug">
                {item.title}
              </h2>

              {/* Description */}
              <p className="font-mono-tech text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Detailed specs */}
              <div className="space-y-3 pt-4 border-t border-neutral-800/80 mb-6 text-xs font-mono-tech">
                {item.details?.concept && (
                  <div>
                    <span className="text-neutral-500 uppercase block">Concepto:</span>
                    <span className="text-neutral-200">{item.details.concept}</span>
                  </div>
                )}

                {item.details?.role && (
                  <div>
                    <span className="text-neutral-500 uppercase block">Rol:</span>
                    <span className="text-neutral-200">{item.details.role}</span>
                  </div>
                )}

                {item.details?.software && (
                  <div>
                    <span className="text-neutral-500 uppercase block">Software empleado:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.details.software.map((sw, idx) => (
                        <span
                          key={idx}
                          className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-portfolio-orange"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-mono-tech text-[11px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneClean}?text=Hola%20Dayana,%20me%20encantó%20tu%20proyecto%20"${encodeURIComponent(
                  item.title
                )}"%20en%20tu%20portafolio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-portfolio-orange hover:bg-orange-500 text-black font-title font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Consultar por este trabajo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
