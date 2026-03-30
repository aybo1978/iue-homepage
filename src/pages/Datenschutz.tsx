import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <Header />

      {/* Hero */}
      <section className="w-full bg-[#1A1A1A] pt-48 pb-24">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '60px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-px bg-[#C9A96E] mb-8"
            aria-hidden="true"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-4"
          >
            Rechtliches
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-heading text-5xl md:text-6xl text-[#F7F5F2] leading-tight"
          >
            Datenschutzerklärung
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="w-full bg-[#F7F5F2] py-24 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl space-y-12 font-paragraph text-[#1A1A1A]/80 leading-relaxed"
          >
            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
                kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">2. Hosting</h2>
              <p>
                Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
                personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen,
                Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
                und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
                sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Verantwortliche Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                IUE Institut für Unternehmensentwicklung<br />
                [Straße und Hausnummer]<br />
                [PLZ] Hamburg<br />
                E-Mail:{' '}
                <a href="mailto:info@iue-institut.de" className="text-[#2D4A3E] hover:underline">
                  info@iue-institut.de
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
                wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
                Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
                oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
                personenbezogenen Daten haben.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">4. Datenerfassung auf dieser Website</h2>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
                wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
                (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">5. Ihre Rechte</h2>
              <p className="mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
                Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
                für die Zukunft widerrufen.
              </p>
              <p>
                Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            <div className="pt-4 border-t border-[#2D4A3E]/10">
              <Link to="/" className="inline-flex items-center text-[#2D4A3E] hover:text-[#1A1A1A] transition-colors font-paragraph text-sm">
                ← Zurück zur Startseite
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
