// HPI 2.0 - Production-Ready Rebuild
import SEO from '../components/SEO';
import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  BookOpen,
  ChevronRight,
  AlertCircle,
  Mail,
} from 'lucide-react';
import type { CheckedState } from '@radix-ui/react-checkbox';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { dataService } from '../services/dataService';
import { useDataFetch } from '../hooks/useDataFetch';
import { SkeletonCard, SkeletonFundingCard } from '../components/ui/SkeletonCard';
import { ErrorState } from '../components/ui/ErrorState';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ContactFormData, SubmitStatus } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// Animation variants (outside component – stable references, no recreation)
// ─────────────────────────────────────────────────────────────────────────────
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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const SERVICES = [
  {
    icon: Target,
    title: 'Für Unternehmen',
    description:
      'Führungskräfteentwicklung, Business Coaching und Organisationsentwicklung mit messbarer Wirkung.',
    link: '/leistungen-unternehmen',
    image:
      'https://static.wixstatic.com/media/1c34b8_16904304a6574433b9c2a63ba6d16139~mv2.png',
  },
  {
    icon: Users,
    title: 'Für Privatpersonen',
    description:
      'Mentalcoaching, Resilienzcoaching und systemische Begleitung für persönliche Entwicklung.',
    link: '/leistungen-privatpersonen',
    image:
      'https://static.wixstatic.com/media/1c34b8_87a40368079140e5a72a4dbaa13d7fa4~mv2.png',
  },
  {
    icon: BookOpen,
    title: 'Ausbildungen',
    description:
      'Professionelle Ausbildungen zum Systemischen Coach, Business Coach und Mentalcoach.',
    link: '/coaching-ausbildungen',
    image:
      'https://static.wixstatic.com/media/1c34b8_7a5a5d3897954951ace8da0d30982a1c~mv2.png',
  },
  {
    icon: TrendingUp,
    title: 'Fördermittel',
    description:
      'Unterstützung bei BAFA, INQA Coaching und weiteren staatlichen Förderprogrammen.',
    link: '/foerdermoeglichkeiten',
    image:
      'https://static.wixstatic.com/media/1c34b8_89362e8e540d40999b551d7c4bf01927~mv2.png',
  },
];

