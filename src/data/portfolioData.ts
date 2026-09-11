import { PortfolioItem, SoftwareSkill, SlideData } from '../types';

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
import realPortrait from '../assets/images/dayana_real_portrait_1789087326509.jpg';

export const PERSONAL_INFO = {
  name: 'Nicol Dayana Castiblanco Espinosa',
  shortName: 'Dayana',
  role: 'Productora Multimedia',
  year: '2026',
  phone: '(+57) 3204900286',
  phoneClean: '573204900286',
  instagram: '@_daye_28',
  instagramUrl: 'https://instagram.com/_daye_28',
  email: 'dayanaespinosa2803@gmail.com',
  bio: 'Un gusto saludarte, soy estudiante de producción multimedia. Me gusta capturar momentos únicos a través del lente y perfeccionándolos con la edición fotográfica. Además, doy vida a historias mediante la ilustración de personajes y la animación básica. Explora mi portafolio y descubre arte de mi proceso creativo.',
  heroIllustration,
  realPortrait,
  avatarProfiles,
};

export const SOFTWARE_SKILLS: SoftwareSkill[] = [
  {
    name: 'Adobe Photoshop',
    shortCode: 'Ps',
    rating: 3,
    color: '#001E36',
    description: 'Edición fotográfica profesional, retoque digital, fotomontaje y composición de cartelería.',
  },
  {
    name: 'Adobe Illustrator',
    shortCode: 'Ai',
    rating: 3,
    color: '#330000',
    description: 'Ilustración vectorial, diseño de personajes, creación de logotipos e identidad de marca.',
  },
  {
    name: 'Adobe Lightroom',
    shortCode: 'Lr',
    rating: 3,
    color: '#001D26',
    description: 'Revelado digital, calibración de color, corrección de exposición y procesamiento fotográfico.',
  },
  {
    name: 'Adobe Animate',
    shortCode: 'An',
    rating: 3,
    color: '#2C001E',
    description: 'Animación 2D tradicional, rigging de personajes con articulaciones, interpolación y cinemática.',
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. ILUSTRACIONES - MARAY V1
  {
    id: 'ilustracion-maray-v1',
    title: 'Maray Versión Uno',
    category: 'ilustraciones',
    subcategory: 'Boceto y Concept Art',
    year: '2026',
    description: 'Diseño de personaje para animación 2D. Hoja de modelo ortográfico (turnaround frontal y posterior) en línea limpia, versión a color final con alas y accesorios, junto con cuatro expresiones faciales estilo sticker chibi: enojada, brillante/feliz, pensativa y asombrada.',
    image: maraySheet,
    tags: ['Ilustración', 'Character Design', 'Bocetos', 'Concept Art'],
    details: {
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      role: 'Diseño de personajes y Concept Art',
      concept: 'Luciérnaga guerrera en miniatura con expresión tierna y actitud audaz.',
      extraNote: 'Incluye hoja de turnaround ortográfico para rigging y guía de expresiones faciales.',
    },
  },
  // 1. ILUSTRACIONES - MARAY V2
  {
    id: 'ilustracion-maray-v2',
    title: 'Maray Versión Dos',
    category: 'ilustraciones',
    subcategory: 'Character Design',
    year: '2026',
    description: 'Evolución formal del personaje MARAY en figura estilizada y esbelta con tablet digital. Estudio de poses, siluetas y vestuario ceremonial contemporáneo.',
    image: avatarProfiles,
    tags: ['Ilustración', 'Turnaround', 'Estilización', 'Concept Art'],
    details: {
      software: ['Adobe Illustrator', 'Adobe Photoshop'],
      role: 'Model Sheet y Desarrollo Visual',
      concept: 'Versión mística y elegante de la deidad protectora Maray.',
    },
  },

  // 2. ANIMACIÓN 2D
  {
    id: 'animacion-2d-showcase',
    title: 'Animación 2D',
    category: 'animacion',
    subcategory: 'Rigging y Motion',
    year: '2026',
    description: 'Casos de estudio de animación 2D en Adobe Animate: trayectorias fluidas, rigging con sistema de huesos para puppet cutout de Maray, y animación cuadro a cuadro (frame-by-frame) aplicando principios de anticipación y squash & stretch.',
    image: animationShowcase,
    tags: ['Animación 2D', 'Adobe Animate', 'Rigging', 'Cutout'],
    details: {
      software: ['Adobe Animate'],
      role: 'Animadora 2D y Rigging',
      concept: 'Expresividad gestual, sincronización de trayectorias y deformación elástica de trazos.',
    },
  },

  // 3. FOTOGRAFÍAS - PAISAJE
  {
    id: 'foto-paisaje-moto',
    title: 'Carretera y Libertad',
    category: 'fotografias',
    subcategory: 'Fotografía de Paisaje',
    year: '2026',
    description: 'Tríptico fotográfico en carretera abierta: perspectiva angular de motocicleta deportiva bajo cielo azul dramático con nubes, retrato de conductora con casco tornasol en pausa sobre la ruta, y primer plano de ópticas LED frontales.',
    image: motorcycleLandscape,
    tags: ['Fotografía', 'Paisaje', 'Automotriz', 'Carretera'],
    details: {
      software: ['Adobe Lightroom', 'Adobe Photoshop'],
      role: 'Dirección fotográfica y postproducción de color',
      concept: 'Atmósfera de viaje, dinamismo y contraste cromático natural.',
    },
  },

  // 3. FOTOGRAFÍAS - PRODUCTO
  {
    id: 'foto-producto-eco',
    title: 'Eco-Bamboo',
    category: 'fotografias',
    subcategory: 'Fotografía de Producto',
    year: '2026',
    description: 'Sesión comercial de cepillos para cabello y dentales de bambú sostenible. Tres escenarios: integración botánica entre hojas verdes vivas, flat lay cenital sobre textil oscuro, y macro textura de cerdas en tela clara.',
    image: woodenProducts,
    tags: ['Fotografía de Producto', 'Comercial', 'Sostenible', 'Flat Lay'],
    details: {
      software: ['Adobe Lightroom', 'Adobe Photoshop'],
      role: 'Fotografía de producto, iluminación y retoque',
      concept: 'Cuidado personal ecológico y texturas orgánicas.',
    },
  },

  // 3. FOTOGRAFÍAS - ANIMALES
  {
    id: 'foto-animales-duo',
    title: 'Fauna y Miradas',
    category: 'fotografias',
    subcategory: 'Fotografía de Animales',
    year: '2026',
    description: 'Composición de dos retratos faunísticos: gato atigrado naranja acurrucado en el césped con mirada atenta y profunda, acompañado de un primer plano en blanco y negro con enfoque nítido de un perico agapornis.',
    image: animalsPhotography,
    tags: ['Fotografía Animal', 'Macro', 'Blanco y Negro', 'Fauna'],
    details: {
      software: ['Adobe Lightroom'],
      role: 'Fotografía de naturaleza y animales',
      concept: 'Captura de expresiones animales auténticas y texturas de plumaje y pelaje.',
    },
  },

  // 3. FOTOGRAFÍAS - RETRATO
  {
    id: 'foto-retrato-dayana',
    title: 'Estudio de Retrato',
    category: 'fotografias',
    subcategory: 'Fotografía de Retrato',
    year: '2026',
    description: 'Retrato fotográfico en atmósfera íntima y contemplativa en espacio de trabajo creativo. Iluminación cálida natural, composición cercana y detalle de alta fidelidad.',
    image: realPortrait,
    tags: ['Retrato', 'Luz Natural', 'Edición Fotográfica', 'Autorretrato'],
    details: {
      software: ['Adobe Photoshop', 'Adobe Lightroom'],
      role: 'Retrato y tratamiento de luz',
      concept: 'Introspección creativa y calidez humana a través de la luz.',
    },
  },

  // 4. POSTERS
  {
    id: 'posters-trio-coleccion',
    title: 'Serie Posters',
    category: 'posters',
    subcategory: 'Diseño Editorial',
    year: '2026',
    description: 'Tríptico de cartelería gráfica: cartel editorial de loro Bartolito con tipografía contemporánea sobre fondo negro, portada conceptual de VOGUE con exposición múltiple y acento magenta neón, y cartel promocional ilustrado con firma oficial.',
    image: postersTrio,
    tags: ['Posters', 'Diseño Gráfico', 'VOGUE', 'Tipografía'],
    details: {
      software: ['Adobe Photoshop', 'Adobe Illustrator'],
      role: 'Diseño de cartel y tipografía',
      concept: 'Contraste editorial, moda de vanguardia e identidad visual.',
    },
  },

  // 5. PROYECTOS
  {
    id: 'proyecto-manual-marca',
    title: 'Manual de Marca',
    category: 'proyectos',
    subcategory: 'Branding y Mockup',
    year: '2026',
    description: 'Desarrollo de normas de identidad visual corporativa: manual normativo con imagotipo modular, paleta cromática institucional, retícula y aplicación en mobiliario urbano publicitario (mockup mupi de paradero).',
    image: brandManualShowcase,
    tags: ['Branding', 'Manual de Marca', 'Identidad Corporativa', 'Mockups'],
    details: {
      software: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
      role: 'Diseño de identidad visual y render de mockups',
      concept: 'Solidez visual, consistencia institucional y visibilidad publicitaria en vía pública.',
    },
  },
];

export const SLIDES_CONFIG: SlideData[] = [
  { id: 1, title: 'Portada Inicio - Esto es lo que creo', navActive: 'INICIO', type: 'hero' },
  { id: 2, title: 'Carátula Portafolio 2026', navActive: 'PORTAFOLIO', type: 'cover' },
  { id: 3, title: 'Separador: Ilustraciones / Bocetos', navActive: 'PORTAFOLIO', type: 'section-title' },
  { id: 4, title: 'Ilustraciones: MARAY Versión Uno', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 5, title: 'Ilustraciones: MARAY Versión Dos', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 6, title: 'Separador: Animación 2D', navActive: 'PORTAFOLIO', type: 'section-title' },
  { id: 7, title: 'Animación 2D: Casos de Estudio y Rigging', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 8, title: 'Separador: Fotografías', navActive: 'PORTAFOLIO', type: 'section-title' },
  { id: 9, title: 'Fotografías: Paisaje', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 10, title: 'Fotografías: Producto', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 11, title: 'Fotografías: Animales', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 12, title: 'Fotografías: Retrato', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 13, title: 'Separador: Posters', navActive: 'PORTAFOLIO', type: 'section-title' },
  { id: 14, title: 'Posters: Bartolito, Vogue, Dayana', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 15, title: 'Separador: Proyectos', navActive: 'PORTAFOLIO', type: 'section-title' },
  { id: 16, title: 'Proyectos: Manual de Marca', navActive: 'PORTAFOLIO', type: 'content' },
  { id: 17, title: 'Sobre Mí: Perfil y Contacto', navActive: 'SOBRE MÍ', type: 'about' },
  { id: 18, title: 'Sobre Mí: Software Skills e Idioma', navActive: 'SOBRE MÍ', type: 'skills' },
  { id: 19, title: 'Destacados: Selección Curada', navActive: 'DESTACADOS', type: 'featured' },
];
