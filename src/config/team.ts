export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  category: 'founder' | 'core' | 'advisor' | 'contributor';
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "M. Lakshmi Narayana",
    role: "Founder & CEO",
    bio: "Visionary behind Sanchari's safety-first mobility ecosystem. Driven to make daily commuting reliable, economical, and safe for all in India.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    category: 'founder',
  },
  {
    name: "Aparna Sen",
    role: "Head of Safety Operations",
    bio: "Former operations lead with over 8 years of experience designing real-time safety, dispatch, and escalation protocols for large-scale logistics networks.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    category: 'core',
  },
  {
    name: "Rahul Mehta",
    role: "Lead Systems Architect",
    bio: "Full stack engineer specializing in low-latency geospatial matching algorithms, high-throughput notification queues, and microservices.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    category: 'core',
  },
  {
    name: "Dr. Rajesh Kurup",
    role: "Strategic Advisor — Urban Planning",
    bio: "Professor of Infrastructure & Transport Systems. Advises Sanchari on traffic pattern optimization and B2B corporate network integration.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    category: 'advisor',
  },
  {
    name: "Sanjana Roy",
    role: "Community Safety Advisor",
    bio: "Advocate for safe public transit environments and gender-inclusive urban designs. Helps shape Sanchari's women safety programs.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
    category: 'advisor',
  },
  {
    name: "Vikram Malhotra",
    role: "Open Source Contributor",
    bio: "Contributed to geospatial routing optimizations and custom Leaflet integrations for Sanchari's live tracking layer.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
    category: 'contributor',
  }
];
