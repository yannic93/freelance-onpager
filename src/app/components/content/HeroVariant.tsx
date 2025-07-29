import React from 'react';
import { HeroConfig } from '../../data/types';
import DynamicHero from './DynamicHero';

interface HeroVariantProps {
  config: HeroConfig;
}

export default function HeroVariant({ config }: HeroVariantProps) {
  // Wähle die passende Hero-Komponente basierend auf der Variante
  switch (config.variant) {
    case 'minimal':
      // TODO: Implementiere Minimal-Hero-Variante
      return <DynamicHero config={config} />;
    case 'default':
    default:
      return <DynamicHero config={config} />;
  }
} 