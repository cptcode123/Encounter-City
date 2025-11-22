// Type definitions for page data structures
import type { ComponentType } from 'react';

export interface HeroSection {
  title: string;
  subtitle: string;
  image: string;
}

export interface MemberPageData {
  hero: HeroSection;
  content: {
    title: string;
    description: string;
  };
  classes: Array<{
    title: string;
    description: string;
  }>;
}

export interface ContactPageData {
  hero: HeroSection;
  contactInfo: {
    title: string;
    address: {
      text: string;
      icon: string;
    };
    email: {
      text: string;
      href: string;
      icon: string;
    };
    phone: {
      text: string;
      href: string;
      icon: string;
    };
  };
  map: {
    src: string;
  };
}

export interface ServiceItem {
  title: string;
  subtitle?: string;
  description?: string;
  img: string;
  href: string;
}

export interface ServicesPageData {
  hero: HeroSection;
  sectionTitle: string;
  services: ServiceItem[];
}

export interface CoreValue {
  name: string;
  icon: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface AboutPageData {
  hero: HeroSection;
  mission: {
    title: string;
    description: string;
    icon: string;
  };
  vision: {
    title: string;
    description: string;
    icon: string;
  };
  ministry: {
    title: string;
    description: string;
    icon: string;
  };
  coreValues: {
    title: string;
    values: CoreValue[];
  };
  leadership: {
    title: string;
    leaders: Leader[];
  };
}

export interface BankDetails {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  validThru: string;
}

export interface GivePageData {
  hero: HeroSection;
  content: {
    heading: string;
    description: string;
  };
  bankDetails: BankDetails;
}

export interface BlogPageData {
  hero: HeroSection;
  content: {
    title: string;
  };
}

export interface ServicePageData {
  hero: HeroSection;
  content: {
    title: string;
    description: string;
  };
}

export interface HomePageData {
  hero: {
    slides: Array<{
      title: string;
      subtitle: string;
      image: string;
    }>;
  };
  aboutSection: {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonHref: string;
  };
  newsSection: {
    title: string;
  };
  communitySection: {
    title: string;
    description: string;
    backgroundImage: string;
    buttonText: string;
    buttonHref: string;
  };
  liveSection: {
    title: string;
    services: Array<{
      text: string;
      href: string;
    }>;
  };
}

// Type for React component (for iconMap)
export type IconComponent = ComponentType<{ className?: string; size?: number }>;

