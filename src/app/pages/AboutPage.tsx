import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  RidePoolingIcon,
  ParcelPoolingIcon,
  TripPoolingIcon,
  SafetyShieldIcon,
  CommunityHeartIcon,
  AffordabilityIcon,
  SustainabilityIcon,
  MissionTargetIcon,
} from '../components/icons/SanchariIcons';
import { COMPANY } from '../../config/company';
import { FEATURES } from '../../config/features';
import { STATS } from '../../config/stats';
import { Container } from '../components/layout/Container';

const iconMap: Record<string, React.ReactNode> = {
  RidePoolingIcon: <RidePoolingIcon />,
  ParcelPoolingIcon: <ParcelPoolingIcon />,
  TripPoolingIcon: <TripPoolingIcon />,
  SafetyShieldIcon: <SafetyShieldIcon />,
  CommunityHeartIcon: <CommunityHeartIcon />,
  AffordabilityIcon: <AffordabilityIcon />,
  SustainabilityIcon: <SustainabilityIcon />,
};

export function AboutPage() {
  // Combine modules and safety differentiator to form pillars list
  const pillarsList = [
    ...FEATURES.modules.map(m => ({
      icon: iconMap[m.iconName],
      title: m.title,
      desc: m.desc,
      phase: m.label || 'Roadmap',
      color: m.color,
      bg: m.bg,
      border: m.border,
      to: m.href || '#',
    })),
    {
      icon: <SafetyShieldIcon />,
      title: 'Women Safety Ecosystem',
      desc: 'SOS, route deviation detection, women-only rides, guardian mode — a full safety service layer, not a feature.',
      phase: 'Core',
      color: 'text-rose-600',
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      to: '/#safety',
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* Hero */}
      <section className="relative pt-20 pb-14 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-gradient-to-bl from-indigo-100/60 via-cyan-50/30 to-transparent rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-pink-100/40 to-transparent rounded-full blur-3xl -z-10" />

        <Container>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-brand text-sm font-bold mb-6">
              About {COMPANY.name}
            </span>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-gray-900 tracking-tight leading-[1.02] mb-6 max-w-4xl">
              Making mobility safer, more affordable, and more sustainable.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              {COMPANY.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition-colors shadow-xl shadow-indigo-500/25">
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/investors"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                Investor Deck
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Why we exist */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-bold text-brand uppercase tracking-widest mb-4">Why We Exist</p>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                Millions of empty seats travel daily while commuters face rising costs and real safety concerns.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-5">
                Every day, vehicles with 3–4 empty seats travel the same routes as commuters spending ₹300–500 on auto-rickshaws and app cabs. This mismatch — of supply and demand, of cost and value, of safety and trust — is the problem {COMPANY.name} is built to solve.
              </p>
              <p className="text-gray-500 leading-relaxed">
                For women in India, the safety barrier is even more acute: 75% cite safety as their primary transport concern, yet fewer than 1% of ride-hailing drivers are women. {COMPANY.name} addresses both the economic and safety gap with one platform.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-2 gap-4">
              {[
                { value: '400M+', label: 'Urban commuters in India', color: 'text-brand' },
                { value: '75%', label: 'Women cite safety as top concern', color: 'text-rose-600' },
                { value: '~60%', label: 'Potential savings vs ride-hailing', color: 'text-emerald-600' },
                { value: '$21–24B', label: 'Ride-sharing market size (2026)', color: 'text-amber-600' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
                  <div className={`text-3xl font-black mb-2 ${s.color}`}>{s.value}</div>
                  <div className="text-sm text-gray-500 leading-snug">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* What we build */}
      <section className="py-14">
        <Container>
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-bold text-brand uppercase tracking-widest mb-4">What We Build</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">One platform. Four pillars.</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              {COMPANY.name} is not just a ride-sharing app. It's a unified mobility ecosystem designed for India — with safety, verification, and smart matching at its core.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillarsList.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative bg-white rounded-3xl border ${p.border || 'border-gray-100'} p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group`}>
                <div className={`w-12 h-12 rounded-2xl ${p.bg || 'bg-gray-50'} ${p.color || 'text-gray-900'} flex items-center justify-center mb-5`}>
                  {p.icon}
                </div>
                <span className={`text-[10px] font-black ${p.color || 'text-gray-900'} uppercase tracking-widest opacity-70 mb-2 block`}>{p.phase}</span>
                <h3 className="font-black text-gray-900 mb-2 tracking-tight">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                <Link to={p.to} className={`inline-flex items-center gap-1.5 text-sm font-bold ${p.color || 'text-gray-900'} hover:opacity-80 transition-opacity`}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vision */}
      <section className="py-12 bg-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-12 h-12 mx-auto mb-6">
              <MissionTargetIcon />
            </div>
            <p className="text-sm font-bold text-indigo-300 uppercase tracking-widest mb-4">Our Vision</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
              Become India's most trusted, safety-first mobility platform.
            </h2>
            <p className="text-indigo-200 text-lg leading-relaxed max-w-2xl mx-auto">
              Where every commuter — regardless of gender, income, or city — has access to safe, affordable, and intelligent transportation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-white">
        <Container>
          <div className="max-w-xl mb-8">
            <p className="text-sm font-bold text-brand uppercase tracking-widest mb-4">What We Stand For</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">Our values shape every decision.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all">
                <div className={`w-11 h-11 rounded-xl ${v.bg || 'bg-gray-50'} ${v.color || 'text-gray-900'} flex items-center justify-center mb-4`}>
                  {iconMap[v.iconName] || null}
                </div>
                <h3 className="font-black text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Ready to be part of this?</h2>
          <p className="text-gray-500 text-lg mb-8">Join the waitlist or reach out to the founding team directly.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/#waitlist"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition-colors shadow-xl shadow-indigo-500/25">
              Join Waitlist <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={`mailto:${COMPANY.contact.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-semibold hover:bg-white hover:shadow-sm transition-all">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
