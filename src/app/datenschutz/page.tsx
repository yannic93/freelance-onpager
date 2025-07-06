"use client";

import Link from "next/link";
import { useDarkMode } from "../contexts/DarkModeContext";

export default function Datenschutz() {
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
        
        <h1 className={`text-3xl font-bold mb-8 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>1. Datenschutz auf einen Blick</h2>
            
            <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Allgemeine Hinweise</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
                Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Datenerfassung auf dieser Website</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Abschnitt &ldquo;Hinweis zur Verantwortlichen Stelle&rdquo; in dieser Datenschutzerklärung entnehmen.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Wie erfassen wir Ihre Daten?</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um 
                Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme 
                erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Wofür nutzen wir Ihre Daten?</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, 
                unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>2. Hosting</h2>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Wir hosten unsere Website bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. 
                Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel: 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#cda967] hover:underline ml-1">
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Datenschutz</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.</p>
              <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene 
                Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung 
                erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem 
                Zweck das geschieht.</p>
              <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) 
                Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist 
                nicht möglich.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Hinweis zur verantwortlichen Stelle</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="ml-4">
                <p><strong>Yannic Nandy</strong></p>
                <p>Neunlindenstr. 28</p>
                <p>79106 Freiburg i. Br.</p>
                <p>Deutschland</p>
                <p>E-Mail: kontakt@yannicnandy.de</p>
              </div>
              <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) 
                entscheidet.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Speicherdauer</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
                Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im 
                letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten 
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere 
                Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung 
                in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf 
                Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff 
                auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die 
                Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. 
                Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, 
                verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir 
                Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage 
                von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten 
                Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen 
                Rechtsgrundlagen wird in den Absätzen dieser Datenschutzerklärung informiert.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich 
                nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese 
                Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein 
                mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen 
                dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als 
                Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass 
                US-Behörden (z. B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, 
                auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können 
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf 
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE 
                JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG 
                IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN 
                GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN 
                SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN 
                DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG 
                NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER 
                GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer 
                Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes 
                oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger 
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Recht auf Datenübertragbarkeit</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                automatisiert verarbeiten, an sich oder an einen Dritten in ein gängigen, maschinenlesbaren Format 
                aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen 
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>SSL- bzw. TLS-Verschlüsselung</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- 
                bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
              <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, 
                nicht von Dritten mitgelesen werden.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Auskunft, Löschung und Berichtigung</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche 
                Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck 
                der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie 
                zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Recht auf Einschränkung der Verarbeitung</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht 
                in folgenden Fällen:</p>
              <ul className="list-disc ml-6 mt-2">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, 
                  benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das 
                  Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie 
                  statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, 
                  Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der 
                  Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen 
                  Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen 
                  überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten 
                  zu verlangen.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>4. Datenerfassung auf dieser Website</h2>
            
            <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Server-Log-Dateien</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber 
                hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner 
                Website – hierzu müssen die Server-Log-Dateien erfasst werden.</p>
            </div>

            <h3 className={`text-lg font-semibold mb-3 mt-6 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Kontaktformular</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
                mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
                an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist 
                jederzeit widerrufbar.</p>
              <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung 
                auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung 
                entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen 
                – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>5. Plugins und Tools</h2>
            
            <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-[#ededed]' : 'text-[#1A1A1A]'}`}>Google Fonts (lokales Hosting)</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Diese Seite nutzt so genannte Google Fonts, die von Google bereitgestellt werden, für die einheitliche 
                Darstellung von Schriftarten. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern 
                von Google findet dabei nicht statt.</p>
              <p>Weitere Informationen zu Google Fonts finden Sie unter 
                <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-[#cda967] hover:underline ml-1">
                  https://developers.google.com/fonts/faq
                </a> und in der Datenschutzerklärung von Google: 
                <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#cda967] hover:underline ml-1">
                  https://policies.google.com/privacy?hl=de
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 