import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Eye, Target, Heart, Users, Star, CheckCircle, Lightbulb, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const WERTE = [
  {
    icon: Award,
    title: 'Kompetenz',
    text: 'Fundierte Ausbildung, kontinuierliche Weiterbildung und langjährige Praxiserfahrung in Coaching, Beratung und Organisationsentwicklung bilden die Basis unserer Arbeit.',
  },
  {
    icon: Target,
    title: 'Praxisnähe',
    text: 'Wir setzen auf Methoden, die sich bewährt haben. Keine Theorie ohne Umsetzbarkeit. Unsere Ansätze sind zuverlässig, verständlich und direkt anwendbar.',
  },
  {
    icon: Heart,
    title: 'Vertrauen',
    text: 'Entwicklung braucht einen geschützten Raum. Wir arbeiten vertraulich, wertschätzend und auf Augenhöhe – mit echtem Interesse an den Menschen und ihren Zielen.',
  },
  {
    icon: Lightbulb,
    title: 'Entwicklungsorientierung',
    text: 'Wir glauben an Potenziale. Unsere Arbeit ist darauf ausgerichtet, Ressourcen zu aktivieren, Perspektiven zu erweitern und nachhaltige Veränderungen zu ermöglichen.',
  },
  {
    icon: Users,
    title: 'Individualität',
    text: 'Jeder Mensch, jedes Team, jedes Unternehmen ist einzigartig. Unsere Lösungen sind maßgeschneidert und orientieren sich an den spezifischen Bedürfnissen unserer Kunden.',
  },
  {
    icon: Star,
    title: 'Qualität',
    text: 'Wir arbeiten nach hohen Standards. Von der ersten Kontaktaufnahme bis zur Nachbetreuung legen wir Wert auf Professionalität, Klarheit und messbare Ergebnisse.',
  },
];

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A]">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-40 pb-24 bg-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://static.wixstatic.com/media/1c34b8_dee0afc354b842ba94c901eaa1fc06c7~mv2.png"
            alt=""
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 to-[#1A1A1A]" />
        </div>
        <div className="relative z-10 max-w-[100rem] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '80px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-[#C9A96E] mb-8"
            aria-hidden="true"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-heading text-5xl md:text-7xl text-[#F7F5F2] leading-tight mb-6"
          >
            Über uns
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-paragraph text-xl text-[#F7F5F2]/70 max-w-2xl"
          >
            Kompetenz, Praxisnähe und echte Begleitung für nachhaltige Entwicklung
          </motion.p>
        </div>
      </section>

      {/* ── WER WIR SIND ─────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F7F5F2] py-32">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[#2D4A3E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
                Institut
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-8 leading-tight">
                Wer wir sind
              </h2>
              <div className="space-y-6 font-paragraph text-lg text-[#1A1A1A]/70 leading-relaxed">
                <p>
                  Das IUE Institut für Unternehmensentwicklung steht für professionelle Begleitung
                  auf Augenhöhe. Wir arbeiten mit Menschen und Organisationen, die sich
                  weiterentwickeln wollen – mit Klarheit, Struktur und echtem Interesse an
                  nachhaltigen Ergebnissen.
                </p>
                <p>
                  Unsere Arbeit basiert auf systemischen Ansätzen, praxiserprobten Methoden und
                  der Überzeugung, dass Entwicklung dann gelingt, wenn sie individuell,
                  lösungsorientiert und auf Vertrauen aufgebaut ist.
                </p>
                <p>
                  Wir begleiten Unternehmen, Führungskräfte und Privatpersonen in
                  Veränderungsprozessen, bieten fundierte Coaching-Ausbildungen an und unterstützen
                  bei der Nutzung staatlicher Fördermöglichkeiten.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="grid grid-cols-2 gap-6"
            >
              {/* Vision */}
              <div className="col-span-2 bg-[#2D4A3E] text-[#F7F5F2] p-8">
                <Eye className="w-8 h-8 text-[#C9A96E] mb-4" aria-hidden="true" />
                <h3 className="font-heading text-xl mb-3">Unsere Vision</h3>
                <p className="font-paragraph text-sm leading-relaxed text-[#F7F5F2]/80">
                  Menschen und Unternehmen zu befähigen, ihre Potenziale zu erkennen und nachhaltig
                  zu entfalten – durch professionelle Begleitung, die wirkt.
                </p>
              </div>
              {/* Mission */}
              <div className="col-span-2 bg-white border border-[#2D4A3E]/10 p-8">
                <Target className="w-8 h-8 text-[#2D4A3E] mb-4" aria-hidden="true" />
                <h3 className="font-heading text-xl mb-3">Unsere Mission</h3>
                <p className="font-paragraph text-sm leading-relaxed text-[#1A1A1A]/70">
                  Entwicklung greifbar machen durch systemisches Coaching, praxisnahe Beratung und
                  die Erschließung von Fördermöglichkeiten, die Veränderung ermöglichen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UNSERE WERTE ─────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-[#2D4A3E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
              Grundsätze
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-[#1A1A1A] mb-4">
              Unsere Werte
            </h2>
            <p className="font-paragraph text-lg text-[#1A1A1A]/60 max-w-xl mx-auto">
              Was uns antreibt und wie wir arbeiten
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {WERTE.map((wert, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-[#F7F5F2] p-8 border border-[#2D4A3E]/10 hover:border-[#2D4A3E]/30 transition-colors duration-500"
              >
                <wert.icon className="w-8 h-8 text-[#2D4A3E] mb-6 stroke-[1.5]" aria-hidden="true" />
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-3">{wert.title}</h3>
                <p className="font-paragraph text-[#1A1A1A]/70 leading-relaxed">{wert.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ARBEITSWEISE ─────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F7F5F2] py-32">
        <div className="max-w-[100rem] mx-auto px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <span className="text-[#2D4A3E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
              Methodik
            </span>
            <h2 className="font-heading text-4xl md:text-6xl text-[#1A1A1A] mb-4">
              Unsere Arbeitsweise
            </h2>
            <p className="font-paragraph text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
              Systemisch, lösungsorientiert und auf Ihre Bedürfnisse zugeschnitten
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-px bg-[#2D4A3E]/10">
            {/* Systemischer Ansatz */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-12 md:p-16"
            >
              <div className="w-12 h-12 bg-[#2D4A3E] flex items-center justify-center mb-8">
                <CheckCircle className="w-6 h-6 text-[#F7F5F2]" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl text-[#1A1A1A] mb-6">
                Systemischer Ansatz
              </h3>
              <div className="space-y-4 font-paragraph text-[#1A1A1A]/70 leading-relaxed">
                <p>
                  Wir betrachten Menschen und Organisationen als komplexe Systeme mit vielfältigen
                  Wechselwirkungen. Unsere systemische Perspektive ermöglicht es, Zusammenhänge zu
                  erkennen, Muster zu verstehen und nachhaltige Lösungen zu entwickeln.
                </p>
                <p>
                  Statt schneller Patentrezepte setzen wir auf tiefgreifendes Verständnis und
                  individuelle Strategien, die zu Ihrer Situation passen.
                </p>
              </div>
            </motion.div>

            {/* Lösungsorientierung */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#2D4A3E] text-[#F7F5F2] p-12 md:p-16"
            >
              <div className="w-12 h-12 bg-[#C9A96E] flex items-center justify-center mb-8">
                <Target className="w-6 h-6 text-[#1A1A1A]" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl mb-6">
                Lösungsorientierung
              </h3>
              <div className="space-y-4 font-paragraph text-[#F7F5F2]/80 leading-relaxed">
                <p>
                  Wir fokussieren uns auf Ressourcen, Potenziale und Ziele. Statt bei Problemen zu
                  verharren, entwickeln wir gemeinsam mit Ihnen konkrete Schritte in Richtung der
                  gewünschten Veränderung.
                </p>
                <p>
                  Unsere Methoden sind praxisorientiert und darauf ausgerichtet, messbare Ergebnisse
                  zu erzielen und eine nachhaltige Entwicklung zu ermöglichen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UNSER TEAM ───────────────────────────────────────────────────── */}
      <section className="w-full bg-white py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[#2D4A3E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
                Team
              </span>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-4 leading-tight">
                Unser Team
              </h2>
              <p className="font-paragraph text-lg text-[#1A1A1A]/60 mb-8">
                Erfahrene Coaches und Berater mit Leidenschaft für Entwicklung
              </p>
              <div className="space-y-5 font-paragraph text-lg text-[#1A1A1A]/70 leading-relaxed">
                <p>
                  Unser Team besteht aus zertifizierten Coaches, erfahrenen Beratern und
                  Organisationsentwicklern, die ihre Expertise in unterschiedlichen Branchen und
                  Kontexten erworben haben.
                </p>
                <p>
                  Wir bringen fundierte Ausbildungen in systemischem Coaching, Business Coaching,
                  Organisationsentwicklung und weiteren relevanten Bereichen mit. Unsere
                  kontinuierliche Weiterbildung und Supervision sichern die Qualität unserer Arbeit.
                </p>
                <p>
                  Was uns verbindet: Die Überzeugung, dass professionelle Begleitung Menschen und
                  Organisationen befähigt, ihre Potenziale zu entfalten und nachhaltige
                  Veränderungen zu gestalten.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/1c34b8_87a40368079140e5a72a4dbaa13d7fa4~mv2.png"
                  alt="Unser Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D4A3E]/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-4">
              Lernen Sie uns kennen
            </h2>
            <p className="font-paragraph text-lg text-[#1A1A1A]/60 mb-12 max-w-2xl mx-auto">
              Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, wie wir Sie bei
              Ihrer Entwicklung unterstützen können
            </p>
            <Link to="/kontakt">
              <button className="inline-flex items-center bg-[#2D4A3E] text-[#F7F5F2] hover:bg-[#2D4A3E]/90 px-10 py-5 text-lg transition-all duration-500 group">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-4 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
