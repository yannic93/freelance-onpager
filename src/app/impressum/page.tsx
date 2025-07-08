"use client";

import Link from "next/link";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Impressum() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`min-h-screen transition-colors duration-300`} style={{
      backgroundColor: 'var(--section-bg-primary)'
    }}>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-[#cda967] hover:underline transition inline-flex items-center gap-2"
          >
            ← Zurück zur Startseite
          </Link>
        </div>
        
        <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Angaben gemäß § 5 TMG</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p><strong>Yannic Nandy</strong></p>
              <p>Neunlindenstr. 28</p>
              <p>79106 Freiburg i. Br.</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Kontakt</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p><strong>E-Mail:</strong> info@yannicnandy.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Redaktionell verantwortlich</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Yannic Nandy</p>
              <p>Neunlindenstr. 28</p>
              <p>79106 Freiburg i. Br.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>EU-Streitschlichtung</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#cda967] hover:underline ml-1">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Haftung für Inhalte</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Haftung für Links</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Urheberrecht</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 