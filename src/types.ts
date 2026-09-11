export type CategoryId = 'all' | 'ilustraciones' | 'animacion' | 'fotografias' | 'posters' | 'proyectos';

export type PhotoSubcategory = 'paisaje' | 'producto' | 'animales' | 'retrato';

export interface PortfolioItem {
  id: string;
  title: string;
  category: CategoryId;
  subcategory?: PhotoSubcategory | string;
  year: string;
  description: string;
  image: string;
  secondaryImage?: string;
  tags: string[];
  details?: {
    software?: string[];
    role?: string;
    client?: string;
    concept?: string;
    extraNote?: string;
  };
}

export interface SoftwareSkill {
  name: string;
  shortCode: 'Ps' | 'Ai' | 'Lr' | 'An';
  rating: number; // out of 5
  color: string;
  description: string;
}

export interface SlideData {
  id: number;
  title: string;
  navActive: 'INICIO' | 'SOBRE MÍ' | 'DESTACADOS' | 'PORTAFOLIO';
  type: 'hero' | 'cover' | 'section-title' | 'content' | 'about' | 'skills' | 'featured';
}
