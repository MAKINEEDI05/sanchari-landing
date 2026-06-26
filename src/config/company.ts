/**
 * The three official public-facing email addresses. These are the only email
 * addresses that should appear anywhere on the site — import them from here
 * rather than hard-coding an address.
 *
 *  - support:   customer support, help, assistance
 *  - contact:   general / partnership / business / privacy / legal enquiries
 *  - investors: investment, fundraising, DPR requests, investor relations
 */
export interface CompanyEmails {
  support: string;
  contact: string;
  investors: string;
}

export interface CompanyFounder {
  name: string;
  title: string;
}

/**
 * Social profiles. Leave a value empty ("") when there is no official account —
 * empty links are never rendered, so the UI never shows a broken or placeholder
 * icon. Add a real URL here later and the icon appears automatically; no UI
 * changes are required.
 */
export interface CompanySocial {
  linkedin: string;
  x: string;
  instagram: string;
  facebook: string;
  youtube: string;
  github: string;
}

export interface CompanyLaunch {
  status: string;
}

export interface CompanyConfig {
  name: string;
  tagline: string;
  website: string;
  emails: CompanyEmails;
  phone: string;
  address: string;
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
  emails: {
    support: "support@sanchari.me",
    contact: "contact@sanchari.me",
    investors: "investors@sanchari.me",
  },
  phone: "+91 9848377713",
  address: "Surampalem, Andhra Pradesh, India",
  founder: {
    name: "M. Lakshmi Narayana",
    title: "Founder",
  },
  social: {
    linkedin: "",
    x: "",
    instagram: "",
    facebook: "",
    youtube: "",
    github: "",
  },
  launch: {
    status: "Coming Soon",
  },
  appStore: "#",
  playStore: "#",
  description: "Sanchari is a pre-launch Smart Mobility Ecosystem built for India's 400M+ urban commuters — where every journey is safer, every seat is shared, and every rupee saved matters.",
  copyright: `© ${new Date().getFullYear()} Sanchari. All rights reserved.`,
};
