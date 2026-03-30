import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const PROGRAMS = [
  {
    title: 'BAFA – Bundesförderung Unternehmensberatung',
    subtitle: 'Bis zu 80 % Förderung für Beratungsleistungen in KMU',
    description: 'Das BAFA (Bundesamt für Wirtschaft und Ausfuhrkontrolle) fördert Unternehmensberatungen für kleine und mittlere Unternehmen sowie Freiberufler. Das Programm unterstützt allgemeine Beratungen sowie Beratungen zu spezifischen Themen wie Digitalisierung, Nachhaltigkeit und Fachkräftesicherung.',
    vorteile: 'Zuschuss bis zu 80 % der Beratungskosten (max. 3.200 €), keine Rückzahlung, gilt auch für Coaching- und Entwicklungsberatung, KMU bis 499 Mitarbeiter antragsbrechtigt.',
    link: 'https://www.bafa.de/DE/Wirtschafts_Mittelstandsfoerderung/Beratung_Finanzierung/Unternehmensberatung/unternehmensberatung_node.html',
  },
  {
    title: 'INQA-Coaching',
    subtitle: 'Bundesgefördertes Coaching für KMU – bis zu 80 % Förderung',
    description: 'INQA-Coaching ist ein bundesgefördertes Beratungs- und Coaching-Programm für kleine und mittlere Unternehmen. Es unterstützt Unternehmen dabei, ihre Arbeitspraktiken weiterzuentwickeln, die Mitarbeitergesundheit zu stärken und die Organisationsentwicklung voranzutreiben.',
    vorteile: 'Bis zu 12 Coaching-Einheiten à 1,5 Stunden werden gefördert, bis zu 80 % der Kosten übernommen, direkte Begleitung durch zertifizierten INQA-Coach, für Unternehmen bis 249 Mitarbeiter.',
    link: 'https://www.inqa.de/DE/angebote/inqa-coaching/inqa-coaching.html',
  },
  {
    title: 'Digital Jetzt',
    subtitle: 'Förderung für Digitalisierungsprojekte in KMU',
    description: 'Das Förderprogramm „Digital Jetzt" des Bundesministeriums für Wirtschaft und Klimaschutz unterstützt kleine und mittlere Unternehmen bei der Umsetzung ihrer Digitalisierungsvorhaben. Gefördert werden Investitionen in digitale Technologien (z.B. Software, Hardware) und die Qualifizierung der Mitarbeiter im Bereich Digitalisierung.',
    vorteile: 'Finanzielle Zuschüsse für Hard- und Software sowie für die Schulung von Mitarbeitern, Steigerung der Effizienz, Erschließung neuer Geschäftsfelder und Verbesserung der Wettbewerbsfähigkeit.',
    link: 'https://www.digitaljetzt-portal.de/',
  },
  {
    title: 'Zentrales Innovationsprogramm Mittelstand (ZIM)',
    subtitle: 'Innovationsförderung für KMU und Forschungseinrichtungen',
    description: 'Das ZIM ist ein bundesweites, technologie- und branchenoffenes Förderprogramm für innovative Projekte von kleinen und mittleren Unternehmen in Deutschland. Es fördert Einzelprojekte, Kooperationsprojekte zwischen Unternehmen und Forschungseinrichtungen sowie Netzwerkprojekte.',
    vorteile: 'Zuschüsse für Forschungs- und Entwicklungsprojekte, Unterstützung bei der Markteinführung innovativer Produkte, Zugang zu Forschungspartnern und Netzwerken, Stärkung der Innovationsfähigkeit.',
    link: 'https://www.zim.de/',
  },
  {
    title: 'Gründerzuschuss der Agentur für Arbeit',
    subtitle: 'Finanzielle Unterstützung für Existenzgründer aus der Arbeitslosigkeit',
    description: 'Der Gründerzuschuss unterstützt Arbeitslose bei der Aufnahme einer selbstständigen Tätigkeit. In der ersten Phase wird ein Zuschuss in Höhe des zuletzt bezogenen Arbeitslosengeldes plus 300 Euro für die soziale Absicherung für sechs Monate gewährt.',
    vorteile: 'Finanzielle Absicherung in der Gründungsphase, Unterstützung bei der Überbrückung der Anfangszeit, Möglichkeit zur Konzentration auf den Aufbau des Geschäfts ohne finanzielle Sorgen.',
    link: 'https://www.arbeitsagentur.de/existenzgruendung/gruenderzuschuss',
  },
  {
    title: 'Qualifizierungsoffensive – Weiterbildungsförderung',
    subtitle: 'Förderung von Weiterbildungen für Beschäftigte',
    description: 'Die Bundesagentur für Arbeit fördert Weiterbildungen von Beschäftigten über das Qualifizierungschancengesetz. Arbeitgeber können Zuschüsse zu Lehrgangskosten und zum Arbeitsentgelt während der Weiterbildung erhalten – besonders relevant für Coaching- und Führungskräfteentwicklung.',
    vorteile: 'Bis zu 100 % der Weiterbildungskosten förderfähig (je nach Betriebsgröße), Lohnkostenzuschuss während der Weiterbildung, gilt für alle Branchen und Qualifikationsstufen.',
    link: 'https://www.arbeitsagentur.de/unternehmen/personalarbeit/foerderung-von-weiterbildung',
  },
];

