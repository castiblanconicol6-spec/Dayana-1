import React from 'react';
import { Logo } from './Logo';
import { Phone, Instagram, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSlides?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-900 py-16 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-12 border-b border-neutral-850">
          {/* Brand and identity */}
          <div className="md:col-span-6 flex flex-col items-start space-y-4">
            <Logo size="md" />
            <p className="font-mono-tech text-sm text-neutral-400 max-w-sm">
              Productora Multimedia especializada en ilustración digital, animación 2D, fotografía y branding.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono-tech text-neutral-500">
              <span className="w-2 h-2 rounded-full bg-portfolio-orange" />
              <span>Disponible para comisiones y proyectos multimedia</span>
            </div>
          </div>

          {/* Availability and CTA */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-center space-y-3">
            <a
              href={`https://wa.me/${PERSONAL_INFO.phoneClean}?text=Hola%20Dayana,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 font-mono-tech text-xs uppercase tracking-wider text-black bg-portfolio-orange hover:bg-orange-500 font-bold px-5 py-2.5 rounded-full transition-all shadow-md active:scale-95"
            >
              <span>Trabajemos juntos</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright and direct contacts */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-neutral-500">
          <div>
            © 2026 Nicol Dayana Castiblanco Espinosa. Todos los derechos reservados.
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`https://wa.me/${PERSONAL_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-portfolio-orange transition-colors flex items-center space-x-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-portfolio-orange transition-colors flex items-center space-x-1"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.instagram}</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-neutral-400 hover:text-portfolio-orange transition-colors flex items-center space-x-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
