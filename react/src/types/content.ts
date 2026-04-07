// SEO and Meta interfaces
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

// Common UI interfaces
export interface Technology {
  name: string;
  color?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  initials: string;
  image?: string;
}

export interface Metric {
  value: string;
  label: string;
}

// Homepage content interfaces
export interface HeroSection {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaButtons: {
    primary: { text: string; href: string; icon: string };
    secondary: { text: string; href: string };
  };
}

export interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
  borderColor?: string;
}

export interface ExpertiseSection {
  title: string;
  description: string;
  stats: { value: string; label: string }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  cards: ExpertiseCard[];
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
}

export interface PortfolioSection {
  title: string;
  subtitle: string;
  projects: ProjectCard[];
}

export interface CareerItem {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export interface CareerSection {
  title: string;
  items: CareerItem[];
}

export interface ToolkitSection {
  title: string;
  technologies: string[];
}

export interface ContactSection {
  title: string;
  subtitle: string;
  description: string;
  email: string;
  linkedinUrl: string;
}

export interface HomePage {
  hero: HeroSection;
  expertise: ExpertiseSection;
  career: CareerSection;
  toolkit: ToolkitSection;
  portfolio?: PortfolioSection; // Now optional since it's generated dynamically
  testimonials: Testimonial[];
  contact: ContactSection;
}

// Case Study interfaces
export interface Problem {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export interface ChallengeSection {
  title: string;
  description: string;
  additionalInfo?: string;
  problems: Problem[];
}

export interface SolutionFeature {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

export interface SolutionSection {
  title: string;
  subtitle: string;
  description: string;
  features: SolutionFeature[];
}

export interface CodeExample {
  title: string;
  description: string;
  code: string;
  language: string;
}

export interface TechnicalSection {
  title: string;
  description: string;
  codeExample: CodeExample;
  architectureImage: string;
}

export interface ResultsSection {
  metrics: Metric[];
  backgroundColor?: string;
}

export interface CaseStudyHero {
  title: string;
  subtitle: string;
  client: string;
  role: string;
  technologies: string[];
  image: string;
}

export interface NextProject {
  title: string;
  href: string;
}

export interface Project {
  name: string;
  url: string;
  category: string;
}

export interface CaseStudy {
  meta: SEOData;
  hero: CaseStudyHero;
  challenge: ChallengeSection;
  solution: SolutionSection;
  technicalDeepDive: TechnicalSection;
  results: ResultsSection;
  testimonials: Testimonial[];
  nextProject: NextProject;
  projects?: Project[];
  showInHomepage?: boolean;
}

// Global site data
export interface NavigationItem {
  label: string;
  href: string;
}

export interface SiteNavigation {
  logo: {
    text: string;
    icon: string;
  };
  items: NavigationItem[];
  cta: {
    text: string;
    href: string;
  };
}

export interface SiteFooter {
  logo: {
    text: string;
    icon: string;
  };
  copyright: string;
}

export interface GlobalSiteData {
  navigation: SiteNavigation;
  footer: SiteFooter;
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    siteUrl: string;
    defaultImage: string;
  };
}