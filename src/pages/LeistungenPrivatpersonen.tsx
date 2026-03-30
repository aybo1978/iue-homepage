import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
    label: 'Beruf & Karriere',
    title: 'Karrierecoaching',
    description: 'Unterstützung bei beruflicher Neuorientierung, Karriereplanung und der Entwicklung von Führungsqualitäten, um Ihre beruflichen Ziele zu erreichen.',
    vorteile: 'Klare berufliche Ziele, verbesserte Bewerbungsstrategien, gesteigertes Selbstvertrauen im Job und erfolgreiche Karriereentwicklung.',
    zielgruppe: 'Berufseinsteiger, Fach- und Führungskräfte, Personen in Umbruchphasen oder mit dem Wunsch nach beruflicher Weiterentwicklung.',
    dauer: '3–6 Monate, wöchentliche oder zweiwöchentliche Sitzungen (online oder persönlich).',
  },
  {
    label: 'Persönlichkeit & Potenzial',
    title: 'Persönlichkeitsentwicklung & Selbstmanagement',
    description: 'Coaching zur Stärkung des Selbstbewusstseins, Verbesserung der Kommunikation und effektiveren Zeitmanagements, um Ihr volles Potenzial zu entfalten.',
    vorteile: 'Höheres Selbstwertgefühl, bessere Beziehungen, effektivere Bewältigung von Herausforderungen und nachhaltige Stressreduktion.',
    zielgruppe: 'Personen, die ihr volles Potenzial entfalten, ihre Lebensqualität steigern und ihre persönlichen Fähigkeiten ausbauen möchten.',
    dauer: 'Individuell anpassbar, meist 8–12 Sitzungen über 4–6 Monate.',
  },
  {
    label: 'Stress & Resilienz',
    title: 'Stressmanagement & Resilienz-Coaching',
    description: 'Erlernen von Techniken zur Stressbewältigung, Burnout-Prävention und Stärkung der inneren Widerstandsfähigkeit, um gelassener durch den Alltag zu gehen.',
    vorteile: 'Nachhaltige Stressreduktion, verbesserte mentale Gesundheit, erhöhte Belastbarkeit in Krisenzeiten und mehr innere Ruhe.',
    zielgruppe: 'Personen mit hohem Stresslevel, Burnout-Gefährdete, alle, die ihre Resilienz stärken und ihre mentale Stärke verbessern möchten.',
    dauer: '6–10 Sitzungen, flexibel planbar nach Ihren Bedürfnissen.',
  },
  {
    label: 'Balance & Lebensqualität',
    title: 'Work-Life-Balance-Coaching',
    description: 'Unterstützung bei der Schaffung eines harmonischen Gleichgewichts zwischen Berufs- und Privatleben, um Überforderung zu vermeiden und Zufriedenheit zu steigern.',
    vorteile: 'Mehr Zufriedenheit, weniger Überforderung, mehr Zeit für persönliche Interessen und Familie sowie eine verbesserte Lebensqualität.',
    zielgruppe: 'Berufstätige, Eltern, Selbstständige, die sich überfordert fühlen oder ein besseres Gleichgewicht suchen.',
    dauer: '4–8 Sitzungen, Fokus auf praktische Umsetzbarkeit und individuelle Lösungen.',
  },
  {
    label: 'Kommunikation & Konflikt',
    title: 'Effektive Kommunikation & Konfliktlösung',
    description: 'Verbesserung der verbalen und nonverbalen Kommunikation, Erlernen von Konfliktlösungsstrategien für private und berufliche Situationen.',
    vorteile: 'Klarere Ausdrucksweise, bessere Beziehungen, souveräner Umgang mit Konflikten und gesteigerte soziale Kompetenz.',
    zielgruppe: 'Personen, die ihre Kommunikationsfähigkeiten verbessern, Missverständnisse reduzieren und ihre Beziehungen stärken möchten.',
    dauer: 'Workshop-Format (1–2 Tage) oder individuelle Sitzungen (4–6).',
  },
  {
    label: 'Ziele & Motivation',
    title: 'Zielerreichung & Motivations-Coaching',
    description: 'Hilfe bei der Definition klarer Ziele, Entwicklung von Strategien zur Umsetzung und einer Stärkung der Motivation, um Ihre Träume zu verwirklichen.',
    vorteile: 'Erreichen persönlicher und beruflicher Ziele, Überwindung von Prokrastination, nachhaltige Motivation und ein klarer Fahrplan zum Erfolg.',
    zielgruppe: 'Personen, die Schwierigkeiten haben, ihre Ziele zu definieren oder umzusetzen und die ihre Motivation steigern möchten.',
    dauer: 'Kurzfristige Begleitung (3–5 Sitzungen) oder längerfristig je nach Zielsetzung.',
  },
];

