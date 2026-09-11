/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FeaturedSection } from './components/FeaturedSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ItemDetailModal } from './components/ItemDetailModal';
import { PortfolioItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'servicios', 'destacados', 'portafolio'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-600 selection:text-white relative">
      {/* Top Navigation Bar with active state matching original slides */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main>
        {/* Slide 1: Inicio (Esto es lo que creo / Y apenas es el comienzo) */}
        <HeroSection onExplorePortfolio={() => handleNavigate('portafolio')} />

        {/* Slides 17 & 18: Sobre Mí (Soy Dayana, doble avatar, contacto, software skills, idioma) */}
        <AboutSection />

        {/* New Section: Servicios Multimedia */}
        <ServicesSection />

        {/* Slide 19: Destacados (Selección curada con corazón) */}
        <FeaturedSection onSelectItem={(item) => setSelectedItem(item)} />

        {/* Slides 2 - 16: Portafolio 2026, Ilustraciones, Animación 2D, Fotografías, Posters, Proyectos */}
        <PortfolioSection onSelectItem={(item) => setSelectedItem(item)} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Button on the bottom right corner */}
      <FloatingWhatsApp />

      {/* Item Detail Lightbox Modal */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}
