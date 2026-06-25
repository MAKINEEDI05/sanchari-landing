import React, { useState } from 'react';
import { Smartphone, Play, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY } from '../../config/company';

export function Download() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const perks = [
    "Early access before public launch",
    "Exclusive founding user badge",
    `50% off ${COMPANY.name} Pro — first 3 months`,
    "Shape the product with direct feedback",
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-transparent to-brand-cyan/20 z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/20 rounded-full blur-[120px] z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              Launching Soon — Join the Waitlist
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Be First to Experience<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818CF8] to-[#67E8F9]">
                {COMPANY.name}
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Sign up for early access and get exclusive founding user benefits when we launch in metro cities.
            </p>

            {/* Waitlist form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand hover:bg-brand-dark text-white font-bold transition-colors shadow-xl shadow-indigo-500/30 whitespace-nowrap"
                >
                  Join Waitlist <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold mb-10 max-w-lg mx-auto"
              >
                <CheckCircle2 className="w-5 h-5" />
                You're on the list! We'll reach out soon.
              </motion.div>
            )}

            {/* Perks list */}
            <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto mb-12">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{perk}</span>
                </div>
              ))}
            </div>

            {/* Coming soon badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Launching On</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition-colors cursor-not-allowed">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.78 3.59-.74 1.5.04 2.76.69 3.49 1.76-2.95 1.76-2.45 5.56.5 6.78-.71 1.76-1.57 3.32-2.66 4.37zm-3.83-13.6c-.19-1.89 1.35-3.66 3.19-3.86.35 2.11-1.6 3.84-3.19 3.86z"/>
                  </svg>
                  App Store
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">Soon</span>
                </div>
                <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold hover:bg-white/10 transition-colors cursor-not-allowed">
                  <Play className="w-5 h-5 fill-current" />
                  Google Play
                  <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full">Soon</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
