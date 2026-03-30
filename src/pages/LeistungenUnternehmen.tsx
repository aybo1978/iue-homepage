import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
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

const MAIN_SERVICES = [
  {
    label: 'Strategie & Führung',
    title: 'Strategie-Workshop für Führungskräfte',
    description:
      'Dieser intensive Workshop richtet sich an Führungsteams, die ihre Unternehmensstrategie überprüfen, neu ausrichten oder entwickeln möchten. Wir nutzen bewährte Methoden, um Marktanalysen durchzuführen, Wettbewerbsvorteile zu identifizieren und konkrete Maßnahmenpläne zu erstellen. Das Ziel ist eine kohärente und zukunftsfähige Strategie, die alle Stakeholder mitnimmt.',
    vorteile: 'Klare strategische Ausrichtung, verbesserte Entscheidungsfindung, erhöhte Wettbewerbsfähigkeit, motivierte Teams.',
    zielgruppe: 'Geschäftsführer, Vorstände, Abteilungsleiter, Führungsteams',
  },
  {
    label: 'Agilität & Transformation',
    title: 'Agile Transformation Coaching',
    description:
      'Wir unterstützen Unternehmen bei der Einführung und Skalierung agiler Methoden wie Scrum und Kanban. Unser Coaching umfasst die Schulung von Teams und Führungskräften, die Implementierung agiler Prozesse und die Etablierung einer agilen Kultur. Wir helfen Ihnen, Engpässe zu beseitigen und die Produktivität nachhaltig zu steigern.',
    vorteile: 'Schnellere Produktentwicklung, höhere Anpassungsfähigkeit, verbesserte Teamkommunikation, gesteigerte Mitarbeiterzufriedenheit.',
    zielgruppe: 'IT-Abteilungen, Produktentwicklungsteams, Projektmanager, Führungskräfte in agilen Umgebungen',
  },
  {
    label: 'Mitarbeiter & Kultur',
    title: 'Mitarbeiter-Engagement-Programm',
    description:
      'Wir analysieren die aktuellen Engagement-Levels in Ihrem Unternehmen, entwickeln maßgeschneiderte Programme zur Steigerung der Motivation und implementieren diese gemeinsam mit Ihnen. Dazu gehören Workshops, Feedback-Systeme und die Entwicklung von Führungskompetenzen.',
    vorteile: 'Reduzierte Fluktuation, höhere Produktivität, verbesserte Unternehmenskultur, stärkere Mitarbeiterbindung.',
    zielgruppe: 'Personalabteilungen, Führungskräfte aller Ebenen, HR-Manager',
  },
  {
    label: 'Veränderung & Wandel',
    title: 'Change-Management-Beratung',
    description:
      'Wir beraten und begleiten Sie bei der Planung, Kommunikation und Umsetzung organisatorischer Veränderungen, sei es eine Restrukturierung, die Einführung neuer Technologien oder eine kulturelle Transformation. Unser Fokus liegt auf der Minimierung von Widerständen und der Maximierung der Akzeptanz.',
    vorteile: 'Reibungslose Übergänge, höhere Akzeptanz von Veränderungen, minimierte Risiken, nachhaltiger Erfolg von Projekten.',
    zielgruppe: 'Geschäftsführung, Projektleiter, Abteilungsleiter, HR-Verantwortliche',
  },
  {
    label: 'Digitale Zukunft',
    title: 'Führungskräfteentwicklung 4.0',
    description:
      'Unser Programm konzentriert sich auf digitale Führung, Remote-Team-Management, Innovationsförderung und emotionale Intelligenz. Wir bieten individuelle Coachings, Gruppentrainings und Mentoring-Programme an.',
    vorteile: 'Zukunftssichere Führungskompetenz, stärkere Führungspersönlichkeiten, verbesserte Teamleistung, höhere Innovationskraft.',
    zielgruppe: 'Nachwuchsführungskräfte, erfahrene Manager, C-Level-Führungskräfte',
  },
  {
    label: 'Teams & Performance',
    title: 'Team-Performance-Optimierung',
    description:
      'Wir analysieren die Teamdynamik, identifizieren Stärken und Schwächen und entwickeln maßgeschneiderte Maßnahmen zur Verbesserung der Kommunikation, Konfliktlösung und Zielerreichung. Dies geschieht durch Workshops, Teambuilding-Maßnahmen und individuelles Coaching.',
    vorteile: 'Verbesserte Teamkommunikation, höhere Produktivität, effektivere Problemlösung, gesteigerte Teamzufriedenheit.',
    zielgruppe: 'Projektteams, Abteilungen, funktionsübergreifende Teams',
  },
  {
    label: 'Innovation & Wachstum',
    title: 'Innovationsmanagement Beratung',
    description:
      'Innovation ist der Motor für Wachstum. Wir unterstützen Unternehmen dabei, systematische Innovationsprozesse zu etablieren, kreative Ideen zu generieren und diese erfolgreich in Produkte oder Dienstleistungen umzusetzen. Von der Ideenfindung bis zur Markteinführung begleiten wir Sie mit Expertise und bewährten Methoden.',
    vorteile: 'Kontinuierliche Entwicklung neuer Produkte und Dienstleistungen, erhöhte Wettbewerbsfähigkeit, stärkere Marktposition, agilere Reaktion auf Marktveränderungen.',
    zielgruppe: 'Forschung & Entwicklung, Produktmanagement, Geschäftsführung, Marketingabteilungen',
  },
];

