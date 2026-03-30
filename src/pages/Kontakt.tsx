import { useCallback, useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Target, CheckCircle, Award, AlertCircle } from 'lucide-react';
import type { CheckedState } from '@radix-ui/react-checkbox';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ContactFormData, SubmitStatus } from '../types';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const INITIAL_FORM: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  consent: false,
};

export default function Kontakt() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleConsentChange = useCallback((checked: CheckedState) => {
    if (typeof checked === 'boolean') {
      setFormData((prev) => ({ ...prev, consent: checked }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot: wenn Bot dieses Feld ausgefüllt hat → ignorieren
    if (honeypot) return;
    if (!formData.consent) {
      setFormError('Bitte bestätigen Sie die Datenschutzerklärung.');
      return;
    }
    setFormError(null);
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const body = new URLSearchParams({
        'form-name': 'kontakt',
        'bot-field': honeypot,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        subject: formData.subject,
        message: formData.message,
        consent: formData.consent ? 'ja' : 'nein',
      });
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error('Netlify form error');
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

  return (
    <div className="min-h-screen bg-[#F7F5F2] text-[#1A1A1A] overflow-clip">
      <SEO
        title="Kontakt"
        description="Nehmen Sie Kontakt mit dem IUE Institut auf. Kostenloses Erstgespräch vereinbaren – wir freuen uns auf Ihre Anfrage zu Coaching, Beratung oder Ausbildung."
        keywords="Kontakt, Erstgespräch, Coaching anfragen, Beratung anfragen, IUE Institut Kontakt"
        url="/kontakt"
      />
      <Header />

      {/* Hero */}
      <section className="relative w-full bg-[#1A1A1A] pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D4A3E]/30 to-[#1A1A1A]" aria-hidden="true" />
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
            Kontakt
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-heading text-5xl md:text-7xl text-[#F7F5F2] leading-[1.1] tracking-tight mb-8 max-w-4xl"
          >
            Lassen Sie uns über Ihre{' '}
            <span className="text-[#C9A96E] italic">Ziele</span> sprechen.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-paragraph text-xl text-[#F7F5F2]/70 max-w-2xl font-light leading-relaxed"
          >
            Ob Unternehmensentwicklung, persönliches Coaching oder Fragen zu Fördermitteln –
            wir nehmen uns Zeit für Ihr Anliegen.
          </motion.p>
        </div>
      </section>

      {/* Contact section */}
      <section className="w-full bg-[#F7F5F2] py-32 border-t border-[#2D4A3E]/10">
        <div className="max-w-[100rem] mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:w-5/12"
            >
              <span className="font-paragraph text-sm text-[#2D4A3E] uppercase tracking-widest mb-6 block">
                Warum IUE
              </span>
              <h2 className="font-heading text-4xl text-[#1A1A1A] mb-8 leading-tight">
                Ihr Erstgespräch ist immer unverbindlich.
              </h2>
              <p className="font-paragraph text-lg text-[#1A1A1A]/70 mb-12 leading-relaxed">
                In einem ersten Kennenlerngespräch klären wir gemeinsam Ihre Situation und
                zeigen Ihnen, wie wir Sie optimal unterstützen können. Kein Druck, keine
                Verpflichtung – nur echtes Interesse.
              </p>
              <ul className="space-y-6 font-paragraph text-[#1A1A1A]/80 mb-12">
                <li className="flex items-center gap-4">
                  <Target className="w-5 h-5 text-[#2D4A3E] shrink-0" aria-hidden="true" />
                  Individuelle Bedarfsanalyse
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="w-5 h-5 text-[#2D4A3E] shrink-0" aria-hidden="true" />
                  Unverbindliches Erstgespräch
                </li>
                <li className="flex items-center gap-4">
                  <Award className="w-5 h-5 text-[#2D4A3E] shrink-0" aria-hidden="true" />
                  Absolute Diskretion
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#2D4A3E] shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:info@iue-institut.de"
                    className="text-[#2D4A3E] hover:text-[#1A1A1A] transition-colors duration-300 font-medium"
                  >
                    info@iue-institut.de
                  </a>
                </li>
              </ul>

              <div className="border-t border-[#2D4A3E]/10 pt-10">
                <p className="font-paragraph text-sm text-[#1A1A1A]/50 uppercase tracking-widest mb-3">
                  Antwortzeit
                </p>
                <p className="font-paragraph text-[#1A1A1A]/70">
                  Wir melden uns innerhalb von <strong className="text-[#1A1A1A]">24 Stunden</strong>{' '}
                  bei Ihnen.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-7/12 bg-white p-8 md:p-12 border border-[#2D4A3E]/10 shadow-sm"
            >
              <h3 className="font-heading text-2xl text-[#1A1A1A] mb-8">Nachricht senden</h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
                noValidate
                name="kontakt"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                {/* Pflichtfelder für Netlify */}
                <input type="hidden" name="form-name" value="kontakt" />
                {/* Honeypot – für Menschen unsichtbar, Bots füllen es aus */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label>
                    Dieses Feld nicht ausfüllen:
                    <input
                      name="bot-field"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </label>
                </div>
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
                    rows={6}
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