const WEITERE = [
  { title: 'Mentalcoaching', desc: 'Stärkung mentaler Ressourcen, Entwicklung von Selbstvertrauen und innerer Stärke. Für Menschen, die ihre geistige Leistungsfähigkeit steigern und Blockaden überwinden möchten.' },
  { title: 'Resilienzcoaching', desc: 'Aufbau von Widerstandskraft und Stressbewältigung. Lernen Sie, mit Herausforderungen gelassener umzugehen und gestärkt aus schwierigen Situationen hervorzugehen.' },
  { title: 'Systemisches Coaching', desc: 'Ganzheitliche Betrachtung Ihrer Lebenssituation mit Fokus auf Zusammenhänge, Muster und Lösungen. Für nachhaltige Veränderungen in verschiedenen Lebensbereichen.' },
  { title: 'Persönlichkeitsentwicklung', desc: 'Entfaltung Ihrer Potenziale, Klärung von Werten und Zielen, Entwicklung authentischer Lebensgestaltung. Für Menschen, die sich persönlich weiterentwickeln möchten.' },
  { title: 'Berufliche Neuorientierung', desc: 'Begleitung bei beruflichen Veränderungen, Karriereplanung und Entscheidungsfindung. Für Menschen in Umbruchphasen oder auf der Suche nach neuen beruflichen Perspektiven.' },
  { title: 'Coaching-Grundlagen', desc: 'Einführung in Coaching-Methoden für den persönlichen Gebrauch oder als Vorbereitung auf eine Coaching-Ausbildung. Verstehen Sie die Grundprinzipien professioneller Begleitung.' },
];

const NUTZEN = [
  { title: 'Klarheit und Orientierung', desc: 'Gewinnen Sie Klarheit über Ihre Ziele, Werte und den nächsten Schritt in Ihrer Entwicklung' },
  { title: 'Gestärkte Ressourcen', desc: 'Aktivieren Sie Ihre inneren Stärken und entwickeln Sie neue Strategien für Herausforderungen' },
  { title: 'Vertraulicher Raum', desc: 'Profitieren Sie von einem geschützten Rahmen für offene Reflexion und persönliches Wachstum' },
  { title: 'Praxisnahe Methoden', desc: 'Erhalten Sie konkrete Werkzeuge und Techniken, die Sie direkt in Ihrem Alltag anwenden können' },
];

export default function LeistungenPrivatpersonen() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <Header />

      {/* Hero */}
      <section className="relative w-full bg-[#1A1A1A] pt-48 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://static.wixstatic.com/media/1c34b8_87a40368079140e5a72a4dbaa13d7fa4~mv2.png)',
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
            Leistungen für Privatpersonen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl md:text-7xl text-[#F7F5F2] leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Professionelle Begleitung für Ihre{' '}
            <span className="text-[#C9A96E] italic">persönliche Entwicklung.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-paragraph text-xl text-[#F7F5F2]/70 max-w-2xl font-light leading-relaxed"
          >
            Professionelle Begleitung für Ihre persönliche und berufliche Entwicklung –
            mit Klarheit, Stabilität und echter Unterstützung.
          </motion.p>
        </div>
      </section>

      {/* Hauptangebote */}
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
              Individuelle Begleitung
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">
              Unsere Coaching-Angebote
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
                    <p className="font-paragraph text-xs text-[#2D4A3E] uppercase tracking-widest mb-2">Ihre Vorteile</p>
                    <p className="font-paragraph text-sm text-[#1A1A1A]/70 leading-relaxed">{service.vorteile}</p>
                  </div>
                  <p className="font-paragraph text-sm text-[#1A1A1A]/60">
                    <span className="font-medium text-[#1A1A1A]/80">Für:</span> {service.zielgruppe}
                  </p>
                  <p className="font-paragraph text-sm text-[#1A1A1A]/60">
                    <span className="font-medium text-[#1A1A1A]/80">Dauer:</span> {service.dauer}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Weitere Bereiche */}
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
              Weitere Coaching-Bereiche
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

      {/* Wie wir arbeiten */}
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
              Ablauf
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">Wie wir arbeiten</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { step: '01', title: 'Erstgespräch', desc: 'In einem unverbindlichen Erstgespräch lernen wir uns kennen, klären Ihre Anliegen und besprechen mögliche Vorgehensweisen.' },
              { step: '02', title: 'Individuelle Begleitung', desc: 'Wir entwickeln gemeinsam einen auf Ihre Bedürfnisse zugeschnittenen Coaching-Prozess mit klaren Zielen und konkreten Schritten.' },
              { step: '03', title: 'Nachhaltige Entwicklung', desc: 'Durch regelmäßige Reflexion und praxisnahe Methoden erreichen Sie nachhaltige Veränderungen in Ihrem Leben.' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <div className="font-heading text-7xl text-[#2D4A3E]/10 leading-none mb-4">{item.step}</div>
                <h3 className="font-heading text-2xl text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="font-paragraph text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nutzen */}
      <section className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A]">Was Sie erwarten können</h2>
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
            <p className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-6">Jetzt starten</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#F7F5F2] mb-8 max-w-2xl mx-auto leading-tight">
              Bereit für Ihre Entwicklung?
            </h2>
            <p className="font-paragraph text-lg text-[#F7F5F2]/70 mb-12 max-w-xl mx-auto">
              Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, wie wir Sie
              bei Ihrer persönlichen Entwicklung unterstützen können.
            </p>
            <Link to="/kontakt">
              <button className="inline-flex items-center bg-[#C9A96E] text-[#1A1A1A] hover:bg-white px-10 py-5 text-base font-paragraph uppercase tracking-wider transition-all duration-300 group">
                Jetzt Kontakt aufnehmen
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
