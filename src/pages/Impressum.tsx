import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function Impressum() {
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
            Impressum
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
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                IUE Institut für Unternehmensentwicklung<br />
                [Straße und Hausnummer]<br />
                [PLZ] Hamburg<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">Kontakt</h2>
              <p>
                E-Mail:{' '}
                <a href="mailto:info@iue-institut.de" className="text-[#2D4A3E] hover:underline">
                  info@iue-institut.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                [Name des Verantwortlichen]<br />
                [Straße und Hausnummer]<br />
                [PLZ] Hamburg
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl text-[#1A1A1A] mb-4">Haftungsausschluss</h2>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Haftung für Inhalte</h3>
              <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                entfernen.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
                der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg text-[#1A1A1A] mb-3">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
                und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
                dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
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
