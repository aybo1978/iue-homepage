import { useCallback, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Users, CheckCircle, ChevronDown, ListChecks } from 'lucide-react';
import { dataService } from '../services/dataService';
import { useDataFetch } from '../hooks/useDataFetch';
import { SkeletonCard } from '../components/ui/SkeletonCard';
import { ErrorState } from '../components/ui/ErrorState';
import Header from '../components/Header';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const WHY_ITEMS = [
  { icon: BookOpen, title: 'Praxisnahe Vermittlung', desc: 'Lernen durch praktische Übungen, Fallbeispiele und Supervision. Direkt anwendbar.' },
  { icon: Users, title: 'Erfahrene Ausbilder', desc: 'Zertifizierte Trainer mit langjähriger Praxis- und Lehrerfahrung.' },
  { icon: Clock, title: 'Flexible Formate', desc: 'Präsenz, online oder Hybrid – passend zu Ihrer Lebenssituation.' },
  { icon: CheckCircle, title: 'Anerkannte Zertifikate', desc: 'Kleine Gruppen, intensive Betreuung und anerkannte Abschlüsse.' },
];

export default function CoachingAusbildungen() {
  const trainingsFetch = useCallback((signal: AbortSignal) => dataService.getTrainings(signal, 99), []);
  const { data: trainings, isLoading, error } = useDataFetch(trainingsFetch);
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <SEO
        title="Coaching Ausbildungen"
        description="Zertifizierte Coaching- und Trainerausbildungen beim IUE Institut. Systemisches Coaching, Business Coach, NLP und mehr. Staatlich anerkannt, praxisnah und berufsbegleitend."
        keywords="Coaching Ausbildung, Trainerausbildung, systemisches Coaching, Business Coach Ausbildung, NLP, zertifizierte Ausbildung, berufsbegleitend"
        url="/coaching-ausbildungen"
      />
      <Header />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#1A1A1A] pt-48 pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'url(https://static.wixstatic.com/media/1c34b8_7a5a5d3897954951ace8da0d30982a1c~mv2.png)',
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
            IUE Akademie
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl md:text-7xl text-[#F7F5F2] leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Coaching{' '}
            <span className="text-[#C9A96E] italic">Ausbildungen</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-paragraph text-xl text-[#F7F5F2]/70 max-w-2xl font-light leading-relaxed"
          >
            Professionelle Weiterbildung für Einsteiger, Fachkräfte und Unternehmen – fundiert,
            praxisnah und zukunftsorientiert.
          </motion.p>
        </div>
      </section>

      {/* ── WARUM IUE ─────────────────────────────────────────────────── */}
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
              Warum IUE
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] max-w-2xl mx-auto">
              Ausbildung auf höchstem Niveau
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            {WHY_ITEMS.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white flex items-center justify-center mb-6 border border-[#2D4A3E]/10">
                  <item.icon className="h-6 w-6 text-[#2D4A3E]" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="font-paragraph text-sm text-[#1A1A1A]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AUSBILDUNGSPROGRAMME ──────────────────────────────────────── */}
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
              Programm
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-4">
              Unsere Ausbildungsprogramme
            </h2>
            <p className="font-paragraph text-lg text-[#1A1A1A]/60 max-w-2xl">
              Wählen Sie die Ausbildung, die zu Ihren Zielen passt
            </p>
          </motion.div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-3 gap-8"
                  aria-label="Inhalte werden geladen"
                >
                  {[0, 1, 2].map((i) => <SkeletonCard key={i} />)}
                </motion.div>
              ) : error ? (
                <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ErrorState message="Ausbildungen konnten nicht geladen werden." />
                </motion.div>
              ) : trainings && trainings.length > 0 ? (
                <motion.div
                  key="content"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-6"
                >
                  {trainings.map((training) => {
                    const isOpen = openId === training._id;
                    return (
                      <motion.article
                        key={training._id}
                        variants={fadeUp}
                        className="bg-[#F7F5F2] border border-[#2D4A3E]/10 hover:border-[#2D4A3E]/30 transition-colors duration-300 overflow-hidden"
                      >
                        {/* ── Karten-Header (immer sichtbar) ─── */}
                        <div className="grid md:grid-cols-[240px_1fr_auto] gap-0">
                          {/* Bild */}
                          <div className="relative h-48 md:h-auto overflow-hidden">
                            <img
                              src={training.imageUrl || 'https://static.wixstatic.com/media/1c34b8_e8b83f95233f4e4aa9a03086ff9eabe2~mv2.png'}
                              alt={training.trainingName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            {training.duration && (
                              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-paragraph tracking-wider uppercase text-[#1A1A1A]">
                                {training.duration}
                              </div>
                            )}
                          </div>

                          {/* Text */}
                          <div className="p-8 flex flex-col justify-center">
                            {training.targetAudience && (
                              <span className="text-[#2D4A3E] font-paragraph text-xs tracking-widest uppercase mb-2 block">
                                {training.targetAudience}
                              </span>
                            )}
                            <h3 className="font-heading text-2xl text-[#1A1A1A] mb-3">
                              {training.trainingName}
                            </h3>
                            <p className="font-paragraph text-[#1A1A1A]/70 leading-relaxed">
                              {training.description}
                            </p>
                          </div>

                          {/* Toggle-Button */}
                          <button
                            onClick={() => toggle(training._id)}
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Details schließen' : 'Details anzeigen'}
                            className="flex items-center justify-center px-8 border-l border-[#2D4A3E]/10 hover:bg-[#2D4A3E] hover:text-[#F7F5F2] text-[#2D4A3E] transition-all duration-300 min-w-[80px] group"
                          >
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-6 h-6" />
                            </motion.div>
                          </button>
                        </div>

                        {/* ── Ausgeklappte Details ────────────── */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-[#2D4A3E]/10 grid md:grid-cols-2 gap-0">
                                {/* Vorteile */}
                                {training.vorteile && training.vorteile.length > 0 && (
                                  <div className="p-8 border-r border-[#2D4A3E]/10">
                                    <div className="flex items-center gap-2 mb-5">
                                      <CheckCircle className="w-5 h-5 text-[#C9A96E]" aria-hidden="true" />
                                      <h4 className="font-paragraph text-xs text-[#2D4A3E] uppercase tracking-widest">
                                        Ihre Vorteile
                                      </h4>
                                    </div>
                                    <ul className="space-y-3">
                                      {training.vorteile.map((v, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] shrink-0 mt-2" />
                                          <span className="font-paragraph text-sm text-[#1A1A1A]/80 leading-relaxed">{v}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Inhalte */}
                                {training.inhalte && training.inhalte.length > 0 && (
                                  <div className="p-8">
                                    <div className="flex items-center gap-2 mb-5">
                                      <ListChecks className="w-5 h-5 text-[#C9A96E]" aria-hidden="true" />
                                      <h4 className="font-paragraph text-xs text-[#2D4A3E] uppercase tracking-widest">
                                        Inhalte
                                      </h4>
                                    </div>
                                    <ul className="space-y-3">
                                      {training.inhalte.map((inhalt, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                          <span className="font-paragraph text-xs text-[#2D4A3E] font-medium shrink-0 mt-0.5">
                                            {String(i + 1).padStart(2, '0')}
                                          </span>
                                          <span className="font-paragraph text-sm text-[#1A1A1A]/80 leading-relaxed">{inhalt}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              {/* CTA innerhalb der Karte */}
                              <div className="border-t border-[#2D4A3E]/10 p-6 flex justify-end">
                                <Link
                                  to="/kontakt"
                                  className="inline-flex items-center bg-[#2D4A3E] text-[#F7F5F2] hover:bg-[#2D4A3E]/80 px-8 py-3 font-paragraph text-sm uppercase tracking-wider transition-all duration-300 group"
                                >
                                  Ausbildung anfragen
                                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.article>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                  <p className="font-paragraph text-lg text-[#1A1A1A]/50">
                    Derzeit sind keine Ausbildungen verfügbar.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="w-full bg-[#2D4A3E] py-32">
        <div className="max-w-[100rem] mx-auto px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="font-paragraph text-sm text-[#C9A96E] uppercase tracking-widest mb-6">
              Beratung
            </p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#F7F5F2] mb-8 max-w-xl mx-auto leading-tight">
              Starten Sie Ihre Coaching-Karriere
            </h2>
            <p className="font-paragraph text-lg text-[#F7F5F2]/70 mb-12 max-w-xl mx-auto">
              Vereinbaren Sie ein unverbindliches Beratungsgespräch und erfahren Sie mehr
              über unsere Ausbildungsprogramme.
            </p>
            <Link to="/kontakt">
              <button className="inline-flex items-center bg-[#C9A96E] text-[#1A1A1A] hover:bg-white px-10 py-5 text-base font-paragraph uppercase tracking-wider transition-all duration-300 group">
                Jetzt informieren
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
