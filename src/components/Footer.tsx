import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground/70 py-16 border-t border-white/10">
      <div className="max-w-[100rem] mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Spalte 1: Brand */}
          <div>
            <p className="font-heading text-2xl text-primary-foreground mb-4">IUE Institut</p>
            <p className="font-paragraph text-sm leading-relaxed">
              Professionelle Begleitung für Menschen und Unternehmen durch systemisches Coaching,
              praxisnahe Beratung und strukturierte Förderung.
            </p>
          </div>

          {/* Spalte 2: Navigation */}
          <div>
            <p className="font-paragraph text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Navigation</p>
            <ul className="space-y-2 font-paragraph text-sm">
              <li><Link to="/" className="hover:text-primary-foreground transition-colors">Startseite</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-primary-foreground transition-colors">Über uns</Link></li>
              <li><Link to="/leistungen-unternehmen" className="hover:text-primary-foreground transition-colors">Leistungen Unternehmen</Link></li>
              <li><Link to="/leistungen-privatpersonen" className="hover:text-primary-foreground transition-colors">Leistungen Privatpersonen</Link></li>
            </ul>
          </div>

          {/* Spalte 3: Angebote */}
          <div>
            <p className="font-paragraph text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Angebote</p>
            <ul className="space-y-2 font-paragraph text-sm">
              <li><Link to="/coaching-ausbildungen" className="hover:text-primary-foreground transition-colors">Coaching Ausbildungen</Link></li>
              <li><Link to="/consulting" className="hover:text-primary-foreground transition-colors">Consulting</Link></li>
              <li><Link to="/foerdermoeglichkeiten" className="hover:text-primary-foreground transition-colors">Fördermöglichkeiten</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary-foreground transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div>
            <p className="font-paragraph text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Kontakt</p>
            <ul className="space-y-3 font-paragraph text-sm">
              <li>
                <a
                  href="mailto:info@iue-institut.de"
                  className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#C9A96E]" />
                  info@iue-institut.de
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-[#C9A96E]" />
                +49 (0) 123 456789
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0 text-[#C9A96E]" />
                Hamburg, Deutschland
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="font-paragraph text-xs">
            © 2026 IUE Institut für Unternehmensentwicklung. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 font-paragraph text-xs">
            <Link to="/impressum" className="hover:text-primary-foreground transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary-foreground transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