const STEPS = [
  { step: '01', title: 'Erstberatung', desc: 'Wir analysieren Ihr Vorhaben und prüfen die grundsätzliche Förderfähigkeit.' },
  { step: '02', title: 'Programmauswahl', desc: 'Gemeinsam identifizieren wir die passenden Förderprogramme für Ihre Situation.' },
  { step: '03', title: 'Antragsvorbereitung', desc: 'Wir unterstützen Sie bei der Zusammenstellung aller erforderlichen Unterlagen.' },
  { step: '04', title: 'Umsetzung', desc: 'Nach Bewilligung begleiten wir Sie bei der Durchführung des geförderten Projekts.' },
];

const VORTEILE = [
  { title: 'Finanzielle Entlastung', desc: 'Reduzieren Sie Ihre Investitionskosten durch staatliche Zuschüsse von bis zu 80 %' },
  { title: 'Expertenwissen', desc: 'Profitieren Sie von unserer Erfahrung mit verschiedenen Förderprogrammen und Antragsverfahren' },
  { title: 'Zeitersparnis', desc: 'Wir führen Sie durch den Förderprozess und ersparen Ihnen wertvolle Zeit' },
  { title: 'Höhere Erfolgsquote', desc: 'Durch professionelle Vorbereitung erhöhen Sie Ihre Chancen auf Bewilligung deutlich' },
  { title: 'Rechtssicherheit', desc: 'Vermeiden Sie Fehler bei der Antragstellung und Abwicklung durch fachkundige Begleitung' },
  { title: 'Ganzheitliche Betreuung', desc: 'Von der ersten Idee bis zur erfolgreichen Projektumsetzung stehen wir an Ihrer Seite' },
];

