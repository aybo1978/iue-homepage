import type { CoachingAusbildung, Foerdermoeglichkeit, ContactFormData } from '../types';

// Mock data - replace with real API calls
const MOCK_TRAININGS: CoachingAusbildung[] = [
  {
    _id: '1',
    trainingName: 'Grundlagen des Coachings',
    description: 'Diese Ausbildung vermittelt die essenziellen Grundlagen und Kernkompetenzen des Coachings. Sie lernen, wie Sie wirkungsvolle Gespräche führen, Ziele definieren und Klienten auf ihrem Weg zur Selbstentwicklung unterstützen.',
    duration: '3 Tage Intensivkurs',
    targetAudience: 'Einsteiger ohne Vorkenntnisse, Führungskräfte, Personalentwickler',
    imageUrl: 'https://static.wixstatic.com/media/1c34b8_e8b83f95233f4e4aa9a03086ff9eabe2~mv2.png',
    vorteile: [
      'Verständnis der Coaching-Prinzipien',
      'Entwicklung grundlegender Gesprächsführungstechniken',
      'Fähigkeit zur Zieldefinition und -erreichung',
      'Steigerung der eigenen Kommunikationsfähigkeit',
    ],
    inhalte: [
      'Einführung ins Coaching',
      'Ethik und Haltung im Coaching',
      'Aktives Zuhören und Fragetechniken',
      'Zieldefinition und -klärung',
      'Grundlagen der Motivation',
      'Erste Coaching-Tools und -Methoden',
      'Praktische Übungen und Fallstudien',
    ],
  },
  {
    _id: '2',
    trainingName: 'Zertifizierte Systemische Coaching Ausbildung',
    description: 'Tauchen Sie ein in die Welt des systemischen Coachings. Diese Ausbildung vermittelt Ihnen tiefgreifende Methoden und Perspektiven, um komplexe Zusammenhänge in Systemen (Familie, Team, Organisation) zu verstehen und Klienten bei der Lösungsfindung zu unterstützen.',
    duration: '6 Module über 9 Monate',
    targetAudience: 'Erfahrene Coaches, Berater, Führungskräfte und Therapeuten',
    imageUrl: 'https://static.wixstatic.com/media/1c34b8_7a5a5d3897954951ace8da0d30982a1c~mv2.png',
    vorteile: [
      'Beherrschung systemischer Fragetechniken',
      'Fähigkeit zur Analyse komplexer Systemdynamiken',
      'Entwicklung von Interventionsstrategien für verschiedene Kontexte',
      'Zertifizierung als Systemischer Coach',
    ],
    inhalte: [
      'Einführung in die Systemtheorie',
      'Systemische Haltung und Ethik',
      'Genogramm- und Skulpturarbeit',
      'Zirkuläres Fragen und Reframing',
      'Arbeit mit Glaubenssätzen und Ressourcen',
      'Systemische Interventionen in Organisationen',
      'Supervision und Fallarbeit',
    ],
  },
  {
    _id: '3',
    trainingName: 'Business Coaching Professional',
    description: 'Diese Ausbildung fokussiert auf die spezifischen Herausforderungen und Ziele im Unternehmensumfeld. Sie lernen, Führungskräfte und Mitarbeiter bei der Entwicklung von Strategien, der Verbesserung der Performance und der Bewältigung von Veränderungen zu coachen.',
    duration: '4 Module über 6 Monate',
    targetAudience: 'Führungskräfte, HR-Manager, Unternehmensberater und Coaches',
    imageUrl: 'https://static.wixstatic.com/media/1c34b8_87a40368079140e5a72a4dbaa13d7fa4~mv2.png',
    vorteile: [
      'Spezialisierung auf Business-Coaching',
      'Entwicklung von Coaching-Strategien für Unternehmen',
      'Verbesserung der Führungskompetenzen',
      'Fähigkeit zur Begleitung von Change-Prozessen',
      'Netzwerkaufbau im Business-Coaching-Bereich',
    ],
    inhalte: [
      'Grundlagen des Business Coachings',
      'Coaching von Führungskräften',
      'Teamentwicklung und Konfliktmanagement',
      'Strategie- und Visionsentwicklung',
      'Performance Coaching',
      'Change Management im Coaching',
      'Marketing für Business Coaches',
    ],
  },
  {
    _id: '4',
    trainingName: 'Life Coaching Intensiv',
    description: 'Werden Sie ein kompetenter Life Coach und begleiten Sie Menschen dabei, ihre persönlichen Ziele zu erreichen, Hindernisse zu überwinden und ein erfüllteres Leben zu führen. Diese Ausbildung bietet praxisnahe Tools und Techniken.',
    duration: '5 Tage Intensivtraining',
    targetAudience: 'Angehende Life Coaches, Berater und Therapeuten',
    imageUrl: 'https://static.wixstatic.com/media/1c34b8_e8b83f95233f4e4aa9a03086ff9eabe2~mv2.png',
    vorteile: [
      'Beherrschung effektiver Life-Coaching-Methoden',
      'Fähigkeit zur Unterstützung bei persönlichen Krisen und Veränderungen',
      'Entwicklung von Empathie und Intuition',
      'Aufbau einer eigenen Coaching-Praxis',
    ],
    inhalte: [
      'Rolle und Aufgaben eines Life Coaches',
      'Werte- und Sinnfindung',
      'Zielsetzung und Motivation im persönlichen Bereich',
      'Umgang mit Blockaden und Ängsten',
      'Resilienz und Selbstfürsorge',
      'Kommunikation und Beziehungsgestaltung',
      'Aufbau einer Life-Coaching-Praxis',
    ],
  },
  {
    _id: '5',
    trainingName: 'Team Coaching und Moderation',
    description: 'Lernen Sie, wie Sie Teams zu Höchstleistungen führen, Konflikte lösen und die Zusammenarbeit optimieren. Diese Ausbildung vermittelt Ihnen die notwendigen Kompetenzen für erfolgreiches Team Coaching und professionelle Moderation.',
    duration: '2 × 3 Tage',
    targetAudience: 'Führungskräfte, Projektleiter und HR-Verantwortliche',
    imageUrl: 'https://static.wixstatic.com/media/1c34b8_7a5a5d3897954951ace8da0d30982a1c~mv2.png',
    vorteile: [
      'Kompetenzen im Team Coaching und in der Moderation',
      'Fähigkeit zur Analyse von Teamdynamiken',
      'Entwicklung von Interventionsstrategien für Teams',
      'Verbesserung der eigenen Führungskompetenzen',
    ],
    inhalte: [
      'Grundlagen des Team Coachings',
      'Phasen der Teamentwicklung',
      'Konfliktmanagement im Team',
      'Moderationstechniken für Workshops und Meetings',
      'Rollen und Verantwortlichkeiten im Team',
      'Kommunikation und Feedbackkultur',
      'Fallbeispiele und praktische Übungen',
    ],
  },
  {
    _id: '6',
    trainingName: 'Zertifizierte NLP Practitioner Ausbildung',
    description: 'Die NLP Practitioner Ausbildung ist ein intensives Training, das Ihnen die grundlegenden Modelle und Techniken des Neuro-Linguistischen Programmierens vermittelt. Sie lernen, wie Sie Ihre Gedanken, Gefühle und Verhaltensweisen bewusst steuern können.',
    duration: '7 Tage Intensivkurs',
    targetAudience: 'Alle, die ihre Kommunikationsfähigkeiten verbessern möchten',
    imageUrl: 'https://static.wixstatic.com/media/1c34b8_87a40368079140e5a72a4dbaa13d7fa4~mv2.png',
    vorteile: [
      'Verbesserung der Kommunikations- und Überzeugungsfähigkeiten',
      'Effektive Zielerreichung',
      'Auflösung von Blockaden und Ängsten',
      'Steigerung des Selbstbewusstseins',
      'Zertifizierung als NLP Practitioner',
    ],
    inhalte: [
      'Grundlagen des NLP',
      'Rapport aufbauen',
      'Repräsentationssysteme',
      'Ankern und Submodalitäten',
      'Meta-Modell und Milton-Modell der Sprache',
      'Zielrahmen und Strategien',
      'Reframing und Time Line',
      'Praktische Anwendungen und Übungen',
    ],
  },
  {
    _id: '7',
    trainingName: 'Online Coaching Masterclass',
    description: 'Diese Masterclass bereitet Sie darauf vor, Coaching-Sitzungen und Programme professionell und effektiv online durchzuführen. Sie lernen die Besonderheiten des Online-Settings kennen und nutzen digitale Tools optimal.',
    duration: '4 Wochen Online-Kurs',
    targetAudience: 'Coaches, Berater und Trainer',
    imageUrl: 'https://static.wixstatic.com/media/1c34b8_e8b83f95233f4e4aa9a03086ff9eabe2~mv2.png',
    vorteile: [
      'Kompetenzen im Online Coaching',
      'Auswahl und Nutzung geeigneter digitaler Tools',
      'Entwicklung einer Online-Coaching-Strategie',
      'Erweiterung der Reichweite und Flexibilität',
      'Aufbau einer digitalen Coaching-Praxis',
    ],
    inhalte: [
      'Grundlagen des Online Coachings',
      'Auswahl von Plattformen und Tools',
      'Gestaltung von Online-Sitzungen',
      'Aufbau von Vertrauen im virtuellen Raum',
      'Marketing und Akquise für Online Coaches',
      'Rechtliche Aspekte und Datenschutz',
      'Praktische Übungen und Best Practices',
    ],
  },
];

