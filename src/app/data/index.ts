import { PageConfig } from './types';
import { homeData } from './pages/home';
import { shopifyFreiburgData } from './pages/shopify-freiburg';
import { klaviyoAutomationData } from './pages/klaviyo-automation';
import { shopifyFreelancerData } from './pages/shopify-freelancer';
import { plentyOneData } from './pages/plenty-one';

// Zentrale Sammlung aller Seiten-Daten
export const pages: PageConfig = {
  '': homeData,
  'shopify-freiburg': shopifyFreiburgData,
  'klaviyo-automation': klaviyoAutomationData,
  'shopify-freelancer': shopifyFreelancerData,
  'plenty-one': plentyOneData,
};

// Hilfsfunktionen für den Zugriff auf Seiten-Daten
export function getPageData(slug: string) {
  return pages[slug];
}

// Export einzelner Seiten-Daten für direkten Zugriff
export { homeData } from './pages/home';
export { shopifyFreiburgData } from './pages/shopify-freiburg';
export { klaviyoAutomationData } from './pages/klaviyo-automation';
export { shopifyFreelancerData } from './pages/shopify-freelancer';
export { plentyOneData } from './pages/plenty-one';

export function getAllPageSlugs(): string[] {
  return Object.keys(pages).filter(slug => slug !== '');
}

export function getAllPages() {
  return pages;
}

// Typisierte Exporte
export type { PageData, HeroConfig, FeatureConfig } from './types'; 