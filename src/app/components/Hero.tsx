import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, MapPin, Zap, Car } from 'lucide-react';
import { Container } from './layout/Container';
import { EASE_OUT_EXPO, floatDuration } from '@/theme';
import { staggerContainer, staggerItem, floatLoop } from '@/animations/motion';

const heroStats = [
  { value: '400M+', label: 'Urban commuters in India' },
  { value: '~60%', label: 'Potential savings vs taxis' },
  { value: '$21–24B', label: 'Market size (2026)' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Gradient blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[700px] bg-gradient-to-bl from-indigo-100/80 via-cyan-50/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100/50 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-violet-100/30 to-transparent rounded-full blur-2xl" />
      </div>

      <Container className="w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 xl:gap-24 items-center">

          {/* ─── Left content ─── */}
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            {/* Launch badge */}
            <motion.div variants={staggerItem} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-indigo-50 text-brand text-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Launching 2026 · Join the Waitlist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={staggerItem}
              className="text-[3.2rem] sm:text-[4rem] xl:text-[5rem] font-black text-gray-900 leading-[1.02] tracking-[-0.03em] mb-6"
            >
              Travel Together.<br />
              Save More.<br />
              <span className="text-brand">Move Smarter.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={staggerItem}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-xl"
            >
              Ride Pooling, Parcel Pooling, Trip Pooling, and Women Safety — all in one trusted platform for{' '}
              <span className="text-gray-700 font-semibold">400M+ urban commuters.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <a
                href="#waitlist"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand text-white font-bold hover:bg-brand-dark active:scale-[0.98] transition-all duration-150 shadow-xl shadow-brand/30"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-200 bg-white text-gray-700 font-semibold hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] transition-all duration-150"
              >
                Get Early Access
              </a>
            </motion.div>

            {/* Real stats */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap items-center gap-x-10 gap-y-5"
            >
              {heroStats.map((s, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="text-[1.6rem] font-black text-gray-900 tracking-tight leading-none">
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right: Phone mockup ─── */}
          <motion.div
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Glow ring behind phone */}
            <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-br from-brand/20 to-brand-cyan/10 blur-3xl" />

            {/* Phone device */}
            <div className="relative w-[296px] h-[620px] bg-[#111] rounded-[3.2rem] border-4 border-[#222] shadow-2xl shadow-black/30 overflow-hidden z-10">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#111] rounded-full z-20" />

              {/* Screen */}
              <div className="absolute inset-0 bg-[#F7F8FC] flex flex-col overflow-hidden">

                {/* Status bar */}
                <div className="px-6 pt-3 pb-1 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-gray-400">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-1.5 rounded-sm bg-gray-400" />
                    <div className="w-1 h-1 rounded-full bg-gray-400" />
                  </div>
                </div>

                {/* App header */}
                <div className="bg-gradient-to-br from-brand to-brand-dark px-5 pb-5 pt-2">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-indigo-300 text-[10px] font-medium">Good morning</p>
                      <p className="text-white font-black text-sm">Find your ride</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  {/* Route input */}
                  <div className="bg-white rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-brand" />
                    <span className="text-gray-400 text-xs font-medium">Where are you going?</span>
                  </div>
                </div>

                {/* Ride list */}
                <div className="flex-1 px-4 py-4 space-y-3 overflow-hidden">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-2">
                    Available Pooled Rides
                  </p>

                  {/* Ride card 1 — women-only */}
                  <div className="bg-white rounded-2xl p-3.5 border border-pink-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white font-black text-xs">P</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-xs font-bold text-gray-900">Priya K.</span>
                          <span className="text-[9px] bg-pink-100 text-pink-700 px-1.5 py-0.5 rounded-full font-bold">Women-only</span>
                        </div>
                        <span className="text-[10px] text-gray-400 block truncate">Koramangala → MG Road</span>
                      </div>
                      <div>
                        <span className="font-black text-brand text-sm">₹85</span>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          <ShieldCheck className="w-2.5 h-2.5 text-emerald-500" />
                          <span className="text-[9px] text-emerald-600 font-bold">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ride card 2 */}
                  <div className="bg-white rounded-2xl p-3.5 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand to-brand-cyan flex items-center justify-center text-white font-black text-xs">R</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-xs font-bold text-gray-900">Rahul S.</span>
                          <div className="flex items-center gap-0.5">
                            <Car className="w-2.5 h-2.5 text-teal-500" />
                            <span className="text-[9px] text-teal-600 font-bold">VH ✓</span>
                          </div>
                        </div>
                        <span className="text-[10px] text-gray-400 block truncate">HSR Layout → Whitefield</span>
                      </div>
                      <div>
                        <span className="font-black text-brand text-sm">₹120</span>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          <ShieldCheck className="w-2.5 h-2.5 text-emerald-500" />
                          <span className="text-[9px] text-emerald-600 font-bold">Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Safety status */}
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <div>
                      <p className="text-[10px] font-black text-emerald-700">Safety Monitoring Active</p>
                      <p className="text-[9px] text-emerald-600">Live tracking · Guardian Mode</p>
                    </div>
                  </div>
                </div>

                {/* Bottom action */}
                <div className="px-4 pb-5">
                  <div className="w-full py-3.5 bg-brand rounded-2xl text-white font-black text-xs text-center shadow-lg shadow-brand/30">
                    Book Ride — ₹85
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card: KYC */}
            <motion.div
              {...floatLoop([-6, 6, -6], floatDuration.a)}
              className="absolute -right-14 top-20 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 px-4 py-3 flex items-center gap-3 w-52 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-tight">6-Layer KYC</p>
                <p className="text-xs text-gray-400">Every driver verified</p>
              </div>
            </motion.div>

            {/* Floating card: Save */}
            <motion.div
              {...floatLoop([5, -7, 5], floatDuration.b)}
              className="absolute -left-16 bottom-32 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 px-4 py-3 flex items-center gap-3 w-48 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm leading-tight">Save ~60%</p>
                <p className="text-xs text-gray-400">vs ride-hailing</p>
              </div>
            </motion.div>

            {/* Floating card: Women Safe */}
            <motion.div
              {...floatLoop([-5, 5, -5], floatDuration.c)}
              className="absolute -right-12 bottom-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl shadow-xl shadow-pink-500/25 px-4 py-3 flex items-center gap-3 z-20"
            >
              <ShieldCheck className="w-5 h-5 text-white shrink-0" />
              <div>
                <p className="font-bold text-white text-sm leading-tight">Women Safety</p>
                <p className="text-xs text-pink-200">Mode active</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
