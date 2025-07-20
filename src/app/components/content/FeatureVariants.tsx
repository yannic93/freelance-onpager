import React from 'react';
import { FeatureConfig } from '../../data/types';
import DynamicFeatures from './DynamicFeatures';
import ShopifyFreiburgFeatures from '../ShopifyFreiburgFeatures';

interface FeatureVariantsProps {
  features: FeatureConfig[];
}

export default function FeatureVariants({ features }: FeatureVariantsProps) {
  // Bestimme die Variante basierend auf den Features
  const hasCardVariants = features.some(feature => feature.variant === 'card');
  
  if (hasCardVariants) {
    // Verwende ShopifyFreiburgFeatures für Card-Varianten
    return <ShopifyFreiburgFeatures />;
  }
  
  // Dynamische Features-Komponente
  return <DynamicFeatures features={features} />;
} 