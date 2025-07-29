import React from 'react';
import { PageData } from '../../data/types';
import HeroVariant from '../content/HeroVariant';
import FeatureVariants from '../content/FeatureVariants';
import Services from '../Services';
import Experience from '../Experience';
import Contact from '../Contact';
import Footer from '../Footer';

interface BaseTemplateProps {
  pageData: PageData;
}

export default function BaseTemplate({ pageData }: BaseTemplateProps) {
  const isHomePage = pageData.slug === '';
  
  return (
    <main>
      <HeroVariant config={pageData.hero} />
      
      {/* Services-Sektion nur auf der Startseite */}
      {isHomePage && <Services />}
      
      {/* Features-Sektion für andere Seiten */}
      {pageData.features && pageData.features.length > 0 && (
        <FeatureVariants features={pageData.features} />
      )}
      
      {/* {pageData.about && <About />} */}
      {pageData.experience && <Experience />}
      {pageData.contact && <Contact />}
      {pageData.footer && <Footer />}
    </main>
  );
} 