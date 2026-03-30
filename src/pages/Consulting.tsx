import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight, TrendingUp, Settings, BarChart2, Globe, Lightbulb, Users } from 'lucide-react';
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

const LEISTUNGEN = [
  {
    icon: TrendingUp,
    label: 'Strategie',
    title: 'Strategieberatung & Unternehmensausrichtung',
    description:
      'Wir unterstützen Sie bei der Entwicklung und Schärfung Ihrer Unternehmensstrategie. Gemeinsam analysieren wir Marktposition, Wettbewerbsumfeld und interne Ressourcen – und erarbeiten eine klare, zukunftsfähige Ausrichtung für Ihr Unternehmen.',
    vorteile: 'Klare strategische Prioritäten, bessere Entscheidungsgrundlagen, erhöhte Wettbewerbsfähigkeit, motivierte Führungsebene.',
    zielgruppe: 'Geschäftsführer, Vorstände, inhabergeführte Unternehmen, KMU in Wachstums- oder Transformationsphasen',
  },
  {
    icon: Settings,
    label: 'Organisation',
    title: 'Organisationsentwicklung & Prozessoptimierung',
    description:
      'Viele Unternehmen verlieren Effizienz durch gewachsene Strukturen und unnötige Komplexität. Wir analysieren Ihre Aufbau- und Ablauforganisation, identifizieren Engpässe und entwickeln mit Ihnen schlanke, wirkungsvolle Strukturen und Prozesse.',
    vorteile: 'Schlankere Abläufe, weniger Reibungsverluste, klarere Verantwortlichkeiten, höhere Produktivität.',
    zielgruppe: 'Unternehmen aller Branchen, die ihre internen Strukturen modernisieren oder skalieren möchten',
  },
  {
    icon: BarChart2,
    label: 'Performance',
    title: 'Performance Management & KPI-Systeme',
    description:
      'Was nicht gemessen wird, kann nicht gesteuert werden. Wir helfen Ihnen, aussagekräftige Kennzahlen und Steuerungssysteme aufzubauen, die Führungskräften und Teams echte Transparenz über Leistung und Fortschritt geben.',
    vorteile: 'Fundierte Entscheidungsgrundlagen, bessere Steuerbarkeit, klare Erfolgsmessung, höhere Verbindlichkeit.',
    zielgruppe: 'Führungskräfte, Controlling, Unternehmensleitung in wachsenden oder komplexeren Organisationen',
  },
  {
    icon: Users,
    label: 'Führung',
    title: 'Führungskräfteberatung & Executive Consulting',
    description:
      'Führungskräfte stehen vor komplexen Herausforderungen: strategische Entscheidungen, Teamentwicklung, kultureller Wandel. Wir begleiten Führungspersönlichkeiten auf Augenhöhe – als Sparringspartner, Berater und kritischer Freund.',
    vorteile: 'Klarere Führungsrolle, bessere Entscheidungsqualität, stärkere Wirkung, gestärkte Führungspersönlichkeit.',
    zielgruppe: 'Geschäftsführer, C-Level, Senior Manager, Nachwuchsführungskräfte in Entwicklungsprogrammen',
  },
  {
    icon: Globe,
    label: 'Transformation',
    title: 'Change Management & Transformationsbegleitung',
    description:
      'Veränderungen gelingen, wenn Menschen mitgenommen werden. Wir begleiten Transformationsprozesse von der Planung über die Kommunikation bis zur nachhaltigen Umsetzung – mit systemischer Haltung und praktischer Erfahrung.',
    vorteile: 'Höhere Akzeptanz, weniger Widerstände, strukturierter Wandel, nachhaltige Verankerung neuer Strukturen.',
    zielgruppe: 'Unternehmen in Restrukturierungen, Fusionen, Digitalisierungsprojekten oder kulturellen Transformationen',
  },
  {
    icon: Lightbulb,
    label: 'Innovation',
    title: 'Innovationsberatung & Geschäftsmodellentwicklung',
    description:
      'Neue Märkte, neue Technologien, neue Konkurrenten – Ihr Geschäftsmodell muss zukunftsfähig sein. Wir begleiten Sie bei der systematischen Weiterentwicklung und Diversifizierung Ihres Angebots, mit bewährten Methoden wie Business Model Canvas, Design Thinking und Szenarioplanung.',
    vorteile: 'Neue Wachstumsfelder, stärkere Marktposition, höhere Innovationskraft, reduzierte Abhängigkeiten.',
    zielgruppe: 'Unternehmen, die ihr Geschäftsmodell zukunftssicher machen oder neue Geschäftsfelder erschließen wollen',
  },
];

const BRANCHEN = [
  'Mittelständische Unternehmen (KMU)',
  'Dienstleistung & Beratung',
  'Gesundheitswesen & Sozialwirtschaft',
  'Handel & E-Commerce',
  'Technologie & IT',
  'Produktion & Handwerk',
  'Non-Profit & öffentliche Verwaltung',
  'Start-ups & Gründungsvorhaben',
];