const MOCK_FUNDING: Foerdermoeglichkeit[] = [
  {
    _id: '1',
    programName: 'Digital Jetzt',
    shortDescription: 'Förderung für Digitalisierungsprojekte in KMU – das Bundesministerium für Wirtschaft und Klimaschutz unterstützt Investitionen in digitale Technologien und die Qualifizierung der Mitarbeiter.',
    programLogo: undefined,
  },
  {
    _id: '2',
    programName: 'Zentrales Innovationsprogramm Mittelstand (ZIM)',
    shortDescription: 'Innovationsförderung für KMU und Forschungseinrichtungen – bundesweites, technologie- und branchenoffenes Förderprogramm für innovative Projekte.',
    programLogo: undefined,
  },
  {
    _id: '3',
    programName: 'Gründerzuschuss der Agentur für Arbeit',
    shortDescription: 'Finanzielle Unterstützung für Existenzgründer aus der Arbeitslosigkeit – sichert den Lebensunterhalt in der Startphase der Existenzgründung.',
    programLogo: undefined,
  },
  {
    _id: '4',
    programName: 'Bundesförderung für Energieeffizienz in der Wirtschaft (EEW)',
    shortDescription: 'Förderung von Energieeffizienzmaßnahmen in Unternehmen – unterstützt Investitionen zur Steigerung der Energieeffizienz und Senkung des Energieverbrauchs.',
    programLogo: undefined,
  },
];

export const dataService = {
  async getTrainings(signal?: AbortSignal, limit = 3): Promise<CoachingAusbildung[]> {
    // Simulate async fetch
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 600);
      signal?.addEventListener('abort', () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')); });
    });
    return MOCK_TRAININGS.slice(0, limit);
  },

  async getFunding(signal?: AbortSignal, limit = 3): Promise<Foerdermoeglichkeit[]> {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(resolve, 700);
      signal?.addEventListener('abort', () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')); });
    });
    return MOCK_FUNDING.slice(0, limit);
  },

  async submitContact(data: ContactFormData): Promise<void> {
    // TODO: Replace with real API call, e.g.:
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ ...data, to: 'consulting@hh.de' }),
    // });
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data.email.includes('@')) { reject(new Error('Invalid email')); return; }
        resolve(undefined);
      }, 1200);
    });
  },
};