const TRUST_ITEMS = [
  {
    icon: Award,
    title: 'Zertifizierte Qualität',
    desc: 'Fundierte Ausbildung und kontinuierliche Weiterentwicklung unseres Teams.',
  },
  {
    icon: CheckCircle,
    title: 'Systemische Klarheit',
    desc: 'Wir betrachten Organisationen ganzheitlich und lösen Blockaden an der Wurzel.',
  },
  {
    icon: Target,
    title: 'Umsetzungsstärke',
    desc: 'Von der Analyse bis zur messbaren Veränderung im Arbeitsalltag.',
  },
];

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
};

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function HomePage() {
  // ── Refs ──────────────────────────────────────────────────────────────────
  const heroRef = useRef<HTMLDivElement>(null);
  const philosophySectionRef = useRef<HTMLDivElement>(null);

  // ── Scroll-based parallax ─────────────────────────────────────────────────
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const { scrollYProgress: philosophyScroll } = useScroll({
    target: philosophySectionRef,
    offset: ['start end', 'end start'],
  });
  const philosophyY = useTransform(philosophyScroll, [0, 1], ['8%', '-8%']);

  // ── Data fetching (abort-safe via custom hook) ─────────────────────────────
  const trainingsFetch = useCallback((signal: AbortSignal) => dataService.getTrainings(signal, 3), []);
  const fundingFetch = useCallback((signal: AbortSignal) => dataService.getFunding(signal, 3), []);

  const { data: trainings, isLoading: isLoadingTrainings, error: trainingsError } = useDataFetch(trainingsFetch);
  const { data: funding, isLoading: isLoadingFunding, error: fundingError } = useDataFetch(fundingFetch);

  // ── Contact form ───────────────────────────────────────────────────────────
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (checked: CheckedState) => {
    if (typeof checked === 'boolean') {
      setFormData((prev) => ({ ...prev, consent: checked }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setFormError('Bitte bestätigen Sie die Datenschutzerklärung.');
      return;
    }
    setFormError(null);
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await dataService.submitContact(formData);
      setSubmitStatus('success');
      setFormData(INITIAL_FORM);
      setTimeout(() => setSubmitStatus('idle'), 6000);
    } catch (err) {
      console.error('Contact form error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <SEO
        title="Startseite"
        description="IUE Institut für Unternehmensentwicklung – Professionelles Coaching, Unternehmensberatung und Trainerausbildungen für Unternehmen und Privatpersonen. Systemisch, praxisnah, wirkungsvoll."
        keywords="Coaching, Unternehmensberatung, Trainerausbildung, Consulting, Unternehmensentwicklung, systemisches Coaching, Business Coaching, Führungskräfte Coaching"
        url="/"
      />
      <Header />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full h-screen min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1A1A1A]"
        aria-label="Hero"
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ y: heroY, opacity: heroOpacity }}
          aria-hidden="true"
        >
          <img
            src="https://static.wixstatic.com/media/1c34b8_dee0afc354b842ba94c901eaa1fc06c7~mv2.png"
            alt=""
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/80 via-[#1A1A1A]/50 to-[#F7F5F2]" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[100rem] mx-auto px-8 pt-32">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: '100px' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-px bg-[#C9A96E] mb-8"
              aria-hidden="true"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-paragraph text-sm md:text-base text-[#C9A96E] uppercase tracking-[0.25em] mb-5"
            >
              IUE – Institut für Unternehmensentwicklung
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#F7F5F2] leading-[1.1] tracking-tight mb-8"
            >
              Unternehmensentwicklung{' '}
              <br className="hidden md:block" />
              <span className="text-[#C9A96E] italic">mit Klarheit.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-paragraph text-xl md:text-2xl text-[#F7F5F2]/80 max-w-3xl mb-12 font-light leading-relaxed"
            >
              Professionelle Begleitung für Menschen und Unternehmen mit Anspruch – durch
              systemisches Coaching, praxisnahe Beratung und strukturierte Förderung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <Link to="/kontakt">
                <button className="inline-flex items-center bg-[#2D4A3E] text-[#F7F5F2] hover:bg-[#2D4A3E]/90 px-10 py-5 text-lg transition-all duration-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]">
                  Erstgespräch anfragen
                  <ArrowRight className="ml-4 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-500" />
                </button>
              </Link>
              <Link to="/leistungen-unternehmen">
                <button className="inline-flex items-center border border-[#F7F5F2]/30 text-[#F7F5F2] hover:bg-[#F7F5F2] hover:text-[#1A1A1A] px-10 py-5 text-lg transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]">
                  Leistungen entdecken
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. PHILOSOPHY ───────────────────────────────────────────────── */}
      <section
        ref={philosophySectionRef}
        className="relative w-full bg-[#F7F5F2] py-32 md:py-48 overflow-hidden"
        aria-label="Philosophie"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-[#2D4A3E]/20" aria-hidden="true" />
        <div className="max-w-[100rem] mx-auto px-8">
          {/* philosophyY applied to wrapper; content inside receives the movement */}
          <motion.div style={{ y: philosophyY }} className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="font-heading text-3xl md:text-5xl text-[#1A1A1A] leading-tight mb-10"
            >
              Wir glauben an Entwicklung, die nicht nur an der Oberfläche kratzt, sondern{' '}
              <span className="text-[#2D4A3E] italic">nachhaltige Strukturen</span> schafft.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="font-paragraph text-lg text-[#1A1A1A]/60 leading-relaxed"
            >
              Das IUE Institut für Unternehmensentwicklung steht für praxisnahe Entwicklung, echte
              Begleitung und moderne Coaching-Ansätze. Wir verbinden lösungsorientierte
              Unterstützung mit der strategischen Nutzung staatlicher Fördermittel, um
              Transformation für Sie greifbar und finanzierbar zu machen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 3. CORE SERVICES ────────────────────────────────────────────── */}
      <section
        id="leistungen"
        className="w-full bg-white py-32 border-t border-[#2D4A3E]/10"
        aria-label="Kernleistungen"
      >
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl"
            >
              <span className="text-[#2D4A3E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
                Expertise
              </span>
              <h2 className="font-heading text-4xl md:text-6xl text-[#1A1A1A]">
                Unsere Kernleistungen
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-paragraph text-lg text-[#1A1A1A]/60 max-w-md"
            >
              Maßgeschneiderte Formate für individuelle Herausforderungen und
              unternehmerisches Wachstum.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 gap-px bg-[#2D4A3E]/10"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="group relative bg-white p-12 md:p-16 overflow-hidden flex flex-col justify-between min-h-[400px]"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"
                  aria-hidden="true"
                >
                  <img src={service.image} alt="" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-10">
                  <service.icon className="h-10 w-10 text-[#2D4A3E] mb-8 stroke-[1.5]" aria-hidden="true" />
                  <h3 className="font-heading text-3xl text-[#1A1A1A] mb-4 group-hover:text-[#2D4A3E] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-paragraph text-lg text-[#1A1A1A]/70 leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
                <div className="relative z-10 mt-12">
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-[#2D4A3E] font-paragraph text-sm tracking-wider uppercase hover:text-[#1A1A1A] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E]"
                  >
                    Details entdecken <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. COACHING AUSBILDUNGEN ─────────────────────────────────────── */}
      <section
        id="ausbildungen"
        className="w-full bg-[#F7F5F2] py-32 overflow-hidden"
        aria-label="Coaching Ausbildungen"
      >
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-[#2D4A3E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
                Akademie
              </span>
              <h2 className="font-heading text-4xl md:text-6xl text-[#1A1A1A] mb-6">
                Coaching Ausbildungen
              </h2>
              <p className="font-paragraph text-lg text-[#1A1A1A]/60 max-w-2xl mx-auto">
                Fundierte Weiterbildung für Einsteiger, Fachkräfte und Unternehmen. Entwickeln Sie
                Ihre Kompetenzen auf höchstem Niveau.
              </p>
            </motion.div>
          </div>

          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {isLoadingTrainings ? (
                <motion.div
                  key="loading-trainings"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid md:grid-cols-3 gap-8"
                  aria-label="Inhalte werden geladen"
                >
                  {[0, 1, 2].map((i) => <SkeletonCard key={i} />)}
                </motion.div>
              ) : trainingsError ? (
                <motion.div key="error-trainings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <ErrorState message="Ausbildungen konnten nicht geladen werden." />
                </motion.div>
              ) : trainings && trainings.length > 0 ? (
                <motion.div
                  key="content-trainings"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid md:grid-cols-3 gap-8"
                >
                  {trainings.map((training) => (
                    <motion.article
                      key={training._id}
                      variants={fadeUp}
                      className="group flex flex-col bg-white border border-[#2D4A3E]/10 hover:border-[#2D4A3E]/30 transition-colors duration-500"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={training.imageUrl || 'https://static.wixstatic.com/media/1c34b8_e8b83f95233f4e4aa9a03086ff9eabe2~mv2.png'}
                          alt={training.trainingName}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                          loading="lazy"
                        />
                        {training.duration && (
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-paragraph tracking-wider uppercase text-[#1A1A1A]">
                            {training.duration}
                          </div>
                        )}
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        {training.targetAudience && (
                          <span className="text-[#2D4A3E] font-paragraph text-xs tracking-widest uppercase mb-3 block">
                            {training.targetAudience}
                          </span>
                        )}
                        <h3 className="font-heading text-2xl text-[#1A1A1A] mb-4">
                          {training.trainingName}
                        </h3>
                        <p className="font-paragraph text-[#1A1A1A]/70 mb-8 line-clamp-3 flex-grow">
                          {training.description}
                        </p>
                        <Link
                          to="/coaching-ausbildungen"
                          className="mt-auto w-full border border-[#2D4A3E]/20 hover:bg-[#2D4A3E] hover:text-[#F7F5F2] text-center py-3 font-paragraph text-sm uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E]"
                        >
                          Ausbildung ansehen
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <motion.div key="empty-trainings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
                  <p className="font-paragraph text-lg text-[#1A1A1A]/50">
                    Derzeit sind keine Ausbildungen verfügbar.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/coaching-ausbildungen"
              className="inline-flex items-center text-[#2D4A3E] hover:text-[#1A1A1A] font-paragraph text-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E]"
            >
              Gesamtes Akademie-Programm ansehen <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 5. FÖRDERMÖGLICHKEITEN ───────────────────────────────────────── */}
      <section
        id="foerderung"
        className="relative w-full bg-[#1A1A1A] text-[#F7F5F2] py-32 md:py-48"
        aria-label="Fördermöglichkeiten"
      >
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-5/12">
              <div className="sticky top-32">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="text-[#C9A96E] font-paragraph text-sm tracking-widest uppercase mb-4 block">
                    Finanzierung
                  </span>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                    Potenziale entfalten, <br />
                    <span className="text-[#2D4A3E]/80 italic">Förderung nutzen.</span>
                  </h2>
                  <p className="font-paragraph text-lg text-[#F7F5F2]/70 mb-8 leading-relaxed">
                    Viele Unternehmen lassen wertvolle staatliche Fördermittel ungenutzt. Wir
                    unterstützen Sie nicht nur inhaltlich, sondern begleiten Sie strukturiert bei
                    der Identifikation und Beantragung passender Programme wie BAFA oder INQA.
                  </p>
                  <Link to="/foerdermoeglichkeiten">
                    <button className="inline-flex items-center bg-[#C9A96E] text-[#1A1A1A] hover:bg-white px-8 py-5 transition-colors duration-300 font-paragraph text-sm uppercase tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]">
                      Beratung zur Förderung
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="lg:w-7/12">
              <div className="min-h-[400px]">
                <AnimatePresence mode="wait">
                  {isLoadingFunding ? (
                    <motion.div
                      key="loading-funding"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col gap-6"
                    >
                      {[0, 1, 2].map((i) => <SkeletonFundingCard key={i} />)}
                    </motion.div>
                  ) : fundingError ? (
                    <motion.div key="error-funding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <ErrorState message="Förderprogramme konnten nicht geladen werden." dark />
                    </motion.div>
                  ) : funding && funding.length > 0 ? (
                    <motion.div
                      key="content-funding"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col gap-6"
                    >
                      {funding.map((program) => (
                        <motion.article
                          key={program._id}
                          variants={fadeUp}
                          className="bg-white/5 border border-[#F7F5F2]/10 p-8 md:p-10 hover:bg-white/10 transition-colors duration-300"
                        >
                          <div className="flex flex-col md:flex-row gap-8 items-start">
                            {program.programLogo && (
                              <div className="w-24 h-24 shrink-0 bg-white p-3 flex items-center justify-center">
                                <img
                                  src={program.programLogo}
                                  alt={`${program.programName} Logo`}
                                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                                  loading="lazy"
                                />
                              </div>
                            )}
                            <div>
                              <h3 className="font-heading text-2xl text-[#F7F5F2] mb-3">
                                {program.programName}
                              </h3>
                              <p className="font-paragraph text-[#F7F5F2]/70 mb-6 leading-relaxed">
                                {program.shortDescription}
                              </p>
                              <Link
                                to="/foerdermoeglichkeiten"
                                className="inline-flex items-center text-[#C9A96E] hover:text-white font-paragraph text-sm tracking-wider uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A96E]"
                              >
                                Programm Details <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty-funding"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-20 border border-[#F7F5F2]/10"
                    >
                      <p className="font-paragraph text-lg text-[#F7F5F2]/50">
                        Informationen zu Förderprogrammen werden aktualisiert.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TRUST & QUALITY ──────────────────────────────────────────── */}
      <section className="w-full bg-white py-32" aria-label="Qualität">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="text-center mb-24">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-heading text-3xl md:text-5xl text-[#1A1A1A] mb-6"
            >
              Das Fundament unserer Arbeit
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '60px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-[#2D4A3E] mx-auto"
              aria-hidden="true"
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-x-12 gap-y-16"
          >
            {TRUST_ITEMS.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#F7F5F2] flex items-center justify-center mb-6 border border-[#2D4A3E]/10">
                  <item.icon className="h-6 w-6 text-[#2D4A3E]" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-xl text-[#1A1A1A] mb-4">{item.title}</h3>
                <p className="font-paragraph text-[#1A1A1A]/60">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 7. CONTACT FORM ─────────────────────────────────────────────── */}
      <section
        id="kontakt"
        className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10"
        aria-label="Kontakt"
      >
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:w-5/12"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-[#1A1A1A] mb-6">
                Lassen Sie uns über Ihre{' '}
                <span className="italic text-[#2D4A3E]">Ziele</span> sprechen.
              </h2>
              <p className="font-paragraph text-lg text-[#1A1A1A]/70 mb-12">
                Ob Unternehmensentwicklung, persönliches Coaching oder Fragen zu Fördermitteln –
                wir nehmen uns Zeit für Ihr Anliegen.
              </p>
              <ul className="space-y-6 font-paragraph text-[#1A1A1A]/80">
                <li className="flex items-center"><Target className="w-5 h-5 mr-4 text-[#2D4A3E]" aria-hidden="true" /> Individuelle Bedarfsanalyse</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-4 text-[#2D4A3E]" aria-hidden="true" /> Unverbindliches Erstgespräch</li>
                <li className="flex items-center"><Award className="w-5 h-5 mr-4 text-[#2D4A3E]" aria-hidden="true" /> Absolute Diskretion</li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-4 text-[#2D4A3E] shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@iue-institut.de"
                    className="text-[#2D4A3E] hover:text-[#1A1A1A] transition-colors duration-300 font-medium"
                  >
                    info@iue-institut.de
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-7/12 bg-white p-8 md:p-12 border border-[#2D4A3E]/10 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { id: 'name', label: 'Name', type: 'text', required: true },
                    { id: 'email', label: 'E-Mail', type: 'email', required: true },
                  ].map(({ id, label, type, required }) => (
                    <div key={id} className="space-y-2">
                      <LabelPrimitive.Root
                        htmlFor={id}
                        className="block font-paragraph text-sm text-[#1A1A1A] uppercase tracking-wider"
                      >
                        {label} {required && <span aria-hidden="true">*</span>}
                      </LabelPrimitive.Root>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required={required}
                        value={formData[id as keyof ContactFormData] as string}
                        onChange={handleInputChange}
                        className="w-full border border-[#2D4A3E]/20 bg-[#F7F5F2]/50 px-4 py-3 font-paragraph text-[#1A1A1A] focus:outline-none focus:border-[#2D4A3E] focus:ring-1 focus:ring-[#2D4A3E] transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { id: 'phone', label: 'Telefon', type: 'tel', required: false },
                    { id: 'subject', label: 'Anliegen', type: 'text', required: true },
                  ].map(({ id, label, type, required }) => (
                    <div key={id} className="space-y-2">
                      <LabelPrimitive.Root
                        htmlFor={id}
                        className="block font-paragraph text-sm text-[#1A1A1A] uppercase tracking-wider"
                      >
                        {label} {required && <span aria-hidden="true">*</span>}
                      </LabelPrimitive.Root>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        required={required}
                        value={formData[id as keyof ContactFormData] as string}
                        onChange={handleInputChange}
                        className="w-full border border-[#2D4A3E]/20 bg-[#F7F5F2]/50 px-4 py-3 font-paragraph text-[#1A1A1A] focus:outline-none focus:border-[#2D4A3E] focus:ring-1 focus:ring-[#2D4A3E] transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <LabelPrimitive.Root
                    htmlFor="message"
                    className="block font-paragraph text-sm text-[#1A1A1A] uppercase tracking-wider"
                  >
                    Nachricht <span aria-hidden="true">*</span>
                  </LabelPrimitive.Root>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full border border-[#2D4A3E]/20 bg-[#F7F5F2]/50 px-4 py-3 font-paragraph text-[#1A1A1A] resize-none focus:outline-none focus:border-[#2D4A3E] focus:ring-1 focus:ring-[#2D4A3E] transition-colors"
                  />
                </div>

                <div className="flex items-start gap-4 pt-2">
                  <CheckboxPrimitive.Root
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={handleConsentChange}
                    className="mt-1 w-5 h-5 border border-[#2D4A3E]/30 bg-[#F7F5F2] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E] data-[state=checked]:bg-[#2D4A3E] data-[state=checked]:border-[#2D4A3E] transition-colors"
                  >
                    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
                      <CheckCircle className="w-3 h-3" />
                    </CheckboxPrimitive.Indicator>
                  </CheckboxPrimitive.Root>
                  <LabelPrimitive.Root
                    htmlFor="consent"
                    className="font-paragraph text-sm text-[#1A1A1A]/70 leading-relaxed cursor-pointer"
                  >
                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <Link to="/datenschutz" className="text-[#2D4A3E] hover:underline">
                      Datenschutzerklärung
                    </Link>{' '}
                    zu. *
                  </LabelPrimitive.Root>
                </div>

                {/* Inline validation error */}
                {formError && (
                  <p role="alert" className="flex items-center gap-2 text-sm font-paragraph text-red-600">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {formError}
                  </p>
                )}

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      role="status"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-[#2D4A3E]/10 border border-[#2D4A3E]/30 text-[#2D4A3E] p-4 font-paragraph text-sm"
                    >
                      Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns
                      innerhalb von 24 Stunden bei Ihnen.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      role="alert"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-red-50 border border-red-200 text-red-600 p-4 font-paragraph text-sm"
                    >
                      Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder
                      schreiben Sie uns direkt an{' '}
                      <a href="mailto:info@iue-institut.de" className="underline hover:no-underline">
                        info@iue-institut.de
                      </a>.
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1A1A1A] text-[#F7F5F2] hover:bg-[#2D4A3E] py-5 text-lg font-paragraph uppercase tracking-wider transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D4A3E]"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet…' : 'Anfrage absenden'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
