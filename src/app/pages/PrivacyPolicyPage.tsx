import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Shield } from 'lucide-react';
import { COMPANY } from '../../config/company';

export function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        {
          sub: 'Account Information',
          text: `When you register, we collect your full name, mobile number (verified via OTP), email address, and profile photo. Drivers additionally provide Aadhaar number, Driving License number, Vehicle Registration Certificate (RC), Insurance policy details, and PUC certificate — all verified via DigiLocker APIs.`,
        },
        {
          sub: 'Location Data',
          text: 'We collect real-time GPS coordinates during active rides and trips to enable matching, live tracking, and safety monitoring. Location access is requested only when the app is in use (foreground) or during an active ride (background, with your explicit consent).',
        },
        {
          sub: 'Payment Information',
          text: 'Payment transactions are processed by Razorpay (production) and Stripe (test). We do not store raw card numbers. We store transaction IDs, UPI references, payment status, and refund records for dispute resolution and TDS compliance.',
        },
        {
          sub: 'Usage Data',
          text: 'We collect device type, OS version, app version, interaction logs, crash reports, and feature usage patterns to improve platform stability and user experience.',
        },
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        {
          sub: 'Core Services',
          text: 'To match riders with drivers, process ride/parcel/trip bookings, calculate fares, enable in-app communication, and process payments.',
        },
        {
          sub: 'Safety & Verification',
          text: 'To verify driver identity and vehicle documents, detect route deviations, trigger SOS alerts, enable guardian mode, and maintain safety scoring for routes and users.',
        },
        {
          sub: 'Platform Improvement',
          text: 'To analyse usage patterns, identify bugs, improve matching algorithms, and personalise recommendations. Data is aggregated and anonymised wherever possible.',
        },
        {
          sub: 'Communications',
          text: 'To send booking confirmations, OTPs, safety alerts, waitlist updates, and product announcements. Marketing communications are opt-in only.',
        },
      ],
    },
    {
      title: '3. Data Security',
      content: [
        {
          sub: 'Encryption',
          text: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Sensitive documents (Aadhaar, DL, RC) are encrypted with an additional application-layer key.',
        },
        {
          sub: 'Access Controls',
          text: 'Access to personal data is role-based and restricted to personnel who need it to deliver the service. All access is logged and audited.',
        },
        {
          sub: 'Incident Response',
          text: 'In the event of a data breach, we will notify affected users within 72 hours of discovery, in compliance with the Digital Personal Data Protection (DPDP) Act 2023.',
        },
      ],
    },
    {
      title: '4. Third-Party Services',
      content: [
        {
          sub: 'DigiLocker',
          text: 'Used for Aadhaar-based eKYC and document verification (Driving License, RC, Insurance). Data is fetched with your explicit consent and not stored beyond verification.',
        },
        {
          sub: 'Mappls (MapmyIndia) & Google Maps',
          text: 'Used for route planning, live tracking, and navigation. Location data shared with these providers is governed by their respective privacy policies.',
        },
        {
          sub: 'Razorpay / Stripe',
          text: `Payment processing. ${COMPANY.name} does not handle raw payment credentials. All payment data is governed by the payment gateway's PCI DSS-compliant infrastructure.`,
        },
        {
          sub: 'Firebase / Twilio',
          text: 'Firebase is used for push notifications and authentication. Twilio / MSG91 is used for SMS-based OTP delivery. Neither service stores your messages.',
        },
        {
          sub: 'AWS',
          text: 'Cloud infrastructure (AWS Mumbai region) for hosting, storage, and CDN. Data residency is within India.',
        },
      ],
    },
    {
      title: '5. Cookies & Tracking',
      content: [
        {
          sub: 'Web Cookies',
          text: 'Our website uses essential cookies for session management and authentication. We use analytics cookies (Google Analytics) to understand traffic patterns. You can opt out of analytics cookies at any time.',
        },
        {
          sub: 'Mobile App',
          text: 'The mobile app does not use traditional browser cookies. We use anonymised device identifiers for analytics and crash reporting only.',
        },
      ],
    },
    {
      title: '6. Your Rights',
      content: [
        {
          sub: 'Access & Portability',
          text: `You may request a copy of all personal data we hold about you at any time via the in-app Data Centre or by emailing ${COMPANY.emails.contact}.`,
        },
        {
          sub: 'Correction',
          text: 'You can update your profile information, contact details, and vehicle documents directly in the app. KYC corrections require re-verification.',
        },
        {
          sub: 'Deletion',
          text: 'You may request account deletion at any time. We will delete your personal data within 30 days, subject to legal retention requirements (e.g., financial records are retained for 7 years per Indian tax law).',
        },
        {
          sub: 'Opt-Out',
          text: 'You may withdraw consent for marketing communications, location background access, or analytics tracking at any time through your app settings.',
        },
      ],
    },
    {
      title: '7. Contact Information',
      content: [
        {
          sub: 'Privacy Enquiries',
          text: `For any privacy-related questions, data requests, or to report a concern, contact us at ${COMPANY.emails.contact} or write to: ${COMPANY.name}, ${COMPANY.address}.`,
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-indigo-50/80 to-transparent rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand uppercase tracking-widest font-black">Legal</p>
                <p className="text-xs text-gray-400">Effective: June 2026 · Version 1.0</p>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-5">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              {COMPANY.name} is committed to protecting your personal data. This policy explains what we collect, how we use it, and your rights — clearly, without legalese.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((sec, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.05 * i }}>
                <h2 className="text-2xl font-black text-gray-900 mb-6 pb-3 border-b border-gray-100">{sec.title}</h2>
                <div className="space-y-5">
                  {sec.content.map((c, j) => (
                    <div key={j}>
                      <h3 className="font-bold text-gray-800 mb-1.5">{c.sub}</h3>
                      <p className="text-gray-500 leading-relaxed text-sm">{c.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-indigo-50 border border-indigo-100 rounded-2xl">
            <p className="text-sm font-bold text-brand mb-1">Questions about this policy?</p>
            <p className="text-sm text-gray-500">Email us at <a href={`mailto:${COMPANY.emails.contact}`} className="text-brand font-semibold hover:underline">{COMPANY.emails.contact}</a>. We respond within 5 business days.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
