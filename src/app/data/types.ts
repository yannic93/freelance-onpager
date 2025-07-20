export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'freiburg' | 'minimal';
  backgroundImage?: string;
}

export interface FeatureConfig {
  title: string;
  description: string;
  icon?: string;
  variant?: 'default' | 'card' | 'list';
}

export interface PageData {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  hero: HeroConfig;
  features: FeatureConfig[];
  about?: boolean;
  experience?: boolean;
  contact?: boolean;
  footer?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
  };
}

export interface PageConfig {
  [key: string]: PageData;
} 