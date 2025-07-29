import { PageData } from '../types';

// Template für neue Seiten - kopieren und anpassen
export const pageTemplate: PageData = {
  slug: 'neue-seite',
  title: 'Seitentitel | Yannic Nandy',
  description: 'Beschreibung der Seite für SEO-Zwecke.',
  keywords: [
    'Keyword 1',
    'Keyword 2',
    'Keyword 3'
  ],
  hero: {
    title: 'Haupttitel',
    subtitle: 'Untertitel',
    description: 'Beschreibung des Angebots oder der Dienstleistung.',
    ctaText: 'Call-to-Action',
    ctaLink: '#contact',
    variant: 'default', // 'default', 'minimal'
    brandName: 'Yannic Nandy' // Optional: Custom brand name für Navigation
  },
  features: [
    {
      title: 'Feature 1',
      description: 'Beschreibung des ersten Features.',
      icon: 'icon-name',
      variant: 'default' // 'default', 'card', 'list'
    },
    {
      title: 'Feature 2',
      description: 'Beschreibung des zweiten Features.',
      icon: 'icon-name',
      variant: 'default'
    },
    {
      title: 'Feature 3',
      description: 'Beschreibung des dritten Features.',
      icon: 'icon-name',
      variant: 'default'
    },
    {
      title: 'Feature 4',
      description: 'Beschreibung des vierten Features.',
      icon: 'icon-name',
      variant: 'default'
    }
  ],
  experience: true, // Zeigt Experience-Sektion an
  contact: true,    // Zeigt Contact-Sektion an
  footer: true,     // Zeigt Footer an
  openGraph: {
    title: 'Open Graph Titel',
    description: 'Open Graph Beschreibung',
    url: 'https://yannicnandy.com/neue-seite',
    type: 'website'
  }
};

// Anleitung für neue Seiten:
// 1. Kopiere diese Datei und benenne sie um (z.B. 'meine-neue-seite.ts')
// 2. Ändere den slug und alle Inhalte
// 3. Importiere die neue Datei in src/app/data/index.ts
// 4. Füge die Seite zur pages-Konfiguration hinzu
// 5. Exportiere die neue Daten-Datei 