import React from 'react';
import { FeatureConfig } from '../../data/types';
import DynamicFeatures from './DynamicFeatures';

interface FeatureVariantsProps {
  features: FeatureConfig[];
  title?: string;
  description?: string;
  iconName?: string;
}

export default function FeatureVariants({ features, title, description, iconName }: FeatureVariantsProps) {
  // Verwende immer DynamicFeatures, da diese jetzt Card-Varianten unterstützt
  return <DynamicFeatures features={features} title={title} description={description} iconName={iconName} />;
} 