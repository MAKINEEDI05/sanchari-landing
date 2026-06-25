import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Minus } from 'lucide-react';
import {
  DriverVerificationIcon,
  VehicleVerificationIcon,
  IdentityVerificationIcon,
  EmergencySafetyIcon,
  SecurePaymentIcon,
  CommunityTrustIcon,
  SmartSavingsIcon,
  SafetyShieldIcon,
  SmartMobilityIcon,
} from './icons/SanchariIcons';
import { COMPANY } from '../../config/company';

type CellVal = true | false | 'partial' | 'soon';

const groups = [
  {
    label: 'Core Platform',
    rows: [
      { feature: 'Ride Pooling', sub: 'Scheduled shared rides', sanchari: true, uber: false, rapido: false, quickride: true },
      { feature: 'Parcel Pooling', sub: 'Send parcels via commuters', sanchari: 'soon' as const, uber: false, rapido: false, quickride: false },
      { feature: 'Trip Pooling', sub: 'Inter-city group travel', sanchari: 'soon' as const, uber: false, rapido: false, quickride: false },
    ],
  },
  {
    label: 'Women Safety',
    rows: [
      { feature: 'Women Safety Ecosystem', sub: 'Full safety service layer', sanchari: true, uber: 'partial' as const, rapido: false, quickride: false },
      { feature: 'Women-Only Ride Options', sub: 'Verified same-gender only', sanchari: true, uber: false, rapido: false, quickride: false },
      { feature: 'Emergency SOS', sub: 'Contacts + authorities alert', sanchari: true, uber: true, rapido: false, quickride: false },
      { feature: 'Live Tracking', sub: 'Real-time GPS', sanchari: true, uber: true, rapido: 'partial' as const, quickride: 'partial' as const },
      { feature: 'Trusted Contacts', sub: 'Guardian mode', sanchari: true, uber: false, rapido: false, quickride: false },
      { feature: 'Route Deviation Alerts', sub: 'Auto-trigger on deviation', sanchari: true, uber: false, rapido: false, quickride: false },
      { feature: 'Safety Monitoring', sub: '24/7 behaviour analysis', sanchari: true, uber: false, rapido: false, quickride: false },
    ],
  },
  {
    label: 'Trust & Verification',
    rows: [
      { feature: 'Driver Verification', sub: '6-layer KYC framework', sanchari: true, uber: 'partial' as const, rapido: 'partial' as const, quickride: 'partial' as const },
      { feature: 'Vehicle Verification', sub: 'RC, Insurance, PUC', sanchari: true, uber: 'partial' as const, rapido: false, quickride: 'partial' as const },
      { feature: 'Community-Based Trust', sub: 'Safety scores + ratings', sanchari: true, uber: 'partial' as const, rapido: false, quickride: 'partial' as const },
      { feature: 'Smart Matching Engine', sub: 'Route + schedule AI', sanchari: true, uber: true, rapido: 'partial' as const, quickride: 'partial' as const },
    ],
  },
];

function Cell({ value, isMain }: { value: CellVal; isMain?: boolean }) {
  if (value === 'soon') {
    return (
      <div className="flex justify-center">
        <span className="text-[10px] font-bold text-gray-400 bg-gray-100 border border-gray-200 px-2.5 py-1 rounded-full whitespace-nowrap">
          Roadmap
        </span>
      </div>
    );
  }
  if (value === true) {
    return (
      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.18 }}
          transition={{ type: 'spring', stiffness: 400, damping: 14 }}
          className={`w-7 h-7 rounded-full flex items-center justify-center shadow-sm ${
            isMain
              ? 'bg-brand shadow-brand/30'
              : 'bg-emerald-500/15 border border-emerald-500/25'
          }`}
        >
          <Check className={`w-3.5 h-3.5 ${isMain ? 'text-white' : 'text-emerald-600'}`} strokeWidth={3} />
        </motion.div>
      </div>
    );
  }
  if (value === 'partial') {
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center">
          <Minus className="w-3.5 h-3.5 text-amber-500" strokeWidth={3} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-gray-300" strokeWidth={2.5} />
      </div>
    </div>
  );
}

