import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, PhoneCall, CheckCircle2 } from 'lucide-react';
import {
  WomenOnlyIcon,
  SOSIcon,
  RouteMonitoringIcon,
  LiveTrackingIcon,
  EmergencySafetyIcon,
} from './icons/SanchariIcons';
import { FEATURES } from '../../config/features';
import { STATS } from '../../config/stats';
import { COMPANY } from '../../config/company';
import { Container } from './layout/Container';

const iconMap: Record<string, React.ReactNode> = {
  WomenOnlyIcon: <WomenOnlyIcon />,
  SOSIcon: <SOSIcon />,
  RouteMonitoringIcon: <RouteMonitoringIcon />,
  LiveTrackingIcon: <LiveTrackingIcon />,
  EmergencySafetyIcon: <EmergencySafetyIcon />,
};

export function WomenSafety() {
  return (
    <section id="safety" className="py-16 bg-white overflow-hidden">
      <Container>

        {/* Full-bleed rose card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-[#1a0010] via-[#2d0020] to-[#0a0018] rounded-[2.5rem] overflow-hidden"
        >
          {/* Background glows */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-rose-500/40 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">

            {/* Left content */}
            <div className="px-10 py-14 lg:py-16 xl:px-16">

              {/* Mandate banner */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/15 border border-rose-500/25 text-rose-300 text-xs font-bold mb-8">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                Dec 2025 Govt. Mandate · {COMPANY.name} Already Compliant
              </div>

              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-white leading-[1.08] tracking-tight mb-5">
                Safety isn't a feature.<br />
                <span className="text-rose-400">It's our foundation.</span>
              </h2>

              <p className="text-rose-100/70 text-base leading-relaxed mb-10 max-w-md">
                India's deepest women safety ecosystem — built as a full service layer, not bolted on. Comprehensive SOS, route monitoring, and same-gender verified rides.
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {STATS.safety.map((s, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-rose-300 mb-1">{s.value}</div>
                    <div className="text-[10px] text-rose-200/60 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <div className="space-y-4">
                {FEATURES.safetyFeatures.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                      {iconMap[f.iconName] || null}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-0.5">{f.title}</h4>
                      <p className="text-rose-100/60 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Safety UI mockup */}
            <div className="relative flex items-center justify-center p-10 lg:p-14">
              <div className="relative w-full max-w-[340px]">
                {/* Main card */}
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white/50 text-xs font-medium">Active ride</p>
                      <p className="text-white font-black">Trip in Progress</p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-3 py-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-300 text-xs font-bold">Live</span>
                    </div>
                  </div>

                  {/* Status items */}
                  <div className="space-y-2.5 mb-5">
                    {[
                      { label: 'Route Monitoring', status: 'Active', ok: true },
                      { label: 'Driver Verified (6-layer)', status: 'Passed', ok: true },
                      { label: 'Emergency Contacts', status: '5 Added', ok: true },
                      { label: 'Guardian Mode', status: 'Enabled', ok: true },
                      { label: 'Live Tracking Link', status: 'Shared', ok: true },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.ok ? 'bg-emerald-400' : 'bg-gray-400'} ${i < 2 ? 'animate-pulse' : ''}`} />
                          <span className="text-white/80 text-xs font-medium">{item.label}</span>
                        </div>
                        <span className="text-emerald-400 text-[10px] font-bold">{item.status}</span>
                      </div>
                    ))}
                  </div>

                  {/* SOS button */}
                  <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-black flex items-center justify-center gap-2.5 shadow-xl shadow-red-900/40 hover:from-red-700 hover:to-rose-700 transition-all">
                    <PhoneCall className="w-5 h-5" />
                    EMERGENCY SOS
                  </button>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                  className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <WomenOnlyIcon />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-xs">Women-Only</p>
                    <p className="text-gray-400 text-[10px]">Verified riders</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                  className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-500 shrink-0" />
                  <div>
                    <p className="font-bold text-gray-900 text-xs">6-Layer KYC</p>
                    <p className="text-gray-400 text-[10px]">Every driver</p>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>
      </Container>
    </section>
  );
}
