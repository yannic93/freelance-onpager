import React from 'react';
import { FeatureConfig } from '../../data/types';
import DynamicFeatures from './DynamicFeatures';

interface FeatureVariantsProps {
  features: FeatureConfig[];
}

export default function FeatureVariants({ features }: FeatureVariantsProps) {
  // Verwende immer DynamicFeatures, da diese jetzt Card-Varianten unterstützt
  return <DynamicFeatures features={features} />;
} 