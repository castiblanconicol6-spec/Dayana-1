import React from 'react';
import { Palette, Film, Camera, Sparkles, Layers, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  software: string[];
  icon: React.FC<{ className?: string }>;
}

export const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 'ilustracion',
      title: 'Ilustración & Character Design',
      subtitle: 'Desarrollo visual y diseño de personajes',
      description:
        'Creación de personajes originales, hojas de modelo ortográfico (turnarounds frontal, lateral, posterior), hojas de expresiones gestuales, bocetado vectorial y arte conceptual para proyectos multimedia.',
      deliverables: [
        'Model sheets y turnarounds ortográficos',
        'Guías de expresiones gestuales estilo sticker/chibi',
        'Archivos vectoriales escalables (.AI, .PSD, .PNG)',
      ],
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      icon: Palette,
    },
    {
      id: 'animacion-2d',
      title: 'Animación 2D Digital',
      subtitle: 'Rigging de marionetas y motion graphics',
      description:
        'Articulación de personajes mediante sistemas de huesos (rigging para animación cutout), animación cuadro a cuadro tradicional (frame by frame), trayectorias de curvas y dinámica de fluidos en canvas vectorial.',
      deliverables: [
        'Rigging completo de personajes con nodos y articulaciones',
        'Ciclos de caminado, gesticulación y acciones secundarias',
        'Renders en alta definición (.MP4, secuencias PNG, .SWF)',
      ],
      software: ['Adobe Animate'],
      icon: Film,
    },
    {
      id: 'fotografia',
      title: 'Fotografía & Edición Digital',
      subtitle: 'Fotografía de producto, paisaje y retrato',
      description:
        'Captura fotográfica con iluminación cuidada, dirección de arte, fotografía publicitaria de producto (flat lays botánicos/comerciales), tomas de paisaje dinámico y retratos con revelado profesional y corrección de color.',
      deliverables: [
        'Sesiones de producto comercial y flat lay',
        'Retoque digital de piel y tratamiento de claroscuro',
        'Archivos revelados en alta resolución calibrados para web e impreso',
      ],
      software: ['Adobe Lightroom', 'Adobe Photoshop'],
      icon: Camera,
    },
    {
      id: 'posters-editorial',
      title: 'Diseño Editorial & Cartelería',
      subtitle: 'Posters de alto impacto y portadas',
      description:
        'Diseño de posters publicitarios, portadas conceptuales de revistas de moda, afiches promocionales y composiciones gráficas combinando fotomontaje, tipografía de vanguardia e ilustraciones.',
      deliverables: [
        'Carteles publicitarios listos para imprenta y formatos digitales',
        'Portadas editoriales con composiciones de exposición múltiple',
        'Adaptaciones a formatos de redes sociales (1:1, 9:16, 16:9)',
      ],
      software: ['Adobe Photoshop', 'Adobe Illustrator'],
      icon: Sparkles,
    },
    {
      id: 'branding',
      title: 'Branding & Manuales de Marca',
      subtitle: 'Identidad corporativa y publicidad exterior',
      description:
        'Desarrollo integral de sistemas de identidad visual: logotipos, paletas cromáticas, tipografía corporativa, normativas de uso en manual de marca y visualización en mockups de mobiliario urbano (mupis y vallas).',
      deliverables: [
        'Manual de identidad de marca completo en PDF',
        'Paquete de logotipos en formatos vectoriales y mapa de bits',
        'Renders y mockups publicitarios en entornos reales',
      ],
      software: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
      icon: Layers,
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-black relative border-t border-neutral-900 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-[2px] bg-portfolio-orange" />
              <span className="font-title text-sm tracking-widest text-portfolio-orange uppercase">
                Capacidades Multimedia
              </span>
            </div>
            <h2 className="font-max-voltage text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wider uppercase">
              SERVICIOS
            </h2>
          </div>
          <p className="font-mono-tech text-neutral-400 text-sm sm:text-base max-w-md">
            Soluciones creativas y de producción audiovisual adaptadas a proyectos digitales, marcas independientes y agencias.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`group rounded-3xl bg-neutral-950 border transition-all duration-300 p-8 flex flex-col justify-between shadow-xl hover:-translate-y-1.5 ${
                  isFeatured
                    ? 'border-portfolio-orange/70 shadow-orange-950/20 hover:border-portfolio-orange'
                    : 'border-neutral-800/80 hover:border-neutral-700'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Category number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-black border border-neutral-800 group-hover:border-portfolio-orange group-hover:orange-glow-sm flex items-center justify-center text-portfolio-orange transition-all">
                      <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-mono-tech text-xs text-neutral-500 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-title text-2xl font-bold text-white mb-2 group-hover:text-portfolio-orange transition-colors">
                    {service.title}
                  </h3>
                  <span className="font-mono-tech text-xs text-neutral-400 block mb-4">
                    {service.subtitle}
                  </span>

                  {/* Description */}
                  <p className="font-mono-tech text-sm text-neutral-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-900">
                    <span className="font-mono-tech text-[11px] text-neutral-500 uppercase tracking-wider block mb-2 font-bold">
                      Entregables:
                    </span>
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs font-mono-tech text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-portfolio-orange flex-shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Software badges & Inquire Button */}
                <div className="pt-4 border-t border-neutral-900">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {service.software.map((sw, idx) => (
                        <span
                          key={idx}
                          className="font-mono-tech text-[10px] text-neutral-400 bg-black border border-neutral-800 px-2 py-0.5 rounded"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phoneClean}?text=Hola%20Dayana,%20estoy%20interesado(a)%20en%20el%20servicio%20de%20"${encodeURIComponent(
                      service.title
                    )}"%20de%20tu%20portafolio.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-neutral-900 group-hover:bg-portfolio-orange text-neutral-200 group-hover:text-black font-title text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Cotizar este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for custom requests */}
        <div className="mt-16 rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h4 className="font-title text-2xl font-bold text-white">
              ¿Tienes un proyecto multimedia a medida?
            </h4>
            <p className="font-mono-tech text-sm text-neutral-400 max-w-xl">
              Desde piezas individuales hasta identidades visuales completas y producción de contenido animado o fotográfico.
            </p>
          </div>

          <a
            href={`https://wa.me/${PERSONAL_INFO.phoneClean}?text=Hola%20Dayana,%20tengo%20una%20propuesta%20de%20proyecto%20multimedia%20para%20trabajar%20contigo.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-portfolio-orange hover:bg-orange-500 text-black font-title font-bold text-sm transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Hablar sobre mi proyecto</span>
          </a>
        </div>
      </div>
    </section>
  );
};
