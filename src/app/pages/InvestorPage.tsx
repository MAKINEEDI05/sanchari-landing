import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft, ArrowRight,
  DollarSign, Building2, Mail, User, CheckCircle2,
  Briefcase, ChevronDown, BarChart3
} from 'lucide-react';
import {
  TrendingUpIcon,
  SustainabilityIcon,
  UserGroupIcon,
  SafetyShieldIcon,
  SmartSavingsIcon,
  BlueOceanIcon,
  AssetLightIcon,
  UnitEconomicsIcon,
} from '../components/icons/SanchariIcons';
import { BuildStatus } from '../components/BuildStatus';
import { COMPANY } from '../../config/company';
import { STATS } from '../../config/stats';
import { Container } from '../components/layout/Container';

const iconMap: Record<string, React.ReactNode> = {
  SustainabilityIcon: <div className="w-6 h-6"><SustainabilityIcon /></div>,
  TrendingUpIcon: <div className="w-6 h-6"><TrendingUpIcon /></div>,
  UserGroupIcon: <div className="w-6 h-6"><UserGroupIcon /></div>,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  SafetyShieldIcon: <div className="w-6 h-6"><SafetyShieldIcon /></div>,
  DollarSign: <DollarSign className="w-5 h-5" />,
};

/* ── Investor form ── */
const investorRanges = [
  'Angel (₹5–25L)',
  'Pre-Seed (₹25L–1Cr)',
  'Seed (₹1Cr–5Cr)',
  'Strategic / Corporate',
  'Just exploring',
];

