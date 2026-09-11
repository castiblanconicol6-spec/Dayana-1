import React from 'react';
import { Phone, Instagram, Mail, Star, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SOFTWARE_SKILLS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-black relative border-t border-neutral-900 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section marker */}
        <div className="flex items-center space-x-3 mb-16">
          <div className="w-8 h-[2px] bg-portfolio-orange" />
          <span className="font-title text-sm tracking-widest text-portfolio-orange uppercase">
            Sobre Mí • Perfil Profesional
          </span>
        </div>

        {/* Part 1: Main Bio + Double Circle Avatar (Slide 17 layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Stacked Circular Avatars (Slide 17) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center -space-y-6 sm:-space-y-8" id="about-avatar-stack">
              {/* Top circle: winking avatar with braces */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/90 bg-neutral-900 shadow-2xl z-10 transition-transform duration-300 hover:scale-105">
                <img
                  src={PERSONAL_INFO.avatarProfiles}
                  alt="Nicol Dayana - Avatar winking"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Bottom circle: serene smile avatar */}
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white/90 bg-neutral-900 shadow-2xl z-20 transition-transform duration-300 hover:scale-105">
                <img
                  src={PERSONAL_INFO.avatarProfiles}
                  alt="Nicol Dayana - Avatar sonriente"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-3 bg-neutral-950 border border-portfolio-orange px-4 py-1.5 rounded-full z-30 shadow-lg flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-portfolio-orange animate-ping" />
                <span className="font-mono-tech text-xs text-white uppercase tracking-wider">
                  Ibagué, Colombia
                </span>
              </div>
            </div>
          </div>

          {/* Right: "Soy Dayana" + Bio Text (Slide 17) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2
              id="about-title"
              className="font-max-voltage text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wider uppercase"
            >
              Soy Dayana
            </h2>

            <p
              id="about-bio-text"
              className="font-mono-tech text-lg sm:text-xl md:text-2xl text-neutral-300 leading-relaxed font-normal mb-10 max-w-2xl"
            >
              {PERSONAL_INFO.bio}
            </p>

            {/* Bottom Contact Pills with glowing orange circular icons (Slide 17) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80">
              {/* Phone capsule */}
              <a
                id="contact-phone"
                href={`https://wa.me/${PERSONAL_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-portfolio-orange transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-black border border-orange-500/80 flex items-center justify-center text-portfolio-orange orange-glow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] uppercase font-mono-tech text-neutral-400">Teléfono</span>
                  <span className="font-mono-tech text-sm sm:text-xs md:text-sm text-neutral-200 group-hover:text-portfolio-orange transition-colors truncate block">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Instagram capsule */}
              <a
                id="contact-instagram"
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-portfolio-orange transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-black border border-orange-500/80 flex items-center justify-center text-portfolio-orange orange-glow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] uppercase font-mono-tech text-neutral-400">Instagram</span>
                  <span className="font-mono-tech text-sm sm:text-xs md:text-sm text-neutral-200 group-hover:text-portfolio-orange transition-colors truncate block">
                    {PERSONAL_INFO.instagram}
                  </span>
                </div>
              </a>

              {/* Email capsule */}
              <a
                id="contact-email"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center space-x-3 p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800 hover:border-portfolio-orange transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-black border border-orange-500/80 flex items-center justify-center text-portfolio-orange orange-glow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] uppercase font-mono-tech text-neutral-400">Correo</span>
                  <span className="font-mono-tech text-sm sm:text-xs md:text-sm text-neutral-200 group-hover:text-portfolio-orange transition-colors truncate block">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Part 2: Software Skills & Idioma (Slide 18 layout) */}
        <div className="mt-16 bg-neutral-100 rounded-3xl p-8 sm:p-12 lg:p-16 text-black shadow-2xl relative overflow-hidden" id="skills-slide-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 Software ratings */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {SOFTWARE_SKILLS.map((skill) => (
                <div
                  key={skill.shortCode}
                  className="flex items-center space-x-4 p-3 rounded-2xl bg-white/70 shadow-sm border border-neutral-200/80 hover:shadow-md transition-shadow"
                >
                  {/* Glowing Software Orb Icon matching slide 18 */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-black border-2 border-orange-500/90 flex items-center justify-center shadow-lg relative overflow-hidden">
                      {/* Fire/glow accent behind abbreviation */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 to-transparent" />
                      <span className="font-title font-bold text-lg text-cyan-400 z-10">
                        {skill.shortCode}
                      </span>
                    </div>
                  </div>

                  {/* Rating Stars (3 solid black, 2 outline stars) */}
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider font-mono-tech">
                      {skill.name}
                    </span>
                    <div className="flex items-center space-x-1.5" aria-label={`${skill.rating} de 5 estrellas`}>
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= skill.rating;
                        return (
                          <Star
                            key={star}
                            className={`w-6 h-6 transition-transform hover:scale-125 ${
                              isFilled
                                ? 'fill-black text-black'
                                : 'text-neutral-400 stroke-[1.5]'
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Idioma Box (Slide 18) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="flex flex-col items-start w-full max-w-xs">
                <span className="font-mono-tech text-neutral-600 text-sm font-semibold mb-2 ml-1">
                  Idioma
                </span>
                <div className="w-full bg-portfolio-orange text-white py-5 px-8 rounded-none text-center shadow-xl">
                  <span className="font-title text-3xl sm:text-4xl font-extrabold tracking-widest uppercase">
                    ESPAÑOL
                  </span>
                </div>
                <span className="text-xs font-mono-tech text-neutral-500 mt-2 text-center w-full">
                  Lengua materna / Nativo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