const ABLAUF = [
  { step: '01', title: 'Analyse & Diagnose', desc: 'Wir starten mit einer fundierten Situationsanalyse – Zahlen, Strukturen, Kultur, Markt. Ziel ist ein klares Bild der Ausgangslage und der zentralen Handlungsfelder.' },
  { step: '02', title: 'Konzeption & Planung', desc: 'Auf Basis der Analyse entwickeln wir gemeinsam mit Ihnen eine passgenaue Strategie und einen konkreten Maßnahmenplan – realistisch, priorisiert und umsetzbar.' },
  { step: '03', title: 'Umsetzungsbegleitung', desc: 'Wir bleiben an Ihrer Seite. Von der Pilotphase bis zur vollen Implementierung unterstützen wir Sie operativ, moderierend und als kritischen Sparringspartner.' },
  { step: '04', title: 'Evaluation & Verstetigung', desc: 'Nach der Umsetzung prüfen wir gemeinsam die Wirkung, justieren nach und sorgen für die nachhaltige Verankerung der Veränderungen in Ihrer Organisation.' },
];

const NUTZEN = [
  { title: 'Unabhängige Perspektive', desc: 'Wir bringen den externen Blick ohne interne Betriebsblindheit – und sprechen auch schwierige Wahrheiten aus.' },
  { title: 'Systemischer Ansatz', desc: 'Wir betrachten Ihr Unternehmen als Ganzes und lösen Blockaden an der Wurzel statt Symptome zu behandeln.' },
  { title: 'Praxisorientiert', desc: 'Keine abstrakten Konzepte. Unsere Empfehlungen sind direkt umsetzbar und auf Ihre spezifische Situation zugeschnitten.' },
  { title: 'Vertraulichkeit', desc: 'Höchste Diskretion ist für uns selbstverständlich. Ihre Daten und Strategien bleiben bei uns.' },
];

