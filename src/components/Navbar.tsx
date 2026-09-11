import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { MessageCircle, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSlides?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'INICIO' },
    { id: 'sobre-mi', label: 'SOBRE MÍ' },
    { id: 'servicios', label: 'SERVICIOS' },
    { id: 'destacados', label: 'DESTACADOS' },
    { id: 'portafolio', label: 'PORTAFOLIO' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-2xl'
          : 'bg-black py-4 md:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Dayana Signature Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick('inicio')}
          className="focus:outline-none transition-transform hover:scale-105 active:scale-95"
          aria-label="Ir al inicio"
        >
          <Logo size="md" />
        </button>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" id="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`font-max-voltage text-xs lg:text-sm tracking-wider uppercase transition-all duration-200 relative py-1.5 ${
                  isActive
                    ? 'text-portfolio-orange'
                    : 'text-neutral-200 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-portfolio-orange rounded-full shadow-sm" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          {/* WhatsApp Direct contact */}
          <a
            id="nav-whatsapp-cta"
            href={`https://wa.me/${PERSONAL_INFO.phoneClean}?text=Hola%20Dayana,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-portfolio-orange hover:bg-orange-500 text-black font-title transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-black" />
            <span>Contacto</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-black/98 border-b border-neutral-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left py-2.5 text-base font-max-voltage tracking-wider uppercase ${
                  isActive ? 'text-portfolio-orange' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-neutral-800 flex flex-col space-y-3">
            <a
              href={`https://wa.me/${PERSONAL_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-lg bg-portfolio-orange text-black font-title text-sm font-bold"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