export default function Foerdermoeglichkeiten() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <SEO
        title="Fördermöglichkeiten"
        description="Nutzen Sie staatliche Förderprogramme für Coaching und Beratung. BAFA, INQA, Digital Jetzt, ZIM und mehr. Das IUE Institut hilft Ihnen die passende Förderung zu beantragen."
        keywords="Fördermöglichkeiten, BAFA Förderung, INQA Coaching, Digital Jetzt, ZIM, Gründerzuschuss, staatliche Förderung, Beratungsförderung"
        url="/foerdermoeglichkeiten"
      />
      <Header />

      {/* Hero */}
      <section className="relative w-full bg-[#1A1A1A] pt-48 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://static.wixstatic.com/media/1c34b8_89362e8e540d40999b551d7c4bf01927~mv2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/70 to-[#1A1A1A]" aria-hidden="true" />
        <div className="relative z-10 max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
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
            Finanzierung & Förderung
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl md:text-7xl text-[#F7F5F2] leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Staatliche Förderung{' '}
            <span className="text-[#C9A96E] italic">optimal nutzen.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-paragraph text-xl text-[#F7F5F2]/70 max-w-2xl font-light leading-relaxed"
          >
            Nutzen Sie staatliche Förderprogramme für Ihre Entwicklung – wir unterstützen Sie
            bei der Orientierung und Beantragung.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="w-full bg-[#F7F5F2] py-24 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
                Förderung macht Entwicklung möglich.
              </h2>
              <p className="font-paragraph text-lg text-[#1A1A1A]/70 leading-relaxed mb-6">
                Viele Unternehmen nutzen staatliche Fördermöglichkeiten nicht, obwohl sie Entwicklung, Beratung und Transformation finanziell deutlich erleichtern können.
              </p>
              <p className="font-paragraph text-lg text-[#1A1A1A]/70 leading-relaxed">
                Das IUE Institut unterstützt Sie dabei, geeignete Förderprogramme zu erkennen, einzuordnen und den Weg zur Beantragung strukturiert vorzubereiten – von der ersten Orientierung bis zur Begleitung im Antragsprozess.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 border border-[#2D4A3E]/10"
            >
              <h3 className="font-heading text-2xl text-[#1A1A1A] mb-6">Unsere Unterstützung umfasst</h3>
              <ul className="space-y-4">
                {[
                  'Prüfung der Förderfähigkeit Ihres Vorhabens',
                  'Identifikation geeigneter Förderprogramme',
                  'Beratung zu Voraussetzungen und Abläufen',
                  'Unterstützung bei der Antragstellung',
                  'Begleitung während des Förderprozesses',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#C9A96E] shrink-0 mt-0.5" />
                    <span className="font-paragraph text-[#1A1A1A]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="w-full bg-[#1A1A1A] text-[#F7F5F2] py-32">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20"
          >
            <span className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-4 block">
              Förderprogramme im Überblick
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#F7F5F2]">
              Beispiele für staatliche Fördermöglichkeiten
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {PROGRAMS.map((program, idx) => (
              <motion.article
                key={idx}
                variants={fadeUp}
                className="bg-white/5 border border-[#F7F5F2]/10 p-8 md:p-10 hover:bg-white/10 transition-colors duration-300"
              >
                <h3 className="font-heading text-2xl text-[#F7F5F2] mb-2">{program.title}</h3>
                <p className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-5">{program.subtitle}</p>
                <p className="font-paragraph text-[#F7F5F2]/70 mb-6 leading-relaxed">{program.description}</p>
                <div className="border-t border-[#F7F5F2]/10 pt-5">
                  <p className="font-paragraph text-xs text-[#C9A96E] uppercase tracking-widest mb-2">Vorteile</p>
                  <p className="font-paragraph text-sm text-[#F7F5F2]/60 leading-relaxed">{program.vorteile}</p>
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-6">
                  <a
                    href={program.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#C9A96E] hover:text-white font-paragraph text-sm tracking-wider uppercase transition-colors duration-300"
                  >
                    Offizielle Informationen <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center text-[#F7F5F2]/50 hover:text-[#F7F5F2] font-paragraph text-sm tracking-wider uppercase transition-colors duration-300"
                  >
                    Förderung anfragen <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="w-full bg-white py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="font-paragraph text-sm text-[#2D4A3E] uppercase tracking-widest mb-4 block">Ablauf</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">So unterstützen wir Sie</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {STEPS.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <div className="font-heading text-6xl text-[#2D4A3E]/10 leading-none mb-4">{item.step}</div>
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="font-paragraph text-sm text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="font-paragraph text-sm text-[#2D4A3E] uppercase tracking-widest mb-4 block">Ihre Vorteile</span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
              Warum Förderung mit unserer Unterstützung sinnvoll ist
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-px bg-[#2D4A3E]/10"
          >
            {VORTEILE.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8">
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="font-paragraph text-sm text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#2D4A3E] py-32">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-6">Kostenfreie Prüfung</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#F7F5F2] mb-8 max-w-2xl mx-auto leading-tight">
              Nutzen Sie Ihre Fördermöglichkeiten.
            </h2>
            <p className="font-paragraph text-lg text-[#F7F5F2]/70 mb-12 max-w-xl mx-auto">
              Vereinbaren Sie ein unverbindliches Beratungsgespräch und erfahren Sie,
              welche Förderprogramme für Ihr Vorhaben in Frage kommen.
            </p>
            <Link to="/kontakt">
              <button className="inline-flex items-center bg-[#C9A96E] text-[#1A1A1A] hover:bg-white px-10 py-5 text-base font-paragraph uppercase tracking-wider transition-all duration-300 group">
                Jetzt Förderberatung anfragen
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