export default function Consulting() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#1A1A1A] pt-48 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://static.wixstatic.com/media/1c34b8_16904304a6574433b9c2a63ba6d16139~mv2.png)',
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
            Unternehmensberatung
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl md:text-7xl text-[#F7F5F2] leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Consulting mit{' '}
            <span className="text-[#C9A96E] italic">Substanz und Wirkung.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-paragraph text-xl text-[#F7F5F2]/70 max-w-2xl font-light leading-relaxed"
          >
            Strategische Unternehmensberatung für KMU und Führungskräfte – praxisnah,
            systemisch und auf nachhaltige Ergebnisse ausgerichtet.
          </motion.p>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[#2D4A3E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
                Unser Ansatz
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
                Beratung, die wirklich etwas verändert.
              </h2>
              <div className="space-y-5 font-paragraph text-lg text-[#1A1A1A]/70 leading-relaxed">
                <p>
                  Consulting beim IUE Institut bedeutet: keine Standardlösungen von der Stange.
                  Wir nehmen uns die Zeit, Ihr Unternehmen, Ihre Branche und Ihre Ziele
                  wirklich zu verstehen – bevor wir gemeinsam an Lösungen arbeiten.
                </p>
                <p>
                  Unser systemischer Beratungsansatz verbindet betriebswirtschaftliche Expertise
                  mit Organisations- und Personalentwicklung. Wir sehen das Unternehmen als
                  Ganzes und berücksichtigen, wie Strategie, Kultur und Menschen zusammenwirken.
                </p>
                <p>
                  Das Ergebnis: Lösungen, die nicht nur auf dem Papier funktionieren, sondern
                  im Alltag Ihres Unternehmens wirklich ankommen und nachhaltig wirken.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="bg-white border border-[#2D4A3E]/10 p-10"
            >
              <h3 className="font-heading text-2xl text-[#1A1A1A] mb-6">
                Unsere Beratung umfasst
              </h3>
              <ul className="space-y-4">
                {[
                  'Strategie- und Marktpositionierungsberatung',
                  'Organisations- und Prozessoptimierung',
                  'Führungskräfteberatung & Executive Sparring',
                  'Change Management & Transformationsbegleitung',
                  'Performance Management & Steuerungssysteme',
                  'Innovationsberatung & Geschäftsmodellentwicklung',
                  'Förderfähige Beratungsleistungen (BAFA, INQA)',
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

      {/* ── LEISTUNGEN ───────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20"
          >
            <span className="font-paragraph text-sm text-[#2D4A3E] uppercase tracking-widest mb-4 block">
              Beratungsfelder
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
              Unsere Consulting-Leistungen
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="divide-y divide-[#2D4A3E]/10"
          >
            {LEISTUNGEN.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-12 py-16 items-start"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-5 w-5 text-[#C9A96E]" aria-hidden="true" />
                    <span className="font-paragraph text-xs text-[#C9A96E] uppercase tracking-widest">
                      {service.label}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] mb-6">
                    {service.title}
                  </h3>
                  <p className="font-paragraph text-[#1A1A1A]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2 md:pt-14 space-y-4">
                  <div className="bg-[#F7F5F2] p-6 border border-[#2D4A3E]/10">
                    <p className="font-paragraph text-xs text-[#2D4A3E] uppercase tracking-widest mb-2">
                      Zentrale Vorteile
                    </p>
                    <p className="font-paragraph text-sm text-[#1A1A1A]/70 leading-relaxed">
                      {service.vorteile}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-[#C9A96E] shrink-0 mt-0.5" />
                    <p className="font-paragraph text-sm text-[#1A1A1A]/60">
                      <span className="font-medium text-[#1A1A1A]/80">Zielgruppe:</span>{' '}
                      {service.zielgruppe}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BRANCHEN ─────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#1A1A1A] text-[#F7F5F2] py-32">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-4 block">
                Branchen & Zielgruppen
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-[#F7F5F2] mb-8 leading-tight">
                Wir beraten quer durch alle Branchen.
              </h2>
              <p className="font-paragraph text-lg text-[#F7F5F2]/70 leading-relaxed">
                Unsere Beratungsleistungen sind branchenübergreifend einsetzbar. Was zählt,
                ist Ihr Vorhaben – nicht Ihre Branche. Wir bringen die nötige Flexibilität
                und den systemischen Blick mit, um in unterschiedlichsten Kontexten
                wirksam zu sein.
              </p>
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-px bg-white/10"
            >
              {BRANCHEN.map((branche, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white/5 p-6 hover:bg-white/10 transition-colors duration-300"
                >
                  <p className="font-paragraph text-sm text-[#F7F5F2]/80">{branche}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABLAUF ───────────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="font-paragraph text-sm text-[#2D4A3E] uppercase tracking-widest mb-4 block">
              Unser Vorgehen
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
              So arbeiten wir mit Ihnen
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {ABLAUF.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <div className="font-heading text-6xl text-[#2D4A3E]/10 leading-none mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="font-paragraph text-sm text-[#1A1A1A]/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── NUTZEN ───────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="font-paragraph text-sm text-[#2D4A3E] uppercase tracking-widest mb-4 block">
              Ihr Mehrwert
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
              Warum Consulting mit IUE?
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {NUTZEN.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center">
                <div className="w-12 h-12 mx-auto bg-white flex items-center justify-center mb-5 border border-[#2D4A3E]/10">
                  <CheckCircle className="h-5 w-5 text-[#2D4A3E]" />
                </div>
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="font-paragraph text-sm text-[#1A1A1A]/60 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FÖRDERUNG HINWEIS ─────────────────────────────────────────────── */}
      <section className="w-full bg-[#2D4A3E]/10 border-y border-[#2D4A3E]/20 py-16">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-paragraph text-xs text-[#2D4A3E] uppercase tracking-widest mb-2">
                Tipp
              </p>
              <h3 className="font-heading text-2xl text-[#1A1A1A] mb-2">
                Viele Beratungsleistungen sind förderfähig.
              </h3>
              <p className="font-paragraph text-[#1A1A1A]/70 max-w-xl">
                Über Programme wie BAFA (Bundesförderung Unternehmensberatung) oder INQA-Coaching
                können bis zu 80 % der Beratungskosten staatlich gefördert werden. Wir prüfen
                gemeinsam, welche Förderung für Ihr Vorhaben in Frage kommt.
              </p>
            </div>
            <Link
              to="/foerdermoeglichkeiten"
              className="shrink-0 inline-flex items-center border border-[#2D4A3E] text-[#2D4A3E] hover:bg-[#2D4A3E] hover:text-[#F7F5F2] px-8 py-4 font-paragraph text-sm uppercase tracking-wider transition-all duration-300 group"
            >
              Fördermöglichkeiten ansehen
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#1A1A1A] py-32">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-6">
              Kostenloses Erstgespräch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#F7F5F2] mb-8 max-w-2xl mx-auto leading-tight">
              Bereit, Ihr Unternehmen weiterzuentwickeln?
            </h2>
            <p className="font-paragraph text-lg text-[#F7F5F2]/70 mb-12 max-w-xl mx-auto">
              Vereinbaren Sie ein unverbindliches Erstgespräch. Wir hören zu, stellen
              die richtigen Fragen – und zeigen Ihnen, was möglich ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <button className="inline-flex items-center bg-[#C9A96E] text-[#1A1A1A] hover:bg-white px-10 py-5 text-base font-paragraph uppercase tracking-wider transition-all duration-300 group">
                  Beratungsgespräch anfragen
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/foerdermoeglichkeiten">
                <button className="inline-flex items-center border border-[#F7F5F2]/30 text-[#F7F5F2] hover:bg-[#F7F5F2]/10 px-10 py-5 text-base font-paragraph uppercase tracking-wider transition-all duration-300">
                  Förderung prüfen
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
