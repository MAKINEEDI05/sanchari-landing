import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Map, Fuel, Clock, Mountain } from 'lucide-react';
import {
  TripPoolingIcon,
  UserGroupIcon,
  SafetyShieldIcon,
} from '../../components/icons/SanchariIcons';
import { Container } from '../../components/layout/Container';

const steps = [
  { icon: <TripPoolingIcon />, step: '01', title: 'Plan your trip', desc: 'Enter your origin, destination, dates, and number of co-travellers. Add optional stops or interest tags (hill station, temple, beach).' },
  { icon: <UserGroupIcon />, step: '02', title: 'Find or create a group', desc: 'Browse trip listings or create your own. Verified users with matching travel dates get suggested first.' },
  { icon: <SafetyShieldIcon />, step: '03', title: 'Agree on cost split', desc: 'Transparent breakdown: fuel ÷ passengers, tolls, estimated per-day cost. Accept the split before committing.' },
  { icon: <MapPin className="w-6 h-6" />, step: '04', title: 'Share a live itinerary', desc: 'Collaborative itinerary editor with map integration. Everyone sees stops, timings, and accommodation links.' },
  { icon: <Fuel className="w-6 h-6" />, step: '05', title: 'Settle up at the end', desc: 'One-tap UPI settlement. Driver receives fuel share + toll reimbursement. No awkward cash conversations.' },
];

const tripTypes = [
  { label: 'Weekend Getaway', icon: <Mountain className="w-5 h-5" />, example: 'Bangalore → Coorg · 2 days', color: 'bg-orange-50 text-orange-600' },
  { label: 'Pilgrimage', icon: <MapPin className="w-5 h-5" />, example: 'Hyderabad → Tirupati · Day trip', color: 'bg-amber-50 text-amber-600' },
  { label: 'Long Weekend', icon: <Calendar className="w-5 h-5" />, example: 'Delhi → Manali · 4 days', color: 'bg-rose-50 text-rose-600' },
  { label: 'Multi-City Tour', icon: <Map className="w-5 h-5" />, example: 'Mumbai → Goa → Hampi', color: 'bg-violet-50 text-violet-600' },
];

export function TripPoolingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[650px] h-[550px] bg-gradient-to-bl from-orange-100/60 via-amber-50/30 to-transparent rounded-full blur-3xl -z-10" />
        <Container>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-bold mb-6">
              Phase 3 · Roadmap
            </span>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-gray-900 tracking-tight leading-[1.02] mb-6">
              Trip Pooling.<br />
              <span className="text-orange-600">Travel together.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              Inter-city journeys and weekend getaways — planned collaboratively, costs split fairly,
              and memories made together. Not just a ride; a shared adventure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors shadow-xl shadow-orange-500/25">
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

      {/* Phase notice */}
      <div className="bg-amber-50 border-y border-amber-100 py-4">
        <Container className="flex items-center gap-3">
          <Clock className="w-4 h-4 text-amber-600 shrink-0" />
          <p className="text-amber-800 text-sm font-semibold">
            Trip Pooling is planned for Phase 3, following Ride Pooling and Parcel Pooling launches.
            Join the waitlist to be notified when it goes live.
          </p>
        </Container>
      </div>

      {/* Trip types */}
      <section className="py-12">
        <Container>
          <div className="max-w-xl mb-12">
            <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Use cases</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Every kind of shared journey.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {tripTypes.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.09 }}
                className={`${t.color.split(' ')[0]} border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all`}>
                <div className={`w-10 h-10 rounded-xl bg-white/60 ${t.color.split(' ')[1]} flex items-center justify-center mb-4`}>
                  {t.icon}
                </div>
                <h3 className="font-black text-gray-900 mb-1">{t.label}</h3>
                <p className="text-xs text-gray-500">{t.example}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Cost example */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <Container>
          <div className="max-w-xl mb-10">
            <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Cost transparency</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
              No guesswork. Fair splits.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { route: 'Bangalore → Coorg', distance: '~250 km', fuel: '₹900', toll: '₹120', total: '~₹340/person', seats: '3 passengers' },
              { route: 'Delhi → Agra', distance: '~230 km', fuel: '₹820', toll: '₹165', total: '~₹260/person', seats: '3 passengers' },
              { route: 'Hyderabad → Tirupati', distance: '~540 km', fuel: '₹1,900', toll: '₹210', total: '~₹530/person', seats: '3 passengers' },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <p className="text-sm font-black text-gray-900 mb-1">{r.route}</p>
                <p className="text-xs text-gray-400 mb-4">{r.distance} · {r.seats}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fuel estimate</span>
                    <span className="text-gray-700 font-semibold">{r.fuel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tolls</span>
                    <span className="text-gray-700 font-semibold">{r.toll}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-50">
                    <span className="text-gray-500 font-semibold">Your share</span>
                    <span className="font-black text-orange-600">{r.total}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">Fuel estimates based on ₹104/L petrol. Actual costs vary by vehicle and route.</p>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-14">
        <Container>
          <div className="max-w-xl mb-12">
            <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">Plan, share, go.</h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">{step.icon}</div>
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

      {/* CTA */}
      <section className="py-12 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Be notified when Trip Pooling launches.</h2>
          <p className="text-orange-200 text-lg mb-8">Join the waitlist and we'll reach out when Phase 3 goes live.</p>
          <Link to="/#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-orange-700 font-black hover:bg-orange-50 transition-colors shadow-xl">
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
