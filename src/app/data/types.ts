export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'default' | 'minimal';
  ctaVariant?: 'default' | 'plenty' | 'shopify' | 'klaviyo';
  titleVariant?: 'default' | 'plenty' | 'shopify' | 'klaviyo';
  showLogoCarousel?: boolean;
  brandName?: string;
  backgroundImage?: string;
}

export interface FeatureConfig {
  title: string;
  description: string;
  details?: string[];  // Bullet-Points Liste (optional)
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
  featuresHeader?: {
    title: string;
    description: string;
    iconName?: string;
  };
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