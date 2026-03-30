export interface CoachingAusbildung {
  _id: string;
  trainingName: string;
  description: string;
  duration?: string;
  targetAudience?: string;
  imageUrl?: string;
  vorteile?: string[];
  inhalte?: string[];
}

export interface Foerdermoeglichkeit {
  _id: string;
  programName: string;
  shortDescription: string;
  programLogo?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consent: boolean;
}

export type SubmitStatus = 'idle' | 'success' | 'error';