const WEITERE = [
  { title: 'Coaching für Führungskräfte', desc: 'Individuelle Begleitung von Führungskräften in herausfordernden Situationen, bei Rollenwechseln oder strategischen Entscheidungen. Fokus auf Führungsverhalten, Kommunikation und Selbstreflexion.' },
  { title: 'Teamentwicklung', desc: 'Stärkung der Zusammenarbeit, Klärung von Rollen und Verantwortlichkeiten, Verbesserung der Kommunikation und Konfliktlösung. Für Teams, die ihre Leistungsfähigkeit steigern wollen.' },
  { title: 'Business-Coaching', desc: 'Professionelle Begleitung für Unternehmer, Geschäftsführer und Selbstständige bei strategischen Herausforderungen, Geschäftsentwicklung und unternehmerischen Entscheidungen.' },
  { title: 'Vertriebsentwicklung', desc: 'Optimierung von Vertriebsstrukturen, Entwicklung von Vertriebsstrategien, Coaching von Vertriebsteams und Führungskräften im Vertrieb für nachhaltige Umsatzsteigerung.' },
  { title: 'Veränderungsprozesse', desc: 'Begleitung von Transformationsprozessen, Change Management und Organisationsentwicklung. Unterstützung bei der Gestaltung und Umsetzung von Veränderungen.' },
  { title: 'Förderfähige Beratungsansätze', desc: 'Viele unserer Beratungs- und Coachingleistungen sind förderfähig durch BAFA, INQA Coaching oder regionale Programme. Wir unterstützen Sie bei der Antragstellung.' },
];

const NUTZEN = [
  { title: 'Messbare Ergebnisse', desc: 'Konkrete Verbesserungen in Führungsverhalten, Teamleistung und Organisationseffizienz' },
  { title: 'Praxisnahe Umsetzung', desc: 'Methoden und Strategien, die sich direkt in Ihrem Unternehmensalltag anwenden lassen' },
  { title: 'Nachhaltige Entwicklung', desc: 'Langfristige Veränderungen statt kurzfristiger Symptombehandlung' },
  { title: 'Fördermöglichkeiten', desc: 'Finanzielle Unterstützung durch staatliche Programme wie BAFA oder INQA Coaching' },
];

export default function LeistungenUnternehmen() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <Header />

      {/* Hero */}
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
            Leistungen für Unternehmen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl md:text-7xl text-[#F7F5F2] leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Professionelle Begleitung für{' '}
            <span className="text-[#C9A96E] italic">mesbare Wirkung.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-paragraph text-xl text-[#F7F5F2]/70 max-w-2xl font-light leading-relaxed"
          >
            Professionelle Begleitung für Führungskräfte, Teams und Organisationen –
            mit systemischen Ansätzen und messbarer Wirkung.
          </motion.p>
        </div>
      </section>

      {/* Hauptleistungen */}
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
              Maßgeschneiderte Lösungen
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
              Unsere Unternehmensleistungen
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="divide-y divide-[#2D4A3E]/10"
          >
            {MAIN_SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-12 py-16 items-start"
              >
                <div>
                  <span className="font-paragraph text-xs text-[#C9A96E] uppercase tracking-widest mb-4 block">
                    {service.label}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] mb-6">
                    {service.title}
                  </h3>
                  <p className="font-paragraph text-[#1A1A1A]/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-2 md:pt-12 space-y-4">
                  <div className="bg-[#F7F5F2] p-6 border border-[#2D4A3E]/10">
                    <p className="font-paragraph text-xs text-[#2D4A3E] uppercase tracking-widest mb-2">Zentrale Vorteile</p>
                    <p className="font-paragraph text-sm text-[#1A1A1A]/70 leading-relaxed">{service.vorteile}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-[#C9A96E] shrink-0 mt-0.5" />
                    <p className="font-paragraph text-sm text-[#1A1A1A]/60">
                      <span className="font-medium text-[#1A1A1A]/80">Zielgruppe:</span> {service.zielgruppe}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Weitere Leistungsbereiche */}
      <section className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <span className="font-paragraph text-sm text-[#2D4A3E] uppercase tracking-widest mb-4 block">
              Weitere Leistungsbereiche
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] max-w-xl">
              Umfassende Unterstützung für alle Bereiche
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-px bg-[#2D4A3E]/10"
          >
            {WEITERE.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8">
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="font-paragraph text-sm text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ihr Nutzen */}
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
              Ihr Nutzen
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
              Was Sie von unserer Zusammenarbeit erwarten können
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
                <div className="w-12 h-12 mx-auto bg-[#F7F5F2] flex items-center justify-center mb-5 border border-[#2D4A3E]/10">
                  <CheckCircle className="h-5 w-5 text-[#2D4A3E]" />
                </div>
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
            <p className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-6">
              Nächster Schritt
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#F7F5F2] mb-8 max-w-2xl mx-auto leading-tight">
              Bereit für den nächsten Entwicklungsschritt?
            </h2>
            <p className="font-paragraph text-lg text-[#F7F5F2]/70 mb-12 max-w-xl mx-auto">
              Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, wie wir Ihr
              Unternehmen bei der Entwicklung unterstützen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt">
                <button className="inline-flex items-center bg-[#C9A96E] text-[#1A1A1A] hover:bg-white px-10 py-5 text-base font-paragraph uppercase tracking-wider transition-all duration-300 group">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/foerdermoeglichkeiten">
                <button className="inline-flex items-center border border-[#F7F5F2]/30 text-[#F7F5F2] hover:bg-[#F7F5F2]/10 px-10 py-5 text-base font-paragraph uppercase tracking-wider transition-all duration-300">
                  Fördermittel prüfen
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
