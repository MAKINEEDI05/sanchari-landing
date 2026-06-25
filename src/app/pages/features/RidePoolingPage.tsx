import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, MapPin, PiggyBank, Clock } from 'lucide-react';
import {
  RidePoolingIcon,
  SafetyShieldIcon,
  SmartSavingsIcon,
  CalendarScheduleIcon,
} from '../../components/icons/SanchariIcons';
import { Container } from '../../components/layout/Container';

const howItWorks = [
  { icon: <CalendarScheduleIcon />, step: '01', title: 'Driver creates a ride', desc: 'Set your route, date, time, available seats, and your price. You\'re in control — no algorithm sets your fare.' },
  { icon: <MapPin className="w-6 h-6" />, step: '02', title: 'Rider searches by route', desc: 'Smart matching finds rides with 70%+ route overlap and ±30 min schedule compatibility.' },
  { icon: <SafetyShieldIcon />, step: '03', title: 'Both parties verified', desc: 'Every driver completes 6-layer KYC before their first ride. Riders can verify with Aadhaar for added trust.' },
  { icon: <RidePoolingIcon />, step: '04', title: 'Travel together', desc: 'Live tracking, SOS, and safety monitoring active throughout. Trusted contacts can follow your journey.' },
  { icon: <PiggyBank className="w-6 h-6" />, step: '05', title: 'Costs split automatically', desc: 'UPI payment on completion. Driver earns, rider saves 40–60% vs ride-hailing.' },
];

const benefits = [
  { icon: <SmartSavingsIcon />, title: 'Save 40–60%', desc: 'A 20 km ride costing ₹300 on Uber costs ~₹100–130 on Sanchari.' },
  { icon: <CalendarScheduleIcon />, title: 'Scheduled, not on-demand', desc: 'Plan your daily commute in advance. No surge pricing.' },
  { icon: <SafetyShieldIcon />, title: '6-layer verified drivers', desc: 'Aadhaar, DL, RC, Insurance, PUC, Liveness — the deepest verification in Indian carpooling.' },
  { icon: <Clock className="w-5 h-5" />, title: 'Recurring rides', desc: 'Set up daily or weekly recurring schedules for your regular commute.' },
];

export function RidePoolingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[600px] bg-gradient-to-bl from-indigo-100/70 via-cyan-50/30 to-transparent rounded-full blur-3xl -z-10" />
        <Container>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-brand text-sm font-bold mb-6">
              Phase 1 · Core Module
            </span>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-gray-900 tracking-tight leading-[1.02] mb-6">
              Ride Pooling.<br />
              <span className="text-brand">Share your commute.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              Turn your daily commute into a shared journey. Drivers earn more. Riders spend less.
              India's roads get less congested. Everyone wins.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition-colors shadow-xl shadow-indigo-500/25">
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                View All Features
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Key stats */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { v: '40–60%', l: 'Avg. savings vs Uber/Ola' },
              { v: '₹100–150', l: 'Typical 15–30 km fare' },
              { v: '10–15%', l: 'Platform commission' },
              { v: '6-layer', l: 'Driver KYC verification' },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-brand mb-1">{s.v}</div>
                <div className="text-sm text-gray-500">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-14">
        <Container>
          <div className="max-w-xl mb-8">
            <p className="text-sm font-bold text-brand uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">From signup to ride in five steps.</h2>
          </div>
          <div className="space-y-4">
            {howItWorks.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-gray-200 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-brand flex items-center justify-center shrink-0">{step.icon}</div>
                <div>
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">{step.step}</p>
                  <h3 className="font-black text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="max-w-xl mb-12">
            <p className="text-sm font-bold text-brand uppercase tracking-widest mb-3">Key benefits</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">Why riders and drivers choose Sanchari.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-brand flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-12 bg-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Ready to share your first ride?</h2>
          <p className="text-indigo-200 text-lg mb-8">Join the waitlist and be among the first when we launch in your city.</p>
          <Link to="/#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand font-black hover:bg-indigo-50 transition-colors shadow-xl">
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
