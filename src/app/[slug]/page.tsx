import { Metadata } from 'next';
import { getPageData, getAllPageSlugs } from '../data';
import BaseTemplate from '../components/templates/BaseTemplate';

// Statische Generierung für alle verfügbaren Seiten
export async function generateStaticParams() {
  const slugs = getAllPageSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dynamische Meta-Tags basierend auf Seiten-Daten
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pageData = getPageData(slug);
  
  if (!pageData) {
    return {
      title: 'Seite nicht gefunden',
      description: 'Die angeforderte Seite konnte nicht gefunden werden.',
    };
  }

  return {
    title: pageData.title,
    description: pageData.description,
    keywords: pageData.keywords,
    openGraph: pageData.openGraph ? {
      title: pageData.openGraph.title || pageData.title,
      description: pageData.openGraph.description || pageData.description,
      url: pageData.openGraph.url || `https://yannicnandy.com/${slug}`,
      type: (pageData.openGraph.type as "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other") || 'website',
    } : undefined,
  };
}

// Hauptkomponente für dynamische Seiten
export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pageData = getPageData(slug);
  
  if (!pageData) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
          <p className="text-lg">Die angeforderte Seite konnte nicht gefunden werden.</p>
        </div>
      </main>
    );
  }

  return <BaseTemplate pageData={pageData} />;
} 