const trustItems = [
  { icon: <DriverVerificationIcon />, title: 'Driver Verification', desc: '6-layer KYC — Aadhaar, DL, RC, Insurance, PUC, Liveness', color: 'text-brand', bg: 'bg-indigo-50' },
  { icon: <VehicleVerificationIcon />, title: 'Vehicle Verification', desc: 'RC, Insurance, PUC auto-verified via DigiLocker APIs', color: 'text-teal-600', bg: 'bg-teal-50' },
  { icon: <IdentityVerificationIcon />, title: 'Identity Verification', desc: 'Aadhaar-based eKYC — deepest identity check in Indian carpooling', color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { icon: <EmergencySafetyIcon />, title: 'Emergency Safety Systems', desc: 'SOS, guardian mode, route deviation detection, 24/7 monitoring', color: 'text-rose-600', bg: 'bg-rose-50' },
  { icon: <SecurePaymentIcon />, title: 'Secure Payments', desc: 'Razorpay escrow — funds held until ride completion, then released', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { icon: <CommunityTrustIcon />, title: 'Community Trust', desc: 'Safety scores for drivers, routes, and time-of-day patterns', color: 'text-violet-600', bg: 'bg-violet-50' },
];

const whyCards = [
  {
    icon: <SmartSavingsIcon />,
    title: 'Save More',
    desc: 'Share travel costs and reduce commuting expenses by 40–60% vs traditional ride-hailing.',
    stat: '40–60%',
    statLabel: 'avg. savings',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    highlight: 'from-amber-400 to-orange-400',
  },
  {
    icon: <SafetyShieldIcon />,
    title: 'Travel Safer',
    desc: 'Built with women safety and multi-layer verification at its core — not bolted on as an afterthought.',
    stat: '6-layer',
    statLabel: 'driver KYC',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    highlight: 'from-rose-400 to-pink-500',
  },
  {
    icon: <SmartMobilityIcon />,
    title: 'Move Smarter',
    desc: 'Improve vehicle utilisation and reduce empty-seat travel — fewer cars on the road, smarter cities.',
    stat: '400M+',
    statLabel: 'commuters served',
    color: 'text-brand',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    highlight: 'from-brand to-brand-cyan',
  },
];

export function ComparisonMatrix() {
  return (
    <section className="py-14 bg-gray-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-3xl mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand uppercase tracking-widest mb-4"
          >
            Why {COMPANY.name}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.06] mb-5"
          >
            The missing layer in mobility:<br />
            <span className="text-brand">Trust.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            Most mobility platforms focus on transportation. {COMPANY.name} combines ride pooling, parcel pooling, trip pooling, and safety infrastructure into a single ecosystem.
          </motion.p>
        </div>

        {/* ─── Comparison table ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm mb-5"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px]">
              <colgroup>
                <col style={{ width: '40%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
                <col style={{ width: '15%' }} />
              </colgroup>

              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-5 text-left" />

                  {/* Company — premium column */}
                  <th className="relative px-4 py-5 text-center bg-gradient-to-b from-brand/[0.07] to-brand/[0.02]">
                    <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-brand to-brand-cyan" />
                    <div className="flex flex-col items-center gap-1.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand to-brand-cyan flex items-center justify-center shadow-lg shadow-brand/30">
                        <span className="text-white font-black text-sm">{COMPANY.name[0]}</span>
                      </div>
                      <p className="font-black text-brand text-sm">{COMPANY.name}</p>
                    </div>
                  </th>

                  {['Uber / Ola', 'Rapido', 'QuickRide'].map((name) => (
                    <th key={name} className="px-4 py-5 text-center border-l border-gray-100">
                      <p className="font-semibold text-gray-400 text-sm pt-10">{name}</p>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {groups.map((group, gi) => (
                  <React.Fragment key={gi}>
                    {/* Group header row */}
                    <tr className="bg-gray-50/80">
                      <td colSpan={5} className="px-6 py-2.5">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.14em]">
                          {group.label}
                        </span>
                      </td>
                    </tr>

                    {/* Data rows */}
                    {group.rows.map((row, ri) => (
                      <tr
                        key={ri}
                        className="border-t border-gray-50 hover:bg-indigo-50/25 transition-colors duration-150"
                      >
                        <td className="px-6 py-3.5">
                          <p className="text-sm font-semibold text-gray-800 leading-tight">{row.feature}</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">{row.sub}</p>
                        </td>
                        <td className="px-4 py-3.5 text-center bg-gradient-to-b from-brand/[0.05] to-brand/[0.02] border-l border-brand/10">
                          <Cell value={row.sanchari as CellVal} isMain />
                        </td>
                        <td className="px-4 py-3.5 text-center border-l border-gray-100">
                          <Cell value={row.uber as CellVal} />
                        </td>
                        <td className="px-4 py-3.5 text-center border-l border-gray-100">
                          <Cell value={row.rapido as CellVal} />
                        </td>
                        <td className="px-4 py-3.5 text-center border-l border-gray-100">
                          <Cell value={row.quickride as CellVal} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-10 text-xs text-gray-400">
          {[
            { el: <div className="w-4 h-4 rounded-full bg-brand flex items-center justify-center"><Check className="w-2.5 h-2.5 text-white" strokeWidth={3} /></div>, label: `${COMPANY.name} feature` },
            { el: <div className="w-4 h-4 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center"><Check className="w-2.5 h-2.5 text-emerald-600" strokeWidth={3} /></div>, label: 'Available' },
            { el: <div className="w-4 h-4 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center"><Minus className="w-2.5 h-2.5 text-amber-500" strokeWidth={3} /></div>, label: 'Partial' },
            { el: <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center"><X className="w-2.5 h-2.5 text-gray-300" strokeWidth={2.5} /></div>, label: 'Not available' },
            { el: <span className="text-[10px] font-bold text-gray-400 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">Roadmap</span>, label: 'Planned for future release' },
          ].map(({ el, label }, i) => (
            <div key={i} className="flex items-center gap-1.5">{el} {label}</div>
          ))}
        </div>

        {/* ─── Trust Infrastructure ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-brand uppercase tracking-widest mb-3">Trust Infrastructure</p>
            <h3 className="text-3xl font-black text-gray-900 tracking-tight">
              {COMPANY.name} is built on a verified foundation.
            </h3>
            <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
              Not features bolted on after the fact. Infrastructure designed in from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trustItems.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-gray-200 transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-xl ${t.bg} ${t.color} flex items-center justify-center shrink-0`}>
                  {t.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{t.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Why It Matters ─── */}
        <div>
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-brand uppercase tracking-widest mb-3">Why It Matters</p>
            <h3 className="text-3xl font-black text-gray-900 tracking-tight">Built for every commuter.</h3>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {whyCards.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative bg-white border ${c.border} rounded-3xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${c.highlight} opacity-[0.08] rounded-bl-[3rem]`} />
                <div className={`w-12 h-12 rounded-2xl ${c.bg} ${c.color} flex items-center justify-center mb-5`}>
                  {c.icon}
                </div>
                <div className={`text-3xl font-black ${c.color} mb-0.5`}>{c.stat}</div>
                <div className="text-xs text-gray-400 font-medium mb-4">{c.statLabel}</div>
                <h4 className="font-black text-gray-900 mb-2 text-lg tracking-tight">{c.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
