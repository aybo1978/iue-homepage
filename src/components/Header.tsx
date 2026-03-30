import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Startseite', href: '/' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Leistungen Unternehmen', href: '/leistungen-unternehmen' },
  { label: 'Leistungen Privatpersonen', href: '/leistungen-privatpersonen' },
  { label: 'Coaching Ausbildungen', href: '/coaching-ausbildungen' },
  { label: 'Consulting', href: '/consulting' },
  { label: 'Fördermöglichkeiten', href: '/foerdermoeglichkeiten' },
  { label: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-primary/10 shadow-sm">
      <div className="max-w-[100rem] mx-auto px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-heading text-xl text-primary font-semibold tracking-tight">IUE</span>
          <span className="font-paragraph text-[9px] uppercase tracking-widest text-foreground/50 hidden lg:block">
            Institut für Unternehmensentwicklung
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="font-paragraph text-xs uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/kontakt"
            className="font-paragraph text-xs uppercase tracking-wider bg-primary text-primary-foreground px-5 py-3 hover:bg-primary/90 transition-colors duration-300 whitespace-nowrap"
          >
            Erstgesprächsanfragen
          </Link>
        </nav>
        <button
          aria-label="Menü öffnen"
          className="lg:hidden text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-primary/10 overflow-hidden"
          >
            <nav className="flex flex-col px-8 py-6 gap-6">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-paragraph text-base text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
