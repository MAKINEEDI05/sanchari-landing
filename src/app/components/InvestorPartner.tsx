import React from 'react';
import { Network, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import {
  TrendingUpIcon,
  SustainabilityIcon,
  SmartSavingsIcon,
  SafetyShieldIcon,
  UserGroupIcon,
} from './icons/SanchariIcons';

const metrics = [
  {
    icon: <SustainabilityIcon />,
    title: "$21–24B Market (2026)",
    desc: "India ride-hailing & mobility market, growing to $45–60B by 2030 at 11–20% CAGR",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <TrendingUpIcon />,
    title: "10–15% Commission",
    desc: "vs. Uber/Ola's 25–30% — a structural driver advantage that accelerates supply growth",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <SafetyShieldIcon />,
    title: "Regulatory Tailwind",
    desc: "Dec 2025 govt. mandate for same-gender driver options — Sanchari is already compliant",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Asset-Light Model",
    desc: "Marketplace platform with infinite horizontal scaling — zero vehicle ownership costs",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: <UserGroupIcon />,
    title: "Blue Ocean Positioning",
    desc: "Scheduled carpooling + women safety intersection has no well-funded incumbent in India",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: <SmartSavingsIcon />,
    title: "Pre-Seed Ask: ₹15–25L",
    desc: "12–18 month runway to 5,000 users across metro cities — validation ahead of seed round",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
];

const milestones = [
  { label: "Backend Development", done: true },
  { label: "Database Architecture (MongoDB + PostgreSQL)", done: true },
  { label: "API Docs & Specifications", done: true },
  { label: "System Architecture (Microservices)", done: true },
  { label: "Core Ride-Sharing Workflows", done: true },
  { label: "Mobile UI (React Native)", done: true },
  { label: "Women Safety Module (Design & Architecture)", done: true },
  { label: "KYC & Verification Integration", done: false },
  { label: "Production Deployment", done: false },
];

export function InvestorPartner() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-brand text-sm font-bold mb-6 uppercase tracking-wider border border-indigo-100">
            Partners & Investors
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Building India's Next Mobility Ecosystem
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are not just another ride-sharing app. We are building the foundational trust infrastructure for safe, sustainable, and smart urban mobility in India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Left: Why invest */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Sanchari?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.07 }}
                  className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-xl hover:shadow-brand/10 transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${metric.bg} ${metric.color} flex items-center justify-center mb-3`}>
                    {metric.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5">{metric.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{metric.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: MVP Progress & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Current Traction</h3>

            <div className="bg-white rounded-3xl border border-gray-100 p-6 mb-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">MVP Progress</div>
                  <div className="text-2xl font-black text-gray-900">Phase 1 — Almost Ready</div>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand to-brand-cyan flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-500/30">
                  78%
                </div>
              </div>

              <div className="space-y-3">
                {milestones.map((m, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${m.done ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                      {m.done ? (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      )}
                    </div>
                    <span className={`text-sm ${m.done ? 'text-gray-700 font-medium' : 'text-gray-400'}`}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial highlight */}
            <div className="bg-gradient-to-br from-brand to-brand-cyan rounded-3xl p-6 text-white mb-6 shadow-xl shadow-indigo-500/20">
              <div className="text-sm font-bold uppercase tracking-wider text-indigo-200 mb-3">Pre-Seed Round</div>
              <div className="text-4xl font-black mb-2">₹15–25 Lakhs</div>
              <div className="text-indigo-200 text-sm mb-4">~$15,700–$26,200 • Infrastructure-only ask</div>
              <ul className="space-y-2 text-sm text-indigo-100">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>Production deployment on App Store & Play Store</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>Launch in metro cities — first 5,000 users</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white shrink-0"></div>12–18 month runway to validate PMF</li>
              </ul>
            </div>

            <button className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors shadow-lg">
              <DollarSign className="w-5 h-5" />
              Request Investor Deck
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
