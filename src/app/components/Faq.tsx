import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { COMPANY } from '../../config/company';

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white hover:border-gray-200 transition-colors duration-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-bold text-sm sm:text-base leading-snug transition-colors duration-150 ${isOpen ? 'text-brand' : 'text-gray-900'}`}>
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen ? 'bg-brand text-white' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-5 pt-0 border-t border-gray-50">
              <p className="text-gray-500 text-sm leading-relaxed pt-4">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  const faqs = [
    {
      q: `What is ${COMPANY.name}?`,
      a: `${COMPANY.name} is India's first Safety-First Smart Mobility Ecosystem — combining Ride Pooling, Parcel Pooling, and Trip Pooling on a single platform with the most comprehensive driver verification and women safety infrastructure in Indian carpooling. Unlike Uber or Ola, ${COMPANY.name} enables scheduled, community-driven ride sharing — not on-demand professional drivers.`,
    },
    {
      q: `How is ${COMPANY.name} different from Uber or Ola?`,
      a: `Fundamentally different model. Uber and Ola are on-demand platforms with professional drivers. ${COMPANY.name} is a scheduled carpooling marketplace — vehicle owners share their planned journeys at prices they set. Key differences: 10–15% commission vs 25–30%, 6-layer KYC vs DL-only checks, full Women Safety Ecosystem, and upcoming Parcel and Trip Pooling in a single platform. No well-funded competitor occupies this scheduled carpooling + safety intersection in India.`,
    },
    {
      q: 'How does the Women Safety Ecosystem work?',
      a: `${COMPANY.name}'s Women Safety Ecosystem is a full service layer, not a button. It includes: (1) Women-only rides with same-gender driver selection (Dec 2025 govt. mandate compliant), (2) One-tap SOS that alerts 5 trusted contacts + 24/7 safety team + nearest police within 2 minutes, (3) Automated route deviation detection — alerts if vehicle deviates 500m+ for 2+ minutes, (4) Live tracking links shareable via WhatsApp with no app required on the contact's end, and (5) Guardian Mode for real-time ride monitoring by trusted contacts.`,
    },
    {
      q: 'How are drivers verified?',
      a: `Every ${COMPANY.name} driver completes 6-layer verification: (1) Aadhaar identity (DigiLocker API), (2) Driving License validity, (3) Vehicle Registration Certificate (RC), (4) Active Insurance Policy, (5) PUC / Pollution compliance certificate, and (6) Selfie + Liveness biometric match. This is the most comprehensive driver verification framework in Indian carpooling — far beyond competitors who only check the driving license.`,
    },
    {
      q: `How much can I save with ${COMPANY.name}?`,
      a: `Riders typically save 40–60% vs traditional ride-hailing. A 15–30 km intra-city ride costing ₹250–400 on Uber/Ola typically costs ₹100–150 on ${COMPANY.name}. For an IT employee spending ₹5,000/month on commuting, that translates to savings of ₹2,000–3,000 per month — or ₹24,000–36,000 per year.`,
    },
    {
      q: 'What is Parcel Pooling?',
      a: "Parcel Pooling lets you send packages (up to 10 kg) using verified commuters already heading in the right direction — dramatically cheaper than traditional couriers. Drivers earn extra income from trunk space they'd otherwise waste. Parcel Pooling launches in Phase 2 of our roadmap.",
    },
    {
      q: 'What is Trip Pooling?',
      a: 'Trip Pooling connects people for inter-city and leisure travel — weekend getaways, pilgrimages, long-distance commutes like Hyderabad–Bangalore or Pune–Mumbai. Create or join a group trip and split fuel and toll costs. Planned for Phase 3.',
    },
    {
      q: 'How are payments handled?',
      a: `${COMPANY.name} uses an escrow model — funds are held until ride completion, then released to the driver after the platform commission (10–15%). Payment methods: UPI (0% MDR), Debit/Credit Cards, and ${COMPANY.name} Wallet. Drivers receive direct bank payouts with PAN-based TDS compliance.`,
    },
    {
      q: `When is ${COMPANY.name} launching?`,
      a: "Backend, database architecture, core ride-sharing workflows, and the women safety module are already built. We're finalising KYC integration, the Razorpay payment layer, and production deployment on AWS Mumbai. App Store and Play Store submissions follow once production is stable. Join our waitlist to be notified first.",
    },
    {
      q: 'Is the app available to download now?',
      a: `Not yet — ${COMPANY.name} is in active development and has not launched publicly on the App Store or Google Play. We're preparing for our initial metro-city launch. Join the waitlist to get early access when we go live, along with founding user benefits.`,
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">

          {/* Left sticky panel */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold text-brand uppercase tracking-widest mb-4">FAQ</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.08] mb-5">
                Questions?<br />
                <span className="text-brand">We've got answers.</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Everything you need to know about {COMPANY.name} — the platform, safety, verification, and our launch timeline.
              </p>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-dark transition-colors group"
              >
                Still have questions? Email us
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right: FAQ list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
