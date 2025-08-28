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
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Angaben gemäß § 5 DDG</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p><strong>Yannic Nandy</strong></p>
              <p>Neunlindenstraße 28</p>
              <p>79106 Freiburg i. Br.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Vertreten durch</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Yannic Nandy</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Kontakt</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p><strong>E-Mail:</strong> info@yannicnandy.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Haftungsauschluss</h2>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Haftung für Inhalte</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8–10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Hinweisen auf eine rechtswidrige Tätigkeit zu suchen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben davon unberührt. Eine Haftung ist jedoch erst ab dem Zeitpunkt möglich, an dem eine konkrete Rechtsverletzung bekannt wird. Sobald uns entsprechende Rechtsverletzungen bekannt werden, entfernen wir diese Inhalte umgehend.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Haftung für Links</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße geprüft. Rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Urheberrecht</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die vom Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch erlaubt. Soweit Inhalte nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet und entsprechende Inhalte als solche gekennzeichnet. Sollten Sie dennoch eine Urheberrechtsverletzung feststellen, bitten wir um einen Hinweis. Bei Bekanntwerden entfernen wir derartige Inhalte umgehend.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Datenschutz</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (z. B. Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies – soweit möglich – stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p>
              <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein vollständiger Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
              <p>Der Nutzung der im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber behalten sich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Google Analytics</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sogenannte ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse Ihrer Nutzung der Website ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Nutzung dieser Website (einschließlich Ihrer IP-Adresse) werden an einen Server von Google in den USA übertragen und dort gespeichert. Google verwendet diese Informationen, um Ihre Nutzung der Website auszuwerten, Berichte über die Websiteaktivitäten für den Betreiber zusammenzustellen und weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Gegebenenfalls wird Google diese Informationen auch an Dritte übertragen, sofern dies gesetzlich vorgeschrieben ist oder Dritte diese Daten im Auftrag von Google verarbeiten. Ihre IP-Adresse wird von Google in keinem Fall mit anderen Daten von Google in Verbindung gebracht.</p>
              <p>Sie können die Installation von Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen jedoch darauf hin, dass Sie in diesem Fall möglicherweise nicht sämtliche Funktionen dieser Website in vollem Umfang nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Verarbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem genannten Zweck einverstanden.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 