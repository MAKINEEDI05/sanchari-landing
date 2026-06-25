import React from 'react';
import { motion } from 'motion/react';
import { UserPlus, Fingerprint, Search, Car, PiggyBank } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    num: '01',
    title: 'Create Account',
    desc: 'Sign up with your phone number. OTP-based authentication — no passwords.',
  },
  {
    icon: <Fingerprint className="w-6 h-6" />,
    num: '02',
    title: 'Verify Identity',
    desc: 'Complete our 6-layer KYC: Aadhaar, DL, RC, Insurance, PUC, and liveness check.',
  },
  {
    icon: <Search className="w-6 h-6" />,
    num: '03',
    title: 'Find Your Match',
    desc: 'Our matching engine finds verified commuters with 70%+ route overlap and compatible schedules.',
  },
  {
    icon: <Car className="w-6 h-6" />,
    num: '04',
    title: 'Travel Together',
    desc: 'Board with confidence. Live tracking, safety monitoring, and SOS — always on.',
  },
  {
    icon: <PiggyBank className="w-6 h-6" />,
    num: '05',
    title: 'Save Every Day',
    desc: 'Split costs automatically via UPI. Save up to 60% versus traditional ride-hailing.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-[#4F46E5] uppercase tracking-widest mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-[1.08] mb-5"
          >
            Five steps to a smarter commute.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-500 leading-relaxed"
          >
            From signup to ride in minutes. Safety-verified from day one.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px bg-gradient-to-r from-gray-200 via-[#4F46E5]/30 to-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col"
              >
                {/* Step circle */}
                <div className="relative z-10 w-16 h-16 mx-auto lg:mx-0 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center shadow-sm mb-5 group-hover:border-[#4F46E5]/30 transition-colors">
                  <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#4F46E5] text-white text-[10px] font-black flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>
                  <div className="text-[#4F46E5]">{step.icon}</div>
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-[10px] font-black text-gray-300 tracking-widest uppercase mb-1.5">{step.num}</p>
                  <h3 className="font-black text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
