export interface CompanyContact {
  email: string;
  supportEmail: string;
  privacyEmail: string;
  legalEmail: string;
  disputesEmail: string;
  investorEmail: string;
  phone: string;
  address: string;
}

export interface CompanyFounder {
  name: string;
  title: string;
}

export interface CompanySocial {
  linkedin: string;
  github: string;
  instagram: string;
  twitter: string;
}

export interface CompanyLaunch {
  status: string;
}

export interface CompanyConfig {
  name: string;
  tagline: string;
  website: string;
  contact: CompanyContact;
  founder: CompanyFounder;
  social: CompanySocial;
  launch: CompanyLaunch;
  appStore: string;
  playStore: string;
  description: string;
  copyright: string;
}

export const COMPANY: CompanyConfig = {
  name: "Sanchari",
  tagline: "Safe Mobility Through Trust and Community",
  website: "https://sanchari.me",
  contact: {
    email: "contact@sanchari.me",
    supportEmail: "contact@sanchari.me",
    privacyEmail: "contact@sanchari.me",
    legalEmail: "contact@sanchari.me",
    disputesEmail: "contact@sanchari.me",
    investorEmail: "contact@sanchari.me",
    phone: "+91 9848377713",
    address: "Surampalem, Andhra Pradesh, India",
  },
  founder: {
    name: "M. Lakshmi Narayana",
    title: "Founder",
  },
  social: {
    linkedin: "https://linkedin.com/404",
    github: "https://github.com/404",
    instagram: "https://instagram.com/404",
    twitter: "https://twitter.com/404",
  },
  launch: {
    status: "Coming Soon",
  },
  appStore: "#",
  playStore: "#",
  description: "Sanchari is a pre-launch Smart Mobility Ecosystem built for India's 400M+ urban commuters — where every journey is safer, every seat is shared, and every rupee saved matters.",
  copyright: `© ${new Date().getFullYear()} Sanchari. All rights reserved.`,
};
