import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Package, Clock, ShieldCheck, MapPin, Truck, Camera } from 'lucide-react';
import { Container } from '../../components/layout/Container';

const steps = [
  { icon: <Package className="w-6 h-6" />, step: '01', title: 'List your parcel', desc: 'Describe the parcel, weight category, origin, destination, and when it needs to arrive.' },
  { icon: <Truck className="w-6 h-6" />, step: '02', title: 'Match with a commuter', desc: 'We find verified drivers already heading in the right direction with available trunk space.' },
  { icon: <ShieldCheck className="w-6 h-6" />, step: '03', title: 'Handover with OTP', desc: 'Both parties verify handover with a unique OTP. The driver\'s identity and vehicle are already KYC-verified.' },
  { icon: <MapPin className="w-6 h-6" />, step: '04', title: 'Track in real time', desc: 'Live location updates during transit. Auto-expire tracking link once delivered.' },
  { icon: <Camera className="w-6 h-6" />, step: '05', title: 'Photo proof on delivery', desc: 'Driver captures delivery photo + recipient OTP confirmation before payment is released.' },
];

const categories = [
  { label: 'Documents', weight: 'Up to 500g', example: 'Certificates, letters, legal docs', color: 'bg-blue-50 text-blue-600' },
  { label: 'Small Package', weight: 'Up to 2 kg', example: 'Books, clothes, accessories', color: 'bg-emerald-50 text-emerald-600' },
  { label: 'Medium Package', weight: '2–10 kg', example: 'Electronics, household items', color: 'bg-orange-50 text-orange-600' },
];

export function ParcelPoolingPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-emerald-100/60 via-teal-50/30 to-transparent rounded-full blur-3xl -z-10" />
        <Container>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-700 text-sm font-semibold mb-10 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-6">
              Phase 2 · Roadmap
            </span>
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black text-gray-900 tracking-tight leading-[1.02] mb-6">
              Parcel Pooling.<br />
              <span className="text-emerald-600">Send smarter.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-10">
              Your parcel reaches its destination with a verified commuter already heading that way —
              dramatically cheaper than couriers, tracked in real time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/#waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors shadow-xl shadow-emerald-500/25">
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
            Parcel Pooling is planned for Phase 2, following our Ride Pooling launch.
            Join the waitlist to be notified when it goes live.
          </p>
        </Container>
      </div>

      {/* Cost comparison */}
      <section className="py-12">
        <Container>
          <div className="max-w-xl mb-12">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Cost comparison</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Drastically cheaper than couriers.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              { route: 'Hyderabad → Bangalore', courier: '₹250–500', sanchari: '₹80–150', saving: '~60%' },
              { route: 'Pune → Mumbai', courier: '₹180–350', sanchari: '₹60–110', saving: '~65%' },
              { route: 'Delhi → Jaipur', courier: '₹200–400', sanchari: '₹70–130', saving: '~60%' },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all">
                <p className="text-sm font-bold text-gray-900 mb-4">{r.route}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Courier</span>
                    <span className="text-sm font-semibold text-red-500 line-through">{r.courier}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-semibold">Sanchari</span>
                    <span className="text-sm font-black text-emerald-600">{r.sanchari}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-gray-50">
                    <span className="text-xs text-gray-400">You save</span>
                    <span className="text-xs font-black text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">{r.saving}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center">Estimates for 2 kg parcel. Final fares set by drivers.</p>
        </Container>
      </section>

      {/* Parcel categories */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <Container>
          <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-8 text-center">Supported categories</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {categories.map((c, i) => (
              <div key={i} className={`${c.color.split(' ')[0]} border border-gray-100 rounded-2xl p-6`}>
                <Package className={`w-8 h-8 ${c.color.split(' ')[1]} mb-4`} />
                <h3 className="font-black text-gray-900 mb-1">{c.label}</h3>
                <p className="text-sm text-gray-500 mb-2">{c.weight}</p>
                <p className="text-xs text-gray-400">{c.example}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-14">
        <Container>
          <div className="max-w-xl mb-12">
            <p className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-4xl font-black text-gray-900 tracking-tight leading-tight">Five steps, door to door.</h2>
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-6 p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">{step.icon}</div>
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
      <section className="py-12 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Be notified when Parcel Pooling launches.</h2>
          <p className="text-emerald-200 text-lg mb-8">Join the waitlist and we'll reach out when Phase 2 goes live.</p>
          <Link to="/#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-colors shadow-xl">
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
