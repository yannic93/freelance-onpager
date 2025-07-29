# Template-basiertes Seiten-System

Dieses System ermöglicht die einfache Erstellung und Verwaltung von 20-50 Unterseiten mit ähnlichem Design aber unterschiedlichem Content.

## Struktur

```
src/app/data/
├── types.ts                    # TypeScript-Typen
├── index.ts                    # Zentrale Datenverwaltung
├── templates/
│   └── page-template.ts        # Vorlage für neue Seiten
└── pages/
    ├── home.ts                 # Homepage-Daten
    ├── shopify-freiburg.ts     # Shopify Freiburg Seite
    ├── klaviyo-automation.ts   # Klaviyo Automatisierung
    └── ... (weitere Seiten)
```

## Neue Seite erstellen

### 1. Template kopieren
```bash
cp src/app/data/templates/page-template.ts src/app/data/pages/meine-neue-seite.ts
```

### 2. Daten anpassen
```typescript
export const meineNeueSeiteData: PageData = {
  slug: 'meine-neue-seite',
  title: 'Meine Neue Seite | Yannic Nandy',
  description: 'Beschreibung für SEO',
  keywords: ['keyword1', 'keyword2'],
  hero: {
    title: 'Haupttitel',
    subtitle: 'Untertitel',
    description: 'Beschreibung',
    ctaText: 'Call-to-Action',
    ctaLink: '#contact',
    variant: 'default', // 'default', 'minimal'
    brandName: 'Yannic Nandy' // Optional: Custom brand name für Navigation
  },
  features: [
    {
      title: 'Feature 1',
      description: 'Beschreibung',
      icon: 'icon-name',
      variant: 'default' // 'default', 'card', 'list'
    }
    // ... weitere Features
  ],
  experience: true,
  contact: true,
  footer: true
};
```

### 3. In index.ts registrieren
```typescript
// Import hinzufügen
import { meineNeueSeiteData } from './pages/meine-neue-seite';

// Zur pages-Konfiguration hinzufügen
export const pages: PageConfig = {
  '': homeData,
  'shopify-freiburg': shopifyFreiburgData,
  'meine-neue-seite': meineNeueSeiteData, // Neue Zeile
};

// Export hinzufügen
export { meineNeueSeiteData } from './pages/meine-neue-seite';
```

### 4. Fertig!
Die Seite ist automatisch unter `/meine-neue-seite` verfügbar.

## Verfügbare Varianten

### Hero-Varianten
- `default`: Standard Hero-Sektion (unterstützt brandName für Custom Branding)
- `minimal`: Minimalistische Variante (TODO)

### Feature-Varianten
- `default`: Standard Feature-Sektion
- `card`: Card-basierte Darstellung
- `list`: Listen-basierte Darstellung

## SEO-Optimierung

Jede Seite unterstützt:
- Dynamische Meta-Tags
- Open Graph Tags
- Keywords
- Automatische URL-Generierung

## Performance

- Statische Generierung für alle Seiten
- Automatisches Caching
- Optimierte Bundle-Größe

## Wartung

- Zentrale Datenverwaltung
- Type-Safety durch TypeScript
- Einfache Content-Updates
- Konsistentes Design 