import { Link } from 'react-router';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Circle, ArrowRight } from 'lucide-react';
import { COMPANY } from '../../config/company';
import { Container } from './layout/Container';

const milestones = [
  { label: 'Backend API (Node.js + Express)', status: 'done' },
  { label: 'Microservices Architecture (MongoDB + Redis)', status: 'done' },
  { label: 'Core Ride-Sharing Workflows', status: 'done' },
  { label: 'Women Safety Module (SOS, Alerts, Guardian Mode)', status: 'done' },
  { label: 'Mobile UI (React Native)', status: 'done' },
  { label: 'AI Matching Algorithm (Route + Schedule)', status: 'done' },
  { label: 'API Documentation & Specifications', status: 'done' },
  { label: 'KYC & Verification Integration (DigiLocker)', status: 'progress' },
  { label: 'Vehicle Health & Compliance Dashboard', status: 'progress' },
  { label: 'Razorpay / UPI Payment Integration', status: 'progress' },
  { label: 'Admin Dashboard', status: 'progress' },
  { label: 'Production Deployment (AWS Mumbai)', status: 'upcoming' },
  { label: 'Google Play Store Launch', status: 'upcoming' },
  { label: 'Apple App Store Launch', status: 'upcoming' },
];

interface BuildStatusProps {
  variant?: 'light' | 'dark';
}