function InvestorForm() {
  const [form, setForm] = useState({ name: '', org: '', email: '', range: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-200/60">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.96 }} onSubmit={submit} className="space-y-4">
            <div className="mb-6">
              <p className="text-gray-900 font-black text-xl mb-1">Request Investor Deck</p>
              <p className="text-gray-500 text-sm">We'll share our DPR v3.0 and financials within 24 hours.</p>
            </div>

            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input name="name" type="text" required value={form.name} onChange={handle}
                placeholder="Your full name"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all text-sm" />
            </div>

            {/* Organisation */}
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input name="org" type="text" required value={form.org} onChange={handle}
                placeholder="Fund / Organisation name"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all text-sm" />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input name="email" type="email" required value={form.email} onChange={handle}
                placeholder="you@fund.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all text-sm" />
            </div>

            {/* Investment range */}
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none z-10" />
              <select name="range" required value={form.range} onChange={handle}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-11 pr-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all text-sm appearance-none cursor-pointer">
                <option value="" disabled>Investment range</option>
                {investorRanges.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>

            {/* Message */}
            <textarea name="message" value={form.message} onChange={handle} rows={3}
              placeholder="Anything specific you'd like to know? (optional)"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 px-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 transition-all text-sm resize-none" />

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-900 font-black transition-all duration-150 shadow-lg shadow-amber-200 active:scale-[0.98] disabled:opacity-70">
              {loading
                ? <span className="w-5 h-5 border-2 border-gray-900/30 border-t-gray-900 rounded-full animate-spin" />
                : <><DollarSign className="w-4 h-4" /> Request Investor Deck <ArrowRight className="w-4 h-4" /></>}
            </button>

            <p className="text-gray-400 text-xs text-center">We respond within 24 hours. No spam.</p>
          </motion.form>
        ) : (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="py-10 text-center">
            <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-gray-900 font-black text-xl mb-2">Deck request received!</h3>
            <p className="text-gray-500 text-sm mb-1">Thank you, <span className="text-gray-900 font-semibold">{form.name}</span>.</p>
            <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
              We'll send our DPR v3.0 and financial model to <span className="text-amber-600 font-medium">{form.email}</span> within 24 hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Why invest ── */
const reasons = [
  {
    icon: <div className="w-6 h-6"><BlueOceanIcon /></div>,
    title: 'Blue Ocean Market',
    desc: 'Scheduled carpooling + women safety intersection in India has no well-funded incumbent. QuickRide ($9M raised) is the closest — lacking our safety depth and multi-modal vision.',
  },
  {
    icon: <div className="w-6 h-6"><SafetyShieldIcon /></div>,
    title: 'Regulatory Tailwind',
    desc: 'Dec 2025 MoRTH mandate requires same-gender driver options across all cab aggregators. Sanchari is already architected for this — competitors are scrambling to comply.',
  },
  {
    icon: <div className="w-6 h-6"><AssetLightIcon /></div>,
    title: 'Asset-Light Model',
    desc: 'Zero vehicle ownership. Marketplace model with infinite horizontal scaling. Revenue comes from 10–15% commission, premium subscriptions, and parcel/trip pooling (Phase 2–3).',
  },
  {
    icon: <div className="w-6 h-6"><UnitEconomicsIcon /></div>,
    title: 'Strong Unit Economics',
    desc: 'At 50K rides/month (Year 3 moderate scenario): ₹1.5Cr platform revenue, ₹5L EBITDA, moving to 44% EBITDA margin by Year 4 at 1.5L rides/month.',
  },
];

/* ── Revenue model ── */
const revenueStreams = [
  { label: 'Platform Commission', detail: '10–15% per completed ride', phase: 'Phase 1' },
  { label: 'Parcel Pooling Commission', detail: '12–18% per parcel delivery', phase: 'Phase 2' },
  { label: 'Sanchari Pro Subscription', detail: '₹99–299/month — lower commissions, priority matching', phase: 'Phase 2' },
  { label: 'Corporate Mobility Contracts', detail: 'B2B employee commute plans', phase: 'Phase 2' },
  { label: 'Featured Ride Listings', detail: 'Drivers pay for higher visibility', phase: 'Phase 2' },
  { label: 'Trip Pooling & Travel', detail: 'Group travel marketplace commission', phase: 'Phase 3' },
];

export function InvestorPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-amber-400/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-brand/6 rounded-full blur-[100px]" />
        </div>

        <Container className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-amber-600 text-sm font-bold mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Pre-Seed Round Open · ₹15–25 Lakhs
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.02] tracking-tight mb-6 text-gray-900">
                  Partner in India's<br />
                  <span className="text-amber-500">Mobility Future.</span>
                </h1>
                <p className="text-gray-500 text-xl leading-relaxed mb-10 max-w-lg">
                  {COMPANY.name} is building India's first Safety-First Smart Mobility Ecosystem — and we're looking for aligned investors who understand the opportunity.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { v: '$21–24B', l: 'Market (2026)' },
                    { v: '₹15–25L', l: 'Pre-Seed Ask' },
                    { v: '~50%', l: 'MVP Complete' },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col gap-0.5">
                      <span className="text-3xl font-black text-gray-900 tracking-tight">{s.v}</span>
                      <span className="text-xs text-gray-500 font-medium">{s.l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
                <InvestorForm />
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Market stats bar ── */}
      <section className="py-12 border-y border-gray-100 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATS.investor.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="text-center">
                <div className="text-amber-500 flex justify-center mb-2">{iconMap[s.iconName || ''] || null}</div>
                <div className="text-2xl font-black text-gray-900 mb-0.5">{s.value}</div>
                <div className="text-[10px] text-gray-500 leading-snug">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why invest ── */}
      <section className="py-14">
        <Container>
          <div className="mb-8">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">Investment thesis</p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.06] mb-4 text-gray-900">Why {COMPANY.name}. Why now.</h2>
            <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
              Four structural reasons this window is open and unlikely to stay open long.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:bg-amber-50/50 hover:border-amber-100 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4 border border-amber-100">{r.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MVP traction ── */}
      <BuildStatus variant="light" />

      {/* ── Revenue model ── */}
      <section className="py-14 border-t border-gray-100">
        <Container>
          <div className="mb-12">
            <p className="text-amber-600 text-sm font-bold uppercase tracking-widest mb-3">Revenue model</p>
            <h2 className="text-4xl font-black tracking-tight leading-tight mb-4 text-gray-900">Multiple revenue streams.</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-2xl">
              Phase 1 commissions fund operations. Phase 2–3 add high-margin revenue layers.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {revenueStreams.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex flex-col justify-between gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-5 hover:border-gray-200 hover:shadow-md transition-all">
                <div>
                  <p className="font-black text-gray-900 text-base mb-1">{s.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.detail}</p>
                </div>
                <span className={`self-start text-[10px] font-black px-2.5 py-1 rounded-full ${
                  s.phase === 'Phase 1' ? 'bg-indigo-50 text-indigo-600' :
                  s.phase === 'Phase 2' ? 'bg-emerald-50 text-emerald-600' :
                  'bg-orange-50 text-orange-600'
                }`}>{s.phase}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA band ── */}
      <section className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-5">
            Ready to look at the numbers?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Request the full DPR v3.0, financial model, and cap table using the form above.
          </p>
          <a href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-gray-900 font-black transition-colors shadow-lg shadow-amber-200">
            <DollarSign className="w-5 h-5" /> Request Investor Deck <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
