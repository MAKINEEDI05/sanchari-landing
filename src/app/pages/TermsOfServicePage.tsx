import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, FileText } from 'lucide-react';
import { COMPANY } from '../../config/company';

export function TermsOfServicePage() {
  const sections = [
    {
      title: '1. User Responsibilities',
      content: [
        {
          sub: 'Eligibility',
          text: `You must be at least 18 years old to create a ${COMPANY.name} account. By registering, you confirm that all information you provide is accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials.`,
        },
        {
          sub: 'Prohibited Conduct',
          text: 'You agree not to: (a) impersonate any person or entity, (b) create false or misleading ride listings, (c) misuse the SOS or emergency alert system, (d) transport prohibited items, (e) engage in harassment, discrimination, or abuse of other users, (f) attempt to reverse-engineer, scrape, or disrupt the platform, or (g) use the platform for commercial transportation services without authorisation.',
        },
        {
          sub: 'Account Accuracy',
          text: 'You are responsible for keeping your profile, vehicle documents, and contact details up to date. Outdated or inaccurate KYC documents may result in account suspension until re-verification is complete.',
        },
      ],
    },
    {
      title: '2. Account Usage',
      content: [
        {
          sub: 'Account Creation',
          text: 'Accounts are personal and non-transferable. You may not share your account credentials or allow another person to use your account to offer or accept rides.',
        },
        {
          sub: 'OTP Authentication',
          text: `${COMPANY.name} uses mobile OTP for authentication. You are responsible for all activity conducted through your phone number. If you suspect your account has been compromised, contact ${COMPANY.emails.support} immediately.`,
        },
        {
          sub: 'One Account Per User',
          text: 'Each user may maintain one rider account. Drivers may hold one driver profile linked to a single vehicle at a time. Duplicate accounts may be merged or suspended.',
        },
      ],
    },
    {
      title: '3. Ride Sharing Guidelines',
      content: [
        {
          sub: 'Nature of Service',
          text: `${COMPANY.name} is a peer-to-peer ride-sharing marketplace. Drivers are private individuals sharing their personal vehicles and pre-planned journeys — not professional commercial drivers. ${COMPANY.name} is not a taxi or transportation company.`,
        },
        {
          sub: 'Driver Obligations',
          text: "Drivers must maintain valid and current Driving License, Vehicle RC, Insurance, and PUC certificates at all times. Drivers must not offer more seats than the vehicle's legal seating capacity. Rides must start and end at declared locations.",
        },
        {
          sub: 'Rider Obligations',
          text: "Riders must be at the pickup location at the agreed time. Riders must not bring prohibited items (see prohibited items policy in-app). Riders must treat drivers and co-passengers with respect.",
        },
        {
          sub: 'Cancellation Policy',
          text: 'Cancellations within 15 minutes of scheduled departure may incur a cancellation fee. Repeated no-shows may result in account restrictions. Emergency cancellations due to safety concerns are always fee-free.',
        },
      ],
    },
    {
      title: '4. Payments',
      content: [
        {
          sub: 'Pricing',
          text: `Ride fares are set by drivers within platform-defined ranges. ${COMPANY.name} charges a commission of 10–15% on completed rides. All prices are displayed before booking confirmation.`,
        },
        {
          sub: 'Escrow Model',
          text: `Payments are held in escrow by ${COMPANY.name} from the moment of booking and released to the driver upon successful ride completion confirmed by both parties. This protects both riders (against no-shows) and drivers (against payment disputes).`,
        },
        {
          sub: 'Refunds',
          text: `Refunds for cancelled rides are processed within 5–7 business days to the original payment method. Disputed refunds are reviewed by the ${COMPANY.name} support team within 48 hours.`,
        },
        {
          sub: 'Tax Compliance',
          text: `Driver earnings above applicable thresholds are subject to TDS (Tax Deducted at Source) per Indian Income Tax law. ${COMPANY.name} provides an annual Form 16A to eligible drivers. GST (if applicable) is included in the displayed fare.`,
        },
      ],
    },
    {
      title: '5. Liability Limitations',
      content: [
        {
          sub: 'Platform Role',
          text: `${COMPANY.name} is a technology platform connecting private vehicle owners with commuters. ${COMPANY.name} does not own or operate vehicles, employ drivers, or guarantee the outcome of any specific ride, parcel delivery, or trip.`,
        },
        {
          sub: 'Safety Incidents',
          text: `While ${COMPANY.name} implements comprehensive safety infrastructure (6-layer KYC, SOS, route monitoring), ${COMPANY.name} cannot guarantee the prevention of all incidents. In the event of a safety incident, ${COMPANY.name} will cooperate fully with users and law enforcement.`,
        },
        {
          sub: 'Service Availability',
          text: `${COMPANY.name} does not guarantee 100% platform availability. Scheduled maintenance and unforeseeable outages may temporarily interrupt service. We target 99.5% uptime post-launch.`,
        },
        {
          sub: 'Liability Cap',
          text: `To the maximum extent permitted by applicable law, ${COMPANY.name}'s total liability for any claim arising from use of the platform shall not exceed the amount paid by the user in the 3 months preceding the claim.`,
        },
      ],
    },
    {
      title: '6. Account Suspension',
      content: [
        {
          sub: 'Grounds for Suspension',
          text: `${COMPANY.name} may suspend or terminate accounts for: (a) KYC document expiry or fraud, (b) repeated safety violations or user complaints, (c) misuse of SOS system, (d) harassment or discriminatory behaviour, (e) fraudulent payment activity, or (f) any breach of these Terms.`,
        },
        {
          sub: 'Notice',
          text: `${COMPANY.name} will provide 48 hours notice before account suspension, except in cases of immediate safety risk or fraud, where suspension may be immediate.`,
        },
        {
          sub: 'Appeal',
          text: `Suspended users may appeal by contacting ${COMPANY.emails.support} within 30 days. Appeals are reviewed within 5 business days.`,
        },
      ],
    },
    {
      title: '7. Dispute Resolution',
      content: [
        {
          sub: 'In-App Resolution',
          text: 'Most disputes (fare disagreements, cancellation fees, parcel damage) are resolved via the in-app support centre within 48 hours. Both parties are encouraged to submit evidence (photos, chat screenshots, GPS data).',
        },
        {
          sub: 'Escalation',
          text: `Unresolved disputes may be escalated to ${COMPANY.name}'s Dispute Resolution Team by emailing ${COMPANY.emails.contact}. A resolution will be issued within 10 business days.`,
        },
        {
          sub: 'Governing Law',
          text: `These Terms are governed by the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.`,
        },
        {
          sub: 'Arbitration',
          text: 'Both parties agree to attempt good-faith resolution before initiating formal legal proceedings. Where required, arbitration shall be conducted per the Arbitration and Conciliation Act, 1996.',
        },
      ],
    },
    {
      title: '8. Contact Information',
      content: [
        {
          sub: 'General Support',
          text: `${COMPANY.emails.support} — response within 24 hours for standard queries, 15 minutes for active safety incidents.`,
        },
        {
          sub: 'Legal & Compliance',
          text: `${COMPANY.emails.contact} — for Terms of Service, privacy, and compliance enquiries.`,
        },
        {
          sub: 'Investor Relations',
          text: `${COMPANY.emails.investors} — for partnership, funding, and strategic enquiries.`,
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-gray-100/80 to-transparent rounded-full blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-gray-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest font-black">Legal</p>
                <p className="text-xs text-gray-400">Effective: June 2026 · Version 1.0</p>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-5">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              By using {COMPANY.name}, you agree to these terms. We've written them plainly — these are your rights and responsibilities as a {COMPANY.name} user.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Table of contents */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-12">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Contents</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {sections.map((s, i) => (
                <a key={i} href={`#section-${i}`} className="text-sm text-gray-500 hover:text-brand transition-colors py-0.5">
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((sec, i) => (
              <motion.div key={i} id={`section-${i}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.04 * i }}>
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

          <div className="mt-16 p-6 bg-gray-50 border border-gray-100 rounded-2xl">
            <p className="text-sm font-bold text-gray-700 mb-1">Questions about these terms?</p>
            <p className="text-sm text-gray-500">Email <a href={`mailto:${COMPANY.emails.contact}`} className="text-brand font-semibold hover:underline">{COMPANY.emails.contact}</a> or visit our <Link to="/privacy" className="text-brand font-semibold hover:underline">Privacy Policy</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