export function BuildStatus({ variant = 'light' }: BuildStatusProps) {
  const isDark = variant === 'dark';
  const done = milestones.filter((m) => m.status === 'done').length;
  const pct = Math.round((done / milestones.length) * 100);

  return (
    <section className={isDark ? 'py-14 border-t border-white/5 bg-white/[0.02]' : 'py-16 bg-white'}>
      <Container>

        {/* Header */}
        <div className="max-w-2xl mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-sm font-bold uppercase tracking-widest mb-4 ${isDark ? 'text-amber-400' : 'text-brand'}`}
          >
            Build progress
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className={`text-4xl sm:text-5xl font-black tracking-tight leading-[1.08] mb-5 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            We're almost there.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
          >
            {COMPANY.name} is in active development. The backend, core workflows, and safety infrastructure are built. We're finalising KYC integration and production deployment.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">

          {/* Milestone list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 ${isDark ? 'bg-white/[0.04] border border-white/[0.08]' : 'bg-gray-50 border border-gray-100'}`}
          >
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-bold ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>MVP Progress</span>
                <span className={`text-2xl font-black ${isDark ? 'text-amber-400' : 'text-brand'}`}>{pct}%</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className={`h-full rounded-full ${isDark ? 'bg-gradient-to-r from-amber-500 to-amber-400' : 'bg-gradient-to-r from-brand to-brand-cyan'}`}
                />
              </div>
            </div>

            <div className="space-y-3">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3"
                >
                  {m.status === 'done'
                    ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    : m.status === 'progress'
                    ? <Clock className={`w-4 h-4 shrink-0 animate-pulse ${isDark ? 'text-amber-400' : 'text-brand'}`} />
                    : <Circle className={`w-4 h-4 shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-300'}`} />}
                  <span
                    className={`text-sm ${
                      m.status === 'done'
                        ? isDark ? 'text-gray-300 font-medium' : 'text-gray-700 font-medium'
                        : m.status === 'progress'
                        ? isDark ? 'text-amber-400 font-semibold' : 'text-brand font-semibold'
                        : isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}
                  >
                    {m.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className={`flex flex-wrap gap-4 mt-6 pt-5 border-t text-xs ${isDark ? 'border-white/10 text-gray-500' : 'border-gray-200 text-gray-400'}`}>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Complete</div>
              <div className="flex items-center gap-1.5">
                <Clock className={`w-3.5 h-3.5 ${isDark ? 'text-amber-400' : 'text-brand'}`} /> In Progress
              </div>
              <div className="flex items-center gap-1.5">
                <Circle className={`w-3.5 h-3.5 ${isDark ? 'text-gray-600' : 'text-gray-300'}`} /> Upcoming
              </div>
            </div>
          </motion.div>

          {/* Launch timeline */}
          <div>
            <p className={`text-[10px] font-black uppercase tracking-[0.15em] mb-8 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
              Launch timeline
            </p>

            <div className="relative">
              {/* Vertical line */}
              <div className={`absolute left-[19px] top-2 bottom-2 w-px ${isDark ? 'bg-white/10' : 'bg-gray-100'}`} />

              <div className="space-y-0">
                {[
                  {
                    quarter: 'Q2 2026',
                    label: 'MVP Launch',
                    detail: 'Ride pooling + women safety live for first users.',
                    state: 'active',
                  },
                  {
                    quarter: 'Q3 2026',
                    label: 'KYC & Payments Go-Live',
                    detail: 'DigiLocker integration, Razorpay escrow, UPI support.',
                    state: 'upcoming',
                  },
                  {
                    quarter: 'Q4 2026',
                    label: '5,000 Active Users',
                    detail: 'Growth marketing, referral programme, early Pro tier.',
                    state: 'upcoming',
                  },
                  {
                    quarter: 'Q1 2027',
                    label: 'Parcel Pooling Launch',
                    detail: 'Phase 2 — peer-to-peer parcel delivery goes live.',
                    state: 'upcoming',
                  },
                  {
                    quarter: 'Q2 2027',
                    label: '3-City Expansion',
                    detail: 'Bangalore + Pune added. Corporate mobility contracts.',
                    state: 'upcoming',
                  },
                  {
                    quarter: '2028',
                    label: 'Series A Readiness',
                    detail: 'Trip pooling, 8-city footprint, ₹68Cr+ annualised GTV.',
                    state: 'future',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex gap-5 pb-7 last:pb-0"
                  >
                    {/* Dot */}
                    <div className="relative z-10 shrink-0 mt-1">
                      {item.state === 'active' ? (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                          isDark
                            ? 'bg-gradient-to-br from-amber-500 to-amber-400 shadow-amber-900/40'
                            : 'bg-gradient-to-br from-brand to-[#6366F1] shadow-indigo-500/30'
                        }`}>
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        </div>
                      ) : item.state === 'upcoming' ? (
                        <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                          isDark ? 'border-white/20 bg-white/5' : 'border-gray-200 bg-white'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-white/30' : 'bg-gray-300'}`} />
                        </div>
                      ) : (
                        <div className={`w-10 h-10 rounded-full border border-dashed flex items-center justify-center ${
                          isDark ? 'border-white/10 bg-transparent' : 'border-gray-200 bg-transparent'
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-white/20' : 'bg-gray-200'}`} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-1.5 min-w-0">
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${
                        item.state === 'active'
                          ? isDark ? 'text-amber-400' : 'text-brand'
                          : isDark ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {item.quarter}
                      </p>
                      <h4 className={`font-black tracking-tight mb-1 leading-snug ${
                        item.state === 'active'
                          ? isDark ? 'text-white' : 'text-gray-900'
                          : item.state === 'upcoming'
                          ? isDark ? 'text-gray-300' : 'text-gray-700'
                          : isDark ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {item.label}
                      </h4>
                      <p className={`text-sm leading-relaxed ${
                        item.state === 'active'
                          ? isDark ? 'text-gray-400' : 'text-gray-500'
                          : isDark ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {item.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Funding callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
              className={`mt-8 rounded-2xl p-5 flex items-center justify-between gap-4 ${
                isDark
                  ? 'bg-amber-500/10 border border-amber-500/20'
                  : 'bg-indigo-50 border border-indigo-100'
              }`}
            >
              <div>
                <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isDark ? 'text-amber-500' : 'text-brand'}`}>
                  Pre-Seed Open
                </p>
                <p className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}>₹15–25 Lakhs</p>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>12–18 month runway · infrastructure only</p>
              </div>
              {isDark ? (
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-900 text-sm font-black transition-colors"
                >
                  Get deck <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  to="/investors"
                  className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-dark text-white text-sm font-black transition-colors"
                >
                  Get deck <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
