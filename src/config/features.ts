export interface FeatureItem {
  id: string;
  iconName: string;
  label?: string;
  title: string;
  desc: string;
  phase?: string;
  color?: string;
  bg?: string;
  border?: string;
  highlight?: string;
  tag?: string;
  href?: string;
}

export interface FeaturesConfig {
  modules: FeatureItem[];
  differentiators: FeatureItem[];
  safetyFeatures: FeatureItem[];
  values: FeatureItem[];
}

export const FEATURES: FeaturesConfig = {
  modules: [
    {
      id: 'ride-pooling',
      iconName: 'RidePoolingIcon',
      label: 'Phase 1 — Now',
      title: 'Ride Pooling',
      desc: 'Schedule rides with verified drivers heading your way. Split costs, save up to 60%, and build a trusted commuter network.',
      color: 'text-brand',
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      highlight: 'bg-brand',
      tag: 'Core Module',
      href: '/features/ride-pooling',
    },
    {
      id: 'parcel-pooling',
      iconName: 'ParcelPoolingIcon',
      label: 'Phase 2 — Coming',
      title: 'Parcel Pooling',
      desc: 'Send parcels via verified commuters already heading in the right direction — dramatically cheaper than couriers.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      highlight: 'bg-emerald-500',
      tag: 'Roadmap',
      href: '/features/parcel-pooling',
    },
    {
      id: 'trip-pooling',
      iconName: 'TripPoolingIcon',
      label: 'Phase 3 — Planned',
      title: 'Trip Pooling',
      desc: 'Plan inter-city journeys and group travel together. Split fuel, tolls, and create shared itineraries.',
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-100',
      highlight: 'bg-orange-500',
      tag: 'Roadmap',
      href: '/features/trip-pooling',
    },
  ],
  differentiators: [
    {
      id: 'diff-safety',
      iconName: 'SafetyShieldIcon',
      title: 'Women Safety Ecosystem',
      desc: 'SOS, route deviation detection, women-only rides, live tracking — as a service layer, not a feature.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
    {
      id: 'diff-kyc',
      iconName: 'DriverVerificationIcon',
      title: '6-Layer Driver KYC',
      desc: 'Aadhaar · DL · RC · Insurance · PUC · Liveness biometric — the deepest driver verification in Indian mobility.',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50',
    },
    {
      id: 'diff-vehicle',
      iconName: 'VehicleVerificationIcon',
      title: 'Vehicle Health System',
      desc: 'RC, Insurance, PUC — auto-verified via DigiLocker. Driving behaviour scoring visible to every rider, every trip.',
      color: 'text-teal-600',
      bg: 'bg-teal-50',
    },
    {
      id: 'diff-matching',
      iconName: 'SmartMatchingIcon',
      title: 'AI-Powered Matching',
      desc: 'Route similarity, schedule compatibility, safety score, and reliability — all weighted in real time for every match.',
      color: 'text-violet-600',
      bg: 'bg-violet-50',
    },
  ],
  safetyFeatures: [
    {
      id: 'safety-women-only',
      iconName: 'WomenOnlyIcon',
      title: 'Women-Only Rides',
      desc: 'Exclusively verified women drivers and riders. Regulatory mandate (Dec 2025) already built in.',
    },
    {
      id: 'safety-sos',
      iconName: 'SOSIcon',
      title: 'One-Tap SOS',
      desc: 'Instantly alerts 5 trusted contacts + Sanchari safety team + nearest police. Response within 2 minutes.',
    },
    {
      id: 'safety-deviation',
      iconName: 'RouteMonitoringIcon',
      title: 'Route Deviation Detection',
      desc: 'If the vehicle deviates >500m for >2 minutes, an automatic threat alert is triggered.',
    },
    {
      id: 'safety-tracking',
      iconName: 'LiveTrackingIcon',
      title: 'Live Tracking & Guardian Mode',
      desc: 'Shareable real-time link via WhatsApp — no app required for your trusted contacts.',
    },
    {
      id: 'safety-threat',
      iconName: 'EmergencySafetyIcon',
      title: 'Threat Alert System',
      desc: '24/7 monitoring of speed anomalies, unusual patterns, and automatic escalation protocols.',
    },
  ],
  values: [
    {
      id: 'val-safety',
      iconName: 'SafetyShieldIcon',
      title: 'Safety First',
      desc: 'Every decision we make starts with a safety lens. Verification, monitoring, and emergency response are not optional add-ons — they are the foundation.',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
    },
    {
      id: 'val-trust',
      iconName: 'CommunityHeartIcon',
      title: 'Community Trust',
      desc: 'We believe mobility works best when built on verified identities, transparent pricing, and mutual accountability within communities.',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
    {
      id: 'val-afford',
      iconName: 'AffordabilityIcon',
      title: 'Affordability',
      desc: 'Transportation should not be a luxury. Our model enables 40–60% savings for riders while giving drivers a meaningful income boost from journeys they were already taking.',
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      id: 'val-sustain',
      iconName: 'SustainabilityIcon',
      title: 'Sustainability',
      desc: 'Every pooled seat is one fewer vehicle on the road. Smarter seat utilisation reduces emissions and urban congestion without requiring behavioural change.',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
  ],
};
