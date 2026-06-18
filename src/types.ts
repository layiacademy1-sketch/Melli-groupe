export interface ServiceItem {
  title: string;
  items: string[];
  iconName: string; // The Lucide icon string
}

export interface RoadmapStep {
  step: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  category: 'sites' | 'logos' | 'flyers' | 'social';
  title: string;
  subtitle: string;
  image?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  nom: string;
  prenom: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}
