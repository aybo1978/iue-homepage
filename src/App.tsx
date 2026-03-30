import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import UeberUns from './pages/UeberUns';
import LeistungenUnternehmen from './pages/LeistungenUnternehmen';
import LeistungenPrivatpersonen from './pages/LeistungenPrivatpersonen';
import CoachingAusbildungen from './pages/CoachingAusbildungen';
import Consulting from './pages/Consulting';
import Foerdermoeglichkeiten from './pages/Foerdermoeglichkeiten';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/leistungen-unternehmen" element={<LeistungenUnternehmen />} />
        <Route path="/leistungen-privatpersonen" element={<LeistungenPrivatpersonen />} />
        <Route path="/coaching-ausbildungen" element={<CoachingAusbildungen />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/foerdermoeglichkeiten" element={<Foerdermoeglichkeiten />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  );
}
