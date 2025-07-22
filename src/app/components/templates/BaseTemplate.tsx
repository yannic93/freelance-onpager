import React from 'react';
import { PageData } from '../../data/types';
import HeroVariant from '../content/HeroVariant';
import FeatureVariants from '../content/FeatureVariants';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from '../Footer';

interface BaseTemplateProps {
  pageData: PageData;
}

export default function BaseTemplate({ pageData }: BaseTemplateProps) {
  return (
    <main>
      <HeroVariant config={pageData.hero} />
      <FeatureVariants features={pageData.features} />
      
      {/* {pageData.about && <About />} */}
      {pageData.experience && <Experience />}
      {pageData.contact && <Contact />}
      {pageData.footer && <Footer />}
    </main>
  );
} 